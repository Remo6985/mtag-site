import {
  Tag,
  Barcode,
  PlugsConnected,
  TrendUp,
  ShieldCheck,
  ChartBar,
  Cloud,
  DeviceMobile,
  Scan,
  SealCheck,
  List,
  CaretRight,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";

const NAV = [
  { href: "#masalah", label: "Masalah" },
  { href: "#solusi", label: "Solusi" },
  { href: "#produk", label: "Produk" },
  { href: "#pasar", label: "Pasar" },
  { href: "#tim", label: "Tim" },
];

const PROBLEMS = [
  {
    icon: Barcode,
    title: "Pemalsuan Produk",
    body: "Batik, streetwear artisan, dan kerajinan seni mudah dipalsukan. Omzet hilang, reputasi brand ikut rusak.",
  },
  {
    icon: Tag,
    title: "Inventaris Manual",
    body: "Stok dan aset bernilai tinggi sulit dilacak akurat. Selisih stok baru ketahuan saat stok opname.",
  },
  {
    icon: PlugsConnected,
    title: "Operasi Terputus",
    body: "POS dan sistem inventaris tidak terintegrasi penuh. Data checkout dan stok tidak pernah sinkron.",
  },
  {
    icon: Scan,
    title: "Checkout Lambat",
    body: "Verifikasi keaslian manual memperlambat antrean kasir dan pengalaman pelanggan.",
  },
  {
    icon: ShieldCheck,
    title: "Kepercayaan Rendah",
    body: "Konsumen sulit memverifikasi asal-usul produk sebelum memutuskan membeli.",
  },
];

const SOLUTIONS = [
  {
    icon: Tag,
    title: "Smart Tag Anti-Palsu",
    body: "Identitas digital unik per produk, nyaris mustahil dipalsukan.",
  },
  {
    icon: TrendUp,
    title: "Pelacakan Real-Time",
    body: "Aset fashion dan karya seni terlacak otomatis saat berpindah.",
  },
  {
    icon: PlugsConnected,
    title: "Integrasi POS & ERP",
    body: "Checkout dan stok tersinkron ke sistem yang sudah Anda pakai.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring Keamanan",
    body: "Deteksi pencurian dan pemantauan pergerakan barang real-time.",
  },
  {
    icon: ChartBar,
    title: "Cloud Analytics",
    body: "Laporan dan business insight dari setiap pemindaian.",
  },
];

const PRODUCTS = [
  {
    icon: Tag,
    label: "Hardware",
    name: "RFID Smart Tag & Reader",
    img: "https://picsum.photos/seed/mtag-rfid-tag/800/500",
    body: "Tag presisi tinggi untuk produk fashion dan artisan, dipasangkan dengan RFID reader untuk gudang dan kasir.",
    bullets: [
      "Identitas unik per item, sulit dipalsukan",
      "Pembacaan cepat tanpa garis pandang",
      "Tahan pemakaian harian",
    ],
  },
  {
    icon: Cloud,
    label: "Software",
    name: "Dashboard SaaS",
    img: "https://picsum.photos/seed/mtag-retail-register/800/500",
    body: "Seluruh pergerakan stok dan status keaslian tampil dalam satu dashboard berbasis cloud.",
    bullets: [
      "Inventaris real-time multi-lokasi",
      "Laporan & insight otomatis",
      "Deteksi kehilangan dan pencurian",
    ],
  },
  {
    icon: DeviceMobile,
    label: "Software",
    name: "Aplikasi Scanner & Middleware",
    img: "https://picsum.photos/seed/mtag-phone-scan/800/500",
    body: "Verifikasi keaslian lewat aplikasi scanner, plus middleware untuk POS/ERP Anda.",
    bullets: [
      "Verifikasi konsumen cukup 1x scan",
      "Integrasi POS/ERP siap pakai",
      "Sinkronisasi checkout dan stok",
    ],
  },
];

const STEPS = [
  {
    icon: Tag,
    title: "Tempel Tag",
    body: "Setiap produk menerima Smart Tag dengan identitas digital unik saat masuk inventaris.",
  },
  {
    icon: Scan,
    title: "Scan & Lacak",
    body: "Reader dan aplikasi membaca tag otomatis. Stok, lokasi, dan pergerakan tercatat real-time.",
  },
  {
    icon: SealCheck,
    title: "Verifikasi",
    body: "Konsumen memindai tag untuk memastikan keaslian produk dalam sekali scan.",
  },
  {
    icon: ChartBar,
    title: "Pantau & Analisis",
    body: "Dashboard cloud menyajikan stok, alert keamanan, dan insight penjualan.",
  },
];

const MARKET = [
  { value: "60 jt+", label: "UMKM di Indonesia", note: "Basis pasar nasional" },
  { value: "±28%", label: "Sektor kreatif & fashion", note: "Dari total UMKM" },
  { value: "100 rb", label: "Brand, galeri & artisan urban", note: "Segmen awal M-TAG" },
  { value: "17%+", label: "CAGR adopsi RFID global", note: "Pertumbuhan per tahun" },
];

const VALIDATION = [
  {
    title: "Pemalsuan produk masih jadi ancaman besar",
    body: "Mayoritas responden kesulitan memverifikasi keaslian produk secara mandiri.",
  },
  {
    title: "Inventaris manual menyulitkan",
    body: "Pencatatan stok manual dianggap lambat dan rawan selisih.",
  },
  {
    title: "Model langganan lebih diminati",
    body: "UMKM lebih nyaman dengan biaya berlangganan dibanding beli hardware langsung.",
  },
];

const TEAM = [
  { name: "Nuruddin Ihsan Affandi", role: "CEO", initials: "NA" },
  { name: "Axel Dimas Anugrah", role: "CTO", initials: "AD" },
  { name: "Bagas Mustoffa Althaf", role: "CFO", initials: "BM" },
  { name: "Muhammad Doni Rizqi Fadhilah", role: "COO", initials: "MD" },
  { name: "Hanif Nugroho", role: "CMO", initials: "HN" },
];

function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-white">
        M
      </span>
      <span className="text-lg font-bold tracking-tight">M-TAG</span>
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#" aria-label="M-TAG beranda">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <details className="relative md:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line [&::-webkit-details-marker]:hidden"
              aria-label="Buka menu navigasi"
            >
              <List className="h-5 w-5" aria-hidden />
            </summary>
            <nav
              className="absolute right-0 top-12 w-48 rounded-2xl border border-line bg-background p-2 shadow-xl shadow-accent/5"
              aria-label="Navigasi seluler"
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                className="mt-1 block rounded-xl bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Hubungi Kami
              </a>
            </nav>
          </details>
          <a
            href="#kontak"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong active:translate-y-px md:block"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      <main>
        {/* Hero: split, real photo (placeholder seed), no fake dashboard */}
        <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="rise-in mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-muted">
                <Tag className="h-4 w-4 text-accent" aria-hidden />
                Smart Tag RFID untuk UMKM Indonesia
              </p>
              <h1 className="rise-in d1 text-4xl font-bold leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl">
                Produk asli Anda.
                <br />
                Terlindungi. Terlacak.
              </h1>
              <p className="rise-in d2 mt-6 max-w-[30rem] text-lg leading-relaxed text-muted">
                M-TAG melindungi keaslian produk dan mengotomatiskan inventaris dengan Smart Tag
                RFID, dari butik batik sampai galeri seni.
              </p>
              <div className="rise-in d3 mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontak"
                  className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white transition hover:bg-accent-strong active:translate-y-px"
                >
                  Jadwalkan Demo
                </a>
                <a
                  href="#produk"
                  className="rounded-full border border-line bg-background px-7 py-3.5 text-base font-semibold text-ink transition hover:border-accent hover:text-accent active:translate-y-px"
                >
                  Lihat Produk
                </a>
              </div>
            </div>

            <div className="rise-in d2">
              {/* TODO: replace with real hero product photo, 1200x900 */}
              <img
                src="https://picsum.photos/seed/mtag-batik-boutique/1200/900"
                alt="Foto ilustrasi butik fashion lokal"
                width={1200}
                height={900}
                loading="eager"
                className="aspect-[4/3] w-full rounded-3xl border border-line object-cover"
              />
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-line bg-background p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                  <Scan className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold">Satu scan, produk terverifikasi asli</p>
                  <p className="text-xs text-muted">Konsumen, kasir, dan gudang memakai cara yang sama</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Masalah: asymmetric grid, dots + accent cells for variety */}
        <section id="masalah" className="border-t border-line bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="reveal max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Lima titik sakit yang menghambat brand lokal
            </h2>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((item, i) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border border-line bg-background p-6 ${
                    i === 0 ? "dots sm:col-span-2" : ""
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                    <item.icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
              <div className="flex flex-col justify-between gap-4 rounded-2xl bg-accent p-6 text-white">
                <p className="text-lg font-semibold leading-snug">
                  Semua bermuara pada satu akar: produk tidak bisa &ldquo;berbicara&rdquo; tentang
                  dirinya sendiri.
                </p>
                <p className="text-sm text-white/80">M-TAG memberi suara itu lewat RFID.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solusi: horizontal scroll-snap pills (family: rail) */}
        <section id="solusi" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="reveal max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Satu sistem, lima kemampuan inti
            </h2>
            <div className="reveal -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
              {SOLUTIONS.map((item) => (
                <div
                  key={item.title}
                  className="min-w-[230px] snap-start rounded-2xl border border-line bg-background p-6 sm:min-w-[250px]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                    <item.icon className="h-5 w-5 text-accent" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produk: photo-header cards (family: media cards) */}
        <section id="produk" className="border-t border-line py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="reveal max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Hardware dan software dalam satu ekosistem
            </h2>
            <div className="reveal mt-12 grid gap-4 lg:grid-cols-3">
              {PRODUCTS.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col overflow-hidden rounded-2xl border border-line bg-background"
                >
                  {/* TODO: replace with real product photos */}
                  <img
                    src={item.img}
                    alt="Foto ilustrasi produk"
                    width={800}
                    height={500}
                    loading="lazy"
                    className="aspect-[8/5] w-full border-b border-line object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft">
                        <item.icon className="h-5 w-5 text-accent" aria-hidden />
                      </span>
                      <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted">
                          <SealCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cara kerja: dark, icon steps with arrows (family: process chain) */}
        <section id="cara-kerja" className="bg-ink py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Cara Kerja
            </p>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Dari tag ke insight dalam empat langkah
            </h2>
            <ol className="reveal mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start">
              {STEPS.map((item, i) => (
                <li key={item.title} className="contents">
                  <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <item.icon className="h-5 w-5 text-white" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <CaretRight
                      className="mx-auto mt-6 hidden h-5 w-5 text-white/30 lg:mt-8 lg:block"
                      aria-hidden
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pasar: borderless stat columns (family: stat band) */}
        <section id="pasar" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="reveal max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Waktunya tepat, pasarnya besar
            </h2>
            <dl className="reveal mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {MARKET.map((item) => (
                <div key={item.label} className="border-l-2 border-accent pl-5">
                  <dd className="text-4xl font-bold tracking-tight text-accent">{item.value}</dd>
                  <dt className="mt-3 font-semibold">{item.label}</dt>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </div>
              ))}
            </dl>
            <p className="reveal mt-10 text-sm text-muted">
              Sumber: Bappenas, laporan industri RFID global.
            </p>
          </div>
        </section>

        {/* Validasi: big number + text rows (family: split stat) */}
        <section id="validasi" className="border-t border-line bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="reveal max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Didengar langsung dari UMKM
            </h2>
            <div className="reveal mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <p className="text-8xl font-bold tracking-tighter text-accent">58</p>
                <p className="mt-3 max-w-[16rem] text-sm font-medium leading-snug text-muted">
                  responden survei UMKM dan konsumen mendukung tiga temuan utama ini.
                </p>
              </div>
              <ul className="divide-y divide-line">
                {VALIDATION.map((item) => (
                  <li key={item.title} className="flex items-start gap-4 py-5 first:pt-0">
                    <SealCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tim: monogram tiles (family: people grid) */}
        <section id="tim" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="reveal max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Orang di balik M-TAG
            </h2>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {TEAM.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-line bg-background p-6 text-center"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-white">
                    {item.initials}
                  </span>
                  <h3 className="mt-4 font-semibold leading-snug">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontak: accent CTA block */}
        <section id="kontak" className="border-t border-line py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="reveal grid items-center gap-10 rounded-3xl bg-accent p-8 text-white sm:p-14 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Siap melindungi produk Anda?
                </h2>
                <p className="mt-4 max-w-md text-white/80">
                  Ceritakan kebutuhan brand Anda. Tim kami menyiapkan demo dan paket onboarding
                  yang sesuai untuk UMKM.
                </p>
                <a
                  href="mailto:nuruddin.affandi@binus.ac.id"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-accent transition hover:bg-white/90 active:translate-y-px"
                >
                  <EnvelopeSimple className="h-5 w-5" aria-hidden />
                  nuruddin.affandi@binus.ac.id
                </a>
              </div>
              <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {["Konsultasi gratis", "Onboarding hitungan hari", "Paket khusus UMKM"].map(
                  (perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 text-sm font-medium"
                    >
                      <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden />
                      {perk}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
          <Logo />
          <p className="text-sm font-medium text-muted">Secure, Authentic, Connected</p>
          <p className="text-sm text-muted">© 2026 M-TAG</p>
        </div>
      </footer>
    </div>
  );
}
