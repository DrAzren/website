# Prompt Pembinaan Laman Web Dr Azren (ChatGPT × Higgsfield)

## Cara guna (baca dahulu)

1. Buka ChatGPT dan pastikan **app/connector Higgsfield** sudah disambungkan (Settings → Apps/Connectors → Higgsfield).
2. **Lampirkan fail-fail berikut** dalam mesej yang sama dengan prompt. Semua fail ada dalam repo GitHub `DrAzren/website` (branch `claude/blissful-bohr-8myn2i`) atau dalam simpanan anda sendiri:

   | # | Fail | Lokasi dalam repo / sumber |
   |---|---|---|
   | 1 | CV Dr Azren Oktober 2026 (PDF) | simpanan anda |
   | 2 | Potret jaket varsiti | `assets/originals/portrait-varsity.jpg` |
   | 3 | Potret rasmi berkot | `assets/originals/portrait-formal.jpg` |
   | 4 | Kulit hadapan buku (dari fail cetakan) | `assets/originals/book-cover.png` |
   | 5 | Tulang buku (dari fail cetakan) | `assets/originals/book-spine.png` |
   | 6 | Kulit belakang buku (dari fail cetakan) | `assets/originals/book-back.png` |
   | 7 | Imej 3D buku (latar lutsinar) | `assets/originals/book-3d.png` |
   | 8 | Foto buku di rak | `assets/originals/book-shelf.jpg` |
   | 9 | Foto susunan naskhah buku | `assets/originals/book-stack.jpg` |
   | 10 | Grafik rasmi Top 10 Bestseller PBAKL (Whitecoat Books) | `assets/originals/pbakl-top10.jpg` |
   | 11 | Rekod jemputan (151 baris, tanpa lajur bayaran/hadiah/rating) | `scripts/data/jemputan.tsv` |
   | 12 | (Pilihan) Fail cetakan asal buku | `DSBSK_WC_Print_FA_001.pdf` |

3. Salin **keseluruhan prompt** di bawah (dari "BEGIN PROMPT" hingga "END PROMPT") dan hantar.
4. Jika ChatGPT bertanya pilihan (jenis laman, animasi, senarai di feed), jawab: **Website**, **Animated**, dan pilihan feed mengikut kehendak anda.

> Nota: Laman Higgsfield yang **tidak** disenaraikan di community feed mungkin hanya boleh dibuka oleh pemilik yang log masuk. Jika mahu laman boleh dibuka umum, pilih untuk menyenaraikannya, atau tanya Higgsfield cara menjadikannya awam.

---

## BEGIN PROMPT

You are an elite website production team (creative director, UI/UX designer, full-stack developer, motion designer, Malay copywriter, SEO engineer). Using the **Higgsfield website builder** (via the connected Higgsfield app), BUILD AND DEPLOY a complete, functional, premium, cinematic personal-brand website for **DR FAKRUL AZREN (DR AZREN)**, Malaysia. Do not stop at a plan or mockup: create the website, generate the assets, write the code, deploy it, and give me the live URL.

All public-facing copy is in **Bahasa Melayu (Malaysia)**, warm and conversational, like a friendly Malaysian doctor. Technical work can be in English.

### 0. Higgsfield setup (decisions already made, do not ask again)

- `create_website` with **type: "website"** (no Higgsfield sign-in, no AI generation on the site), **template: "scroll-scrub"** (Animated), category `portrait-lifestyle`, subdomain `drazren` (if taken: `drazren-official`).
- Follow the Higgsfield website-builder workflow (design brief → storyboard → film → build → mechanical gate → deploy).
- No Higgsfield branding anywhere on the page. My brand is the only brand.
- After deploying, tell me the live URL. Only list it on the community feed if I say so.

### 1. Source of truth and hard rules

