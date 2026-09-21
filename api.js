// ============================================================
// api.js — Helper untuk panggil backend Taniku
// ============================================================

const API_URL = 'https://taniku-backend-production.up.railway.app';

let _token = localStorage.getItem('taniku_token') || '';

function setToken(t) {
  _token = t || '';
  if (t) localStorage.setItem('taniku_token', t);
  else localStorage.removeItem('taniku_token');
}

function getToken() {
  return _token;
}

async function api(path, options) {
  options = options || {};
  const metode = options.metode || 'GET';
  const body = options.body || null;

  const opts = {
    method: metode,
    headers: { 'Content-Type': 'application/json' }
  };
  if (_token) opts.headers.Authorization = 'Bearer ' + _token;
  if (body) opts.body = JSON.stringify(body);

  const resp = await fetch(API_URL + path, opts);   // ← konsisten pakai API_URL
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.pesan || 'Request gagal');
  return data;
}

async function ambilCuacaReal() {
  const url = 'https://api.open-meteo.com/v1/forecast' +
    '?latitude=-6.9171&longitude=107.6214' +
    '&elevation=768' +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m' +
    '&hourly=temperature_2m,relative_humidity_2m' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
    '&timezone=Asia%2FJakarta&forecast_days=4';

  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Gagal ambil data cuaca');
  return await resp.json();
}

function kodeCuacaKeTeks(kode) {
  if (kode === 0) return 'Cerah';
  if (kode <= 3) return 'Cerah Berawan';
  if (kode <= 48) return 'Berkabut';
  if (kode <= 55) return 'Gerimis';
  if (kode <= 65) return 'Hujan';
  if (kode <= 77) return 'Salju';
  if (kode <= 82) return 'Hujan Lebat';
  return 'Badai Petir';
}

function kodeCuacaKeIkon(kode) {
  if (kode === 0) return 'sun';
  if (kode <= 3) return 'cloud-sun';
  if (kode <= 48) return 'cloud';
  if (kode <= 82) return 'rain';
  return 'cloud-lightning';
}

window.Api = {
  // Auth — pakai /masuk dan /daftar, field "sandi"
  masuk: function(email, sandi) {
    return api('/api/auth/masuk', {
      metode: 'POST',
      body: { email: email, sandi: sandi }
    });
  },
  daftar: function(data) {
    return api('/api/auth/daftar', {
      metode: 'POST',
      body: data
    });
  },

  // Produk
  daftarProduk: function() { return api('/api/produk'); },
  tambahProduk: function(p) { return api('/api/produk', { metode: 'POST', body: p }); },
  ubahProduk: function(id, p) { return api('/api/produk/' + id, { metode: 'PUT', body: p }); },
  hapusProduk: function(id) { return api('/api/produk/' + id, { metode: 'DELETE' }); },

  // Pesanan
  daftarPesanan: function() { return api('/api/pesanan'); },
  buatPesanan: function(p) { return api('/api/pesanan', { metode: 'POST', body: p }); },

  // Promo
  daftarPromo: function() { return api('/api/promo'); },
  cekPromo: function(kode) { return api('/api/promo/cek/' + kode); },

  // Mitra
  daftarMitra: function() { return api('/api/mitra'); },

  // Cuaca
  cuacaReal: ambilCuacaReal,
  kodeCuacaKeTeks: kodeCuacaKeTeks,
  kodeCuacaKeIkon: kodeCuacaKeIkon,

  // Token
  setToken: setToken,
  getToken: getToken
};