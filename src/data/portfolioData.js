export const personalInfo = {
  name: "Ajay Maulana",
  title: "IT Support & Backend Developer",
  tagline: "IT Support & Backend Developer di Jakarta.",
  bio: "Lulusan S1 Sistem Informasi Universitas Teknologi Yogyakarta dengan IPK 3,74 dan lulusan SMK Teknik Komputer dan Jaringan. Memiliki pengalaman magang sebagai backend developer yang merangkap juga sebagai system analyst di PT Gama Integra Informatika, serta beberapa proyek mandiri di bidang pengembangan aplikasi.\n\nSaya juga memiliki kemampuan dalam hal troubleshooting hardware, software, konfigurasi server Linux, dan konfigurasi jaringan MikroTik.",
  email: "ajaymaulana2224@gmail.com",
  whatsappUrl: "https://wa.me/6281254192373?text=Halo%20Ajay,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",
  location: "Jakarta, Indonesia",
  education: {
    institution: "Universitas Teknologi Yogyakarta",
    location: "Yogyakarta, Indonesia",
    degree: "Sarjana Komputer (S.Kom)",
    major: "Sistem Informasi",
    period: "Sep 2022 – Jun 2026",
    gpa: "3.74",
    maxGpa: "4.00",
    status: "Lulus"
  },
  educations: [
    {
      institution: "Universitas Teknologi Yogyakarta",
      location: "Yogyakarta, Indonesia",
      degree: "Sarjana Komputer (S.Kom)",
      major: "Sistem Informasi",
      period: "Sep 2022 – Jun 2026",
      gpa: "3.74",
      maxGpa: "4.00",
      status: "Lulus",
      detail: null
    },
    {
      institution: "SMKN 2 Tamiang Layang",
      location: "Tamiang Layang, Indonesia",
      degree: "Sekolah Menengah Kejuruan (SMK)",
      major: "Teknik Komputer dan Jaringan",
      period: "Lulus 2022",
      gpa: null,
      maxGpa: null,
      status: "Lulus",
      detail: "Nilai ijazah: 85.83."
    }
  ],
  socials: {
    github: "https://github.com/justajay224",
    linkedin: "https://www.linkedin.com/in/ajay-maulana-b036612a7/",
    email: "mailto:ajaymaulana2224@gmail.com"
  }
};

export const experiences = [
  {
    id: "gama-integra-2",
    company: "PT Gama Integra Informatika",
    location: "Yogyakarta",
    role: "Programmer Internship — Backend Developer / System Analyst",
    project: "Proyek Pengembangan Aplikasi Klinik Kecantikan",
    period: "Sep 2025 – Jan 2026",
    status: "Completed",
    description: "Membangun total 144 API, merancang arsitektur sistem dan membangun layanan backend untuk modul medis dan visualisasi analitik.",
    contributions: [
      "Membangun total 144 API untuk modul medis, manajemen file object, dan visualisasi analitik.",
      "Merancang arsitektur sistem, termasuk flowchart, katalog relasi data, serta standarisasi rancangan path API.",
      "Mengembangkan API service menggunakan FastAPI untuk manajemen file object dan service report untuk mengolah data laporan menjadi visualisasi chart analitik.",
      "Membangun service API untuk modul dokter mulai dari alur appointment pasien, konsultasi, hingga resep digital menggunakan Express.js.",
      "Menyelesaikan seluruh target dan deliverables proyek tepat waktu dengan standar kode produksi."
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "PostgreSQL", "REST API", "Chart Analytics"]
  },
  {
    id: "gama-integra-1",
    company: "PT Gama Integra Informatika",
    location: "Yogyakarta",
    role: "Programmer Internship — Backend Developer / System Analyst",
    project: "Proyek Pengembangan Aplikasi Penyewaan Kursi Roda",
    period: "Feb 2025 – Jun 2025",
    status: "Completed",
    description: "Membangun total 136 API, mengembangkan API service backend, manajemen penyimpanan berkas, dan struktur data katalog inventaris sewa.",
    contributions: [
      "Membangun total 136 API untuk katalog inventaris, transaksi sewa, dan pengelolaan file object.",
      "Mengembangkan API service menggunakan FastAPI untuk mengelola file object dan dokumen digital.",
      "Merancang struktur katalog data inventaris serta spesifikasi path API.",
      "Membuat endpoint API menggunakan Express.js untuk transaksi dan katalog produk.",
      "Bekerja sama dalam tim pengembang dan menuntaskan semua target sprint sebelum batas tenggat waktu."
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "MySQL", "REST API", "Object Storage"]
  }
];

