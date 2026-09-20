const router = require('express').Router();
const pool = require('../db');

// GET semua produk
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produk ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// GET produk by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produk WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ pesan: 'Produk tidak ditemukan' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// POST tambah produk
router.post('/', async (req, res) => {
  try {
    const p = req.body;
    const result = await pool.query(
      `INSERT INTO produk (nama, kategori, harga, satuan, stok, stok_min, batch, kedaluwarsa, organik, petani, lokasi, deskripsi, emoji, warna)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *`,
      [p.nama, p.kategori, p.harga, p.satuan, p.stok, p.stokMin || 10, p.batch, p.kedaluwarsa, p.organik || false, p.petani, p.lokasi, p.deskripsi, p.emoji || '🌱', p.warna || '#DDEBDD']
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// PUT update produk
router.put('/:id', async (req, res) => {
  try {
    const p = req.body;
    const result = await pool.query(
      `UPDATE produk SET nama=$1, kategori=$2, harga=$3, satuan=$4, stok=$5, batch=$6, kedaluwarsa=$7, deskripsi=$8 WHERE id=$9 RETURNING *`,
      [p.nama, p.kategori, p.harga, p.satuan, p.stok, p.batch, p.kedaluwarsa, p.deskripsi, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// DELETE produk
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM produk WHERE id=$1', [req.params.id]);
    res.json({ ok: true, pesan: 'Produk dihapus' });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

module.exports = router;