/**
 * ============================================================================
 *  DR AZREN — FAIL KANDUNGAN UTAMA (EDITABLE CONTENT FILE)
 * ============================================================================
 *  Hampir semua teks, pautan, pencapaian, media dan galeri laman web datang
 *  dari fail ini. Kemas kini di sini — tidak perlu sentuh komponen reka bentuk.
 *  Panduan lengkap: CONTENT-GUIDE.md
 *
 *  Sumber kebenaran: CV Dr Azren (Oktober 2026). Jangan tambah pencapaian,
 *  kelayakan, testimoni atau angka yang tidak disahkan.
 * ============================================================================
 */

import { engagements } from "./engagements";

/* ---------------------------------------------------------------- types -- */

/**
 * A photo prepared with `npm run images` (see scripts/optimize_images.py).
 * `src` is the base file name inside assets/originals, WITHOUT extension.
 */
export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position, e.g. "50% 20%" to keep a face in frame */
  position?: string;
};

export type GalleryCategory = "forum" | "pendidikan" | "korporat" | "media" | "buku" | "saringan";

export type ProgramEvent = {
  id: string;
  title: string;
  organizer?: string;
  /** Only fill in when verified. Leave empty instead of guessing. */
  year?: string;
  categories: GalleryCategory[];
  caption: string;
  /** Leave empty until the original photo is uploaded — a styled poster is shown instead. */
  image?: Photo;
  /** Original Instagram post, e.g. https://www.instagram.com/p/XXXXXXXX/ */
  instagramUrl?: string;
  /** Any other verified original source (TikTok, YouTube, news article…) */
  sourceUrl?: string;
  sourceLabel?: string;
  /** Show in the "Sorotan" carousel at the top of the gallery */
  featured?: boolean;
};

export type MediaType = "tv" | "radio" | "podcast" | "akhbar";

export type MediaAppearance = {
  id: string;
  type: MediaType;
  outlet: string;
  program?: string;
  note?: string;
  /** Verified public link to the episode / programme / post. Never invent one. */
  url?: string;
  urlLabel?: string;
  thumbnail?: Photo;
};

/* ------------------------------------------------------------ links ------ */

export const links = {
  book: "https://docs.google.com/forms/d/e/1FAIpQLScl6Dvc4PyEMdOEO005c-mnDxJPLRIQ3NBbQOv3pt9-7GEXnw/viewform",
  talk: "https://wa.link/pbxew7",
  booth: "https://wa.link/pbxew7",
  consultation: "https://kliniknissa.yezza.co/appointment/kesihatan-mental-(konsultasi-dan-saringan)-129685",
  collaboration: "https://wa.link/6yvsbc",
  beacons: "https://beacons.ai/spreadpositivity",
} as const;

/* ---------------------------------------------------------- profile ----- */