export const projects = [
  {
    id: "cek-review",
    projectType: "personal",
    title: "Cek Review — Analisis Keluhan E-Commerce Berbasis AI",
    categoryLabel: "Proyek Mandiri",
    badge: "AI & Fullstack (Gemini AI)",
    year: "2026",
    isConfidential: false,
    shortDesc: "Aplikasi analitik web terintegrasi Gemini AI untuk ekstraksi keluhan pelanggan Tokopedia, pengelompokan masalah berbasis AI, peringatan tingkat risiko, dan ekspor ke CSV.",
    fullDesc: "Aplikasi analitik berbasis web yang mengotomasi pemrosesan ulasan pembeli e-commerce Tokopedia. Dengan Google Gemini AI, sistem mengelompokkan masalah ke dalam kategori relevan (kualitas produk, kurir pengiriman, lambatnya respons layanan), menghitung skor risiko, serta mendukung ekspor data terstruktur ke CSV.",
    problemSolved: "Penjual dan tim customer service kewalahan menyortir ribuan ulasan manual sehingga keluhan berisiko tinggi sering terlambat ditangani dan menurunkan rating toko.",
    architecture: "Frontend React mengirim data ulasan ke backend Node.js & Express.js. Backend memproses data melalui Gemini AI NLP pipeline dengan prompt engineering terstruktur sebelum disimpan dan diekspor ke CSV.",
    features: [
      "Otomatisasi ekstraksi keluhan pelanggan Tokopedia dari dataset ulasan",
      "Pengelompokan masalah berbasis Gemini AI (Produk, Pengiriman, Pelayanan)",
      "Peringatan tingkat risiko otomatis (Low, Medium, High Risk)",
      "Ekspor data keluhan terstruktur ke CSV",
      "Antarmuka analitik web interaktif & responsif dengan React"
    ],
    techStack: ["Google Gemini AI", "React", "Node.js", "Express.js", "REST API", "CSV Export"],
    githubUrl: "https://github.com/justajay224/Cek_Review",
    liveDemoUrl: null,
    images: ["/images/cekreview-gambar1.png", "/images/cekreview-gambar2.png"]
  },
  {
    id: "fintrack",
    projectType: "personal",
    title: "Fintrack — Pencatatan Keuangan Berbasis Microservices",
    categoryLabel: "Proyek Mandiri",
    badge: "Microservices Architecture",
    year: "2025",
    isConfidential: false,
    shortDesc: "Sistem pencatatan keuangan berbasis Microservices dengan dashboard real-time, manajemen transaksi, dan pelaporan keuangan.",
    fullDesc: "Sistem pencatatan dan tata kelola keuangan multi-akun di atas arsitektur Microservices terdistribusi. Setiap modul (autentikasi, pencatatan transaksi arus kas, generator pelaporan analitis) dipisahkan menjadi service mandiri untuk skalabilitas.",
    problemSolved: "Sistem monolitik finansial rentan down dan lambat saat lonjakan transaksi simultan serta sulit di-maintain per modul bisnis.",
    architecture: "Microservices backend dengan Node.js & Express.js, database PostgreSQL, dan frontend Next.js untuk dashboard real-time.",
    features: [
      "Arsitektur Microservices independen (Auth, Transaction, Reporting)",
      "Dashboard real-time analitik pemasukan dan pengeluaran",
      "Manajemen transaksi multi-kategori dan multi-akun",
      "Ekstraksi pelaporan data keuangan periodik",
      "Keamanan berbasis token JWT dan role-based authorization"
    ],
    techStack: ["Node.js", "Express.js", "Next.js", "Microservices", "PostgreSQL", "JWT", "Docker"],
    githubUrl: "https://github.com/justajay224/FinTrack",
    liveDemoUrl: null,
    images: ["/images/fintrack-gambar1.png", "/images/fintrack-gambar2.png"]
  },
  {
    id: "cleanvid",
    projectType: "personal",
    title: "CleanVid — Anti-Spam Judi Online di YouTube",
    categoryLabel: "Proyek Mandiri",
    badge: "Android (Kotlin) & Security",
    year: "2025",
    isConfidential: false,
    shortDesc: "Aplikasi Android berbasis rule-based filtering untuk mendeteksi dan membersihkan spam komentar judi online di YouTube, dengan fast-cleaning, pembersihan berbasis URL, login Google, dan ekspor CSV.",
    fullDesc: "Aplikasi mobile Android untuk membasmi spam komentar judi online pada channel YouTube. Menggunakan rule-based filtering yang mendeteksi pola teks terselubung dan variasi link URL berbahaya, didukung Google OAuth untuk eksekusi pembersihan komentar massal.",
    problemSolved: "Bot spam judi online di kolom komentar YouTube merusak kredibilitas kreator dan berisiko membahayakan penonton.",
    architecture: "Aplikasi Android native dengan Kotlin, berkomunikasi langsung dengan YouTube Data API v3, Google OAuth 2.0, dan mesin filter regex.",
    features: [
      "Rule-based filtering untuk teks dan tautan spam judi online",
      "Fast-Cleaning untuk pembersihan massal",
      "Pembersihan otomatis berbasis URL dan domain blacklist",
      "Autentikasi melalui Google OAuth 2.0",
      "Ekspor riwayat komentar yang dibersihkan ke CSV"
    ],
    techStack: ["Kotlin", "Android SDK", "YouTube Data API v3", "Google OAuth 2.0", "Rule-Based Engine", "CSV"],
    githubUrl: "https://github.com/justajay224/cleanvid",
    liveDemoUrl: null,
    images: ["/images/cleanvid-gambar1.png", "/images/cleanvid-gambar2.png"]
  },
  {
    id: "clinic-app",
    projectType: "company",
    company: "PT Gama Integra Informatika",
    title: "Aplikasi Klinik Kecantikan (Medical & Appointment System)",
    categoryLabel: "Proyek Magang / Perusahaan",
    badge: "Enterprise System (NDA)",
    year: "2025 – 2026",
    isConfidential: true,
    confidentialNote: "Source code bersifat rahasia perusahaan (Enterprise NDA / Internal PT Gama Integra Informatika). Portofolio hanya menampilkan dokumentasi arsitektur sistem, modul fitur, dan tangkapan layar yang telah disetujui.",
    shortDesc: "Membangun total 144 API. Merancang arsitektur sistem, flowchart, katalog data, rancangan path API, API service FastAPI pengelolaan file object, service report visualisasi chart, dan service API modul dokter (appointment hingga resep) Express.js.",
    fullDesc: "Platform medis terintegrasi untuk klinik kecantikan yang mencakup alur pelayanan pasien dari pendaftaran janji temu (appointment), konsultasi dokter, pencatatan resep digital, hingga penyimpanan file object rekam medis dan pelaporan berbasis chart. Total 144 API dibangun untuk modul medis, file object, dan analitik.",
    problemSolved: "Klinik membutuhkan pemrosesan berkas foto pasien dan dokumen medis berukuran besar yang cepat dan terisolasi tanpa memperlambat sistem pendaftaran dan jadwal dokter.",
    architecture: "FastAPI untuk pemrosesan file object dan reporting analitik, sedangkan Express.js menangani alur transaksi bisnis dokter dan janji temu pasien pada PostgreSQL.",
    features: [
      "Membangun total 144 API untuk modul medis, file object, dan analitik",
      "Perancangan arsitektur sistem, flowchart, dan katalog data terstruktur",
      "Rancangan spesifikasi dan standarisasi path API",
      "API service FastAPI untuk manajemen file object",
      "Service report analitik menjadi visualisasi chart",
      "Service API modul dokter Express.js (appointment hingga resep digital)"
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "PostgreSQL", "Chart Reporting", "File Object Storage"],
    githubUrl: null,
    liveDemoUrl: null,
    images: ["/images/magang2-gambar1.png", "/images/magang2-gambar2.png"]
  },
  {
    id: "wheelchair-app",
    projectType: "company",
    company: "PT Gama Integra Informatika",
    title: "Aplikasi Penyewaan Kursi Roda",
    categoryLabel: "Proyek Magang / Perusahaan",
    badge: "Enterprise System (NDA)",
    year: "2025",
    isConfidential: true,
    confidentialNote: "Source code bersifat rahasia perusahaan (Enterprise NDA / Internal PT Gama Integra Informatika). Portofolio hanya menampilkan dokumentasi arsitektur teknis dan tangkapan layar yang diizinkan.",
    shortDesc: "Membangun total 136 API. Mengembangkan API service FastAPI untuk mengelola file object, merancang struktur data katalog dan path API, serta membuat endpoint API Express.js.",
    fullDesc: "Sistem aplikasi penyewaan kursi roda dan alat bantu medis yang menangani katalog inventaris, pengelolaan file dokumen penyewa dan bukti verifikasi, serta endpoint API pemesanan dan pelacakan status sewa. Total 136 API dibangun untuk katalog, transaksi, dan file object.",
    problemSolved: "Otomasi pencatatan inventaris alat medis dan pengelolaan dokumen fisik penyewa menjadi file digital yang aman dan cepat diakses.",
    architecture: "Backend terstruktur dengan FastAPI untuk pengelolaan berkas dokumen digital, dan Express.js untuk endpoint transaksi katalog sewa pada MySQL.",
    features: [
      "Membangun total 136 API untuk katalog, transaksi sewa, dan file object",
      "API service FastAPI untuk mengelola file object",
      "Perancangan struktur data katalog inventaris kursi roda dan path API",
      "Endpoint API Express.js untuk katalog dan transaksi sewa"
    ],
    techStack: ["FastAPI", "Python", "Express.js", "Node.js", "MySQL", "REST API", "Object Storage"],
    githubUrl: null,
    liveDemoUrl: null,
    images: ["/images/magang1-gambar1.png", "/images/magang1-gambar2.png"]
  },
  {
    id: "packet-tracer-office",
    projectType: "personal",
    title: "Simulasi Jaringan Kantor (Cisco Packet Tracer)",
    categoryLabel: "Proyek Mandiri — Simulasi Jaringan",
    badge: "Cisco Packet Tracer",
    year: "2026",
    isConfidential: false,
    shortDesc: "Simulasi topologi jaringan kantor dengan segmen HRD, Finance, dan IT, jaringan WiFi tamu yang terpisah, konfigurasi DHCP, serta ACL untuk membatasi akses antar segmen.",
    fullDesc: "Simulasi jaringan kantor yang dibangun di Cisco Packet Tracer. Topologi memisahkan segmen HRD, Finance, dan IT, ditambah jaringan WiFi tamu yang terpisah. Pengujian dilakukan dengan Complex PDU untuk memverifikasi perilaku ACL dan isolasi antar segmen.",
    problemSolved: "Jaringan kantor perlu memisahkan akses antar divisi dan mengisolasi perangkat tamu agar tidak dapat mengakses PC internal, sambil tetap menyediakan DHCP dan akses yang dibutuhkan tiap segmen.",
    architecture: "Router utama terhubung ke switch tiap segmen (HRD, Finance, IT). WiFi tamu melalui WRT300N dengan SSID Guest_kantor dan gateway 192.168.4.1, klien tamu memperoleh IP via DHCP. ACL diterapkan untuk membatasi akses antar segmen.",
    features: [
      "Topologi kantor dengan segmen HRD, Finance, dan IT",
      "Jaringan WiFi tamu terpisah (SSID Guest_kantor, gateway 192.168.4.1, DHCP)",
      "Konfigurasi DHCP untuk klien tiap segmen",
      "ACL untuk membatasi akses antar segmen — diuji dengan Complex PDU (HTTP IT ke server Finance terblokir)",
      "Catatan isolasi: pada pengujian awal, laptop tamu masih dapat ping ke PC HRD karena WRT300N terhubung ke switch HRD — temuan ini didokumentasikan sebagai bahan perbaikan topologi"
    ],
    techStack: ["Cisco Packet Tracer", "DHCP", "ACL", "WRT300N", "Jaringan Dasar"],
    githubUrl: null,
    liveDemoUrl: null,
    // NOTE: Cisco / Packet Tracer screenshot will be added later. No image file in repo yet — do not invent an image path.
    images: []
  },
  {
    id: "mikrotik-network",
    projectType: "personal",
    title: "Konfigurasi Jaringan MikroTik",
    categoryLabel: "Proyek Mandiri — IT Support",
    badge: "MikroTik / RouterOS",
    year: "2026",
    isConfidential: false,
    shortDesc: "Konfigurasi dasar–menengah perangkat jaringan MikroTik meliputi pengaturan IP Address, DHCP, NAT, Firewall, Routing, VLAN, dan VPN, serta troubleshooting perangkat komputer, laptop, printer, dan koneksi jaringan.",
    fullDesc: "Praktik mandiri konfigurasi jaringan dengan perangkat MikroTik pada level dasar–menengah. Mencakup pengaturan IP Address, DHCP, NAT, Firewall, Routing, VLAN, dan VPN, serta troubleshooting perangkat komputer, laptop, printer, dan koneksi jaringan. Teks saja — tanpa screenshot.",
    problemSolved: "Jaringan kecil perlu konfigurasi dasar yang benar — alamat IP, DHCP, NAT, dan firewall — agar perangkat dapat terhubung dengan aman, serta troubleshooting cepat saat komputer, printer, atau koneksi bermasalah.",
    architecture: "Perangkat MikroTik (RouterOS) sebagai router utama. Konfigurasi dilakukan bertahap: IP Address, DHCP, NAT, Firewall, Routing, VLAN, dan VPN, lalu diuji dengan koneksi perangkat dan troubleshooting saat ada gangguan.",
    features: [
      "Pengaturan IP Address dan DHCP",
      "Konfigurasi NAT dan Firewall dasar–menengah",
      "Routing, VLAN, dan VPN",
      "Troubleshooting komputer, laptop, printer, dan koneksi jaringan"
    ],
    techStack: ["MikroTik", "RouterOS", "DHCP", "NAT", "Firewall", "Routing", "VLAN", "VPN"],
    githubUrl: null,
    liveDemoUrl: null,
    // NOTE: No screenshot for this project. Text only — do not invent an image path.
    images: []
  },
  {
    id: "linux-server-ubuntu",
    projectType: "personal",
    title: "Server Linux (Ubuntu)",
    categoryLabel: "Proyek Mandiri — IT Support",
    badge: "Linux / Ubuntu",
    year: "2026",
    isConfidential: false,
    shortDesc: "Server Ubuntu lokal di VirtualBox, diakses via Tailscale dengan SSH dibatasi ke IP tertentu, menggunakan PuTTY sebagai SSH client. Mencakup pengelolaan user, service dasar, dan akses remote yang aman.",
    fullDesc: "Server Ubuntu yang berjalan lokal di VirtualBox, diakses dari jarak jauh via Tailscale dengan SSH dibatasi ke IP tertentu, menggunakan PuTTY sebagai SSH client. Mencakup pengelolaan user, service dasar, dan akses remote yang aman. Server ini lokal / VirtualBox — bukan VPS / cloud — dan tidak dikelola oleh Hermes (pengelolaan via Hermes adalah rencana masa depan yang belum dilakukan). Teks saja — tanpa screenshot.",
    problemSolved: "Perlu server lokal untuk belajar pengelolaan sistem: user, service, dan akses remote yang aman tanpa biaya VPS / cloud.",
    architecture: "Ubuntu di VirtualBox lokal. Akses remote via Tailscale, SSH dibatasi ke IP tertentu, client menggunakan PuTTY. Pengelolaan mencakup user dan service dasar.",
    features: [
      "Server Ubuntu lokal di VirtualBox — bukan VPS / cloud",
      "Akses remote via Tailscale, SSH dibatasi ke IP tertentu",
      "SSH client menggunakan PuTTY",
      "Pengelolaan user dan service dasar"
    ],
    techStack: ["Linux (Ubuntu)", "VirtualBox", "Tailscale", "SSH", "PuTTY"],
    githubUrl: null,
    liveDemoUrl: null,
    // NOTE: No screenshot for this project. Text only — do not invent an image path.
    images: []
  }
];

