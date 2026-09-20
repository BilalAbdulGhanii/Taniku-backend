const pool = require('./db');

(async () => {
  try {
    console.log('🌱 Mulai seed data...');

    // === SEED PROMO ===
    await pool.query(`
      INSERT INTO promo (kode, tipe, nilai, aktif, min_belanja, kadaluwarsa, ket) VALUES
      ('PANENSEGAR', 'ongkir', 15000, true, 0, '2026-12-31T23:59:00', 'Gratis ongkir Rp 15.000'),
      ('GRATIS5', 'ongkir', 5000, true, 0, '2026-12-31T23:59:00', 'Potong ongkir Rp 5.000'),
      ('HEMAT20', 'belanja', 20000, true, 100000, '2026-12-31T23:59:00', 'Potong Rp 20.000 (min Rp 100.000)')
      ON CONFLICT (kode) DO NOTHING;
    `);
    console.log('✅ Promo seeded');

    // === SEED MITRA ===
    await pool.query(`
      INSERT INTO mitra (nama, ketua, lokasi, luas, komoditas, status, pasokan, mutu, sertifikat) VALUES
      ('Gapoktan Sukamaju', 'Pak Yanto', 'Cikole, Lembang', 3.2, 'Beras, Cabai', 'aktif', 6100, 96, true),
      ('Poktan Berkah Organik', 'Ibu Ningsih', 'Brebes', 5.0, 'Bawang Merah', 'aktif', 4200, 98, true),
      ('Kebun Hidroponik Cisalak', 'Sdr. Aep', 'Cisalak', 1.2, 'Selada, Kale', 'perlu-audit', 1800, 92, false),
      ('Kebun Sejahtera', 'Pak Hendra', 'Lembang', 2.4, 'Tomat Cherry', 'aktif', 2400, 94, true);
    `);
    console.log('✅ Mitra seeded');

    // === SEED PRODUK LENGKAP ===
    await pool.query(`
      INSERT INTO produk (nama, kategori, harga, satuan, stok, stok_min, batch, kedaluwarsa, organik, rating, terjual, emoji, warna, petani, lokasi, deskripsi) VALUES
      ('Beras Pandan Wangi Organik', 'Beras & Biji', 75000, 'karung 5 kg', 45, 20, 'BPW-2024-01', '2025-11-15', true, 4.9, 320, '🌾', '#DDEBDD', 'Gapoktan Sukamaju', 'Cikole, Lembang', 'Beras pandan wangi organik.'),
      ('Cabai Rawit Merah', 'Sayuran', 38000, 'kg', 12, 25, 'CR-2410-A', '2026-10-27', false, 4.8, 210, '🌶️', '#F6D9D9', 'Pak Yanto', 'Cianjur', 'Cabai rawit merah pedas juara.'),
      ('Tomat Cherry Organik', 'Sayuran', 28000, 'kg', 1, 10, 'TMT-2024-08', '2026-11-05', true, 4.7, 96, '🍅', '#F8DED2', 'Kebun Sejahtera', 'Lembang', 'Tomat cherry organik.'),
      ('Kale Keriting Hidroponik', 'Sayuran', 16500, 'ikat', 28, 15, 'KLE-2024-09', '2026-10-29', true, 4.9, 154, '🥬', '#DDEBDD', 'Kebun Cisalak', 'Cisalak, Subang', 'Kale keriting hidroponik 250g.'),
      ('Bawang Merah Super Brebes', 'Rempah-rempah', 32000, 'kg', 35, 20, 'BMB-2024-03', '2027-01-20', false, 4.8, 402, '🧅', '#EFE2D6', 'Poktan Berkah', 'Brebes', 'Bawang merah asli Brebes.'),
      ('Wortel Brastagi', 'Sayuran', 18500, 'kg', 24, 20, 'WRT-2024-11', '2026-11-05', false, 4.6, 88, '🥕', '#F8E3D0', 'Gapoktan Subur', 'Brastagi', 'Wortel segar manis renyah.'),
      ('Jeruk Nipis', 'Buah-buahan', 12000, '500 g', 40, 15, 'JRN-2024-02', '2026-11-08', false, 4.7, 175, '🍋', '#EAF3D9', 'Poktan Berkah', 'Lembang', 'Jeruk nipis segar.'),
      ('Selada Romaine', 'Sayuran', 15000, 'ikat', 18, 12, 'SLD-2024-07', '2026-10-30', true, 4.8, 132, '🥗', '#DDEBDD', 'Kebun Cisalak', 'Subang', 'Selada romaine renyah.'),
      ('Pakcoy Baby', 'Sayuran', 14000, 'ikat', 22, 12, 'PKC-2024-04', '2026-10-30', true, 4.7, 118, '🥬', '#DDEBDD', 'Kebun Cisalak', 'Subang', 'Pakcoy baby hidroponik.'),
      ('Daun Mint', 'Rempah-rempah', 10000, 'ikat', 15, 10, 'MNT-2024-01', '2026-10-28', true, 4.6, 74, '🌿', '#DDEBDD', 'Kebun Sejahtera', 'Lembang', 'Daun mint segar.'),
      ('Pupuk Kompos Organik', 'Pupuk & Nutrisi', 35000, 'karung 10 kg', 60, 20, 'KMP-2024-09', '2027-09-01', true, 4.9, 240, '🪴', '#E4E0D2', 'Gapoktan Sukamaju', 'Lembang', 'Kompos kandang fermentasi alami.'),
      ('Bibit Cabai Unggul', 'Bibit Unggul', 25000, 'pak 50 biji', 30, 15, 'BBT-2024-03', '2027-06-01', false, 4.7, 96, '🌱', '#DDEBDD', 'Poktan Berkah', 'Brebes', 'Bibit cabai unggul.'),
      ('Kentang Granola', 'Sayuran', 18000, '2 kg', 8, 10, 'KTG-2024-05', '2026-11-12', false, 4.5, 61, '🥔', '#EFE6D8', 'Gapoktan Subur', 'Pangalengan', 'Kentang granola kualitas baik.'),
      ('Cangkul Baja Taniku', 'Alat Pertanian', 120000, 'pcs', 5, 8, 'CGL-2024-01', NULL, false, 4.8, 42, '🛠️', '#E4E0D2', 'Taniku Store', 'Bandung', 'Cangkul baja tempa.');
    `);
    console.log('✅ Produk seeded (14 produk)');

    console.log('\n🎉 Semua data berhasil di-seed!');
    process.exit();
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
})();