export const profile = {
  displayName: "DR AZREN",
  fullName: "Dr Fakrul Azren",
  /** Shown under the name. Do NOT change to "Pakar Psikiatri" unless specialist registration is verified. */
  descriptor: "Doktor Perubatan · Psikiatri & Kesihatan Mental · Penceramah · Penulis · Advokasi Kesihatan Mental",
  descriptorShort: "Doktor · Penceramah · Penulis",
  cvTitle: "General Practitioner & Psychiatry Doctor",
  slogan: "Bicara Jiwa. Sebarkan Ilmu. Bina Harapan.",
  tagline: "Kesihatan Mental, Kita Bincang Sama-Sama.",
  hero: {
    eyebrow: "HELLO, I'M DR AZREN.",
    heading: ["Jom", "Sembang", "Tentang", "Kesihatan", "Mental."],
    /** Words in the heading that receive the coral highlight */
    highlight: ["Kesihatan", "Mental."],
    body: "Hai, saya Dr Fakrul Azren. Seorang doktor, penulis dan penceramah yang percaya kesihatan mental perlu dibincangkan dengan lebih terbuka, santai dan tanpa stigma.",
    secondary: "Ilmu Tentang Memahami Manusia.",
    floatingWords: ["MENTAL HEALTH", "SPREAD POSITIVITY", "LET'S TALK", "YOU MATTER", "JOM SEMBANG"],
    bubbles: [
      "Hai! Jom sembang 👋",
      "Kadang-kadang, langkah pertama bermula dengan bertanya.",
      "Tak semestinya kena tunggu sampai teruk.",
      "Sama-sama kita sebarkan ilmu, bukan stigma.",
    ],
  },
  portrait: {
    src: "portrait-varsity",
    alt: "Potret Dr Fakrul Azren berjaket varsiti hitam dan krim, tersenyum dengan tangan bersilang",
    width: 1254,
    height: 1254,
    position: "50% 18%",
  } satisfies Photo,
  portraitFormal: {
    src: "portrait-formal",
    alt: "Potret rasmi Dr Fakrul Azren berkot hitam dan kemeja putih",
    width: 1008,
    height: 1008,
    position: "50% 30%",
  } satisfies Photo,
  about: {
    heading: "Doktor yang suka bersembang tentang jiwa.",
    paragraphs: [
      "Saya Dr Fakrul Azren — atau lebih mesra dengan panggilan Dr Azren. Saya seorang doktor perubatan yang bekerja dalam bidang amalan am, psikiatri dan kesihatan mental, dan kini merupakan Pengasas serta Doktor Residen di Klinik Nissa.",
      "Di luar bilik konsultasi, saya menulis, berceramah dan berkongsi di media — kerana saya percaya ilmu kesihatan mental patut sampai kepada semua orang, dengan bahasa yang mudah difahami dan tanpa stigma.",
    ],
    credentials: [
      { label: "Pendaftaran Penuh MMC", value: "No. Pendaftaran 90486", note: "Majlis Perubatan Malaysia · Jan 2021 – kini" },
      { label: "Sijil Amalan Tahunan (APC)", value: "Jun 2021 – kini", note: "Majlis Perubatan Malaysia" },
      { label: "Doctor of Medicine (MD)", value: "Universiti Sains Malaysia", note: "USM-KLE IMP, India · 2013–2018" },
    ],
    roles: [
      { title: "Pengasas & Doktor Residen", org: "Klinik Nissa", note: "Amalan Am, Psikiatri & Kesihatan Mental" },
      { title: "Empati Expert", org: "NGO Empati" },
      { title: "Ahli Majlis Penasihat", org: "NGO Krayon and Society" },
      { title: "Trainer", org: "KaiaKlas Educare" },
    ],
  },
};

/* ------------------------------------------------------- achievements --- */

export const achievements = {
  heading: "Dari Klinik, Ke Pentas, Hingga Ke Hati Masyarakat.",
  body: "Perjalanan saya dalam dunia kesihatan mental bukan hanya berlaku di bilik konsultasi. Ia juga melibatkan penulisan, perkongsian ilmu, media dan program bersama masyarakat.",
  utmForum: {
    kicker: "Pencapaian 01 · Pentas Intelektual",
    title: "Panel Forum Intelektual Diraja UTM 2026",
    eventName: "UTM Royal Intellectual Forum 2026",
    year: "2026",
    role: "Ahli Panel Jemputan",
    body: "Saya dipilih dan dijemput sebagai ahli panel di Forum Intelektual Diraja UTM 2026 — satu forum yang berlangsung dengan keberangkatan Raja Permaisuri Agong, Raja Zarith Sofiah, serta YAM Che Puan Mahkota Khaleeda Johor.",
    reflection: "Peluang untuk membawa suara kesihatan mental ke pentas intelektual — satu penghormatan yang sangat bermakna buat saya.",
    /** Add the official event photo here when available (see PHOTO-UPLOADS.md) */
    image: undefined as Photo | undefined,
    instagramUrl: undefined as string | undefined,
  },
  bestseller: {
    kicker: "Pencapaian 02 · Penulisan",
    title: "No. 1 Top Bestseller — PBAKL 2026",
    body: "Buku sulung saya, “Dr, Saya Boleh Sembuh Ke?” terbitan Whitecoat Books, berada di tempat No. 1 dalam senarai Top 10 Bestseller Whitecoat Books di Pesta Buku Antarabangsa Kuala Lumpur (PBAKL) 2026. Terima kasih kepada setiap pembaca yang sudi membuka ruang untuk berbincang tentang kesihatan mental.",
  },
  media: {
    kicker: "Pencapaian 03 · Media",
    title: "Perkongsian Kesihatan Mental di Media Nasional.",
    body: "Daripada kaca TV dan corong radio hingga ke studio podcast — setiap jemputan ialah peluang untuk membuka perbualan tentang kesihatan mental kepada lebih ramai orang.",
  },
  speaking: {
    kicker: "Pencapaian 04 · Ceramah & Komuniti",
    title: "Membawa Perbualan Kesihatan Mental Ke Seluruh Komuniti.",
    body: "Ceramah, forum, bengkel dan saringan — di universiti, sekolah, tempat kerja, agensi kerajaan dan komuniti.",
  },
};

