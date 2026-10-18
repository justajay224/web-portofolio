# Ajay Maulana – IT Support & Backend Developer Portfolio

Website portofolio **Ajay Maulana** dengan gaya *Light Clean Professional* (referensi: Maximilian Kaspar via SiteInspire — kategori Portfolio + Minimal): background putih/off-white, teks navy, satu aksen biru tua. Tipografi Plus Jakarta Sans. Tanpa gradient, tanpa glassmorphism, tanpa glow — bersih dan tidak terlihat seperti template AI.

**Live:** https://web-portofolio-indol-five.vercel.app

---

## Isi Website

- **Hero** — nama besar + tagline satu kalimat, dengan animasi background titik-titik melayang halus (full-page, sebagian biru, ringan dan subtle).
- **Tentang** — profil singkat: lulusan S1 Sistem Informasi UTY (IPK 3,74) dan SMK Teknik Komputer dan Jaringan; pengalaman magang backend + kemampuan IT support.
- **Pengalaman** — 2x magang di PT Gama Integra Informatika sebagai Backend Developer merangkap System Analyst (aplikasi penyewaan kursi roda: 136 API; aplikasi klinik kecantikan: 144 API).
- **Proyek yang pernah dibuat** — 8 proyek: 6 mandiri (Cek Review, Fintrack, CleanVid, Simulasi Jaringan Kantor dengan Cisco Packet Tracer + screenshot topologi, Konfigurasi Jaringan MikroTik, Server Linux Ubuntu) dan 2 proyek magang (NDA).
- **Keahlian** — IT Support (troubleshooting hardware/software, Linux, jaringan MikroTik), Backend, Frontend, Database, AI/Tools.
- **Sertifikasi** — 10 sertifikat (Cisco, jaringan dasar, UKK TKJ, Kali Linux, Data Analytics, SQL HackerRank, Python, Excel for Business, Data Engineering RapidMiner, Azure OpenAI Service Komdigi).
- **Pendidikan** — S1 Sistem Informasi Universitas Teknologi Yogyakarta (2022–2026, IPK 3.74) dan SMK Teknik Komputer dan Jaringan (SMKN 2 Tamiang Layang, lulus 2022).
- **Kontak** — tombol Email (mailto), WhatsApp, LinkedIn, GitHub. Nomor HP tidak ditampilkan sebagai teks.

---

## Menjalankan di Komputer Lokal

Pastikan [Node.js](https://nodejs.org/) terinstal.

```bash
cd web-portofolio
npm install
npm run dev
```

Buka alamat yang tertera di terminal (biasanya `http://localhost:5173`).

Uji build production:

```bash
npm run build
```

---

## Deploy ke Vercel

Repository ini sudah terhubung ke Vercel (file `vercel.json` tersedia) — setiap push/merge ke branch `main` otomatis ter-deploy ke production. Tidak perlu pengaturan tambahan.

---

## Cara Mengubah Data Portofolio

Seluruh data terpusat (*single source of truth*) di **`src/data/portfolioData.js`** — info kontak, link GitHub/LinkedIn, deskripsi proyek, pengalaman kerja, skill, sertifikasi, dan pendidikan. Ubah file itu saja, lalu commit.

---

Dibuat untuk **Ajay Maulana** — IT Support & Backend Developer, Jakarta.
