export const personalInfo = {
  name: "Ajay Maulana",
  nickname: "Ajay",
  title: "Backend & Software Engineer",
  badge: "Available for Opportunities",
  tagline: "Membangun Sistem dan Dukungan Teknis Berperforma Tinggi & Solusi Terintegrasi.",
  bio: "Lulusan Sistem Informasi dengan pengalaman sebagai backend developer. Saya berpengalaman dalam membuat API menggunakan FastAPI dan Express.js berbasis arsitektur microservices. Saya juga memiliki kemampuan praktis dalam troubleshooting perangkat keras (PC dan printer) secara mandiri. Saya adaptif, bisa menempatkan diri, dan dapat bekerja dengan tim maupun mandiri.",
  email: "ajaymaulana2224@gmail.com",
  phone: "081254192373",
  whatsappUrl: "https://wa.me/6281254192373?text=Halo%20Ajay,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
  location: "Jakarta, Indonesia",
  birthDate: "15 April 2004",
  education: {
    institution: "Universitas Teknologi Yogyakarta",
    location: "Yogyakarta, Indonesia",
    degree: "Sarjana Komputer (S.Kom)",
    major: "Sistem Informasi",
    period: "Sep 2022 – Jun 2026",
    gpa: "3.74",
    maxGpa: "4.00",
    status: "Lulus (Sarjana Komputer)"
  },
  socials: {
    github: "https://github.com/justajay224",
    email: "mailto:ajaymaulana2224@gmail.com"
  }
};

export const stats = [
  { value: "3.74", label: "IPK / GPA", highlight: "Skala 4.00 (Cum Laude)" },
  { value: "2+", label: "Pengalaman Magang", highlight: "PT. Gama Integra Informatika" },
  { value: "3", label: "Proyek Mandiri Unggulan", highlight: "AI, Microservices, Android" },
  { value: "100%", label: "Tepat Waktu", highlight: "On-Time Project Delivery" }
];

export const experiences = [
  {
    id: "gama-integra-2",
    company: "PT. GAMA INTEGRA INFORMATIKA",
    location: "Yogyakarta",
    role: "Programmer Internship",
    project: "Proyek Pengembangan Aplikasi Klinik Kecantikan",
    period: "Sep 2025 – Jan 2026",
    status: "Completed",
    description: "Bertanggung jawab dalam perancangan arsitektur sistem menyeluruh serta pembangunan layanan backend untuk modul medis dan visualisasi analitik.",
    contributions: [
      "Merancang arsitektur sistem menyeluruh, termasuk flowchart interaktif, katalog relasi data, serta standarisasi rancangan path API.",
      "Mengembangkan API service menggunakan FastAPI untuk manajemen file object performa tinggi dan service report untuk mengolah data laporan menjadi visualisasi chart analitik.",
      "Membangun service API untuk modul dokter mulai dari alur appointment pasien, konsultasi, hingga resep digital menggunakan Express.js.",
      "Menyelesaikan seluruh target dan deliverables proyek tepat waktu dengan standar kode produksi."
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "PostgreSQL", "REST API", "Chart Analytics"]
  },
  {
    id: "gama-integra-1",
    company: "PT. GAMA INTEGRA INFORMATIKA",
    location: "Yogyakarta",
    role: "Programmer Internship",
    project: "Proyek Pengembangan Aplikasi Penyewaan Kursi Roda",
    period: "Feb 2025 – Jun 2025",
    status: "Completed",
    description: "Fokus pada pengembangan API service backend, manajemen penyimpanan berkas, dan struktur data katalog inventaris sewa.",
    contributions: [
      "Mengembangkan API service menggunakan FastAPI untuk mengelola file object dan dokumen digital secara efisien.",
      "Merancang struktur katalog data inventaris serta spesifikasi path API terstandarisasi.",
      "Membuat endpoint API berkecepatan tinggi menggunakan Express.js untuk transaksi dan katalog produk.",
      "Bekerja sama dalam tim pengembang dan menuntaskan semua target sprint sebelum batas tenggat waktu."
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "MySQL", "REST API", "Object Storage"]
  }
];