/* --------------------------------------------------------------- media -- */

export const mediaAppearances: MediaAppearance[] = [
  { id: "tvalhijrah", type: "tv", outlet: "TV Al-Hijrah", program: "Assalamualaikum", note: "Doktor panel bagi segmen setiap Selasa." },
  { id: "tv3", type: "tv", outlet: "TV3", program: "Fail Mahkamah" },
  { id: "awani", type: "tv", outlet: "Astro Awani" },
  { id: "astroprima", type: "tv", outlet: "Astro Prima", program: "Viral Isu Panas" },
  { id: "astrooasis", type: "tv", outlet: "Astro Oasis", program: "Kurma dan Kopi" },
  { id: "rtmtv1", type: "tv", outlet: "RTM TV1", program: "Selamat Pagi Malaysia" },
  { id: "rtmcuit", type: "tv", outlet: "RTM", program: "Cuit Sikit Jangan Sentap" },
  { id: "kool101", type: "radio", outlet: "Kool 101", program: "Radio" },
  { id: "erasarawak", type: "radio", outlet: "ERA Sarawak", program: "Radio" },
  { id: "erafm", type: "radio", outlet: "ERA FM", program: "Radio" },
  { id: "rakitafm", type: "radio", outlet: "Rakita FM", program: "Buka Cerita" },
  { id: "caprice", type: "podcast", outlet: "Caprice Podcast Show" },
  { id: "siraplimau", type: "podcast", outlet: "Sirap Limau Podcast" },
  { id: "dekatmic", type: "podcast", outlet: "DekatMic Podcast", program: "bersama Financial Faiz" },
  { id: "mlstudios", type: "podcast", outlet: "ML Studios" },
  { id: "kopiahterbang", type: "podcast", outlet: "Sembang Kopiah Terbang", program: "bersama PU Amin & PU Rahmat" },
  { id: "kitabincang", type: "podcast", outlet: "Kita Bincang Podcast" },
  { id: "borakopi", type: "podcast", outlet: "Borakopi Podcast" },
  { id: "hiviral", type: "podcast", outlet: "Hi Viral Podcast" },
  { id: "sociowara", type: "podcast", outlet: "Podcast Sociowara", program: "UiTM Shah Alam" },
  { id: "verbatim", type: "podcast", outlet: "Podcast Verbatim", program: "UPSI" },
  { id: "ruangjiwa", type: "podcast", outlet: "Podcast Ruang Jiwa", program: "UKM" },
  { id: "hmetro", type: "akhbar", outlet: "Harian Metro", program: "Artikel & pandangan pakar", note: "Sumbangan artikel dan pandangan tentang isu kesihatan mental." },
  { id: "bernama", type: "akhbar", outlet: "Bernama", program: "Artikel", note: "Sumbangan artikel tentang kesihatan mental." },
];

export const mediaTypeLabels: Record<MediaType, string> = {
  tv: "Televisyen",
  radio: "Radio",
  podcast: "Podcast",
  akhbar: "Akhbar",
};

/* ----------------------------------------------------------- speaking --- */

export const institutions = {
  education: [
    "Universiti Sains Islam Malaysia (USIM), Nilai",
    "Universiti Teknologi MARA (UiTM)",
    "Universiti Teknikal Malaysia Melaka (UTeM)",
    "UIA Pagoh",
    "Kolej Tunku Kurshiah (TKC)",
    "Universiti Tun Hussein Onn Malaysia (UTHM)",
    "Universiti Pendidikan Sultan Idris (UPSI)",
    "Universiti Utara Malaysia (UUM)",
    "Universiti Kuala Lumpur (UniKL)",
    "MRSM",
    "Pelbagai sekolah & organisasi pendidikan",
  ],
  organisations: [
    "Majlis Perbandaran Pengerang",
    "Tenaga Switchgear",
    "KWSP Muar",
    "Penjara Muar",
    "IPPTAR",
    "Parker Hannifin Aerospace",
    "Jabatan Pembangunan Kemahiran KESUMA",
  ],
};

