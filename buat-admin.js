const bcrypt = require('bcrypt');
const pool = require('./db');

(async () => {
  try {
    const hash = await bcrypt.hash('admin123', 10);
    
    const result = await pool.query(
      'INSERT INTO pengguna (nama, email, sandi, peran, telepon, alamat, avatar) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id, nama, email',
      ['Rina Asri', 'admin@taniku.id', hash, 'admin', '0812-3456-7890', 'Jl. Maribaya No. 42, Lembang', 'RA']
    );
    
    console.log('✅ Admin dibuat:', result.rows[0]);
    console.log('📧 Login: admin@taniku.id');
    console.log('🔑 Sandi: admin123');
    process.exit();
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
})();