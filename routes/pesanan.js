const router = require('express').Router();
const pool = require('../db');

// GET semua pesanan
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pesanan ORDER BY tanggal DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// GET pesanan by pembeli
router.get('/pembeli/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM pesanan WHERE pembeli_id = $1 ORDER BY tanggal DESC',
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// POST buat pesanan
router.post('/', async (req, res) => {
  try {
    const p = req.body;
    const nomor = '#TNK-' + new Date().getFullYear() + '-' + String(Date.now()).slice(-6);

    const result = await pool.query(
      `INSERT INTO pesanan (nomor, pembeli_id, pembeli_nama, item, subtotal, ongkir, diskon, biaya_layanan, total, promo_kode, status, metode_pembayaran, status_pembayaran, alamat, catatan)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING *`,
      [nomor, p.pembeliId, p.pembeliNama, JSON.stringify(p.item), p.subtotal, p.ongkir || 0, p.diskon || 0, p.biayaLayanan || 1000, p.total, p.promoKode || null, p.status || 'menunggu_bayar', p.metodePembayaran, p.statusPembayaran || 'belum', p.alamat, p.catatan || '']
    );

    const pesanan = result.rows[0];

    // Auto-create notifikasi untuk admin
    try {
      await pool.query(
        `INSERT INTO notifikasi (peran, tipe, judul, pesan, tautan)
         VALUES ($1, $2, $3, $4, $5)`,
        ['admin', 'pesanan', 'Pesanan Baru Masuk',
         nomor + ' dari ' + p.pembeliNama + ' - Rp ' + (p.total || 0).toLocaleString('id-ID'),
         '#/admin/pesanan']
      );
    } catch (notifErr) {
      console.error('Gagal bikin notif admin:', notifErr.message);
    }

    res.json(pesanan);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// PUT ubah status pesanan
router.put('/:id/status', async (req, res) => {
  try {
    const { status, statusPembayaran } = req.body;
    const result = await pool.query(
      'UPDATE pesanan SET status=$1, status_pembayaran=COALESCE($2, status_pembayaran) WHERE id=$3 RETURNING *',
      [status, statusPembayaran, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

module.exports = router;