/** Headline numbers, counted from the invitation record (src/content/engagements.ts). */
const countBy = (f: (e: (typeof engagements)[number]) => boolean) => engagements.filter(f).length;
const years = engagements.map((e) => e.year);
export const engagementSpan = `${Math.min(...years)}-${Math.max(...years)}`;
export const stats = [
  { value: engagements.length, suffix: "", label: `Jemputan program (${engagementSpan})` },
  { value: countBy((e) => e.role === "Penceramah"), suffix: "", label: "Sesi ceramah" },
  { value: countBy((e) => e.category === "media"), suffix: "", label: "TV, radio, podcast & akhbar" },
  { value: countBy((e) => e.category === "pendidikan"), suffix: "", label: "Universiti, kolej & sekolah" },
];

export const speaking = {
  heading: "Jom Jemput Dr Azren Berceramah!",
  subheading: "Ilmu Yang Bermakna, Disampaikan Dengan Santai.",
  body: "Kesihatan mental bukan topik yang perlu dibincangkan secara terlalu formal. Saya percaya pendekatan yang mesra, interaktif dan dekat dengan kehidupan mampu menjadikan perkongsian lebih mudah difahami dan diingati.",
  bubble: "Ada Program? Jom Kita Bincang!",
  formats: [
    "Ceramah korporat",
    "Ceramah universiti",
    "Kesedaran kesihatan mental di sekolah",
    "Forum kesihatan mental",
    "Program kesejahteraan pekerja",
    "Pendidikan komuniti",
    "Bengkel & sesi interaktif",
  ],
  topics: [
    { title: "Stress dan Burnout", blurb: "Kenal tanda awal sebelum badan dan minda ‘padam’." },
    { title: "Anxiety dan Depression", blurb: "Fahami perbezaan, mitos dan bila perlu dapatkan bantuan." },
    { title: "Pengurusan Emosi", blurb: "Emosi bukan musuh — jom belajar mengurusnya." },
    { title: "Resilience", blurb: "Membina daya tahan untuk hadapi cabaran hidup." },
    { title: "Kesihatan Mental Remaja", blurb: "Untuk pelajar, ibu bapa dan pendidik." },
    { title: "Mental Health at Workplace", blurb: "Tempat kerja yang sihat bermula dengan perbualan." },
    { title: "Self-Care dan Kesejahteraan Mental", blurb: "Penjagaan diri yang realistik dan mampan." },
    { title: "Hubungan dan Komunikasi Sihat", blurb: "Berkomunikasi dengan empati, dalam keluarga dan kerjaya." },
  ],
  cta: "Jemput Dr Azren Berceramah",
};

/* --------------------------------------------------------------- book --- */

export const book = {
  title: "Dr, Saya Boleh Sembuh Ke?",
  subtitle: "Manual Survival Kesihatan Mental.",
  tagline: "Satu Soalan. Seribu Perasaan.",
  author: "Dr Azren",
  publisher: "Whitecoat",
  year: "2026",
  achievement: "No. 1 Top Bestseller · PBAKL 2026",
  achievementNote: "Tempat pertama dalam senarai Top 10 Bestseller Whitecoat Books di PBAKL 2026.",
  description:
    "Ada persoalan yang sukar diluahkan. Ada perasaan yang dipendam terlalu lama. Melalui buku ini, saya mengajak pembaca mengenali kesihatan mental dengan lebih dekat, memahami perjuangan emosi dan membuka ruang kepada harapan.",
  themes: ["Memahami Emosi", "Melawan Stigma", "Mencari Harapan", "Kenali Diri"],
  /** Topics printed on the genuine front cover */
  coverTopics: ["OCD", "Depression", "Addiction", "Anxiety", "ADHD", "Bipolar", "Schizophrenia", "PTSD", "Personality Disorder"],
  /** Front, spine and back are cut from the genuine print file (DSBSK_WC_Print_FA_001.pdf). */
  cover: {
    src: "book-cover",
    alt: "Kulit hadapan buku Dr, Saya Boleh Sembuh Ke? Manual Survival Kesihatan Mental oleh Dr Azren",
    width: 1471,
    height: 2091,
  } satisfies Photo,
  spine: { src: "book-spine", alt: "Tulang buku Dr, Saya Boleh Sembuh Ke?", width: 155, height: 2091 } satisfies Photo,
  back: {
    src: "book-back",
    alt: "Kulit belakang buku Dr, Saya Boleh Sembuh Ke? dengan sinopsis dan ISBN 978-967-2705-70-3",
    width: 1472,
    height: 2091,
  } satisfies Photo,
  /** 3D renders made from the print file (scripts/render_book.py), transparent background */
  render: {
    src: "book-3d",
    alt: "Ilustrasi 3D buku Dr, Saya Boleh Sembuh Ke? menunjukkan kulit hadapan dan tulang buku",
    width: 1600,
    height: 1985,
  } satisfies Photo,
  shelfPhoto: {
    src: "book-shelf",
    alt: "Naskhah buku Dr, Saya Boleh Sembuh Ke? tersusun di rak paparan",
    width: 941,
    height: 1672,
  } satisfies Photo,
  /** Official Whitecoat Books graphic: Top 10 Bestseller PBAKL */
  pbaklList: {
    src: "pbakl-top10",
    alt: "Senarai Top 10 Bestseller PBAKL oleh Whitecoat Books, dengan Dr, Saya Boleh Sembuh Ke? di tempat pertama",
    width: 1599,
    height: 2000,
  } satisfies Photo,
  photo: {
    src: "book-stack",
    alt: "Beberapa naskhah buku Dr, Saya Boleh Sembuh Ke? tersusun di atas meja",
    width: 563,
    height: 1000,
  } satisfies Photo,
  cta: "Dapatkan Buku Sekarang",
};

