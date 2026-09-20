const router = require('express').Router();
const pool = require('../db');

// GET semua mitra
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mitra ORDER BY nama');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// POST tambah mitra
router.post('/', async (req, res) => {
  try {
    const m = req.body;
    const result = await pool.query(
      `INSERT INTO mitra (nama, ketua, lokasi, luas, komoditas, status, pasokan, mutu, sertifikat)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [m.nama, m.ketua || '-', m.lokasi || '-', m.luas || 0, m.komoditas || '-', m.status || 'calon', m.pasokan || 0, m.mutu || 0, m.sertifikat || false]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// PUT update mitra
router.put('/:id', async (req, res) => {
  try {
    const m = req.body;
    const result = await pool.query(
      `UPDATE mitra SET nama=$1, ketua=$2, lokasi=$3, luas=$4, komoditas=$5, status=$6 WHERE id=$7 RETURNING *`,
      [m.nama, m.ketua, m.lokasi, m.luas, m.komoditas, m.status, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

module.exports = router;