- Use my attached CV and the facts in this prompt as the ONLY source of truth. Never invent achievements, awards, qualifications, testimonials, ratings, follower counts, attendance numbers, episode titles or links.
- Describe me as **Doktor Perubatan (Amalan Am, Psikiatri & Kesihatan Mental)**. NEVER "Pakar Psikiatri", "Consultant Psychiatrist" or "specialist".
- Never generate fake photos of me, my events, TV appearances or audiences. Use only the real photos I attach. AI-generated imagery is allowed ONLY for abstract/decorative assets (the scroll film, 3D props, illustrations).
- Do **not** include: emergency/crisis hotline numbers, the "NGO Krayon Podcast" item, the words "bukan sekadar", or any pricing.
- No em-dashes or en-dashes in visible copy (use commas, colons, full stops).
- Never collect health information on the site. All bookings go to the official external links below (open in a new tab).

### 2. Identity

- Display name: **DR AZREN** · Full name: **Dr Fakrul Azren**
- Descriptor: Doktor Perubatan · Psikiatri & Kesihatan Mental · Penceramah · Penulis · Advokasi Kesihatan Mental
- Slogan: **"Bicara Jiwa. Sebarkan Ilmu. Bina Harapan."**
- Tagline: **"Kesihatan Mental, Kita Bincang Sama-Sama."**
- Credentials:
  - Pendaftaran Penuh Majlis Perubatan Malaysia (MMC), **No. 90486**, Jan 2021 hingga kini
  - Sijil Amalan Tahunan (APC), Jun 2021 hingga kini
  - Doctor of Medicine (MD), Universiti Sains Malaysia (USM-KLE IMP, India), 2013-2018
- Roles: Pengasas & Doktor Residen, **Klinik Nissa** (Amalan Am, Psikiatri & Kesihatan Mental) · Empati Expert, NGO Empati · Ahli Majlis Penasihat, NGO Krayon and Society · Trainer, KaiaKlas Educare
- Clinic address: **Klinik Nissa, 9697, Ground Floor, Jalan BBN 1/3C, Pusat Bandar Putra Point, 71800 Nilai, Negeri Sembilan**

### 3. Required links (use exactly, all open in a new tab)

| Purpose | URL |
|---|---|
| Beli buku | https://docs.google.com/forms/d/e/1FAIpQLScl6Dvc4PyEMdOEO005c-mnDxJPLRIQ3NBbQOv3pt9-7GEXnw/viewform |
| Jemputan ceramah | https://wa.link/pbxew7 |
| Jemputan booth saringan | https://wa.link/pbxew7 |
| Konsultasi (Klinik Nissa) | https://kliniknissa.yezza.co/appointment/kesihatan-mental-(konsultasi-dan-saringan)-129685 |
| Kolaborasi | https://wa.link/6yvsbc |
| Beacons | https://beacons.ai/spreadpositivity |
| Instagram | https://www.instagram.com/fakrulazren/ (@fakrulazren) |
| TikTok | https://www.tiktok.com/@drazrennotes (@drazrennotes) |
| Google Maps (klinik) | https://www.google.com/maps/search/?api=1&query=Klinik%20Nissa%2C%209697%2C%20Jalan%20BBN%201%2F3C%2C%20Pusat%20Bandar%20Putra%20Point%2C%2071800%20Nilai |

Only these social profiles are verified. Do not add Facebook/Threads/YouTube.

### 4. Design system (my brand, overrides any default palette bans)