export const projects = [
  // ==========================================
  // 1. PROYEK MANDIRI (Personal Projects)
  // ==========================================
  {
    id: "cek-review",
    projectType: "personal",
    title: "Cek Review – Sistem Analisis Keluhan E-Commerce Berbasis AI",
    categoryLabel: "Proyek Mandiri",
    badge: "AI & Fullstack (Gemini AI)",
    isConfidential: false,
    shortDesc: "Aplikasi analitik web terintegrasi Gemini AI menggunakan React, Express, dan Node.js untuk otomatisasi ekstraksi keluhan pelanggan Tokopedia, mencakup fitur pengelompokan masalah berbasis AI, peringatan tingkat risiko, dan ekspor data keluhan ke CSV.",
    fullDesc: "Aplikasi analitik berbasis web yang mengotomasi pemrosesan ulasan pembeli e-commerce Tokopedia dalam skala besar. Dengan memanfaatkan kapabilitas Google Gemini AI, sistem ini secara otomatis mengelompokkan masalah ke dalam kategori relevan (kualitas produk, kurir pengiriman, lambatnya respons layanan), menghitung skor risiko (Risk Severity Alert), serta mendukung ekspor data terstruktur ke format CSV.",
    problemSolved: "Penjual dan tim customer service sering kewalahan menyortir ribuan ulasan ulasan manual sehingga keluhan berisiko tinggi sering terlambat ditangani dan menurunkan rating toko.",
    architecture: "Frontend React mengirimkan data ulasan ke backend Node.js & Express.js. Backend kemudian memproses data melalui Gemini AI NLP pipeline dengan prompt engineering terstruktur sebelum disimpan dan diekspor ke file CSV.",
    features: [
      "Otomatisasi ekstraksi keluhan pelanggan Tokopedia dari dataset ulasan",
      "Pengelompokan masalah cerdas berbasis Gemini AI (Produk, Pengiriman, Pelayanan)",
      "Peringatan tingkat risiko otomatis (Low, Medium, High Risk)",
      "Fitur ekspor data keluhan terstruktur langsung ke format CSV",
      "Antarmuka analitik web interaktif & responsif dibangun dengan React"
    ],
    techStack: ["Google Gemini AI", "React", "Node.js", "Express.js", "REST API", "CSV Export"],
    githubUrl: "https://github.com/justajay224/Cek_Review",
    liveDemoUrl: null,
    images: [
      "/images/cekreview-gambar1.png",
      "/images/cekreview-gambar2.png"
    ]
  },
  {
    id: "fintrack",
    projectType: "personal",
    title: "Fintrack – Sistem Pencatatan Keuangan Berbasis Microservices",
    categoryLabel: "Proyek Mandiri",
    badge: "Microservices Architecture",
    isConfidential: false,
    shortDesc: "Sistem pencatatan keuangan berbasis Microservices menggunakan Node.js, Express.js, dan Next.js yang mencakup fitur dashboard real-time, manajemen transaksi, serta ekstraksi pelaporan data keuangan.",
    fullDesc: "Sistem pencatatan dan tata kelola keuangan multi-akun yang dibangun di atas arsitektur Microservices terdistribusi. Setiap modul (autentikasi pengguna, pencatatan transaksi arus kas, dan modul generator pelaporan analitis) dipisahkan menjadi service mandiri untuk skalabilitas dan keandalan maksimal.",
    problemSolved: "Sistem monolitik finansial rentan down dan lambat saat terjadi lonjakan transaksi simultan serta sulit di-maintain per modul bisnis.",
    architecture: "Microservices backend terdistribusi didukung Node.js & Express.js, database relasional PostgreSQL, dan frontend terintegrasi Next.js untuk pengalaman dashboard real-time.",
    features: [
      "Arsitektur Microservices independen (Auth Service, Transaction Service, Reporting Service)",
      "Dashboard real-time analitik pemasukan dan pengeluaran finansial",
      "Manajemen transaksi multi-kategori dan multi-akun",
      "Ekstraksi pelaporan data keuangan periodik multi-format",
      "Sistem keamanan berbasis token JWT dan role-based authorization"
    ],
    techStack: ["Node.js", "Express.js", "Next.js", "Microservices", "PostgreSQL", "JWT", "Docker"],
    githubUrl: "https://github.com/justajay224/FinTrack",
    liveDemoUrl: null,
    images: [
      "/images/fintrack-gambar1.png",
      "/images/fintrack-gambar2.png"
    ]
  },
  {
    id: "cleanvid",
    projectType: "personal",
    title: "CleanVid – Aplikasi Anti-Spam Judi Online di YouTube",
    categoryLabel: "Proyek Mandiri",
    badge: "Android (Kotlin) & Security",
    isConfidential: false,
    shortDesc: "Aplikasi Android berbasis rule-based filtering untuk mendeteksi dan membersihkan spam komentar judi online di YouTube, yang dilengkapi dengan fitur fast-cleaning, pembersihan berbasis URL, autentikasi login Google, dan ekspor data komentar ke format CSV.",
    fullDesc: "Aplikasi mobile Android yang dirancang khusus untuk membasmi maraknya spam komentar judi online pada channel YouTube. Menggunakan algoritma rule-based filtering cerdas yang mendeteksi pola teks terselubung dan variasi link URL berbahaya, didukung integrasi Google OAuth resmi untuk eksekusi pembersihan komentar massal.",
    problemSolved: "Maraknya bot spam judi online di kolom komentar YouTube yang merusak kredibilitas kreator dan berisiko membahayakan penonton.",
    architecture: "Aplikasi Android native menggunakan bahasa Kotlin, berkomunikasi langsung dengan YouTube Data API v3, Google OAuth 2.0 untuk otorisasi aman, dan mesin filter regex cerdas.",
    features: [
      "Rule-based filtering canggih untuk mendeteksi teks dan tautan spam judi online",
      "Fitur Fast-Cleaning untuk pembersihan massal dalam hitungan detik",
      "Pembersihan otomatis berbasis URL dan domain yang terdaftar dalam blacklist",
      "Autentikasi resmi dan aman melalui Google OAuth 2.0",
      "Ekspor riwayat data komentar yang dibersihkan ke format CSV sebagai bukti audit"
    ],
    techStack: ["Kotlin", "Android SDK", "YouTube Data API v3", "Google OAuth 2.0", "Rule-Based Engine", "CSV"],
    githubUrl: "https://github.com/justajay224/cleanvid",
    liveDemoUrl: null,
    images: [
      "/images/cleanvid-gambar1.png",
      "/images/cleanvid-gambar2.png"
    ]
  },

  // ==========================================
  // 2. PROYEK MAGANG / COMPANY (PT. Gama Integra)
  // ==========================================
  {
    id: "clinic-app",
    projectType: "company",
    company: "PT. GAMA INTEGRA INFORMATIKA",
    title: "Aplikasi Klinik Kecantikan (Medical & Appointment System)",
    categoryLabel: "Proyek Magang / Perusahaan",
    badge: "Enterprise System (NDA)",
    isConfidential: true,
    confidentialNote: "Source code bersifat rahasia perusahaan (Enterprise NDA / Internal PT. Gama Integra Informatika). Portofolio hanya menampilkan dokumentasi arsitektur sistem, modul fitur, dan tangkapan layar yang telah disetujui.",
    shortDesc: "Merancang arsitektur sistem, flowchart, data katalog, rancangan path API, API service FastAPI pengelolaan file object, service report visualisasi chart, dan service API modul dokter (appointment hingga resep) Express.js.",
    fullDesc: "Platform medis terintegrasi untuk klinik kecantikan skala enterprise yang mencakup alur pelayanan pasien dari pendaftaran janji temu (appointment), konsultasi dokter, pencatatan resep digital, hingga penyimpanan file object rekam medis berkecepatan tinggi dan pelaporan pendapatan berbasis visualisasi chart.",
    problemSolved: "Klinik membutuhkan pemrosesan berkas foto pasien dan dokumen medis berukuran besar yang cepat dan terisolasi tanpa memperlambat sistem operasional pendaftaran dan jadwal dokter.",
    architecture: "FastAPI dimanfaatkan untuk pemrosesan file object dan reporting analitik dengan performa asinkron tinggi, sedangkan Express.js menangani alur transaksi bisnis dokter dan janji temu pasien pada basis data PostgreSQL.",
    features: [
      "Perancangan arsitektur sistem menyeluruh, flowchart proses, dan data katalog terstruktur",
      "Rancangan spesifikasi dan standarisasi path API terpadu",
      "API service menggunakan FastAPI untuk manajemen file object performa tinggi",
      "Service report analitik untuk mengolah data laporan menjadi visualisasi chart informatif",
      "Service API modul dokter menggunakan Express.js (alur appointment hingga resep digital)",
      "Penyelesaian 100% seluruh target tugas sebelum batas tenggat waktu proyek"
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "PostgreSQL", "Chart Reporting", "File Object Storage"],
    githubUrl: null,
    liveDemoUrl: null,
    images: [
      "/images/magang2-gambar1.png",
      "/images/magang2-gambar2.png"
    ]
  },
  {
    id: "wheelchair-app",
    projectType: "company",
    company: "PT. GAMA INTEGRA INFORMATIKA",
    title: "Aplikasi Penyewaan Kursi Roda",
    categoryLabel: "Proyek Magang / Perusahaan",
    badge: "Enterprise System (NDA)",
    isConfidential: true,
    confidentialNote: "Source code bersifat rahasia perusahaan (Enterprise NDA / Internal PT. Gama Integra Informatika). Portofolio hanya menampilkan dokumentasi arsitektur teknis dan tangkapan layar yang diizinkan.",
    shortDesc: "Mengembangkan API service menggunakan FastAPI untuk mengelola file object, merancang struktur data katalog dan path API, serta membuat endpoint API menggunakan Express.js.",
    fullDesc: "Sistem aplikasi penyewaan kursi roda dan alat bantu medis yang menangani katalog inventaris terdistribusi, pengelolaan file dokumen penyewa dan bukti verifikasi, serta endpoint API pemesanan dan pelacakan status sewa.",
    problemSolved: "Otomasi pencatatan inventaris alat medis dan pengelolaan dokumen fisik penyewa menjadi file digital yang aman dan cepat diakses.",
    architecture: "Layanan backend terstruktur dengan FastAPI untuk pengelolaan berkas dokumen digital, dan Express.js untuk endpoint transaksi katalog sewa pada database MySQL.",
    features: [
      "Pengembangan API service menggunakan FastAPI untuk mengelola file object secara efisien",
      "Perancangan struktur data katalog inventaris kursi roda dan path API terstandarisasi",
      "Pembuatan endpoint API cepat menggunakan Express.js untuk katalog dan transaksi sewa",
      "Penyelesaian seluruh tugas dan target sprint sebelum tenggat waktu proyek"
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "MySQL", "REST API", "Object Storage"],
    githubUrl: null,
    liveDemoUrl: null,
    images: [
      "/images/magang1-gambar1.png",
      "/images/magang1-gambar2.png"
    ]
  }
];

