const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/produk', require('./routes/produk'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/pesanan', require('./routes/pesanan'));
app.use('/api/promo', require('./routes/promo'));
app.use('/api/mitra', require('./routes/mitra'));
app.use('/api/keranjang', require('./routes/keranjang'));
app.use('/api/notifikasi', require('./routes/notifikasi'));

app.get('/', (req, res) => {
  res.json({ ok: true, pesan: 'Server Taniku aktif!', waktu: new Date().toISOString() });
});

app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as waktu_db');
    res.json({ ok: true, pesan: 'Database OK!', waktu_db: result.rows[0].waktu_db });
    } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ 
      ok: false, 
      pesan: err.message || err.code || 'Unknown DB error',
      detail: err.code || null
    });
  }
});                                   // ← TAMBAH INI

app.listen(PORT, () => {
  console.log('✅ Server jalan di http://localhost:' + PORT);
});