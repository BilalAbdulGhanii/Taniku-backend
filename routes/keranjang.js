const router = require('express').Router();
const pool = require('../db');

// GET keranjang milik pembeli
router.get('/:pembeliId', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT k.*, p.nama, p.harga, p.satuan, p.emoji, p.warna, p.stok, p.batch
       FROM keranjang k
       JOIN produk p ON p.id = k.produk_id
       WHERE k.pembeli_id = $1
       ORDER BY k.created_at DESC`,
      [req.params.pembeliId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// POST tambah item ke keranjang
router.post('/', async (req, res) => {
  try {
    const { pembeliId, produkId, jumlah } = req.body;

    // Cek stok produk
    const cekStok = await pool.query('SELECT stok, nama FROM produk WHERE id = $1', [produkId]);
    if (cekStok.rows.length === 0) {
      return res.status(404).json({ pesan: 'Produk tidak ditemukan' });
    }

    const produk = cekStok.rows[0];

    // Cek item yang sudah ada di keranjang
    const cekKeranjang = await pool.query(
      'SELECT * FROM keranjang WHERE pembeli_id = $1 AND produk_id = $2',
      [pembeliId, produkId]
    );

    const jumlahBaru = (cekKeranjang.rows[0]?.jumlah || 0) + (jumlah || 1);

    if (jumlahBaru > produk.stok) {
      return res.status(400).json({ pesan: 'Stok tidak mencukupi (sisa ' + produk.stok + ')' });
    }

    let result;
    if (cekKeranjang.rows.length > 0) {
      result = await pool.query(
        'UPDATE keranjang SET jumlah = $1 WHERE pembeli_id = $2 AND produk_id = $3 RETURNING *',
        [jumlahBaru, pembeliId, produkId]
      );
    } else {
      result = await pool.query(
        'INSERT INTO keranjang (pembeli_id, produk_id, jumlah) VALUES ($1, $2, $3) RETURNING *',
        [pembeliId, produkId, jumlah || 1]
      );
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// PUT update jumlah item keranjang
router.put('/:id', async (req, res) => {
  try {
    const { jumlah } = req.body;
    if (jumlah < 1) return res.status(400).json({ pesan: 'Jumlah minimal 1' });

    // Cek stok
    const cekKeranjang = await pool.query(
      `SELECT k.*, p.stok FROM keranjang k
       JOIN produk p ON p.id = k.produk_id
       WHERE k.id = $1`,
      [req.params.id]
    );

    if (cekKeranjang.rows.length === 0) {
      return res.status(404).json({ pesan: 'Item tidak ditemukan' });
    }

    if (jumlah > cekKeranjang.rows[0].stok) {
      return res.status(400).json({ pesan: 'Stok tidak mencukupi' });
    }

    const result = await pool.query(
      'UPDATE keranjang SET jumlah = $1 WHERE id = $2 RETURNING *',
      [jumlah, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// DELETE hapus item keranjang
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM keranjang WHERE id = $1', [req.params.id]);
    res.json({ ok: true, pesan: 'Item dihapus' });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

// DELETE kosongkan keranjang pembeli
router.delete('/kosongkan/:pembeliId', async (req, res) => {
  try {
    await pool.query('DELETE FROM keranjang WHERE pembeli_id = $1', [req.params.pembeliId]);
    res.json({ ok: true, pesan: 'Keranjang dikosongkan' });
  } catch (err) {
    res.status(500).json({ pesan: err.message });
  }
});

module.exports = router;