- Colours: warm ivory `#F8F5EF` (page ground), midnight navy `#172A3A` (film world + dark sections), coral `#FF775E` (single accent), pastel lavender `#C8BCF5`, sage `#A8C8B2`, sky blue `#9AD6EF`, near black `#222222` (text). Book yellow `#FFDF1E` only around the real book.
- Fonts: **Plus Jakarta Sans** (display, 500-800) + **DM Sans** (body). No serif.
- Style: 70% premium editorial, 20% cinematic motion, 10% playful. Bold oversized type, organic blobs, rounded "sheet" sections that overlap with curved tops, gentle glassmorphism, floating word stickers and speech bubbles, subtle paper grain. Never a hospital or Linktree look.
- Every CTA intent gets its OWN button design and hover behaviour (book = printed-book slab with hard navy offset shadow; talk = speech bubble with tail and typing dots; booth = navy ticket under a coral/ivory striped awning; consultation = appointment tab whose calendar icon flips to a tick; collaboration = outlined pill with two circles that merge; Beacons = lavender-sky gradient pill; in-page links = text with a drawing coral underline).
- Motion: Lenis smooth scroll, framer-motion reveals that never hide content (animate position only, never fade from opacity 0 on scroll), magnetic primary CTAs, mouse parallax. Full `prefers-reduced-motion` support plus a "Kurangkan animasi" toggle in the menu.
- Short skippable intro (CSS-driven, once per session): "DR AZREN" then "BICARA JIWA." in coral, with a "Langkau" button.
- Floating nav pill (desktop: Kenali Saya, Pencapaian, Galeri Program, Buku Saya, Jemputan Ceramah, Konsultasi + "Tempah Konsultasi" + Menu). Full-screen menu with all 10 items: Utama, Kenali Saya, Pencapaian, Galeri Program, Buku Saya, Jemputan Ceramah, Booth Saringan, Konsultasi, Kolaborasi, Media Sosial. A floating quick-action dock (Buku / Ceramah / Konsultasi) appears after the hero and hides near the footer.

### 5. The scroll-scrub film (Higgsfield generation)