/* -------------------------------------------------------------- booth --- */

export const booth = {
  heading: "Booth Saringan Kesihatan Mental Untuk Program Anda.",
  body: "Sedang merancang karnival, program kesejahteraan pekerja atau hari kesihatan? Jom jadikan kesedaran kesihatan mental sebahagian daripada pengalaman peserta.",
  occasions: ["Karnival & hari terbuka", "Hari kesihatan", "Program kesejahteraan pekerja", "Program universiti & komuniti"],
  features: [
    { title: "Saringan ringkas", body: "Soal selidik saringan untuk membantu peserta mengenal pasti tanda-tanda awal." },
    { title: "Ruang bertanya", body: "Peserta boleh bertanya secara santai dan tanpa rasa dihakimi." },
    { title: "Kesedaran & ilmu", body: "Perkongsian ringkas tentang kesihatan mental dan penjagaan diri." },
    { title: "Langkah seterusnya", body: "Panduan tentang pilihan bantuan profesional jika diperlukan." },
  ],
  disclaimer:
    "Saringan kesihatan mental ialah alat untuk mengenal pasti keperluan penilaian lanjut — ia BUKAN diagnosis. Diagnosis hanya boleh dibuat melalui penilaian klinikal penuh oleh profesional kesihatan.",
  cta: "Jemput Booth Saringan",
};

/* ------------------------------------------------------- consultation --- */

export const consultation = {
  heading: "Tak Perlu Tunggu Sampai Terlalu Berat.",
  subheading: "Konsultasi, Saringan & Rawatan Kesihatan Mental.",
  body: "Setiap orang melalui cabaran emosi yang berbeza. Jika gejala mula mengganggu kehidupan harian, mendapatkan penilaian profesional boleh menjadi salah satu langkah untuk memahami keadaan diri dan pilihan bantuan yang sesuai.",
  clinic: "Klinik Nissa",
  /** Clinic address — shown in the section and used in search data. */
  location: "Klinik Nissa, 9697, Ground Floor, Jalan BBN 1/3C, Pusat Bandar Putra Point, 71800 Nilai, Negeri Sembilan",
  address: {
    streetAddress: "9697, Ground Floor, Jalan BBN 1/3C, Pusat Bandar Putra Point",
    postalCode: "71800",
    addressLocality: "Nilai",
    addressRegion: "Negeri Sembilan",
    addressCountry: "MY",
  },
  services: [
    "Konsultasi Kesihatan Mental",
    "Saringan Kesihatan Mental",
    "Penilaian Klinikal",
    "Perbincangan Pilihan Rawatan",
    "Rawatan dan Susulan Mengikut Keperluan",
  ],
  steps: [
    { title: "Tempah Slot", body: "Pilih tarikh dan masa melalui sistem tempahan rasmi Klinik Nissa." },
    { title: "Hadir Untuk Konsultasi", body: "Kita sembang dengan tenang — ceritakan apa yang anda lalui." },
    { title: "Bincangkan Pelan Rawatan", body: "Kita bincangkan pilihan yang sesuai, bersama-sama." },
  ],
  note: "Setiap individu berbeza. Konsultasi membantu memahami keadaan anda dan pilihan bantuan — tiada janji hasil tertentu. Sila jangan kongsi maklumat kesihatan sensitif melalui media sosial atau WhatsApp.",
  cta: "Tempah Konsultasi Bersama Dr Azren",
};

/* ------------------------------------------------------ collaboration --- */