export const skillCategories = [
  {
    category: "IT Support",
    description: "Fokus utama: troubleshooting, Linux, dan jaringan dasar. Praktik mandiri dan latar SMK TKJ. Tanpa screenshot — keterampilan teks saja, bukan kartu proyek.",
    skills: [
      { name: "Troubleshooting Hardware & Software", tag: "PC, laptop, printer, IP conflict" },
      { name: "Linux Dasar (Ubuntu)", tag: "Instalasi, user, service dasar, konfigurasi server" },
      { name: "Jaringan Dasar", tag: "Mikrotik — IP, DHCP, NAT, Firewall dasar" },
      { name: "Dokumentasi", tag: "Laporan & dokumentasi teknis" }
    ]
  },
  {
    category: "Backend Development",
    description: "Arsitektur server, REST API, dan microservices.",
    skills: [
      { name: "FastAPI", tag: "Python" },
      { name: "Express.js", tag: "Node.js" },
      { name: "Node.js", tag: "JavaScript" },
      { name: "Laravel", tag: "PHP" },
      { name: "Python", tag: "Language" },
      { name: "Kotlin", tag: "Android" }
    ]
  },
  {
    category: "Frontend Development",
    description: "Antarmuka interaktif dan responsif.",
    skills: [
      { name: "React.js", tag: "Component-based" },
      { name: "Vue.js", tag: "Reactive UI" },
      { name: "Next.js", tag: "React Framework" },
      { name: "HTML / CSS", tag: "Styling" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Skema data, integritas relasional, dan file storage.",
    skills: [
      { name: "PostgreSQL", tag: "Relational DB" },
      { name: "MySQL", tag: "Relational DB" },
      { name: "Redis", tag: "In-Memory" },
      { name: "Object Storage", tag: "File Services" },
      { name: "Data Modeling", tag: "Architecture" }
    ]
  },
  {
    category: "AI, Tools & DevOps",
    description: "Integrasi AI, containerization, dan version control.",
    skills: [
      { name: "Google Gemini AI", tag: "AI Integration" },
      { name: "Docker", tag: "Containers" },
      { name: "Postman", tag: "API Testing" },
      { name: "Git / GitHub / GitLab", tag: "VCS" },
      { name: "REST Architecture", tag: "System Design" }
    ]
  }
];

export const certifications = [
  { name: "Cisco Dasar", issuer: "ID-Networkers", year: "2026" },
  { name: "Jaringan Dasar", issuer: "ID-Networkers", year: "2026" },
  { name: "Uji Kompetensi TKJ SMK", issuer: "SMK — Sangat Kompeten, nilai 99", year: "2022" },
  { name: "Kali Linux Basics", issuer: "Simplilearn", year: "2026" },
  { name: "Introduction to Data Analytics", issuer: "Simplilearn", year: "2026" },
  { name: "SQL Intermediate", issuer: "HackerRank", year: "2023" },
  { name: "Dasar-Dasar Python", issuer: "BISA.AI", year: "2026" },
  { name: "Excel for Business", issuer: "Simplilearn", year: "2026" },
  { name: "Data Engineering Professional", issuer: "RapidMiner Academy", year: "2024" },
  { name: "Menerapkan Rekayasa Prompt dengan Azure OpenAI Service", issuer: "Micro Skill — Digital Talent Scholarship 2025 (Komdigi)", year: "2025" }
];