**Storyboard** (`gpt_image_2_5`, 16:9, high, 2k), prompt:
> A cinematic storyboard sheet: a 6-panel grid showing SIX KEYFRAMES OF ONE SINGLE CONTINUOUS SLOW CAMERA PUSH-FORWARD through the same world, NOT six different scenes. Deep midnight-navy (#172A3A) seamless studio void with soft volumetric haze, soft key light from upper left, matte handmade paper-craft 3D speech bubbles with rounded edges in coral #FF775E, lavender #C8BCF5, sage #A8C8B2, sky blue #9AD6EF and ivory #F8F5EF, premium editorial 3D render, shallow depth of field, calm and hopeful. 1: a single small coral speech bubble glowing alone in the dark. 2: more pastel bubbles emerge. 3: dozens of bubbles slowly rotating. 4: thin luminous ivory threads connect them into a constellation. 5: the bubbles fold into paper pages forming an open book. 6: the open book with blank ivory pages glows with warm golden-ivory light. Subject always centered with negative space left and right. No text, no letters, no logos, no watermark.

**Film** (`seedance_2_0`, mode std, 1080p, 15 s, 16:9, `generate_audio: false`, storyboard as `image_references`, NOT start frame): one continuous slow forward camera move telling the same 6 beats; "no cuts, no camera shake, slow steady motion, locked exposure, no flicker, no on-screen text, no people". If a preset is suggested, decline and generate literally.

**Encoding:** split the film at exact frame boundaries into **4 consecutive segments** (frames 0-89, 90-179, 180-269, 270-end) so each chapter has its own clip; encode desktop + mobile (720p) with the template's scroll-scrub helper; posters = first frame of each ENCODED clip (jpg). Add `blob:` to CSP `media-src`.

**Chapters over the film** (`scroll-scrub-scenes.ts`):
1. id `utama`, kicker **"HELLO, I'M DR AZREN."**, title **"Jom Sembang Tentang Kesihatan Mental."**, body "Hai, saya Dr Fakrul Azren. Seorang doktor, penulis dan penceramah yang percaya kesihatan mental perlu dibincangkan dengan lebih terbuka, santai dan tanpa stigma." Actions: "Kenali Dr Azren" (→ #kenali), "Dapatkan Buku Saya" (book link), "Jemput Saya Berceramah" (talk link) + my REAL varsity-jacket portrait in an arch frame beside the copy (desktop), with draggable floating word stickers (MENTAL HEALTH, SPREAD POSITIVITY, LET'S TALK, YOU MATTER, JOM SEMBANG), a clickable speech bubble cycling: "Hai! Jom sembang 👋" / "Kadang-kadang, langkah pertama bermula dengan bertanya." / "Tak semestinya kena tunggu sampai teruk." / "Sama-sama kita sebarkan ilmu, bukan stigma.", and a rotating circular badge "Bicara Jiwa • Sebarkan Ilmu • Bina Harapan". Mobile: compact round avatar row.
2. id `memahami`, title **"Ilmu Tentang Memahami Manusia."**, body "Kesihatan mental, kita bincang sama-sama: terbuka, santai dan tanpa stigma. Kadang-kadang, langkah pertama bermula dengan bertanya." Tags: Doktor Perubatan, Penceramah, Penulis. Align right.
3. id `komuniti`, title **"Ilmu Yang Sampai Ke Seluruh Komuniti."**, body "Dari universiti dan sekolah ke tempat kerja, agensi kerajaan, kaca TV, corong radio dan studio podcast." Tags: Panel UTM Royal Intellectual Forum 2026, TV, radio & podcast, 151 jemputan sejak 2023.
4. id `harapan`, title **"Bicara Jiwa. Sebarkan Ilmu. Bina Harapan."**, body "Penulis buku “Dr, Saya Boleh Sembuh Ke?”, No. 1 Top Bestseller di PBAKL 2026." Actions: "Dapatkan Buku Sekarang" + "Kenali buku ini" (→ #buku). Align right.

Move the engine's chapter route buttons to the bottom-left on desktop and hide them on mobile.

### 6. Sections after the film (in this order)

**6.1 Kenali Saya** (`#kenali`, ivory sheet). Tilted polaroid of my formal portrait with a coral bubble "Hai, selamat datang!". Heading "Doktor yang suka bersembang tentang jiwa." Paragraphs:
- "Saya Dr Fakrul Azren, atau lebih mesra dengan panggilan Dr Azren. Saya seorang doktor perubatan yang bekerja dalam bidang amalan am, psikiatri dan kesihatan mental, dan kini merupakan Pengasas serta Doktor Residen di Klinik Nissa."
- "Di luar bilik konsultasi, saya menulis, berceramah dan berkongsi di media, kerana saya percaya ilmu kesihatan mental patut sampai kepada semua orang, dengan bahasa yang mudah difahami dan tanpa stigma."
Three navy credential tiles (MMC 90486, APC, MD USM) + four role cards (section 2).

**6.2 Pencapaian** (`#pencapaian`, navy sheet). Heading **"Dari Klinik, Ke Pentas, Hingga Ke Hati Masyarakat."** Body "Perjalanan saya dalam dunia kesihatan mental bukan hanya berlaku di bilik konsultasi. Ia juga melibatkan penulisan, perkongsian ilmu, media dan program bersama masyarakat."
- **UTM Royal Intellectual Forum card** (gold-accented typography, giant outline "2026" parallax, photo slot for later): title "Panel Forum Intelektual Diraja UTM 2026", chips "Ahli Panel Jemputan" + "UTM Royal Intellectual Forum 2026", body "Saya dipilih dan dijemput sebagai ahli panel di Forum Intelektual Diraja UTM 2026, satu forum yang berlangsung dengan keberangkatan Raja Permaisuri Agong, Raja Zarith Sofiah, serta YAM Che Puan Mahkota Khaleeda Johor." Quote: "Peluang untuk membawa suara kesihatan mental ke pentas intelektual: satu penghormatan yang sangat bermakna buat saya." Never imply a royal award or endorsement.
- **Bestseller card** (yellow): attached 3D book render (`book-3d.png`) floating with pointer tilt + rotating badge "No.1 Top Bestseller • PBAKL 2026" + a small tilted card of the official **Whitecoat Books Top 10 Bestseller PBAKL** graphic that opens full size. Title "No. 1 Top Bestseller · PBAKL 2026". Body: "Buku sulung saya, “Dr, Saya Boleh Sembuh Ke?” terbitan Whitecoat Books, berada di tempat No. 1 dalam senarai Top 10 Bestseller Whitecoat Books di Pesta Buku Antarabangsa Kuala Lumpur (PBAKL) 2026. Terima kasih kepada setiap pembaca yang sudi membuka ruang untuk berbincang tentang kesihatan mental." CTAs: "Dapatkan Buku Sekarang", "Kenali buku ini".
- **Media wall**: heading "Perkongsian Kesihatan Mental di Media Nasional." Horizontal-scrolling flip cards (front: big outlet wordmark in a pastel tone + type icon; back: details) with filters Semua / Televisyen / Radio / Podcast / Akhbar and prev/next buttons. No logos (typographic wordmarks only), no invented links. Items:
  - TV: TV Al-Hijrah "Assalamualaikum" (doktor panel setiap Selasa) · TV3 "Fail Mahkamah" · Astro Awani · Astro Prima "Viral Isu Panas" · Astro Oasis "Kurma dan Kopi" · RTM TV1 "Selamat Pagi Malaysia" · RTM "Cuit Sikit Jangan Sentap"
  - Radio: Kool 101 · ERA Sarawak · ERA FM · Rakita FM "Buka Cerita"
  - Podcast: Caprice Podcast Show · Sirap Limau Podcast · DekatMic Podcast bersama Financial Faiz · ML Studios · Sembang Kopiah Terbang bersama PU Amin & PU Rahmat · Kita Bincang Podcast · Borakopi Podcast · Hi Viral Podcast · Podcast Sociowara (UiTM Shah Alam) · Podcast Verbatim (UPSI) · Podcast Ruang Jiwa (UKM)
  - Akhbar: Harian Metro (artikel & pandangan pakar) · Bernama (artikel)
- **Speaking wall**: heading "Membawa Perbualan Kesihatan Mental Ke Seluruh Komuniti." Four animated counters computed FROM THE ATTACHED `jemputan.tsv`: **151** Jemputan program (2023-2026), **77** Sesi ceramah, **55** TV, radio, podcast & akhbar, **52** Universiti, kolej & sekolah. Two marquee rows of institutions: USIM Nilai, UiTM, UTeM, UIA Pagoh, Kolej Tunku Kurshiah, UTHM, UPSI, UUM, UniKL, MRSM, pelbagai sekolah · Majlis Perbandaran Pengerang, Tenaga Switchgear, KWSP Muar, Penjara Muar, IPPTAR, Parker Hannifin Aerospace, Jabatan Pembangunan Kemahiran KESUMA (label: "Antara institusi & organisasi yang pernah menjemput saya", not "partners").
- **Rekod Jemputan** (interactive): every row of `jemputan.tsv` (columns: year, date dd/mm/yyyy or empty, place, role). Year tabs with counts (Semua 151, 2026: 46, 2025: 43, 2024: 47, 2023: 15), category filter (Universiti & Sekolah / Media & Podcast / Organisasi & Komuniti), search box, scrollable list newest first: date ("15 Okt 2026", or the year if no date), title in proper case (UiTM, UniKL, UTeM, SMK, RTM, TV3…), "Siri N" badge for repeat invitations (from "2.0", "3.0" suffixes), role (Penceramah, Panelis, Pengacara Majlis, Moderator, Artikel, Kolaborasi). Never show payment, gift, rating or sales data.

**6.3 Perjalanan** (`#perjalanan`, ivory sheet). Heading "Kenali Perjalanan Saya." Intro "Ini perjalanan saya: dari bilik kuliah ke wad hospital, ke klinik, ke pentas dan ke halaman buku. Jom skrol bersama." Scroll-drawn vertical timeline (alternating on desktop, single rail on mobile, big outline year parallax):
2009-2010 MRSM Taiping (SPM) · 2011 Asasi Sains, Universiti Malaya · 2013-2018 Doctor of Medicine (MD), USM (USM-KLE IMP, India) · 2019-2021 Pegawai Perubatan Siswazah, Hospital Tuanku Jaafar Seremban · 2021 Pendaftaran Penuh MMC (No. 90486; APC sejak Jun 2021) · 2021-2022 Pegawai Perubatan, Hospital Tuanku Jaafar · 2022-2025 Pegawai Perubatan, Hospital Pakar Sultanah Fatimah Muar (Jun 2022 hingga Julai 2025) · 2026 Penulis & Panel Forum (PBAKL 2026 No. 1, UTM Royal Intellectual Forum 2026) with book cover thumbnail · Kini: Pengasas & Doktor Residen, Klinik Nissa (+ NGO roles) with formal portrait.

**6.4 Galeri Program** (`#galeri`, near-black sheet). Heading "Di Sebalik Setiap Pentas, Ada Sebuah Cerita." Subtitle "Antara momen perkongsian ilmu, pertemuan dan pengalaman sepanjang perjalanan saya dalam meningkatkan kesedaran kesihatan mental." Featured horizontal carousel ("Sorotan") + an Instagram card, filters (Semua Program, Forum & Ceramah, Universiti & Sekolah, Korporat & Organisasi, Media & Podcast, Buku & PBAKL, Saringan Komuniti), masonry grid, full-screen lightbox (keyboard + swipe, rendered in a portal). Real images now: PBAKL Top 10 graphic, book shelf photo, book stack photo. Every other documented engagement is a styled colour poster labelled "Foto akan dikemas kini" (never a fake photo): UTM Royal Intellectual Forum 2026, Ceramah & Saringan di Tempat Kerja, USIM (2025), UiTM, Kolej Tunku Kurshiah, UPSI (2024), UUM (2024), Majlis Perbandaran Pengerang (2025), Tenaga Switchgear (2025), KWSP Muar (2024), IPPTAR (2024), Parker Hannifin Aerospace (2024). Keep the data structured so I can add photos + Instagram URLs later.

**6.5 Buku Saya** (`#buku`, lavender gradient sheet). Sticky interactive **CSS 3D book** built from the attached genuine textures (front `book-cover.png`, spine `book-spine.png`, back `book-back.png`), real proportions **125 × 177.5 × 13.4 mm**, cream page edges, scroll-driven rotation showing the spine, pointer tilt, float, soft shadow, sheen, and a button **"Pusing: lihat kulit belakang"** that flips it 180° to the real back cover (and "Lihat kulit hadapan" back). Do NOT AI-generate the book (the text must stay exact). Floating theme chips: Memahami Emosi, Melawan Stigma, Mencari Harapan, Kenali Diri. Copy: title "Dr, Saya Boleh Sembuh Ke?", subheading "Satu Soalan. Seribu Perasaan.", description "Ada persoalan yang sukar diluahkan. Ada perasaan yang dipendam terlalu lama. Melalui buku ini, saya mengajak pembaca mengenali kesihatan mental dengan lebih dekat, memahami perjuangan emosi dan membuka ruang kepada harapan." Badge "No. 1 Top Bestseller · PBAKL 2026". Meta: Penulis Dr Azren · Penerbit Whitecoat · Tahun 2026. Cover topic chips: OCD, Depression, Addiction, Anxiety, ADHD, Bipolar, Schizophrenia, PTSD, Personality Disorder. CTA "Dapatkan Buku Sekarang" + note "Tempahan melalui borang rasmi, dibuka di tab baharu." Polaroid of the shelf photo with the cover quote "Kerana setiap penyakit ada penawarnya & di sini ikhtiarnya bermula." No prices.

**6.6 Jemputan Ceramah** (`#ceramah`, coral sheet). Heading "Jom Jemput Dr Azren Berceramah!", subheading "Ilmu Yang Bermakna, Disampaikan Dengan Santai.", body "Kesihatan mental bukan topik yang perlu dibincangkan secara terlalu formal. Saya percaya pendekatan yang mesra, interaktif dan dekat dengan kehidupan mampu menjadikan perkongsian lebih mudah difahami dan diingati." Format chips: Ceramah korporat, Ceramah universiti, Kesedaran kesihatan mental di sekolah, Forum kesihatan mental, Program kesejahteraan pekerja, Pendidikan komuniti, Bengkel & sesi interaktif. Animated bubble "Ada Program? Jom Kita Bincang!" over a real photo (formal portrait until event photos exist). Topic grid (8 cards): Stress dan Burnout · Anxiety dan Depression · Pengurusan Emosi · Resilience · Kesihatan Mental Remaja · Mental Health at Workplace · Self-Care dan Kesejahteraan Mental · Hubungan dan Komunikasi Sihat. CTA "Jemput Dr Azren Berceramah".

**6.7 Booth Saringan** (`#booth`, sky-blue sheet). Heading "Booth Saringan Kesihatan Mental Untuk Program Anda." Body "Sedang merancang karnival, program kesejahteraan pekerja atau hari kesihatan? Jom jadikan kesedaran kesihatan mental sebahagian daripada pengalaman peserta." Occasion chips + 4 floating feature cards (Saringan ringkas, Ruang bertanya, Kesedaran & ilmu, Langkah seterusnya). Disclaimer: "Saringan kesihatan mental ialah alat untuk mengenal pasti keperluan penilaian lanjut. Ia BUKAN diagnosis. Diagnosis hanya boleh dibuat melalui penilaian klinikal penuh oleh profesional kesihatan." CTA "Jemput Booth Saringan". Generate the illustration with Higgsfield (`gpt_image_2_5`, transparent background):
> A charming 3D paper-craft community wellbeing booth, front three-quarter view: scalloped striped awning alternating coral #FF775E and ivory #F8F5EF on a midnight navy #172A3A frame, counter draped with a blank coral cloth, a lavender clipboard with blank paper, a sky blue mug, a small potted plant with sage leaves, two soft ivory speech-bubble shapes floating above, a tiny ivory stool. Soft matte clay and paper textures, soft studio light, premium friendly 3D render, isolated, transparent background. No text, no letters, no logos, no people.

**6.8 Konsultasi** (`#konsultasi`, ivory-to-sage). Heading "Tak Perlu Tunggu Sampai Terlalu Berat.", subheading "Konsultasi, Saringan & Rawatan Kesihatan Mental.", body "Setiap orang melalui cabaran emosi yang berbeza. Jika gejala mula mengganggu kehidupan harian, mendapatkan penilaian profesional boleh menjadi salah satu langkah untuk memahami keadaan diri dan pilihan bantuan yang sesuai." Services card: Konsultasi Kesihatan Mental, Saringan Kesihatan Mental, Penilaian Klinikal, Perbincangan Pilihan Rawatan, Rawatan dan Susulan Mengikut Keperluan. 3 steps with an animated connecting line: 1 Tempah Slot, 2 Hadir Untuk Konsultasi, 3 Bincangkan Pelan Rawatan. CTA "Tempah Konsultasi Bersama Dr Azren" + note (no guaranteed outcomes, don't share health info on WhatsApp). Navy location card with the clinic address and "Buka di Google Maps". No hotline numbers.

**6.9 Ambil Nafas Sekejap** (`#nafas`, navy). Interactive breathing orb with start/stop: Tarik nafas 4 s, Tahan 4 s, Hembus 6 s, countdown, aria-live label. Note: "Latihan ringkas untuk bertenang seketika, bukan pengganti rawatan atau nasihat profesional."

**6.10 Kolaborasi** (`#kolaborasi`, ivory). Heading "Ada Idea Menarik? Jom Kolaborasi!", body "Saya sentiasa terbuka untuk projek dan kerjasama yang membawa mesej positif serta meningkatkan kesedaran tentang kesihatan mental." Six cards linking to the collaboration WhatsApp: Podcast, Media Interview, Social Media Campaign, Creative Digital Content, Corporate Collaboration, NGO & Community Initiatives. Floating 3D props generated with Higgsfield (transparent): a playful clay podcast microphone (navy head, coral body, ivory ring) and a compact lavender video camera (sky-blue lens, navy ring, coral record button). CTA "Jom Bincang Kolaborasi".

**6.11 Media Sosial** (`#media-sosial`). Heading "Follow Dr Azren!", body "Jom teruskan perbualan tentang kesihatan mental melalui perkongsian, video dan aktiviti saya." Sticker "#SpreadPositivity ✨". Cards: Instagram @fakrulazren, TikTok @drazrennotes, Beacons spreadpositivity. TikTok strip with these verified videos (use TikTok oEmbed thumbnails): "Panduan Ringkas Cara Jumpa Doktor Psikiatri" https://www.tiktok.com/@drazrennotes/video/7463790735075101970 · "Popcorn Brain" https://www.tiktok.com/@drazrennotes/video/7458168402947869970 · "Gambaran Keadaan di Dalam Wad Psikiatri di Malaysia" https://www.tiktok.com/@drazrennotes/video/7386490804673547541. CTA "Semua Pautan di Beacons". No follower counts.

**6.12 Footer** (navy). Giant animated lockup "JOM / SEBARKAN / POSITIVITY." (last word coral). Line: "Ada soalan, program atau idea yang ingin dikongsi? Saya sentiasa terbuka untuk bersembang. Pilih cara yang paling sesuai untuk anda." Buttons: Jemput Berceramah, Tempah Konsultasi, Dapatkan Buku, Kolaborasi. Columns: name + descriptor + "Pendaftaran Penuh MMC No. 90486" + clinic address; nav links; social links. Disclaimer: "Kandungan laman web ini adalah untuk tujuan pendidikan dan kesedaran umum, dan bukan pengganti nasihat, diagnosis atau rawatan perubatan profesional." Slogan marquee, © year, "Kembali ke atas".

### 7. SEO & head

- `<html lang="ms-MY">`. Title: **"Dr Azren | Penceramah, Penulis & Doktor Kesihatan Mental"**. Description: "Kenali Dr Azren, penulis buku Dr, Saya Boleh Sembuh Ke? Terokai pencapaian, program ceramah, media, konsultasi kesihatan mental dan peluang kolaborasi."
- Keywords: Dr Azren, Dr Fakrul Azren, Dr Saya Boleh Sembuh Ke, Penceramah Kesihatan Mental Malaysia, Ceramah Kesihatan Mental, Mental Health Speaker Malaysia, Booth Saringan Kesihatan Mental, Konsultasi Kesihatan Mental Nilai, Doktor Kesihatan Mental Nilai, Klinik Nissa Nilai, Spread Positivity.
- JSON-LD: Person (jobTitle as in section 2, sameAs = the 3 verified profiles, worksFor MedicalClinic "Klinik Nissa" with the full PostalAddress, alumniOf USM / Universiti Malaya / MRSM Taiping), Book (Whitecoat, 2026, ms), WebSite. No reviews or ratings.
- Open Graph 1200×630 card: navy ground, my real varsity portrait in an arch, "DR AZREN", "Bicara Jiwa. Sebarkan Ilmu. Bina Harapan." (coral last phrase). Absolute og:image URL. Favicon/manifest set from a simple "DA" speech-bubble monogram (navy + coral). sitemap.xml + robots.txt.

### 8. Quality gate before deploy

- Typecheck + production build pass; no SSR crashes (no `window` at module top level).
- Every external CTA uses the exact URLs above and opens in a new tab; every in-page link scrolls correctly.
- Desktop 1440 px and mobile 390 px: no horizontal overflow, no text overflow, sticky book works, lightbox above all UI.
- Reduced motion: everything readable, no video fetch, intro skipped.
- No em-dashes in visible copy, no "bukan sekadar", no hotline numbers, no Krayon podcast, no specialist titles, no invented facts, no AI photos of people/events.
- Report back: live URL, list of generated assets, and anything that still needs real photos from me (priority: UTM Royal Intellectual Forum 2026, PBAKL 2026, screening booths, university talks).

## END PROMPT
