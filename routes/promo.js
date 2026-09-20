const router = require('express').Router();
const pool = require('../db');

// GET semua promo
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM promo ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// GET promo by kode (untuk validasi di checkout)
router.get('/cek/:kode', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM promo WHERE kode = $1 AND aktif = true AND (kadaluwarsa IS NULL OR kadaluwarsa > NOW())',
      [req.params.kode.toUpperCase()]
    );
    if (result.rows.length === 0) return res.status(404).json({ pesan: 'Kode promo tidak valid' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// POST tambah promo
router.post('/', async (req, res) => {
  try {
    const p = req.body;
    const result = await pool.query(
      `INSERT INTO promo (kode, tipe, nilai, aktif, min_belanja, kadaluwarsa, ket)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [p.kode.toUpperCase(), p.tipe, p.nilai, p.aktif !== false, p.minBelanja || 0, p.kadaluwarsa, p.ket || '']
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// PUT update promo
router.put('/:id', async (req, res) => {
  try {
    const p = req.body;
    const result = await pool.query(
      `UPDATE promo SET kode=$1, tipe=$2, nilai=$3, aktif=$4, min_belanja=$5, kadaluwarsa=$6, ket=$7 WHERE id=$8 RETURNING *`,
      [p.kode.toUpperCase(), p.tipe, p.nilai, p.aktif, p.minBelanja || 0, p.kadaluwarsa, p.ket || '', req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// DELETE promo
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM promo WHERE id=$1', [req.params.id]);
    res.json({ ok: true, pesan: 'Promo dihapus' });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

module.exports = router;