export const skillCategories = [
  {
    category: "Backend Development",
    description: "Teknologi inti untuk arsitektur server, REST API, dan microservices.",
    skills: [
      { name: "FastAPI", tag: "Python", icon: "Zap" },
      { name: "Express.js", tag: "Node.js", icon: "Server" },
      { name: "Node.js", tag: "JavaScript", icon: "Cpu" },
      { name: "Laravel", tag: "PHP", icon: "Layers" },
      { name: "Python", tag: "Language", icon: "Code" },
      { name: "Kotlin", tag: "Android", icon: "Smartphone" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Membangun antarmuka interaktif, responsif, dan kaya fitur.",
    skills: [
      { name: "React.js", tag: "Component-based", icon: "Layout" },
      { name: "Vue.js", tag: "Reactive UI", icon: "Eye" },
      { name: "Next.js", tag: "React Framework", icon: "Globe" },
      { name: "Modern CSS / HTML5", tag: "Styling & A11y", icon: "Palette" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Perancangan skema data efisien, integritas relasional, dan file storage.",
    skills: [
      { name: "PostgreSQL", tag: "Relational DB", icon: "Database" },
      { name: "MySQL", tag: "Relational DB", icon: "HardDrive" },
      { name: "Redis (Token)", tag: "In-Memory / Token", icon: "Key" },
      { name: "Object Storage", tag: "File Services", icon: "FolderArchive" },
      { name: "Data Modeling", tag: "Architecture", icon: "Network" }
    ]
  },
  {
    category: "AI, Tools & DevOps",
    description: "Integrasi machine intelligence, containerization, dan version control.",
    skills: [
      { name: "Google Gemini AI", tag: "AI Integration", icon: "Sparkles" },
      { name: "Docker", tag: "Containers", icon: "Box" },
      { name: "Postman", tag: "API Testing", icon: "CheckCircle2" },
      { name: "Git / GitHub / GitLab", tag: "VCS & CI/CD", icon: "GitBranch" },
      { name: "RESTful Architecture", tag: "System Design", icon: "Share2" }
    ]
  }
];
