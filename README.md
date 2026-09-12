# 🚀 Ajay Maulana – Backend & Software Engineer Portfolio

Website portofolio modern berestetika tinggi (*Cyber Dark Engineering Aesthetic*) yang dirancang khusus untuk menonjolkan profil **Ajay Maulana** sebagai Backend & Software Engineer, mencakup keahlian **FastAPI, Express.js, Laravel, React, Vue, Microservices**, serta integrasi **Google Gemini AI**.

Website ini dibangun menggunakan **React (Vite)** dan sudah dikonfigurasi 100% siap di-deploy secara instan ke **Vercel**.

---

## ✨ Fitur & Keunggulan

1. **Interactive REST API Terminal**:
   - Simulator console API interaktif di Hero section. Pengunjung/recruiter dapat menguji endpoint `/api/v1/profile`, `/api/v1/skills`, `/api/v1/projects`, dan `/api/v1/hire-ajay` secara live dengan syntax highlighted JSON dan indikator latensi real-time.
2. **Rekam Jejak Magang Industri**:
   - Timeline interaktif pengalaman di **PT. Gama Integra Informatika** (Proyek Klinik Kecantikan & Kursi Roda).
3. **Showcase Proyek Lengkap dengan Modal Detail**:
   - **Cek Review** (Gemini AI + React + Node.js - Analisis Keluhan Tokopedia)
   - **Fintrack** (Microservices Financial Tracker - Node.js + Express + Next.js)
   - **CleanVid** (Android Kotlin - YouTube Spam Judi Online Guard)
   - **Beauty Clinic Core API** (FastAPI, Express.js & PostgreSQL)
   - Disertai modal popup arsitektur sistem, tantangan yang diselesaikan, dan tautan GitHub.
4. **Matriks Keahlian Lengkap**:
   - Backend: Python (FastAPI), Node.js, Express.js, PHP (Laravel), Kotlin.
   - Frontend: React.js, Vue.js, Next.js, Modern CSS3 & HTML5.
   - Database: PostgreSQL, MySQL, Relational Modeling, Object Storage.
   - AI & DevOps: Google Gemini AI, Docker, Git, Postman, REST Architecture.
5. **Pendidikan & Prestasi Akademik**:
   - Sarjana Komputer (S1) Sistem Informasi, **Universitas Teknologi Yogyakarta (GPA 3.74 / 4.00)**.
6. **Direct Connect**:
   - Tombol cepat chat WhatsApp, salin email, dan interactive contact form.

---

## 💻 Menjalankan di Komputer Lokal

Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal di komputer Anda.

1. **Buka terminal** di folder proyek ini:
   ```bash
   cd d:\Projek\web_portofolio
   ```

2. **Jalankan local development server**:
   ```bash
   npm run dev
   ```

3. Buka browser dan akses alamat yang tertera (biasanya `http://localhost:5173`).

4. **Uji Build Production**:
   ```bash
   npm run build
   ```
   Folder `dist/` akan otomatis terbuat tanpa error dalam hitungan milidetik.

---

## ☁️ Panduan Deploy ke Vercel

Website ini sudah dilengkapi file `vercel.json` sehingga proses deploy ke Vercel sangat mudah.

### Cara 1: Deploy Otomatis via GitHub (Sangat Disarankan)

1. Buat repositori baru di akun GitHub Anda (misal: `web-portofolio`).
2. Di folder proyek lokal, inisialisasi git dan push ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit modern portfolio website"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/web-portofolio.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
4. Klik tombol **"Add New..."** > **"Project"**.
5. Pilih repositori `web-portofolio` yang baru saja Anda push.
6. Vercel akan secara otomatis mendeteksi framework **Vite** dan pengaturan build:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Klik **"Deploy"**! Dalam 30 detik website portofolio Anda sudah online dengan domain `https://nama-proyek.vercel.app` (dan HTTPS gratis).

---

### Cara 2: Deploy Cepat via Vercel CLI

Jika Anda ingin deploy langsung dari terminal tanpa push ke GitHub terlebih dahulu:

1. Instal Vercel CLI global:
   ```bash
   npm install -g vercel
   ```
2. Jalankan perintah:
   ```bash
   vercel
   ```
3. Ikuti panduan singkat di terminal (tekan Enter untuk opsi default).
4. Untuk deploy ke production:
   ```bash
   vercel --prod
   ```

---

## 📝 Cara Mengubah Data Portofolio

Seluruh data portofolio dirancang terpusat (*Single Source of Truth*). Anda cukup mengedit satu file:
- **`src/data/portfolioData.js`**: Untuk mengubah info kontak, link GitHub/LinkedIn, deskripsi proyek, pengalaman kerja, atau menambah skill baru.
- **`src/data/apiMockData.js`**: Untuk menambah atau mengubah respon simulasi terminal API.

---

Dikembangkan dengan dedikasi untuk **Ajay Maulana** | Siap Mendunia bersama Vercel.