export const collaboration = {
  heading: "Ada Idea Menarik? Jom Kolaborasi!",
  body: "Saya sentiasa terbuka untuk projek dan kerjasama yang membawa mesej positif serta meningkatkan kesedaran tentang kesihatan mental.",
  cards: [
    { title: "Podcast", body: "Sembang santai tentang jiwa, emosi dan kehidupan.", icon: "mic" },
    { title: "Media Interview", body: "Temu bual TV, radio, akhbar atau portal berita.", icon: "camera" },
    { title: "Social Media Campaign", body: "Kempen kesedaran yang dekat dengan audiens digital.", icon: "phone" },
    { title: "Creative Digital Content", body: "Video, siri edukasi dan kandungan kreatif.", icon: "spark" },
    { title: "Corporate Collaboration", body: "Inisiatif kesejahteraan untuk organisasi anda.", icon: "building" },
    { title: "NGO & Community Initiatives", body: "Program komuniti yang membawa impak.", icon: "heart" },
  ],
  cta: "Jom Bincang Kolaborasi",
};

/* ------------------------------------------------------------- social --- */

/**
 * ONLY verified profiles. Instagram @fakrulazren was confirmed by Dr Azren;
 * TikTok @drazrennotes links back to beacons.ai/spreadpositivity in its bio.
 * To add Facebook / Threads / YouTube, add an entry with the exact profile URL.
 */
export const socials = [
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@fakrulazren",
    url: "https://www.instagram.com/fakrulazren/",
    blurb: "Momen program, ceramah dan di sebalik tabir.",
  },
  {
    id: "tiktok",
    platform: "TikTok",
    handle: "@drazrennotes",
    url: "https://www.tiktok.com/@drazrennotes",
    blurb: "Video pendek edukasi kesihatan mental — santai dan mudah faham.",
  },
  {
    id: "beacons",
    platform: "Beacons",
    handle: "spreadpositivity",
    url: links.beacons,
    blurb: "Semua pautan rasmi Dr Azren di satu tempat.",
  },
] as const;

/** Verified TikTok videos (checked via TikTok's official oEmbed). */
export const tiktokVideos = [
  {
    id: "7463790735075101970",
    title: "Panduan Ringkas Cara Jumpa Doktor Psikiatri",
    url: "https://www.tiktok.com/@drazrennotes/video/7463790735075101970",
    thumbnail: { src: "tiktok-7463790735075101970", alt: "Video TikTok: Panduan Cara Nak Jumpa Doktor Psikiatri", width: 1080, height: 1920 },
  },
  {
    id: "7458168402947869970",
    title: "Popcorn Brain",
    url: "https://www.tiktok.com/@drazrennotes/video/7458168402947869970",
    thumbnail: { src: "tiktok-7458168402947869970", alt: "Video TikTok: Popcorn Brain", width: 1080, height: 1920 },
  },
  {
    id: "7386490804673547541",
    title: "Gambaran Keadaan di Dalam Wad Psikiatri di Malaysia",
    url: "https://www.tiktok.com/@drazrennotes/video/7386490804673547541",
    thumbnail: { src: "tiktok-7386490804673547541", alt: "Video TikTok: Gambaran dalam Wad Psikiatri di Malaysia", width: 1080, height: 1920 },
  },
] satisfies { id: string; title: string; url: string; thumbnail: Photo }[];

/* ----------------------------------------------------------- timeline --- */

