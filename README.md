# David Rahmadana - Portfolio Website

Proyek ini adalah fondasi situs portofolio personal David Gholi Rahmadana, dibangun menggunakan **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, dan **App Router**. Proyek ini dirancang agar memiliki arsitektur yang bersih, skalabel, dan siap untuk produksi (production-ready).

---

## 🛠️ Tech Stack & Dependencies

- **Core Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) (Base UI)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting & Formatting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

---

## 📁 Struktur Folder

Proyek ini menggunakan struktur folder modular yang bersih untuk pengembangan jangka panjang:

```text
davidrahmadana.dev/
├── app/                  # Route handlers, layouts, pages, & global styles
│   ├── globals.css       # File stylesheet global utama
│   ├── layout.tsx        # Layout utama aplikasi
│   └── page.tsx          # Halaman depan (home) default
├── components/           # Komponen UI global reusable
│   └── ui/               # Komponen shadcn/ui (e.g. Button)
├── hooks/                # Custom React hooks
├── lib/                  # Fungsi utilitas global dan integrasi API
├── types/                # Definisi type & interface TypeScript
├── constants/            # Nilai konstanta dan konfigurasi global
├── data/                 # Data statis (e.g. project list, experience info)
├── styles/               # Aset style/tema tambahan jika dibutuhkan
├── docs/                 # Dokumentasi internal proyek
├── public/               # File aset statis (images, icons, dll.)
├── .prettierrc           # Konfigurasi Prettier
├── tsconfig.json         # Konfigurasi TypeScript
├── next.config.ts        # Konfigurasi Next.js
└── eslint.config.mjs     # Konfigurasi ESLint (Flat Config)
```

---

## 🚀 Perintah Pengembangan

Gunakan perintah-perintah berikut untuk berinteraksi dengan proyek:

| Perintah               | Deskripsi                                                    |
| :--------------------- | :----------------------------------------------------------- |
| `npm run dev`          | Menjalankan local development server dengan Turbopack        |
| `npm run build`        | Melakukan build produksi yang dioptimalkan                   |
| `npm run start`        | Menjalankan server hasil build produksi secara lokal         |
| `npm run lint`         | Melakukan pengecekan error kode menggunakan ESLint           |
| `npm run format`       | Merapikan format file kode menggunakan Prettier              |
| `npm run format:check` | Memeriksa apakah file kode sudah rapi sesuai aturan Prettier |

---

## 📦 Langkah Instalasi Awal

Ikuti langkah berikut untuk memulai development secara lokal:

1. **Clone repositori**:

   ```bash
   git clone <repository-url>
   cd davidrahmadana.dev
   ```

2. **Instal dependensi**:

   ```bash
   npm install
   ```

3. **Jalankan server lokal**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan pada alamat: [http://localhost:3000](http://localhost:3000)
