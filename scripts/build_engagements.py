#!/usr/bin/env python3
"""
Build src/content/engagements.ts from scripts/data/jemputan.tsv.

The TSV is exported from Dr Azren's "jumlah jemputan" Google Sheet, keeping
ONLY: year, date (dd/mm/yyyy, optional), place/programme, role.
Payment, gift, rating and sales columns are intentionally never copied.

Usage:  python3 scripts/build_engagements.py [output.ts]
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "scripts" / "data" / "jemputan.tsv"
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "src" / "content" / "engagements.ts"

# Rows Dr Azren asked not to feature on the site.
EXCLUDE = {"NGO KRAYON PODCAST"}

ROLES = {
    "PENCERAMAH": "Penceramah",
    "PANELIS": "Panelis",
    "P. MAJLIS": "Pengacara Majlis",
    "MODERATOR": "Moderator",
    "ARTIKEL": "Artikel",
    "COLLAB": "Kolaborasi",
}

ACRONYMS = {
    "SMA", "SMK", "SK", "SMKA", "MRSM", "UPSI", "UUM", "UIA", "UTHM", "KWSP", "RTM", "TV", "TV1", "TV3",
    "IPPTAR", "PFA", "CPG", "KWIM", "TOT", "GMI", "MATRADE", "UNITAR", "PPZ", "MAWIP", "NGO", "BACC",
    "PICCA", "AEON", "UKM", "SMIT", "ERA", "FM", "JAKIM", "MBPJ", "PBAKL", "VIP", "KL", "MITEC", "POSCO",
    "AFED", "FELDA", "MENTARI", "SASJONG", "PUSPANITA", "KESUMA", "ML", "PD", "UTM", "MAMZ", "MARA",
}
SPECIAL = {
    "UITM": "UiTM", "UNIKL": "UniKL", "UTEM": "UTeM", "SG": "Sg.", "PEJ": "Pej.", "SEK": "Sek.", "REN": "Ren.",
    "EP": "Ep.", "MX": "Mx", "AL-HIJRAH": "Al-Hijrah", "AT-TANWIRIAH": "At-Tanwiriah", "DEKATMIC": "DekatMic",
    "TIKTOK": "TikTok", "SOCMED": "Socmed",
}
LOWER = {"dan", "of", "a", "the", "and"}
OVERRIDES = {
    "KWIM CAKNA EP 1 EP 2": "KWIM Cakna (Ep. 1 & 2)",
    "LEPAK DAN LUAH THE STORY OF A LOVER": "Lepak dan Luah: The Story of a Lover",
    "MEET AND GREET PBAKL": "Meet & Greet PBAKL",
    "MEET AND GREET KARNIVAL CITRA PENULIS": "Meet & Greet Karnival Citra Penulis",
    "BERNAMA ARTIKEL": "Bernama",
    "JAKIM MENARA 118": "JAKIM, Menara 118",
    "NGO EMPATI BENTONG CAMP": "NGO Empati, Bentong Camp",
    "SMA AT TANWIRIAH": "SMA At-Tanwiriah",
}

MEDIA = ["TV", "RADIO", " FM", "PODCAST", "ASTRO", "BERNAMA", "HARIAN METRO", "ERA SARAWAK", "SUKE", "TALKSHOW",
         "FAIL MAHKAMAH", "AL-HIJRAH", "KOOL", "BROADCAST", "TIKTOK", "ML STUDIOS", "SOCMED", "INTERVIEW",
         "USRATI JANNATI", "RESET RTM", "CUIT SIKIT", "SELAMAT PAGI", "KURMA DAN KOPI", "KITA BINCANG",
         "CAPRICE", "BUKA CERITA", "JAKIM"]
EDU = ["UITM", "UNIKL", "UTEM", "UPSI", "UUM", "UIA", "UTHM", "UNITAR", "UNIVERSITI", "KOLEJ", "SMK", "SMA ",
       "SK ", "SEK ", "SEKOLAH", "MRSM", "SMKA", "GMI", "GERMAN MALAYSIAN", "SMIT", "IMPERIUM", "POLYTECH", " UTM "]


def titlecase(raw: str) -> str:
    if raw in OVERRIDES:
        return OVERRIDES[raw]
    words = raw.split()
    out = []
    for i, w in enumerate(words):
        core = w.rstrip(",")
        tail = w[len(core):]
        if core in SPECIAL:
            t = SPECIAL[core]
        elif core in ACRONYMS or re.fullmatch(r"\d+", core):
            t = core
        elif core.lower() in LOWER and i > 0:
            t = core.lower()
        else:
            t = "-".join(p.capitalize() for p in core.split("-"))
        out.append(t + tail)
    return " ".join(out)


def clean(place: str):
    p = place.strip().rstrip(".").strip()
    p = re.sub(r"^\d+\.\s*", "", p)  # leading numbering "12. "
    series = None
    m = re.search(r"\s(\d+)\.0(\s|$)", p)
    if m:
        series = int(m.group(1))
        p = (p[: m.start()] + " " + p[m.end():]).strip()
    p = re.sub(r"\s+", " ", p)
    return p, series


def category(raw: str, role: str) -> str:
    up = f" {raw} "
    if role == "ARTIKEL" or any(k in up for k in MEDIA):
        if "IPPTAR" not in raw:
            return "media"
    if any(k in up for k in EDU):
        return "pendidikan"
    return "organisasi"


rows = []
for line in SRC.read_text(encoding="utf-8").splitlines():
    if not line.strip():
        continue
    year, date, place, role = (line.split("\t") + ["", "", "", ""])[:4]
    raw, series = clean(place)
    if raw in EXCLUDE:
        continue
    iso = None
    if date:
        d, m, y = date.split("/")
        iso = f"{y}-{int(m):02d}-{int(d):02d}"
    title = titlecase(raw)
    rows.append({
        "year": int(year),
        "date": iso,
        "title": title,
        "series": series,
        "role": ROLES[role.strip()],
        "category": category(raw, role.strip()),
        "order": len(rows),
    })

# newest first: by year desc, then by date desc (undated rows keep sheet order, newest last in sheet)
rows.sort(key=lambda r: (-r["year"], r["date"] is None, "" if r["date"] is None else "".join(chr(255 - ord(c)) for c in r["date"]), -r["order"]))
for r in rows:
    del r["order"]

ts = [
    "/**",
    " * Rekod jemputan Dr Azren (2023 - 2026), generated from the \"jumlah jemputan\" sheet by",
    " * scripts/build_engagements.py. Only date, place and role are kept: payment, gift,",
    " * rating and sales columns are never copied. Edit scripts/data/jemputan.tsv and re-run.",
    " */",
    "",
    'export type EngagementCategory = "pendidikan" | "media" | "organisasi";',
    "",
    "export type Engagement = {",
    "  year: number;",
    "  /** ISO date when recorded in the sheet */",
    "  date: string | null;",
    "  title: string;",
    "  /** 2 for the second invitation from the same host, etc. */",
    "  series: number | null;",
    "  role: string;",
    "  category: EngagementCategory;",
    "};",
    "",
    "export const engagements: Engagement[] = " + json.dumps(rows, ensure_ascii=False, indent=2) + ";",
    "",
]
OUT.write_text("\n".join(ts), encoding="utf-8")

from collections import Counter
print(f"wrote {OUT} ({len(rows)} rows)")
print("by year", sorted(Counter(r["year"] for r in rows).items()))
print("by role", Counter(r["role"] for r in rows).most_common())
print("by category", Counter(r["category"] for r in rows).most_common())
