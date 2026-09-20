const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

// POST login
router.post('/masuk', async (req, res) => {
  try {
    const { email, sandi } = req.body;

    const result = await pool.query('SELECT * FROM pengguna WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ pesan: 'Email atau sandi salah' });
    }

    const user = result.rows[0];
    const cocok = await bcrypt.compare(sandi, user.sandi);
    if (!cocok) {
      return res.status(401).json({ pesan: 'Email atau sandi salah' });
    }

    const token = jwt.sign(
      { id: user.id, peran: user.peran },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    delete user.sandi;
    res.json({ token, pengguna: user });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// POST daftar
router.post('/daftar', async (req, res) => {
  try {
    const { nama, email, sandi, peran } = req.body;

    const cek = await pool.query('SELECT id FROM pengguna WHERE email = $1', [email]);
    if (cek.rows.length > 0) {
      return res.status(400).json({ pesan: 'Email sudah terdaftar' });
    }

    const hash = await bcrypt.hash(sandi, 10);
    const avatar = nama.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();

    const result = await pool.query(
      'INSERT INTO pengguna (nama, email, sandi, peran, avatar) VALUES ($1,$2,$3,$4,$5) RETURNING id, nama, email, peran, avatar',
      [nama, email, hash, peran || 'pembeli', avatar]
    );

    res.json({ pengguna: result.rows[0] });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

module.exports = router;   // ← INI WAJIB ADA!