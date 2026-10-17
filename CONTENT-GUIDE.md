# Panduan Kemas Kini Kandungan

Semua teks, pautan, pencapaian, media, galeri dan media sosial disimpan dalam **satu fail**:

```
src/content/site.ts
```

Anda tidak perlu menyentuh fail reka bentuk (komponen). Selepas mengubah fail ini, jalankan `npm run build` (atau tolak/push ke GitHub jika laman disambungkan ke Vercel/Netlify — ia akan dibina semula secara automatik).

> 💡 Tip: Edit terus di GitHub — buka fail `src/content/site.ts`, klik ikon ✏️, ubah, kemudian *Commit changes*.

---

## 1. Tambah foto program baharu (galeri)

**Langkah A — sediakan foto**
1. Letakkan foto asal (JPG/PNG, lebih besar lebih baik) dalam folder `assets/originals/`.
   Namakan fail dengan huruf kecil dan sengkang, contoh: `usim-2026-ceramah.jpg`
2. Jalankan:
   ```bash
   npm run images
   ```
   Ini menghasilkan versi WebP yang dioptimumkan dalam `public/images/`.

**Langkah B — tambah dalam `programEvents`**

Cari `export const programEvents` dan tambah entri baharu di **bahagian atas** senarai:

```ts
{
  id: "usim-2026-ceramah",                 // unik, huruf kecil
  title: "Ceramah Kesihatan Mental Pelajar",
  organizer: "Universiti Sains Islam Malaysia (USIM), Nilai",
  year: "2026",                            // isi HANYA jika pasti
  categories: ["pendidikan", "forum"],     // boleh lebih dari satu
  caption: "Sesi perkongsian tentang stres dan pengurusan emosi bersama pelajar.",
  image: {
    src: "usim-2026-ceramah",              // nama fail TANPA .jpg
    alt: "Dr Azren berceramah di hadapan pelajar USIM",
    width: 1600, height: 1067,             // saiz asal foto (anggaran nisbah pun ok)
  },
  instagramUrl: "https://www.instagram.com/p/XXXXXXXXX/",
  featured: true,                          // pilihan: tunjuk dalam "Sorotan"
},
```

Program itu akan **automatik** muncul di bawah setiap kategori yang disenaraikan dalam `categories`.

**Kategori yang tersedia**

| Kod | Label di laman |
|---|---|
| `forum` | Forum & Ceramah |
| `pendidikan` | Universiti & Sekolah |
| `korporat` | Korporat & Organisasi |
| `media` | Media & Podcast |
| `buku` | Buku & PBAKL |
| `saringan` | Saringan Komuniti |

Foto dalam kategori `saringan` juga muncul secara automatik dalam bahagian **Booth Saringan**, dan foto `forum`/`pendidikan`/`korporat` dalam bahagian **Jemputan Ceramah**.

**Mengemas kini poster sedia ada** — entri seperti `id: "uitm"` sudah wujud tanpa foto. Tambah sahaja `image: {...}` (dan `instagramUrl`) pada entri itu; poster akan bertukar menjadi foto.

⚠️ **Etika foto:** gunakan hanya foto yang anda berhak terbitkan. Elakkan pesakit yang boleh dikenali, interaksi klinikal, maklumat sulit dan foto kanak-kanak tanpa kebenaran.

---

## 2. Foto rasmi Forum Intelektual Diraja UTM 2026

Dalam `achievements.utmForum`:

```ts
image: { src: "utm-royal-forum-2026", alt: "Dr Azren sebagai ahli panel di UTM Royal Intellectual Forum 2026", width: 1600, height: 1067 },
instagramUrl: "https://www.instagram.com/p/XXXXXXXXX/",
```

Kad pencapaian akan memaparkan foto besar dengan pendedahan sinematik.

---

## 3. Tambah penampilan media (TV / radio / podcast / akhbar)

Dalam `mediaAppearances`:

```ts
{
  id: "astro-ria-2026",
  type: "tv",                 // "tv" | "radio" | "podcast" | "akhbar"
  outlet: "Astro Ria",
  program: "Nama Program",
  note: "Topik: kemurungan dalam kalangan remaja.",
  url: "https://www.youtube.com/watch?v=...",   // HANYA pautan rasmi yang disahkan
  urlLabel: "Tonton di YouTube",
  thumbnail: { src: "astro-ria-2026", alt: "...", width: 1280, height: 720 }, // pilihan
},
```

- Kad **dengan `url`** → boleh diklik terus ke video/program asal (dengan ikon ▶).
- Kad **tanpa `url`** → kad boleh “dibalik” untuk butiran.
- Jangan reka tajuk episod atau pautan.

---

## 4. Pautan penting (butang CTA)

Semua dalam `links`:

| Kunci | Kegunaan |
|---|---|
| `book` | Beli buku (Google Form) |
| `talk` | Jemputan ceramah (WhatsApp) |
| `booth` | Jemputan booth saringan (WhatsApp) |
| `consultation` | Tempahan konsultasi Klinik Nissa (Yezza) |
| `collaboration` | Kolaborasi (WhatsApp) |
| `beacons` | Beacons |

Ubah di sini dan **semua** butang berkaitan di seluruh laman akan dikemas kini.

---

## 5. Media sosial

Dalam `socials`. Hanya profil yang disahkan dipaparkan (kini: Instagram @fakrulazren, TikTok @drazrennotes, Beacons).
Untuk menambah Facebook / Threads / YouTube, tambah entri dengan URL profil yang tepat — ikon perlu ditambah dalam `src/components/sections/Social.tsx` (objek `look`) dan `src/components/Nav.tsx` (objek `socialIcon`).

Video TikTok dalam hab sosial: `tiktokVideos`. Untuk menukar, tambah ID video, URL, dan thumbnail (simpan imej thumbnail dalam `assets/originals/` dan jalankan `npm run images`).

---

## 6. Biodata, kelayakan & garis masa

- Biodata / kelayakan / peranan NGO: `profile.about`
- Teks hero: `profile.hero`
- Garis masa: `journey` (tambah entri baharu mengikut turutan tahun)
- Institusi ceramah: `institutions.education` dan `institutions.organisations`
- Angka ringkas (10+, 7+, …): `stats` — kemas kini jika senarai CV bertambah. Jangan masukkan angka yang tidak boleh disahkan.

---

## 7. Lokasi klinik

`consultation.location` kini kosong kerana alamat Klinik Nissa tiada dalam CV. Isi (contoh: `"Klinik Nissa, Nilai, Negeri Sembilan"`) dan ia akan muncul dalam bahagian Konsultasi.

---

## 8. Buku

Semua dalam `book`. Jika ada edisi/buku baharu, tambah foto kulit dalam `assets/originals/`, jalankan `npm run images` dan kemas kini `book.cover`.
