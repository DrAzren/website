/**
 * Rekod jemputan Dr Azren (2023 - 2026), generated from the "jumlah jemputan" sheet by
 * scripts/build_engagements.py. Only date, place and role are kept: payment, gift,
 * rating and sales columns are never copied. Edit scripts/data/jemputan.tsv and re-run.
 */

export type EngagementCategory = "pendidikan" | "media" | "organisasi";

export type Engagement = {
  year: number;
  /** ISO date when recorded in the sheet */
  date: string | null;
  title: string;
  /** 2 for the second invitation from the same host, etc. */
  series: number | null;
  role: string;
  category: EngagementCategory;
};

export const engagements: Engagement[] = [
  {
    "year": 2026,
    "date": "2026-10-15",
    "title": "Kementerian Pengajian Tinggi",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-10-15",
    "title": "Malaysia Airport",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-10-13",
    "title": "TV Al-Hijrah",
    "series": 11,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-10-10",
    "title": "Meet & Greet Karnival Citra Penulis",
    "series": null,
    "role": "Panelis",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-10-10",
    "title": "Webinar Delegasi Jururawat Malaysia",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-10-10",
    "title": "ERA Sarawak",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-10-07",
    "title": "German Malaysian Institute",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-10-01",
    "title": "SK Semenyih",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-09-29",
    "title": "Kolej Tunku Kurshiah",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-09-29",
    "title": "TV Al-Hijrah",
    "series": 10,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-09-28",
    "title": "Kolej Komuniti Ledang",
    "series": null,
    "role": "Panelis",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-09-24",
    "title": "AEON Mall Nilai",
    "series": null,
    "role": "Kolaborasi",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-09-22",
    "title": "TV Al-Hijrah",
    "series": 9,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-09-15",
    "title": "TV Al-Hijrah",
    "series": 8,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-09-09",
    "title": "Forum Intelektual Diraja UTM",
    "series": null,
    "role": "Panelis",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-09-02",
    "title": "UTHM Pagoh",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-08-24",
    "title": "JAKIM, Menara 118",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-08-19",
    "title": "Pejabat Kadi Daerah Muar",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-08-18",
    "title": "TV Al-Hijrah",
    "series": 7,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-08-11",
    "title": "TV Al-Hijrah",
    "series": 6,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-08-04",
    "title": "TV Al-Hijrah",
    "series": 5,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-07-28",
    "title": "TV Al-Hijrah",
    "series": 4,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-07-22",
    "title": "Fail Mahkamah",
    "series": 6,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-07-21",
    "title": "TV Al-Hijrah",
    "series": 3,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-07-15",
    "title": "ML Studios",
    "series": null,
    "role": "Kolaborasi",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-07-14",
    "title": "TV Al-Hijrah",
    "series": 2,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-07-03",
    "title": "Sembuh Jiwa Talk",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-06-27",
    "title": "TV Al-Hijrah",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-06-25",
    "title": "Selamat Pagi Malaysia RTM TV1",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-06-19",
    "title": "MBPJ Warga Emas",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-06-16",
    "title": "Reset RTM",
    "series": null,
    "role": "Kolaborasi",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-06-13",
    "title": "PICCA Klinik Nissa",
    "series": null,
    "role": "Kolaborasi",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-06-12",
    "title": "Podcast Ruang Jiwa UKM",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-06-06",
    "title": "BACC Klinik Nissa",
    "series": null,
    "role": "Kolaborasi",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-06-04",
    "title": "Meet & Greet PBAKL",
    "series": null,
    "role": "Panelis",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-05-30",
    "title": "Interview UiTM Seremban",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-04-15",
    "title": "POSCO Malaysia",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-03-13",
    "title": "SMIT Putrajaya",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-03-04",
    "title": "UNITAR Webinar",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-02-14",
    "title": "Lepak dan Luah: The Story of a Lover",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2026,
    "date": "2026-01-28",
    "title": "Podcast Sirap Limau",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-01-28",
    "title": "Universiti Islam Selangor",
    "series": null,
    "role": "Panelis",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-01-27",
    "title": "ERA Sarawak",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-01-26",
    "title": "ERA FM",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2026,
    "date": "2026-01-16",
    "title": "SMK Alam Megah Shah Alam",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2026,
    "date": "2026-01-15",
    "title": "Kolej Vokasional Kajang",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-12-30",
    "title": "UiTM Shah Alam",
    "series": null,
    "role": "Panelis",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-12-28",
    "title": "Sembuh Journal Live TikTok",
    "series": null,
    "role": "Penceramah",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-12-25",
    "title": "Kurma dan Kopi Astro Oasis",
    "series": 2,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-12-19",
    "title": "Fail Mahkamah",
    "series": 5,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-12-13",
    "title": "Broadcast UiTM Rembau",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-12-09",
    "title": "PPZ MAWIP Kenanga Investment",
    "series": null,
    "role": "Panelis",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-12-08",
    "title": "Caprice Podcast Show",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-12-08",
    "title": "Rakita FM Buka Cerita",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-12-07",
    "title": "Bernama",
    "series": null,
    "role": "Artikel",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-11-11",
    "title": "Sek. Ren. Integrasi Tahfiz Ilmuwan",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-10-30",
    "title": "Universiti Sains Islam Malaysia",
    "series": 2,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-10-29",
    "title": "NGO Empati, Bentong Camp",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-10-17",
    "title": "AFED Holdings",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-10-11",
    "title": "Kota Seriemas Nilai",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-10-08",
    "title": "UTHM Batu Pahat",
    "series": 2,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-10-02",
    "title": "Harian Metro",
    "series": null,
    "role": "Artikel",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-09-29",
    "title": "MRSM Bentong",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-09-11",
    "title": "Kita Bincang Podcast",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-09-10",
    "title": "SMK Sg. Buloh",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-09-09",
    "title": "Webinar UTHM Pagoh",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-08-29",
    "title": "Tenaga Switchgear",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-08-22",
    "title": "SMK Seri Menanti",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-08-12",
    "title": "Podcast Kopiah Terbang",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-08-07",
    "title": "Kurma dan Kopi Astro Oasis",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-08-01",
    "title": "Fail Mahkamah",
    "series": 4,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-07-27",
    "title": "Telekom Museum",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-07-11",
    "title": "Majlis Perbandaran Pengerang",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-07-10",
    "title": "Universiti Sains Islam Malaysia",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-06-18",
    "title": "SMK Intan Perdana PD",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-06-16",
    "title": "VIP Astro Prima",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-06-14",
    "title": "Dewan Serbaguna Taman Desa",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-05-20",
    "title": "UTHM Batu Pahat",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-05-11",
    "title": "Fail Mahkamah",
    "series": 3,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-05-11",
    "title": "Podcast Verbatim UPSI",
    "series": null,
    "role": "Penceramah",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-04-23",
    "title": "RTM Cuit Sikit Jangan Sentap",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-04-18",
    "title": "UiTM Seri Iskandar",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-03-25",
    "title": "SMK Taman Maluri",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-03-15",
    "title": "Persatuan Jururawat Lelaki Malaysia",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": "2025-02-05",
    "title": "Sek. Rendah Setiabudi",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2025,
    "date": "2025-01-08",
    "title": "Podcast Sociowara UiTM Shah Alam",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": "2025-01-01",
    "title": "Radio Kool 101",
    "series": 4,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2025,
    "date": null,
    "title": "MAMZ Product Review",
    "series": null,
    "role": "Kolaborasi",
    "category": "organisasi"
  },
  {
    "year": 2025,
    "date": null,
    "title": "Bangku Schola",
    "series": null,
    "role": "Kolaborasi",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "SMKA Pagoh",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UTeM",
    "series": 2,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Radio Kool 101",
    "series": 3,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Kolej Polytech MARA Bangi",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "SMK Seremban 2",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UNITAR",
    "series": null,
    "role": "Panelis",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "SMA At-Tanwiriah",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "SMK Bandar Tasik Puteri",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UPSI, Perak",
    "series": 2,
    "role": "Panelis",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Harian Metro",
    "series": 2,
    "role": "Artikel",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "MATRADE KL",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Kolej Tunku Kurshiah",
    "series": 3,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "TV3 Fail Mahkamah",
    "series": 2,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Radio Kool 101",
    "series": 2,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Sime Darby Guthrie Agri",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Hi Viral Talkshow",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "GMI Bangi",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UiTM Puncak Perdana",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "DekatMic Podcast",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "SMK Taman Yarl",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Radio Kool 101",
    "series": 1,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Pej. Pergigian Muar",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Pej. Kadi Muar",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Borakopi Podcast",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "TV3 Fail Mahkamah",
    "series": 1,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Socmed Astro Awani",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "PFA 2024",
    "series": 2,
    "role": "Pengacara Majlis",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "PUSPANITA KESUMA",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Parker Hannifin Aero",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Usrati Jannati, RTM",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "SMK Seri Menanti, Muar",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "ERA Sarawak",
    "series": null,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Family Support Group",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "SASJONG, Muar",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UUM Sintok",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "IPPTAR RTM",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UPSI, Perak",
    "series": 1,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "KWSP Muar",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UIA Pagoh",
    "series": null,
    "role": "Panelis",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "PFA 2024",
    "series": 1,
    "role": "Pengacara Majlis",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Suke TV",
    "series": 2,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Sekolah Dalam Hospital",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Penjara Muar",
    "series": 2,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Penjara Muar",
    "series": 1,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Harian Metro",
    "series": null,
    "role": "Artikel",
    "category": "media"
  },
  {
    "year": 2024,
    "date": null,
    "title": "UTeM Melaka",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2024,
    "date": null,
    "title": "Suke TV",
    "series": 1,
    "role": "Panelis",
    "category": "media"
  },
  {
    "year": 2023,
    "date": null,
    "title": "UniKL MITEC",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "UiTM Alor Gajah",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "SK FELDA Jengka 16",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "Kolej Tunku Kurshiah",
    "series": 2,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "TOT Mx of Aggression",
    "series": null,
    "role": "Pengacara Majlis",
    "category": "organisasi"
  },
  {
    "year": 2023,
    "date": null,
    "title": "Imperium International College",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "World Mental Health Day 2023",
    "series": null,
    "role": "Moderator",
    "category": "organisasi"
  },
  {
    "year": 2023,
    "date": null,
    "title": "SMA Lughatul Quran, Muar",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "Kolej Tunku Kurshiah",
    "series": 1,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "SMK Bandar Maharani, Muar",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "SMA At-Tanwiriah, Muar",
    "series": null,
    "role": "Penceramah",
    "category": "pendidikan"
  },
  {
    "year": 2023,
    "date": null,
    "title": "KWIM Cakna (Ep. 1 & 2)",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  },
  {
    "year": 2023,
    "date": null,
    "title": "MENTARI Open Day 2023",
    "series": null,
    "role": "Pengacara Majlis",
    "category": "organisasi"
  },
  {
    "year": 2023,
    "date": null,
    "title": "Kursus CPG 2023",
    "series": null,
    "role": "Pengacara Majlis",
    "category": "organisasi"
  },
  {
    "year": 2023,
    "date": null,
    "title": "Family Support Group 2023",
    "series": null,
    "role": "Penceramah",
    "category": "organisasi"
  }
];
