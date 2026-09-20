const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Test koneksi
pool.connect()
  .then(() => console.log('✅ Database terhubung ke Supabase!'))
  .catch(err => console.error('❌ Database error:', err.message));

module.exports = pool;