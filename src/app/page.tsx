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
    body: "Setiap produk membawa identitas digital unik yang nyaris mustahil dipalsukan.",
  },
  {
    icon: TrendUp,
    title: "Pelacakan Real-Time",
    body: "Aset fashion dan karya seni terlacak otomatis saat berpindah lokasi.",
  },
  {
    icon: PlugsConnected,
    title: "Integrasi POS & ERP",
    body: "Checkout dan update stok tersinkron otomatis ke sistem yang sudah Anda pakai.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoring Keamanan",
    body: "Deteksi pencurian dan pemantauan pergerakan barang secara real-time.",
  },
  {
    icon: ChartBar,
    title: "Cloud Analytics",
    body: "Dashboard reporting dan business insight dari setiap pemindaian.",
  },
];

const PRODUCTS = [
  {
    icon: Tag,
    label: "Hardware",
    name: "RFID Smart Tag & Reader",
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
    n: "01",
    title: "Tempel Tag",
    body: "Setiap produk menerima Smart Tag dengan identitas digital unik saat masuk inventaris.",
  },
  {
    n: "02",
    title: "Scan & Lacak",
    body: "Reader dan aplikasi membaca tag secara otomatis. Stok, lokasi, dan pergerakan tercatat real-time.",
  },
  {
    n: "03",
    title: "Verifikasi",
    body: "Konsumen memindai tag untuk memastikan keaslian produk dalam sekali scan.",
  },
  {
    n: "04",
    title: "Pantau & Analisis",
    body: "Dashboard cloud menyajikan stok, alert keamanan, dan insight penjualan untuk keputusan bisnis.",
  },
];

const MARKET = [
  { value: "60 jt+", label: "UMKM di Indonesia", note: "Basis pasar nasional" },
  { value: "±28%", label: "Sektor kreatif & fashion", note: "Dari total UMKM" },
  { value: "100 rb", label: "Brand, galeri & artisan urban", note: "Segmen awal M-TAG" },
  { value: "17%+", label: "CAGR adopsi RFID global", note: "Pertumbuhan per tahun" },
];

const VALIDATION = [
  { value: "58", label: "Responden survei UMKM & konsumen" },
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
  { name: "Nuruddin Ihsan Affandi", role: "CEO" },
  { name: "Axel Dimas Anugrah", role: "CTO" },
  { name: "Bagas Mustoffa Althaf", role: "CFO" },
  { name: "Muhammad Doni Rizqi Fadhilah", role: "COO" },
  { name: "Hanif Nugroho", role: "CMO" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-accent">{children}</p>
  );
}

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
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
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
              className="absolute right-0 top-12 w-48 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-accent/5"
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
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong active:translate-y-px"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      <main>
        {/* Hero — asymmetric split */}
        <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
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
                RFID — dari butik batik sampai galeri seni.
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
                  className="rounded-full border border-line px-7 py-3.5 text-base font-semibold text-ink transition hover:border-accent hover:text-accent active:translate-y-px"
                >
                  Lihat Produk
                </a>
              </div>
            </div>

            {/* Product visual — CSS mockup */}
            <div className="rise-in d2" aria-hidden>
              <div className="dots rounded-3xl border border-line bg-surface p-5 sm:p-8">
                <div className="rounded-2xl border border-line bg-white p-5 shadow-xl shadow-accent/5">
                  <div className="flex items-center justify-between border-b border-line pb-3">
                    <p className="text-sm font-semibold">Inventaris Real-Time</p>
                    <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-muted">
                      Ilustrasi produk
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Batik Parang Premium", "Terverifikasi"],
                      ["Jaket Streetwear No. 042", "Terverifikasi"],
                      ["Keramik Artisan Vase", "Gudang B"],
                      ["Syal Tenun Manual", "Terverifikasi"],
                    ].map(([name, status]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-xl bg-surface px-4 py-3"
                      >
                        <span className="text-sm font-medium">{name}</span>
                        <span className="text-xs font-semibold text-accent">{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-lg shadow-accent/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                    <Scan className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Scan berhasil</p>
                    <p className="text-xs text-muted">Produk asli, terverifikasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Masalah */}
        <section id="masalah" className="border-t border-line bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Masalah</Eyebrow>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Lima titik sakit yang menghambat brand lokal
            </h2>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
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

        {/* Solusi */}
        <section id="solusi" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Solusi</Eyebrow>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Satu sistem, lima kemampuan inti
            </h2>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {SOLUTIONS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-line bg-white p-6">
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

        {/* Produk */}
        <section id="produk" className="border-t border-line py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Produk</Eyebrow>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Hardware dan software dalam satu ekosistem
            </h2>
            <div className="reveal mt-12 grid gap-4 lg:grid-cols-3">
              {PRODUCTS.map((item) => (
                <div key={item.name} className="flex flex-col rounded-2xl border border-line bg-white p-7">
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
              ))}
            </div>
          </div>
        </section>

        {/* Cara kerja */}
        <section id="cara-kerja" className="bg-ink py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Cara Kerja
            </p>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Dari tag ke insight dalam empat langkah
            </h2>
            <ol className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((item) => (
                <li key={item.n} className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <p className="font-mono text-sm font-semibold text-accent-soft">{item.n}</p>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pasar */}
        <section id="pasar" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Pasar</Eyebrow>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Waktunya tepat, pasarnya besar
            </h2>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MARKET.map((item) => (
                <div key={item.label} className="rounded-2xl border border-line bg-white p-7">
                  <p className="text-4xl font-bold tracking-tight text-accent">{item.value}</p>
                  <p className="mt-3 font-semibold">{item.label}</p>
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="reveal mt-6 text-sm text-muted">
              Sumber: Bappenas, laporan industri RFID global.
            </p>
          </div>
        </section>

        {/* Validasi pasar */}
        <section id="validasi" className="border-t border-line bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Validasi Pasar</Eyebrow>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Didengar langsung dari UMKM
            </h2>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {VALIDATION.map((item) => (
                <div
                  key={item.value ?? item.title}
                  className="rounded-2xl border border-line bg-white p-7"
                >
                  {item.value ? (
                    <>
                      <p className="text-5xl font-bold tracking-tight text-accent">{item.value}</p>
                      <p className="mt-3 text-sm font-medium leading-snug">{item.label}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-semibold leading-snug">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tim */}
        <section id="tim" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Tim</Eyebrow>
            <h2 className="reveal mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Orang di balik M-TAG
            </h2>
            <div className="reveal mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {TEAM.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-line bg-white p-6 text-center"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-lg font-bold text-accent">
                    {item.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <h3 className="mt-4 font-semibold leading-snug">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontak / CTA */}
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
                  className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-accent transition hover:bg-white/90 active:translate-y-px"
                >
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
          <p className="text-sm font-medium text-muted">Secure · Authentic · Connected</p>
          <p className="text-sm text-muted">© 2026 M-TAG</p>
        </div>
      </footer>
    </div>
  );
}