export const journey = [
  {
    year: "2009–2010",
    title: "MRSM Taiping",
    place: "SPM",
    body: "Di sinilah langkah awal perjalanan akademik saya bermula.",
  },
  {
    year: "2011",
    title: "Asasi Sains, Universiti Malaya",
    place: "Foundation Studies in Science",
    body: "Setahun asasi sains — persediaan sebelum melangkah ke dunia perubatan.",
  },
  {
    year: "2013–2018",
    title: "Doctor of Medicine (MD)",
    place: "Universiti Sains Malaysia · USM-KLE IMP, India",
    body: "Belajar ilmu perubatan — dan belajar bahawa di sebalik setiap pesakit, ada sebuah cerita.",
  },
  {
    year: "2019–2021",
    title: "Pegawai Perubatan Siswazah (House Officer)",
    place: "Hospital Tuanku Jaafar, Seremban",
    body: "Latihan siswazah di hospital — fasa yang membentuk asas kerja klinikal saya.",
  },
  {
    year: "2021",
    title: "Pendaftaran Penuh Majlis Perubatan Malaysia",
    place: "No. Pendaftaran MMC 90486",
    body: "Pendaftaran penuh sejak Januari 2021, dengan Sijil Amalan Tahunan (APC) sejak Jun 2021.",
  },
  {
    year: "2021–2022",
    title: "Pegawai Perubatan",
    place: "Hospital Tuanku Jaafar, Seremban",
    body: "Meneruskan khidmat sebagai Pegawai Perubatan di hospital yang sama.",
  },
  {
    year: "2022–2025",
    title: "Pegawai Perubatan",
    place: "Hospital Pakar Sultanah Fatimah, Muar",
    body: "Jun 2022 hingga Julai 2025 — sambil aktif berkongsi ilmu kesihatan mental kepada masyarakat.",
  },
  {
    year: "2026",
    title: "Penulis & Panel Forum",
    place: "PBAKL 2026 · UTM Royal Intellectual Forum 2026",
    body: "“Dr, Saya Boleh Sembuh Ke?” menjadi No. 1 Top Bestseller di PBAKL 2026, dan saya dijemput sebagai panel Forum Intelektual Diraja UTM 2026.",
    image: book.cover,
  },
  {
    year: "Kini",
    title: "Pengasas & Doktor Residen, Klinik Nissa",
    place: "Amalan Am, Psikiatri & Kesihatan Mental",
    body: "Merawat di klinik, sambil terus menulis, berceramah, muncul di media dan menyokong NGO — Empati, Krayon and Society dan KaiaKlas Educare.",
    image: profile.portraitFormal,
  },
] satisfies { year: string; title: string; place: string; body: string; image?: Photo }[];

/* ------------------------------------------------------------ gallery --- */

export const galleryCategories: { id: GalleryCategory | "semua"; label: string }[] = [
  { id: "semua", label: "Semua Program" },
  { id: "forum", label: "Forum & Ceramah" },
  { id: "pendidikan", label: "Universiti & Sekolah" },
  { id: "korporat", label: "Korporat & Organisasi" },
  { id: "media", label: "Media & Podcast" },
  { id: "buku", label: "Buku & PBAKL" },
  { id: "saringan", label: "Saringan Komuniti" },
];

/**
 * Add a new event at the TOP of this list and it appears automatically in
 * the gallery under every category listed in `categories`.
 * Events without `image` are shown as styled posters until a photo is added.
 */
