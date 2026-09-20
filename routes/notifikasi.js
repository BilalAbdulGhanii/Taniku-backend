const router = require('express').Router();
const pool = require('../db');

// GET semua notifikasi berdasarkan peran
router.get('/:peran', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM notifikasi WHERE peran = $1 ORDER BY waktu DESC LIMIT 50',
      [req.params.peran]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// POST tambah notifikasi baru
router.post('/', async (req, res) => {
  try {
    const { peran, tipe, judul, pesan, tautan } = req.body;
    const result = await pool.query(
      `INSERT INTO notifikasi (peran, tipe, judul, pesan, tautan)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [peran, tipe, judul, pesan, tautan]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// PATCH tandai satu notifikasi sudah dibaca
router.patch('/:id/baca', async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE notifikasi SET dibaca = true WHERE id = $1 RETURNING *',
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// PATCH tandai semua notifikasi sudah dibaca
router.patch('/baca-semua/:peran', async (req, res) => {
  try {
    await pool.query('UPDATE notifikasi SET dibaca = true WHERE peran = $1', [req.params.peran]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// DELETE hapus satu notifikasi
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM notifikasi WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// DELETE hapus semua notifikasi lama yang sudah dibaca
router.delete('/lama/:peran', async (req, res) => {
  try {
    await pool.query('DELETE FROM notifikasi WHERE peran = $1 AND dibaca = true', [req.params.peran]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

module.exports = router;