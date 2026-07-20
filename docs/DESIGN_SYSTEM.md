# Dokumentasi Sistem Desain (Design System)

Dokumen ini merangkum dasar visual, token tema, dan konfigurasi styling untuk website portofolio David Rahmadana menggunakan Tailwind CSS v4.

---

## 🎨 Sistem Warna (Color Palette)

Tema ini dirancang dengan basis warna premium **Slate/Zinc** yang dinamis dan aksen warna modern yang mendukung **Mode Gelap (Dark Mode)** secara penuh.

### 1. Warna Dasar & Komponen (shadcn/ui)

| Token CSS      | Light Mode (OKLCH)      | Dark Mode (OKLCH)       | Kegunaan                                |
| :------------- | :---------------------- | :---------------------- | :-------------------------------------- |
| `--background` | `oklch(0.99 0.003 240)` | `oklch(0.12 0.012 240)` | Warna latar belakang utama aplikasi     |
| `--foreground` | `oklch(0.15 0.01 240)`  | `oklch(0.97 0.005 240)` | Warna teks utama                        |
| `--card`       | `oklch(1 0 0)`          | `oklch(0.16 0.012 240)` | Latar belakang kartu / penampung konten |
| `--border`     | `oklch(0.9 0.005 240)`  | `oklch(0.22 0.015 240)` | Warna garis pembatas / border           |
| `--ring`       | `oklch(0.65 0.02 240)`  | `oklch(0.45 0.03 240)`  | Warna fokus outline / ring              |

### 2. Aksen Warna Brand (Brand Accents)

Dapat digunakan menggunakan class Tailwind seperti `bg-brand-primary`, `text-brand-secondary`, dll.

- **Brand Primary (Indigo)**:
  - Light Mode: `var(--brand-primary)` -> `oklch(0.52 0.19 260)`
  - Dark Mode: `var(--brand-primary)` -> `oklch(0.68 0.16 250)`
- **Brand Secondary (Emerald)**:
  - Light Mode: `var(--brand-secondary)` -> `oklch(0.62 0.16 160)`
  - Dark Mode: `var(--brand-secondary)` -> `oklch(0.76 0.13 160)`
- **Brand Accent (Violet)**:
  - Light Mode: `var(--brand-accent)` -> `oklch(0.56 0.21 290)`
  - Dark Mode: `var(--brand-accent)` -> `oklch(0.72 0.18 285)`

---

## ✍️ Tipografi (Typography)

Sistem tipografi menggunakan font modern **Geist** dari Vercel:

- **Sans (Heading & Body)**: Geist Sans (`font-sans`)
- **Mono (Kode/Keterangan Teknis)**: Geist Mono (`font-mono`)

---

## 📐 Spacing & Radius

- **Radius Sudut (Border Radius)**:
  - Default radius didefinisikan menggunakan `--radius: 0.5rem` (`8px`).
  - Skala radius yang tersedia:
    - `rounded-sm` -> `calc(var(--radius) * 0.6)`
    - `rounded-md` -> `calc(var(--radius) * 0.8)`
    - `rounded-lg` -> `var(--radius)`
    - `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- **Spacing**: Mengikuti skala default Tailwind CSS v4 yang sudah dioptimalkan untuk responsivitas layout.

---

## 🎬 Animasi & Transisi (Transitions & Animations)

Token transisi disediakan agar interaksi UI terasa halus dan tidak mengganggu performa:

- **Durasi Transisi**:
  - Fast: `150ms` (untuk hover efek, tombol)
  - Normal: `300ms` (untuk transisi tema/halaman dasar)
  - Slow: `500ms` (untuk efek transisi masuk yang lebih kompleks)
- **Animasi Kustom**:
  - `animate-fade-in` (`fade-in 0.2s ease-out`)
  - `animate-slide-up` (`slide-up 0.3s cubic-bezier(...)`)
  - `animate-slide-down` (`slide-down 0.3s cubic-bezier(...)`)