export const programEvents: ProgramEvent[] = [
  {
    id: "buku-naskhah",
    title: "Dr, Saya Boleh Sembuh Ke?",
    organizer: "Whitecoat",
    year: "2026",
    categories: ["buku"],
    caption: "Naskhah “Dr, Saya Boleh Sembuh Ke?” — manual survival kesihatan mental yang menjawab persoalan dan menangkis mitos.",
    image: book.photo,
    featured: true,
  },
  {
    id: "utm-royal-forum-2026",
    title: "UTM Royal Intellectual Forum 2026",
    organizer: "Universiti Teknologi Malaysia",
    year: "2026",
    categories: ["forum", "pendidikan"],
    caption: "Dijemput sebagai ahli panel di Forum Intelektual Diraja UTM 2026.",
  },
  {
    id: "pbakl-2026",
    title: "Top 10 Bestseller PBAKL",
    organizer: "Whitecoat Books",
    year: "2026",
    categories: ["buku"],
    caption: "Senarai rasmi Top 10 Bestseller Whitecoat Books di PBAKL 2026, dengan “Dr, Saya Boleh Sembuh Ke?” di tempat pertama.",
    image: book.pbaklList,
    featured: true,
  },
  {
    id: "buku-rak",
    title: "Dr, Saya Boleh Sembuh Ke?",
    organizer: "Whitecoat Books",
    year: "2026",
    categories: ["buku"],
    caption: "Naskhah fizikal “Dr, Saya Boleh Sembuh Ke?” di rak paparan.",
    image: book.shelfPhoto,
    featured: true,
  },
  {
    id: "saringan-tempat-kerja",
    title: "Ceramah & Saringan di Tempat Kerja",
    organizer: "Pelbagai organisasi & institusi",
    categories: ["saringan", "korporat"],
    caption:
      "Ceramah dan saringan kesihatan mental di tempat kerja dan institusi seperti Majlis Perbandaran Pengerang, Tenaga Switchgear, KWSP Muar, Penjara Muar, IPPTAR, Parker Hannifin Aerospace dan Jabatan Pembangunan Kemahiran KESUMA.",
  },
  {
    id: "usim",
    title: "Program Kesihatan Mental",
    organizer: "Universiti Sains Islam Malaysia (USIM), Nilai",
    year: "2025",
    categories: ["pendidikan", "forum"],
    caption: "Perkongsian kesihatan mental bersama warga universiti.",
  },
  {
    id: "majlis-perbandaran-pengerang",
    title: "Program Kesihatan Mental",
    organizer: "Majlis Perbandaran Pengerang",
    year: "2025",
    categories: ["korporat"],
    caption: "Program kesihatan mental bersama warga organisasi.",
  },
  {
    id: "uitm",
    title: "Program Kesihatan Mental",
    organizer: "Universiti Teknologi MARA (UiTM)",
    categories: ["pendidikan", "forum"],
    caption: "Perkongsian kesihatan mental bersama warga universiti.",
  },
  {
    id: "tenaga-switchgear",
    title: "Program Kesihatan Mental",
    organizer: "Tenaga Switchgear",
    year: "2025",
    categories: ["korporat"],
    caption: "Program kesihatan mental bersama warga organisasi.",
  },
  {
    id: "tkc",
    title: "Program Kesihatan Mental",
    organizer: "Kolej Tunku Kurshiah (TKC)",
    categories: ["pendidikan"],
    caption: "Perkongsian kesihatan mental bersama warga kolej.",
  },
  {
    id: "kwsp-muar",
    title: "Program Kesihatan Mental",
    organizer: "KWSP Muar",
    year: "2024",
    categories: ["korporat"],
    caption: "Program kesihatan mental bersama warga organisasi.",
  },
  {
    id: "upsi",
    title: "Program Kesihatan Mental",
    organizer: "Universiti Pendidikan Sultan Idris (UPSI)",
    year: "2024",
    categories: ["pendidikan", "forum"],
    caption: "Perkongsian kesihatan mental bersama warga universiti.",
  },
  {
    id: "ipptar",
    title: "Program Kesihatan Mental",
    organizer: "IPPTAR",
    year: "2024",
    categories: ["korporat"],
    caption: "Program kesihatan mental bersama warga institusi.",
  },
  {
    id: "parker-hannifin",
    title: "Program Kesihatan Mental",
    organizer: "Parker Hannifin Aerospace",
    year: "2024",
    categories: ["korporat"],
    caption: "Program kesihatan mental bersama warga organisasi.",
  },
  {
    id: "uum",
    title: "Program Kesihatan Mental",
    organizer: "Universiti Utara Malaysia (UUM)",
    year: "2024",
    categories: ["pendidikan", "forum"],
    caption: "Perkongsian kesihatan mental bersama warga universiti.",
  },
];

/* ---------------------------------------------------------- navigation -- */

export const navItems = [
  { id: "utama", label: "Utama" },
  { id: "kenali", label: "Kenali Saya" },
  { id: "pencapaian", label: "Pencapaian" },
  { id: "galeri", label: "Galeri Program" },
  { id: "buku", label: "Buku Saya" },
  { id: "ceramah", label: "Jemputan Ceramah" },
  { id: "booth", label: "Booth Saringan" },
  { id: "konsultasi", label: "Konsultasi" },
  { id: "kolaborasi", label: "Kolaborasi" },
  { id: "media-sosial", label: "Media Sosial" },
] as const;

/* ----------------------------------------------------------------- seo -- */

export const seo = {
  title: "Dr Azren | Penceramah, Penulis & Doktor Kesihatan Mental",
  description:
    "Kenali Dr Azren, penulis buku Dr, Saya Boleh Sembuh Ke? Terokai pencapaian, program ceramah, media, konsultasi kesihatan mental dan peluang kolaborasi.",
  keywords: [
    "Dr Azren",
    "Dr Fakrul Azren",
    "Dr Saya Boleh Sembuh Ke",
    "Penceramah Kesihatan Mental Malaysia",
    "Ceramah Kesihatan Mental",
    "Mental Health Speaker Malaysia",
    "Booth Saringan Kesihatan Mental",
    "Konsultasi Kesihatan Mental Nilai",
    "Doktor Kesihatan Mental Nilai",
    "Klinik Nissa Nilai",
    "Spread Positivity",
  ],
  /**
   * Production URL. Set NEXT_PUBLIC_SITE_URL when deploying (e.g. https://www.drazren.com).
   * On Vercel the production domain is detected automatically.
   */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
};
