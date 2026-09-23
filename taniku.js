(function(){
'use strict';

/* ===== DATA ===== */
const DATA_AWAL={
  pengguna:[
    {id:'u1',nama:'Rina Asri',email:'admin@taniku.id',sandi:'admin123',peran:'admin',telepon:'0812-3456-7890',alamat:'Jl. Maribaya No. 42, Lembang',avatar:'RA'},
    {id:'u2',nama:'Budi Santoso',email:'pembeli@taniku.id',sandi:'pembeli123',peran:'pembeli',telepon:'0812-9876-5432',alamat:'Jl. Raya Tangkuban Parahu No. 42, Cikole, Lembang',avatar:'BS'}
  ],
  produk:[
    {id:'p1',nama:'Beras Pandan Wangi Organik',kategori:'Beras & Biji',harga:75000,satuan:'karung 5 kg',stok:45,stokMin:20,batch:'BPW-2024-01',kedaluwarsa:'2025-11-15',organik:true,rating:4.9,terjual:320,emoji:'🌾',warna:'#DDEBDD',petani:'Gapoktan Sukamaju',lokasi:'Cikole, Lembang',deskripsi:'Beras pandan wangi organik.'},
    {id:'p2',nama:'Cabai Rawit Merah',kategori:'Sayuran',harga:38000,satuan:'kg',stok:12,stokMin:25,batch:'CR-2410-A',kedaluwarsa:'2026-10-27',organik:false,rating:4.8,terjual:210,emoji:'🌶️',warna:'#F6D9D9',petani:'Pak Yanto',lokasi:'Cianjur',deskripsi:'Cabai rawit merah pedas juara.'},
    {id:'p3',nama:'Tomat Cherry Organik',kategori:'Sayuran',harga:28000,satuan:'kg',stok:1,stokMin:10,batch:'TMT-2024-08',kedaluwarsa:'2026-11-05',organik:true,rating:4.7,terjual:96,emoji:'🍅',warna:'#F8DED2',petani:'Kebun Sejahtera',lokasi:'Lembang',deskripsi:'Tomat cherry organik.'},
    {id:'p4',nama:'Kale Keriting Hidroponik',kategori:'Sayuran',harga:16500,satuan:'ikat',stok:28,stokMin:15,batch:'KLE-2024-09',kedaluwarsa:'2026-10-29',organik:true,rating:4.9,terjual:154,emoji:'🥬',warna:'#DDEBDD',petani:'Kebun Cisalak',lokasi:'Cisalak, Subang',deskripsi:'Kale keriting hidroponik 250g.'},
    {id:'p5',nama:'Bawang Merah Super Brebes',kategori:'Rempah-rempah',harga:32000,satuan:'kg',stok:35,stokMin:20,batch:'BMB-2024-03',kedaluwarsa:'2027-01-20',organik:false,rating:4.8,terjual:402,emoji:'🧅',warna:'#EFE2D6',petani:'Poktan Berkah',lokasi:'Brebes',deskripsi:'Bawang merah asli Brebes.'},
    {id:'p6',nama:'Wortel Brastagi',kategori:'Sayuran',harga:18500,satuan:'kg',stok:24,stokMin:20,batch:'WRT-2024-11',kedaluwarsa:'2026-11-05',organik:false,rating:4.6,terjual:88,emoji:'🥕',warna:'#F8E3D0',petani:'Gapoktan Subur',lokasi:'Brastagi',deskripsi:'Wortel segar manis renyah.'},
    {id:'p7',nama:'Kentang Granola',kategori:'Sayuran',harga:18000,satuan:'2 kg',stok:8,stokMin:10,batch:'KTG-2024-05',kedaluwarsa:'2026-11-12',organik:false,rating:4.5,terjual:61,emoji:'🥔',warna:'#EFE6D8',petani:'Gapoktan Subur',lokasi:'Pangalengan',deskripsi:'Kentang granola kualitas baik.'},
    {id:'p8',nama:'Jeruk Nipis',kategori:'Buah-buahan',harga:12000,satuan:'500 g',stok:40,stokMin:15,batch:'JRN-2024-02',kedaluwarsa:'2026-11-08',organik:false,rating:4.7,terjual:175,emoji:'🍋',warna:'#EAF3D9',petani:'Poktan Berkah',lokasi:'Lembang',deskripsi:'Jeruk nipis segar.'},
    {id:'p9',nama:'Selada Romaine',kategori:'Sayuran',harga:15000,satuan:'ikat',stok:18,stokMin:12,batch:'SLD-2024-07',kedaluwarsa:'2026-10-30',organik:true,rating:4.8,terjual:132,emoji:'🥗',warna:'#DDEBDD',petani:'Kebun Cisalak',lokasi:'Subang',deskripsi:'Selada romaine renyah.'},
    {id:'p10',nama:'Pakcoy Baby',kategori:'Sayuran',harga:14000,satuan:'ikat',stok:22,stokMin:12,batch:'PKC-2024-04',kedaluwarsa:'2026-10-30',organik:true,rating:4.7,terjual:118,emoji:'🥬',warna:'#DDEBDD',petani:'Kebun Cisalak',lokasi:'Subang',deskripsi:'Pakcoy baby hidroponik.'},
    {id:'p11',nama:'Daun Mint',kategori:'Rempah-rempah',harga:10000,satuan:'ikat',stok:15,stokMin:10,batch:'MNT-2024-01',kedaluwarsa:'2026-10-28',organik:true,rating:4.6,terjual:74,emoji:'🌿',warna:'#DDEBDD',petani:'Kebun Sejahtera',lokasi:'Lembang',deskripsi:'Daun mint segar.'},
    {id:'p12',nama:'Pupuk Kompos Organik',kategori:'Pupuk & Nutrisi',harga:35000,satuan:'karung 10 kg',stok:60,stokMin:20,batch:'KMP-2024-09',kedaluwarsa:'2027-09-01',organik:true,rating:4.9,terjual:240,emoji:'🪴',warna:'#E4E0D2',petani:'Gapoktan Sukamaju',lokasi:'Lembang',deskripsi:'Kompos kandang fermentasi alami.'},
    {id:'p13',nama:'Bibit Cabai Unggul',kategori:'Bibit Unggul',harga:25000,satuan:'pak 50 biji',stok:30,stokMin:15,batch:'BBT-2024-03',kedaluwarsa:'2027-06-01',organik:false,rating:4.7,terjual:96,emoji:'🌱',warna:'#DDEBDD',petani:'Poktan Berkah',lokasi:'Brebes',deskripsi:'Bibit cabai unggul.'},
    {id:'p14',nama:'Cangkul Baja Taniku',kategori:'Alat Pertanian',harga:120000,satuan:'pcs',stok:5,stokMin:8,batch:'CGL-2024-01',kedaluwarsa:null,organik:false,rating:4.8,terjual:42,emoji:'🛠️',warna:'#E4E0D2',petani:'Taniku Store',lokasi:'Bandung',deskripsi:'Cangkul baja tempa.'}
  ],
  pesanan:[],
  notifikasi:[
    {id:'n1',peran:'pembeli',tipe:'pesanan',dibaca:false,judul:'Kurir Membawa Pesanan Anda!',pesan:'Kang Dadang sedang menuju lokasi.',waktu:new Date(Date.now()-3600000).toISOString(),tautan:'#/pembeli/pesanan'},
    {id:'n2',peran:'pembeli',tipe:'produk',dibaca:false,judul:'Beras Pandan Wangi Tersedia',pesan:'Kini tersedia kembali di gudang.',waktu:new Date(Date.now()-7200000).toISOString(),tautan:'#/pembeli/katalog'},
    {id:'n3',peran:'admin',tipe:'pesanan',dibaca:false,judul:'Verifikasi Transaksi',pesan:'Ada pesanan baru perlu diverifikasi.',waktu:new Date(Date.now()-1800000).toISOString(),tautan:'#/admin/pesanan'},
    {id:'n4',peran:'admin',tipe:'persediaan',dibaca:false,judul:'Stok Kritis',pesan:'Cabai Rawit Merah sisa 12 kg.',waktu:new Date(Date.now()-5400000).toISOString(),tautan:'#/admin/persediaan'}
  ],
  mitra:[
    {id:'m1',nama:'Gapoktan Sukamaju',ketua:'Pak Yanto',lokasi:'Cikole, Lembang',luas:3.2,komoditas:'Beras, Cabai',status:'aktif',pasokan:6100,mutu:96,sertifikat:true},
    {id:'m2',nama:'Poktan Berkah Organik',ketua:'Ibu Ningsih',lokasi:'Brebes',luas:5.0,komoditas:'Bawang Merah',status:'aktif',pasokan:4200,mutu:98,sertifikat:true},
    {id:'m3',nama:'Kebun Hidroponik Cisalak',ketua:'Sdr. Aep',lokasi:'Cisalak',luas:1.2,komoditas:'Selada, Kale',status:'perlu-audit',pasokan:1800,mutu:92,sertifikat:false},
    {id:'m4',nama:'Kebun Sejahtera',ketua:'Pak Hendra',lokasi:'Lembang',luas:2.4,komoditas:'Tomat Cherry',status:'aktif',pasokan:2400,mutu:94,sertifikat:true}
  ],
  promo:[
    {id:'pr1',kode:'PANENSEGAR',tipe:'ongkir',nilai:15000,aktif:true,minBelanja:0,kadaluwarsa:'2026-12-31T23:59',ket:'Gratis ongkir Rp 15.000'},
    {id:'pr2',kode:'GRATIS5',tipe:'ongkir',nilai:5000,aktif:true,minBelanja:0,kadaluwarsa:'2026-12-31T23:59',ket:'Potong ongkir Rp 5.000'},
    {id:'pr3',kode:'HEMAT20',tipe:'belanja',nilai:20000,aktif:true,minBelanja:100000,kadaluwarsa:'2026-12-31T23:59',ket:'Potong Rp 20.000 (min Rp 100.000)'}
  ],
  keranjang:{}
};

const SENSOR={lokasi:'Lahan Blok A - Lembang',node:'Node #A-108',suhu:24.5,terasa:25,kelembapanUdara:82,kelembapanTanah:68,curahHujan:3.2,kecepatanAngin:12,arahAngin:'Timur Laut',kondisi:'Cerah Berawan',kondisiMikro:'Hujan Rintik Sejuk',suhuCoolBox:8.2,
  tren24Jam:[{jam:'12:00',suhu:27.2,kelembapanTanah:64},{jam:'16:00',suhu:26.1,kelembapanTanah:66},{jam:'20:00',suhu:23.4,kelembapanTanah:70},{jam:'00:00',suhu:21.0,kelembapanTanah:72},{jam:'04:00',suhu:19.8,kelembapanTanah:71},{jam:'08:00',suhu:22.6,kelembapanTanah:69},{jam:'Kini',suhu:24.5,kelembapanTanah:68}],
  prakiraan:[{hari:'Besok',suhu:'22° - 27°C',kondisi:'Hujan Ringan',hujan:70,lembap:85,ikon:'rain'},{hari:'Lusa',suhu:'23° - 29°C',kondisi:'Cerah Berawan',hujan:30,lembap:75,ikon:'sun'},{hari:'Sabtu',suhu:'24° - 28°C',kondisi:'Berawan',hujan:30,lembap:78,ikon:'cloud'},{hari:'Minggu',suhu:'21° - 26°C',kondisi:'Hujan Sedang',hujan:80,lembap:88,ikon:'rain'}]
};

const KATEGORI=['Semua','Sayuran','Buah-buahan','Beras & Biji','Rempah-rempah','Pupuk & Nutrisi','Bibit Unggul','Alat Pertanian'];
const STATUS_PESANAN={menunggu:{label:'Menunggu Verifikasi',badge:'badge-yellow'},dibayar:{label:'Pembayaran Terkonfirmasi',badge:'badge-blue'},diproses:{label:'Sedang Diproses',badge:'badge-blue'},dikirim:{label:'Dalam Perjalanan Kurir',badge:'badge-green'},selesai:{label:'Selesai',badge:'badge-green'},dibatalkan:{label:'Dibatalkan',badge:'badge-red'}};
const MENU_ADMIN=[{ke:'#/admin',label:'Dashboard',ikon:'layout-dashboard',tepat:true},{ke:'#/admin/produk',label:'Kelola Produk',ikon:'package'},{ke:'#/admin/persediaan',label:'Persediaan',ikon:'boxes'},{ke:'#/admin/pesanan',label:'Pesanan',ikon:'shopping-cart'},{ke:'#/admin/mitra',label:'Mitra Petani',ikon:'users'},{ke:'#/admin/promo',label:'Kelola Promo',ikon:'ticket'},{ke:'#/admin/cuaca',label:'Cuaca & IoT',ikon:'cloud-sun'},{ke:'#/admin/notifikasi',label:'Notifikasi',ikon:'bell'}];
const MENU_PEMBELI=[{ke:'#/pembeli',label:'Dashboard',ikon:'layout-dashboard',tepat:true},{ke:'#/pembeli/katalog',label:'Katalog Panen',ikon:'store'},{ke:'#/pembeli/keranjang',label:'Keranjang',ikon:'shopping-cart'},{ke:'#/pembeli/pesanan',label:'Pesanan Saya',ikon:'truck'},{ke:'#/pembeli/cuaca',label:'Cuaca & IoT',ikon:'cloud-sun'},{ke:'#/pembeli/notifikasi',label:'Notifikasi',ikon:'bell'}];
const EMOJI_PILIHAN=['🌾','🌶️','🍅','🥬','🧅','🥕','🥔','🍋','🥗','🌿','🪴','🌱','🛠️','🍎','🍊','🍇','🥒','🌽','🍆','🧄','🥚','🍯'];

/* ===== HELPER ===== */
function wc(l, n) {
  return '<div class="weather-cell"><span style="opacity:.85">' + l + '</span><b>' + n + '</b></div>';
}

/* ===== STATE ===== */
const KUNCI_DB = 'taniku_db_v1';
const KUNCI_SESI = 'taniku_sesi';
let DB=null,SESI=null,MENU_BUKA=false,HALAMAN_KINI='',FILTER_KATEGORI='Semua',KATA_CARI='',CHART_AKTIF=null,CARI_TIMEOUT=null;

/* ===== UTIL ===== */
const rp=n=>'Rp '+new Intl.NumberFormat('id-ID').format(Math.round(n||0));
const angka=n=>new Intl.NumberFormat('id-ID').format(n||0);
const tgl=v=>v?new Date(v).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}):'-';
const tglPanjang=v=>v?new Date(v).toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'}):'-';
const tglWaktu=v=>v?new Date(v).toLocaleString('id-ID',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}):'-';
const relatif=v=>{const s=Math.floor((Date.now()-new Date(v))/1000);if(s<60)return'Baru saja';if(s<3600)return Math.floor(s/60)+' menit lalu';if(s<86400)return Math.floor(s/3600)+' jam lalu';return tgl(v)};
const uid=p=>p+'-'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inisial=n=>(n||'').split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase();
const sisaHari=v=>!v?null:Math.ceil((new Date(v)-new Date())/86400000);

/* ===== STORAGE ===== */
function muatDB(){try{const r=localStorage.getItem(KUNCI_DB);if(r){const p=JSON.parse(r);return Object.assign({},JSON.parse(JSON.stringify(DATA_AWAL)),p)}}catch(e){}const a=JSON.parse(JSON.stringify(DATA_AWAL));try{localStorage.setItem(KUNCI_DB,JSON.stringify(a))}catch(e){}return a}
function simpanDB(){try{localStorage.setItem(KUNCI_DB,JSON.stringify(DB))}catch(e){console.error(e)}}
function muatSesi(){try{const r=localStorage.getItem(KUNCI_SESI);return r?JSON.parse(r):null}catch(e){return null}}
function simpanSesi(s){try{if(s)localStorage.setItem(KUNCI_SESI,JSON.stringify(s));else localStorage.removeItem(KUNCI_SESI)}catch(e){}}

/* ===== TOAST & MODAL ===== */
function toast(pesan, tipe){
  tipe = tipe || 'info';
  // tipe: success | warning | error | info
  const w = document.getElementById('toast-wrap');
  if (!w) return;
  const i = { success: 'check-circle-2', warning: 'alert-triangle', error: 'alert-circle', info: 'info' }[tipe] || 'info';
  const el = document.createElement('div');
  el.className = 'toast ' + tipe;
  el.innerHTML = '<i data-lucide="' + i + '"></i><div style="flex:1">' + esc(pesan) + '</div>';
  w.appendChild(el);
  if (window.lucide) lucide.createIcons();
  setTimeout(() => {
    el.classList.add('hilang');
    setTimeout(() => el.remove(), 300);
  }, 3200);
}
function bukaModal(html){const r=document.getElementById('modal-root');if(!r)return;r.innerHTML='<div class="modal-backdrop" data-tutup="1">'+html+'</div>';if(window.lucide)lucide.createIcons()}
function tutupModal(){
  const r = document.getElementById('modal-root');
  if (!r) return;
  const bd = r.querySelector('.modal-backdrop');
  if (bd) {
    bd.classList.add('tutup');
    setTimeout(() => { r.innerHTML = ''; }, 200);
  } else {
    r.innerHTML = '';
  }
}

/* ===== HELPER ===== */
function avatarKonten(user){
  if(user&&user.foto) return '<img src="'+user.foto+'" alt="'+esc(user.nama)+'">';
  return esc((user&&user.avatar)||inisial(user&&user.nama));
}

/* ===== ROUTER ===== */
async function rute(){
  const hash = location.hash || '#/masuk';
  HALAMAN_KINI = hash;
  const b = hash.replace('#/','').split('/').filter(Boolean);

  if (b[0] === 'admin' || b[0] === 'pembeli') {
    if (!SESI) { location.hash = '#/masuk'; return; }
    if (b[0] === 'admin' && SESI.peran !== 'admin') { location.hash = '#/pembeli'; return; }
    if (b[0] === 'pembeli' && SESI.peran !== 'admin' && SESI.peran !== 'pembeli') { location.hash = '#/masuk'; return; }
  } else if (b[0] === 'masuk' || b[0] === 'daftar' || b[0] === '') {
    if (SESI) { location.hash = SESI.peran === 'admin' ? '#/admin' : '#/pembeli'; return; }
  }
  bounceKeranjang();
  await render();
}

/*===== RENDER =====*/
async function render(){
  const app = document.getElementById('app');
  if (!app) return;

  const hash = HALAMAN_KINI || '#/masuk';
  const b = hash.replace('#/','').split('/').filter(Boolean);

  if (!b.length || b[0] === 'masuk') {
    app.innerHTML = halamanMasuk();
  } else if (b[0] === 'daftar') {
    app.innerHTML = halamanDaftar();
  } else if (b[0] === 'admin') {
    app.innerHTML = layout(SESI, MENU_ADMIN, await halamanAdmin(b.slice(1)));
  } else if (b[0] === 'pembeli') {
    app.innerHTML = layout(SESI, MENU_PEMBELI, await halamanPembeli(b.slice(1)));
  } else {
    app.innerHTML = halamanMasuk();
  }

  if (window.lucide) lucide.createIcons();

  if (HALAMAN_KINI === '#/admin/cuaca' || HALAMAN_KINI === '#/pembeli/cuaca') {
    setTimeout(muatCuaca, 150);
  }

  if (window.__CHART_AFTER) {
    const f = window.__CHART_AFTER;
    window.__CHART_AFTER = null;
    setTimeout(() => {
      if (CHART_AKTIF) { try { CHART_AKTIF.destroy(); } catch (e) {} }
      CHART_AKTIF = null;
      try { f(); } catch (e) { console.error('Chart error:', e); }
    }, 80);
  }
}
/* ===== LOGIN ===== */
function halamanMasuk(){return '<div class="login-wrap"><div class="login-card">'+
  '<div class="login-brand"><div class="login-logo"><i data-lucide="sprout"></i></div>'+
  '<div class="login-title">Taniku</div><div class="login-sub">Sistem Manajemen Panen & Kemitraan</div></div>'+
  '<div class="demo-box"><b>Akun Demo:</b><br>Admin: admin@taniku.id / admin123<br>Pembeli: pembeli@taniku.id / pembeli123</div>'+
  '<form data-form="masuk" autocomplete="off">'+
  '<div class="form-group"><label class="label">Email</label><input class="input" name="email" type="email" value="admin@taniku.id" required></div>'+
  '<div class="form-group"><label class="label">Kata Sandi</label><input class="input" name="sandi" type="password" value="admin123" required></div>'+
  '<button class="btn btn-primary btn-block" type="submit">Masuk</button></form>'+
  '<p class="text-center text-sm text-muted mt-5">Belum punya akun? <a href="#/daftar" class="text-g font-bold">Daftar</a></p>'+
  '</div></div>'}
function halamanDaftar(){return '<div class="login-wrap"><div class="login-card">'+
  '<div class="login-brand"><div class="login-logo"><i data-lucide="sprout"></i></div>'+
  '<div class="login-title">Daftar</div><div class="login-sub">Bergabung dengan Taniku</div></div>'+
  '<form data-form="daftar" autocomplete="off">'+
  '<div class="form-group"><label class="label">Nama</label><input class="input" name="nama" required></div>'+
  '<div class="form-group"><label class="label">Email</label><input class="input" name="email" type="email" required></div>'+
  '<div class="form-group"><label class="label">Kata Sandi</label><input class="input" name="sandi" type="password" minlength="6" required></div>'+
  '<div class="form-group"><label class="label">Peran</label><select class="input" name="peran"><option value="pembeli">Pembeli</option><option value="admin">Admin</option></select></div>'+
  '<button class="btn btn-primary btn-block" type="submit">Daftar</button></form>'+
  '<p class="text-center text-sm text-muted mt-5">Sudah punya akun? <a href="#/masuk" class="text-g font-bold">Masuk</a></p>'+
  '</div></div>'}

/* ===== LAYOUT ===== */
function layout(user,menu,isi){
  const belum=DB.notifikasi.filter(n=>n.peran===user.peran&&!n.dibaca).length;
  const keranjang=Object.values(DB.keranjang[user.id]||{}).reduce((a,b)=>a+b,0);
  const menuHtml=menu.map(m=>{const aktif=HALAMAN_KINI===m.ke||(!m.tepat&&HALAMAN_KINI.startsWith(m.ke));
    const pill=m.ikon==='bell'&&belum>0?'<span class="pill">'+belum+'</span>':m.ikon==='shopping-cart'&&keranjang>0?'<span class="pill">'+keranjang+'</span>':'';
    return '<a class="nav-link'+(aktif?' active':'')+'" href="'+m.ke+'"><i data-lucide="'+m.ikon+'"></i><span>'+m.label+'</span>'+pill+'</a>'}).join('');
  const ph=user.peran==='admin'?'Cari komoditas, mitra...':'Cari sayur segar, buah, beras...';
  return '<div class="app-shell">'+
    '<div class="sidebar-backdrop'+(MENU_BUKA?' show':'')+'" data-aksi="tutup-menu"></div>'+
    '<aside class="sidebar'+(MENU_BUKA?' open':'')+'">'+
    '<div class="brand"><div class="brand-logo"><i data-lucide="sprout"></i></div>'+
    '<div><div class="brand-name">Taniku</div><span class="brand-sub">Ketahanan Pangan Digital</span></div></div>'+
    '<div class="panel-label">Panel '+user.peran+'</div>'+
    '<nav class="nav">'+menuHtml+'</nav>'+
    '<div class="sidebar-footer">'+
      '<div class="user-chip" data-aksi="edit-profil" style="cursor:pointer" title="Ubah profil">'+
        '<div class="user-avatar">'+avatarKonten(user)+'</div>'+
        '<div class="user-info"><div class="user-name">'+esc(user.nama)+'</div><div class="user-role">'+user.peran+'</div></div>'+
      '</div>'+
      '<button class="btn btn-danger btn-block" data-aksi="keluar"><i data-lucide="log-out"></i> Keluar</button>'+
    '</div></aside>'+
    '<div class="main"><header class="topbar">'+
    '<button class="mobile-toggle" data-aksi="buka-menu"><i data-lucide="menu"></i></button>'+
    '<div class="search-wrap"><i data-lucide="search"></i><input class="input" placeholder="'+ph+'" data-cari value="'+esc(KATA_CARI)+'"></div>'+
    '<div class="topbar-actions">'+
    '<span class="sync-chip"><i data-lucide="wifi"></i> Sinkronisasi: 2 mnt lalu</span>'+
    '<a class="btn-icon" href="#/'+user.peran+'/keranjang" title="Keranjang"><i data-lucide="shopping-cart"></i>'+(keranjang>0?'<span class="badge-dot">'+keranjang+'</span>':'')+'</a>'+
    '<a class="btn-icon" href="#/'+user.peran+'/notifikasi" title="Notifikasi"><i data-lucide="bell"></i>'+(belum>0?'<span class="badge-dot">'+belum+'</span>':'')+'</a>'+
    '<div class="topbar-avatar" data-aksi="edit-profil" title="Ubah Profil">'+avatarKonten(user)+'</div>'+
    '</div></header>'+
    '<main class="page-content">'+isi+'</main>'+
    '<footer class="page-footer">© 2025 Taniku Indonesia • Ketahanan Pangan Digital</footer>'+
    '</div></div>'}

/* ===== ADMIN ===== */
async function halamanAdmin(sub){
  const r = sub[0] || 'dasbor';
  if(r==='produk')return adminProduk();
  if(r==='persediaan')return adminPersediaan();
  if(r==='pesanan')return adminPesanan();
  if(r==='mitra')return adminMitra();
  if(r==='promo')return adminPromo();
  if(r==='cuaca')return adminCuaca();
  if(r==='notifikasi')return await adminNotif();
  return adminDasbor();
}

function adminDasbor(){
  const totalNilai=DB.produk.reduce((a,p)=>a+p.harga*p.stok,0);
  const baru=DB.pesanan.filter(o=>o.status==='menunggu').length;
  const rendah=DB.produk.filter(p=>p.stok>0&&p.stok<=p.stokMin);
  const habis=DB.produk.filter(p=>p.stok===0);
  const top=[...DB.produk].sort((a,b)=>b.terjual-a.terjual).slice(0,6);
  window.__CHART_AFTER=()=>{const c=document.getElementById('chartPenjualan');if(!c||!window.Chart)return;
    CHART_AKTIF=new Chart(c,{type:'bar',data:{labels:top.map(p=>p.nama.length>14?p.nama.slice(0,14)+'…':p.nama),
      datasets:[{label:'Terjual',data:top.map(p=>p.terjual),backgroundColor:'#2F6B4F',borderRadius:8}]},
      options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true},x:{grid:{display:false}}}}})};
  return '<div class="page-head"><div><h1 class="page-title">Selamat bertugas, '+esc(SESI.nama)+'</h1>'+
    '<p class="page-sub">Ringkasan operasional • '+tglPanjang(new Date())+'</p></div>'+
    '<span class="badge badge-green"><i data-lucide="check-circle-2"></i> Operasional Normal</span></div>'+
    '<div class="stats-grid mb-5">'+
    stat('package','Total Produk',angka(DB.produk.length),DB.produk.length+' jenis aktif','bg-green')+
    stat('shopping-cart','Pesanan Baru',angka(baru),'Menunggu verifikasi','bg-yellow')+
    stat('alert-triangle','Stok Kritis',angka(rendah.length+habis.length),habis.length+' habis','bg-red')+
    stat('dollar-sign','Nilai Persediaan',rp(totalNilai),'Estimasi stok','bg-blue')+'</div>'+
    '<div class="two-col mb-5">'+
    '<div class="card"><div class="card-head"><div><div class="card-title">Komoditas Terlaris</div><div class="card-sub">6 produk teratas</div></div></div>'+
    '<div class="card-body"><div class="chart-wrap"><canvas id="chartPenjualan"></canvas></div></div></div>'+
    '<div class="card"><div class="card-head"><div><div class="card-title">Peringatan Prioritas</div></div></div><div class="card-body" style="padding:0">'+
    (habis.length?habis.slice(0,3).map(p=>'<div class="flex items-center gap-3 p-4" style="border-bottom:1px solid rgba(221,235,221,.5)"><span class="badge badge-red">Habis</span><span class="flex-1 font-bold">'+esc(p.nama)+'</span></div>').join(''):'')+
    (rendah.length?rendah.slice(0,3).map(p=>'<div class="flex items-center gap-3 p-4" style="border-bottom:1px solid rgba(221,235,221,.5)"><span class="badge badge-yellow">Rendah</span><span class="flex-1 font-bold">'+esc(p.nama)+'</span></div>').join(''):'')+
    (!habis.length&&!rendah.length?'<div class="empty"><div class="empty-icon"><i data-lucide="check-circle-2"></i></div><h3>Semua Aman</h3></div>':'')+
    '</div></div></div>'+
    '<div class="card"><div class="card-head"><div><div class="card-title">Pesanan Terbaru</div></div><a href="#/admin/pesanan" class="btn btn-outline btn-sm">Lihat Semua</a></div>'+
    '<div class="table-wrap">'+(DB.pesanan.length?'<table class="tbl"><thead><tr><th>No.</th><th>Pembeli</th><th>Total</th><th>Status</th></tr></thead><tbody>'+
      DB.pesanan.slice(0,5).map(o=>'<tr><td class="font-bold">'+esc(o.nomor)+'</td><td>'+esc(o.pembeliNama)+'</td><td class="font-bold text-g">'+rp(o.total)+'</td><td><span class="badge '+(STATUS_PESANAN[o.status]?.badge||'badge-yellow')+'">'+(STATUS_PESANAN[o.status]?.label||o.status)+'</span></td></tr>').join('')+
      '</tbody></table>':'<div class="empty"><div class="empty-icon"><i data-lucide="inbox"></i></div><h3>Belum Ada Pesanan</h3></div>')+'</div></div>'}
function stat(i,l,n,note,w){return '<div class="stat-card"><div class="stat-icon '+w+'"><i data-lucide="'+i+'"></i></div><div class="stat-label">'+l+'</div><div class="stat-value">'+n+'</div><div class="stat-note">'+note+'</div></div>'}

function adminProduk(){const cari=KATA_CARI.toLowerCase();
  const list=DB.produk.filter(p=>!cari||p.nama.toLowerCase().includes(cari)||p.kategori.toLowerCase().includes(cari));
  return '<div class="page-head"><div><h1 class="page-title">Kelola Produk</h1><p class="page-sub">'+DB.produk.length+' komoditas</p></div>'+
    '<button class="btn btn-primary" data-aksi="tambah-produk"><i data-lucide="plus"></i> Tambah Produk</button></div>'+
    '<div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>Produk</th><th>Kategori</th><th>Harga</th><th>Stok</th><th>Batch</th><th style="text-align:right">Aksi</th></tr></thead><tbody>'+
    (list.length?list.map(p=>{const rendah=p.stok>0&&p.stok<=p.stokMin;const habis=p.stok===0;
      const b=habis?'<span class="badge badge-red">Habis</span>':rendah?'<span class="badge badge-yellow">Rendah</span>':'<span class="badge badge-green">Aman</span>';
      return '<tr><td><div class="flex items-center gap-3"><div style="width:40px;height:40px;border-radius:12px;background:'+p.warna+';display:grid;place-items:center;font-size:20px">'+p.emoji+'</div>'+
      '<div><div class="font-bold">'+esc(p.nama)+'</div><div class="text-xs text-muted">'+esc(p.petani)+'</div></div></div></td>'+
      '<td><span class="badge badge-green">'+esc(p.kategori)+'</span></td>'+
      '<td class="font-bold text-g">'+rp(p.harga)+'</td>'+
      '<td>'+p.stok+' '+esc(p.satuan)+'<div class="mt-1">'+b+'</div></td>'+
      '<td class="text-xs text-muted">'+esc(p.batch||'-')+'</td>'+
      '<td style="text-align:right"><div class="flex gap-1 justify-center">'+
      '<button class="btn-icon" data-aksi="edit-produk" data-id="'+p.id+'"><i data-lucide="pencil"></i></button>'+
      '<button class="btn-icon" data-aksi="hapus-produk" data-id="'+p.id+'"><i data-lucide="trash-2"></i></button>'+
      '</div></td></tr>'}).join(''):'<tr><td colspan="6"><div class="empty"><h3>Tidak Ada Produk</h3></div></td></tr>')+
    '</tbody></table></div></div>'}

function adminPersediaan(){
  const totalNilai=DB.produk.reduce((a,p)=>a+p.harga*p.stok,0);
  const rendah=DB.produk.filter(p=>p.stok>0&&p.stok<=p.stokMin);
  const habis=DB.produk.filter(p=>p.stok===0);
  return '<div class="page-head"><div><h1 class="page-title">Persediaan</h1><p class="page-sub">FEFO aktif • '+DB.produk.length+' komoditas</p></div>'+
    '<button class="btn btn-primary" data-aksi="stok-masuk"><i data-lucide="plus"></i> Stok Masuk</button></div>'+
    '<div class="stats-grid mb-5">'+
    stat('boxes','Total Stok',angka(DB.produk.reduce((a,p)=>a+p.stok,0))+' unit','lot terdaftar','bg-green')+
    stat('dollar-sign','Nilai Persediaan',rp(totalNilai),'Estimasi gudang','bg-blue')+
    stat('alert-triangle','Stok Rendah',angka(rendah.length),'Di bawah minimum','bg-yellow')+
    stat('x-circle','Stok Habis',angka(habis.length),'Perlu restock','bg-red')+'</div>'+
    '<div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>Komoditas</th><th>Stok</th><th>Min</th><th>Batch</th><th>Kedaluwarsa</th><th>Status</th></tr></thead><tbody>'+
    DB.produk.map(p=>{const sisa=sisaHari(p.kedaluwarsa);let b='<span class="badge badge-green">Aman</span>';
      if(p.stok===0)b='<span class="badge badge-red">Habis</span>';else if(p.stok<=p.stokMin)b='<span class="badge badge-yellow">Rendah</span>';
      const kad=p.kedaluwarsa?(sisa!==null&&sisa<=30?'<span class="badge badge-red">'+sisa+' hari</span>':tgl(p.kedaluwarsa)):'-';
      return '<tr><td><div class="flex items-center gap-3"><span style="width:36px;height:36px;border-radius:10px;background:'+p.warna+';display:grid;place-items:center;font-size:18px">'+p.emoji+'</span>'+
      '<div><div class="font-bold">'+esc(p.nama)+'</div><div class="text-xs text-muted">'+esc(p.kategori)+'</div></div></div></td>'+
      '<td class="font-bold">'+p.stok+' '+esc(p.satuan)+'</td><td>'+p.stokMin+'</td>'+
      '<td class="text-xs text-muted">'+esc(p.batch||'-')+'</td><td class="text-xs">'+kad+'</td><td>'+b+'</td></tr>'}).join('')+
    '</tbody></table></div></div>'}

async function adminPesanan(){
  let list = [];
  try {
    const res = await Api.daftarPesanan();
    list = (res || []).map(o => ({
      id: o.id,
      nomor: o.nomor,
      pembeliId: o.pembeli_id,
      pembeliNama: o.pembeli_nama,
      item: Array.isArray(o.item) ? o.item : (typeof o.item === 'string' ? JSON.parse(o.item) : []),
      subtotal: o.subtotal,
      ongkir: o.ongkir,
      diskon: o.diskon,
      biayaLayanan: o.biaya_layanan,
      total: o.total,
      promoKode: o.promo_kode,
      status: o.status,
      statusPembayaran: o.status_pembayaran,
      metodePembayaran: o.metode_pembayaran,
      alamat: o.alamat,
      catatan: o.catatan,
      tanggal: o.tanggal
    }));
    list.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
    DB.pesanan = list;
    simpanDB();
  } catch (e) {
    console.error('Gagal ambil pesanan:', e);
    list = DB.pesanan || [];
  }

  return '<div class="page-head"><div><h1 class="page-title">Pesanan</h1><p class="page-sub">' + list.length + ' total • ' + list.filter(o => o.status === 'menunggu' || o.status === 'menunggu_bayar').length + ' menunggu</p></div></div>' +
    '<div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>No.</th><th>Pembeli</th><th>Item</th><th>Total</th><th>Status</th><th style="text-align:right">Aksi</th></tr></thead><tbody>' +
    (list.length ? list.map(o => '<tr><td><div class="font-bold">' + esc(o.nomor) + '</div><div class="text-xs text-muted">' + tglWaktu(o.tanggal) + '</div></td>' +
      '<td>' + esc(o.pembeliNama) + '</td><td class="text-xs">' + (o.item ? o.item.length : 0) + ' produk</td>' +
      '<td class="font-bold text-g">' + rp(o.total) + '</td>' +
      '<td><span class="badge ' + (STATUS_PESANAN[o.status]?.badge || 'badge-yellow') + '">' + (STATUS_PESANAN[o.status]?.label || o.status) + '</span></td>' +
      '<td style="text-align:right"><div class="flex gap-1 justify-center">' +
      '<button class="btn btn-outline btn-sm" data-aksi="detail-pesanan" data-id="' + o.id + '">Detail</button>' +
      (o.status !== 'selesai' && o.status !== 'dibatalkan' ? '<button class="btn btn-primary btn-sm" data-aksi="ubah-status" data-id="' + o.id + '">Ubah</button>' : '') +
      '</div></td></tr>').join('') : '<tr><td colspan="6"><div class="empty"><h3>Belum Ada Pesanan</h3></div></td></tr>') +
    '</tbody></table></div></div>';
}
function adminCuaca(){
  const s = SENSOR;
  window.__CHART_AFTER = () => {
    const c = document.getElementById('chartCuaca');
    if (!c || !window.Chart) return;
    CHART_AKTIF = new Chart(c, {
      type: 'line',
      data: {
        labels: s.tren24Jam.map(t => t.jam),
        datasets: [
          { label: 'Suhu (°C)', data: s.tren24Jam.map(t => t.suhu), borderColor: '#5B9BD5', backgroundColor: 'rgba(91,155,213,.15)', tension: .4, fill: true },
          { label: 'Kel. Tanah (%)', data: s.tren24Jam.map(t => t.kelembapanTanah), borderColor: '#2F6B4F', backgroundColor: 'rgba(47,107,79,.12)', tension: .4, fill: true }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: false }, x: { grid: { display: false } } } }
    });
  };

  return '<div class="page-head"><div><h1 class="page-title">Cuaca & IoT</h1>' +
    '<p class="page-sub" id="cuaca-lokasi">Memuat cuaca real dari Bandung...</p></div>' +
    '<span class="badge badge-green"><i data-lucide="radio"></i> Sensor Aktif</span></div>' +

    '<div class="two-col mb-5"><div class="weather-hero" id="cuaca-hero">' +
    '<div class="text-xs uppercase tracking-wide" style="opacity:.85">Memuat data...</div>' +
    '<div class="weather-temp" id="cuaca-suhu">--°C</div>' +
    '<div class="text-sm" id="cuaca-kondisi" style="opacity:.9">Mengambil data dari satelit...</div>' +
    '<div class="weather-row" id="cuaca-row"></div>' +
    '</div>' +

    '<div class="card"><div class="card-head"><div class="card-title">Rekomendasi</div></div><div class="card-body">' +
    '<div class="flex items-start gap-3 mb-3"><span class="badge badge-yellow">⚠️</span><div><div class="font-bold text-sm">Perhatian Cuaca</div><div class="text-xs text-muted mt-1">Cek kondisi cuaca terkini untuk jadwal panen.</div></div></div>' +
    '<div class="flex items-start gap-3"><span class="badge badge-green">💧</span><div><div class="font-bold text-sm">Kelembapan Tanah</div><div class="text-xs text-muted mt-1">Pantau kelembapan untuk penyiraman optimal.</div></div></div>' +
    '</div></div></div>' +

    '<div class="card mb-5"><div class="card-head"><div><div class="card-title">Tren 24 Jam</div><div class="card-sub">Data dari sensor Open-Meteo</div></div></div>' +
    '<div class="card-body"><div class="chart-wrap"><canvas id="chartCuaca"></canvas></div></div></div>' +

    '<div class="card"><div class="card-head"><div><div class="card-title">Prakiraan 4 Hari</div><div class="card-sub">Sumber: Open-Meteo (real-time)</div></div></div>' +
    '<div class="card-body"><div class="product-grid" id="cuaca-prakiraan">' +
    '<div class="text-center text-muted py-5">Memuat prakiraan...</div>' +
    '</div></div></div>';
}

function wc(l, n) {
  return '<div class="weather-cell"><span style="opacity:.85">' + l + '</span><b>' + n + '</b></div>';
}

/* ===== NOTIF ITEM ===== */
function notifItem(n){
  var ik = { pesanan:'shopping-bag', produk:'package', komplain:'message-square', cuaca:'cloud-sun', persediaan:'boxes', mitra:'users' };
  var wr = { pesanan:'bg-blue', produk:'bg-green', komplain:'bg-yellow', cuaca:'bg-blue', persediaan:'bg-red', mitra:'bg-green' };
  return '<div class="notif-item' + (n.dibaca ? '' : ' unread') + '" data-aksi="baca-notif" data-id="' + n.id + '">' +
    '<div class="notif-icon ' + (wr[n.tipe] || 'bg-green') + '"><i data-lucide="' + (ik[n.tipe] || 'bell') + '"></i></div>' +
    '<div class="notif-body">' +
    '<div class="notif-title">' + esc(n.judul) + '</div>' +
    '<div class="notif-desc">' + esc(n.pesan) + '</div>' +
    '<div class="notif-time">' + relatif(n.waktu) + '</div>' +
    '</div></div>';
}
/*===== ADMIN NOTIF =====*/
async function adminNotif(){
  let list = [];
  try {
    const res = await Api.daftarNotifikasi('admin');
    list = res || [];
    DB.notifikasi = DB.notifikasi.filter(n => n.peran !== 'admin')
      .concat(list.map(n => ({...n, peran:'admin'})));
    simpanDB();
  } catch (e) {
    console.error('Gagal ambil notif admin:', e);
    list = DB.notifikasi.filter(n => n.peran === 'admin');
  }
  list = list.sort((a, b) => new Date(b.waktu) - new Date(a.waktu));

  return '<div class="page-head"><div><h1 class="page-title">Notifikasi</h1>' +
    '<p class="page-sub">' + list.filter(n => !n.dibaca).length + ' belum dibaca</p></div>' +
    '<div class="flex gap-2">' +
    '<button class="btn btn-outline" data-aksi="tandai-semua"><i data-lucide="check-check"></i> Tandai Semua</button>' +
    '<button class="btn btn-danger" data-aksi="hapus-lama"><i data-lucide="trash-2"></i> Hapus Lama</button>' +
    '</div></div>' +
    '<div class="card">' +
    (list.length ? list.map(n => notifItem(n)).join('') :
      '<div class="empty"><div class="empty-icon"><i data-lucide="bell-off"></i></div>' +
      '<h3>Tidak Ada Notifikasi</h3></div>') +
    '</div>';
}

/* ===== ADMIN PROMO ===== */
function statusPromo(p){
  const now=new Date();
  if(!p.aktif) return {label:'Nonaktif',badge:'badge-red'};
  if(p.kadaluwarsa && new Date(p.kadaluwarsa)<now) return {label:'Kadaluwarsa',badge:'badge-yellow'};
  return {label:'Aktif',badge:'badge-green'};
}

function adminPromo(){
  const list=(DB.promo||[]).slice().sort((a,b)=>new Date(b.kadaluwarsa||0)-new Date(a.kadaluwarsa||0));
  return '<div class="page-head"><div><h1 class="page-title">Kelola Promo</h1>'+
    '<p class="page-sub">'+list.length+' kode promo terdaftar</p></div>'+
    '<button class="btn btn-primary" data-aksi="tambah-promo"><i data-lucide="plus"></i> Tambah Promo</button></div>'+

    '<div class="card"><div class="table-wrap"><table class="tbl"><thead><tr>'+
    '<th>Kode</th><th>Tipe</th><th>Nilai</th><th>Min Belanja</th><th>Kadaluwarsa</th><th>Status</th><th style="text-align:right">Aksi</th>'+
    '</tr></thead><tbody>'+
    (list.length?list.map(p=>{
      const st=statusPromo(p);
      const tipeLabel=p.tipe==='ongkir'?'Potong Ongkir':'Potong Belanja';
      const kad=p.kadaluwarsa?new Date(p.kadaluwarsa).toLocaleString('id-ID',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}):'Tanpa batas';
      const expired=p.kadaluwarsa && new Date(p.kadaluwarsa)<new Date();
      return '<tr><td><div class="font-bold" style="font-family:monospace;font-size:14px">'+esc(p.kode)+'</div>'+
      '<div class="text-xs text-muted">'+esc(p.ket||'-')+'</div></td>'+
      '<td><span class="badge badge-blue">'+tipeLabel+'</span></td>'+
      '<td class="font-bold text-g">'+rp(p.nilai)+'</td>'+
      '<td class="text-xs">'+(p.minBelanja>0?rp(p.minBelanja):'-')+'</td>'+
      '<td class="text-xs '+(expired?'text-red':'')+'">'+kad+'</td>'+
      '<td><span class="badge '+st.badge+'">'+st.label+'</span></td>'+
      '<td style="text-align:right"><div class="flex gap-1 justify-center">'+
      '<button class="btn-icon" data-aksi="toggle-promo" data-id="'+p.id+'" title="Aktif/Nonaktif"><i data-lucide="'+(p.aktif?'toggle-right':'toggle-left')+'"></i></button>'+
      '<button class="btn-icon" data-aksi="edit-promo" data-id="'+p.id+'"><i data-lucide="pencil"></i></button>'+
      '<button class="btn-icon" data-aksi="hapus-promo" data-id="'+p.id+'"><i data-lucide="trash-2"></i></button>'+
      '</div></td></tr>';
    }).join(''):'<tr><td colspan="7"><div class="empty"><div class="empty-icon"><i data-lucide="ticket"></i></div><h3>Belum Ada Promo</h3><p>Klik "Tambah Promo" untuk membuat kode promo.</p></div></td></tr>')+
    '</tbody></table></div></div>'+
    '<div class="card mt-4"><div class="card-head"><div><div class="card-title">ℹ️ Tips Penggunaan</div></div></div>'+
    '<div class="card-body"><div class="text-sm" style="line-height:1.8">'+
    '<b>Tipe "Potong Ongkir"</b> — nilai promo akan dipotong dari biaya ongkir. Contoh: nilai Rp 15.000 = gratis ongkir maksimal Rp 15.000.<br>'+
    '<b>Tipe "Potong Belanja"</b> — nilai promo dipotong langsung dari subtotal belanja.<br>'+
    '<b>Kadaluwarsa</b> — setelah waktu terlewat, promo otomatis tidak bisa dipakai.<br>'+
    '<b>Min Belanja</b> — isi 0 jika tidak ada minimum. Isi Rp 100.000 jika minimal belanja Rp 100.000.'+
    '</div></div></div>';
}

function modalTambahPromo(){
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Tambah Promo Baru</div>'+
    '<div class="modal-sub">Buat kode promo untuk pembeli</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="form-group"><label class="label">Kode Promo *</label>'+
    '<input class="input" id="pr-kode" placeholder="Contoh: NEWYEAR2026" style="text-transform:uppercase;font-family:monospace;font-weight:700"></div>'+
    '<div class="form-group"><label class="label">Tipe Promo *</label>'+
    '<select class="input" id="pr-tipe">'+
    '<option value="ongkir">Potong Ongkir</option>'+
    '<option value="belanja">Potong Belanja</option>'+
    '</select></div>'+
    '<div class="form-group"><label class="label">Nilai Diskon (Rp) *</label>'+
    '<input class="input" id="pr-nilai" type="number" min="0" placeholder="15000"></div>'+
    '<div class="form-group"><label class="label">Minimum Belanja (Rp)</label>'+
    '<input class="input" id="pr-min" type="number" min="0" value="0" placeholder="0"></div>'+
    '<div class="form-group"><label class="label">Kadaluwarsa (tanggal & jam) *</label>'+
    '<input class="input" id="pr-kadaluwarsa" type="datetime-local"></div>'+
    '<div class="form-group"><label class="label">Keterangan / Deskripsi</label>'+
    '<input class="input" id="pr-ket" placeholder="Contoh: Diskon Akhir Tahun Rp 15.000"></div>'+
    '<div class="form-row"><label><input type="checkbox" id="pr-aktif" checked> Aktifkan promo</label></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-promo-baru"><i data-lucide="save"></i> Simpan</button></div></div>');
  // Set default kadaluwarsa = 30 hari dari sekarang
  setTimeout(()=>{
    const el=document.getElementById('pr-kadaluwarsa');
    if(el){
      const d=new Date(Date.now()+30*86400000);
      const pad=n=>String(n).padStart(2,'0');
      el.value=d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())+'T'+pad(d.getHours())+':'+pad(d.getMinutes());
    }
  },50);
}

function modalEditPromo(id){
  const p=(DB.promo||[]).find(x=>x.id===id);if(!p)return;
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Ubah Promo</div>'+
    '<div class="modal-sub">Kode: '+esc(p.kode)+'</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="form-group"><label class="label">Kode Promo</label>'+
    '<input class="input" id="pr-kode" value="'+esc(p.kode)+'" style="text-transform:uppercase;font-family:monospace;font-weight:700"></div>'+
    '<div class="form-group"><label class="label">Tipe Promo</label>'+
    '<select class="input" id="pr-tipe">'+
    '<option value="ongkir"'+(p.tipe==='ongkir'?' selected':'')+'>Potong Ongkir</option>'+
    '<option value="belanja"'+(p.tipe==='belanja'?' selected':'')+'>Potong Belanja</option>'+
    '</select></div>'+
    '<div class="form-group"><label class="label">Nilai Diskon (Rp)</label>'+
    '<input class="input" id="pr-nilai" type="number" value="'+p.nilai+'"></div>'+
    '<div class="form-group"><label class="label">Minimum Belanja (Rp)</label>'+
    '<input class="input" id="pr-min" type="number" value="'+(p.minBelanja||0)+'"></div>'+
    '<div class="form-group"><label class="label">Kadaluwarsa</label>'+
    '<input class="input" id="pr-kadaluwarsa" type="datetime-local" value="'+(p.kadaluwarsa||'')+'"></div>'+
    '<div class="form-group"><label class="label">Keterangan</label>'+
    '<input class="input" id="pr-ket" value="'+esc(p.ket||'')+'"></div>'+
    '<div class="form-row"><label><input type="checkbox" id="pr-aktif"'+(p.aktif?' checked':'')+'> Aktifkan promo</label></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-promo-edit" data-id="'+p.id+'"><i data-lucide="save"></i> Simpan</button></div></div>');
}

/* ===== PEMBELI ===== */
// SESUDAH
async function halamanPembeli(sub){
  const r = sub[0] || 'dasbor';
  if(r==='katalog')return pembeliKatalog();
  if(r==='produk'&&sub[1])return pembeliDetail(sub[1]);
  if(r==='keranjang')return pembeliKeranjang();
  if(r==='checkout')return pembeliCheckout();
  if(r==='pesanan')return pembeliPesanan(sub);
  if(r==='cuaca')return pembeliCuaca();
  if(r==='notifikasi')return await pembeliNotif();   // ← tambah await
  return pembeliDasbor()
}

function pembeliDasbor(){
  const pop=[...DB.produk].sort((a,b)=>b.terjual-a.terjual).slice(0,4);
  const pesananSaya=DB.pesanan.filter(o=>o.pembeliId===SESI.id);
  const berjalan=pesananSaya.filter(o=>['menunggu','dibayar','diproses','dikirim'].includes(o.status));
  return '<div class="page-head"><div><h1 class="page-title">Halo, '+esc(SESI.nama.split(' ')[0])+'!</h1>'+
    '<p class="page-sub">Selamat berbelanja • '+tglPanjang(new Date())+'</p></div>'+
    '<span class="badge badge-green"><i data-lucide="leaf"></i> 100% Organik</span></div>'+
    '<div class="weather-hero mb-5" style="background:linear-gradient(135deg,#2F6B4F,#4a8a67)">'+
    '<div class="text-xs uppercase tracking-wide" style="opacity:.85">Kondisi Kebun Hari Ini</div>'+
    '<div class="weather-temp">'+SENSOR.suhu+'°C</div>'+
    '<div class="text-sm" style="opacity:.9">'+esc(SENSOR.kondisiMikro)+' • Kelembapan '+SENSOR.kelembapanUdara+'%</div>'+
    '<div class="weather-row">'+wc('Kel. Tanah',SENSOR.kelembapanTanah+'%')+wc('Curah Hujan',SENSOR.curahHujan+' mm/j')+wc('Cool Box',SENSOR.suhuCoolBox+'°C')+'</div></div>'+
    (berjalan.length?'<div class="card mb-5"><div class="card-head"><div><div class="card-title">Pesanan Berjalan</div><div class="card-sub">'+berjalan.length+' pesanan</div></div>'+
    '<a href="#/pembeli/pesanan" class="btn btn-outline btn-sm">Lihat Semua</a></div><div class="card-body" style="padding:0">'+
    berjalan.slice(0,2).map(o=>'<div class="p-4" style="border-bottom:1px solid rgba(221,235,221,.5)">'+
    '<div class="flex justify-between items-start mb-2"><div><div class="font-bold">'+esc(o.nomor)+'</div>'+
    '<div class="text-xs text-muted">'+tglWaktu(o.tanggal)+'</div></div>'+
    '<span class="badge '+(STATUS_PESANAN[o.status]?.badge||'badge-yellow')+'">'+(STATUS_PESANAN[o.status]?.label||o.status)+'</span></div>'+
    '<div class="flex justify-between items-center"><span class="font-bold text-g">'+rp(o.total)+'</span>'+
    '<a href="#/pembeli/pesanan/'+o.id+'" class="btn btn-secondary btn-sm">Lacak</a></div></div>').join('')+'</div></div>':'')+
    '<div class="page-head" style="margin-top:24px"><div><h2 class="page-title" style="font-size:18px">Produk Populer</h2><p class="page-sub">Pilihan terbaik</p></div>'+
    '<a href="#/pembeli/katalog" class="btn btn-outline btn-sm">Lihat Katalog</a></div>'+
    '<div class="product-grid">'+pop.map(p=>kartuProduk(p)).join('')+'</div>'}

function kartuProduk(p){
  const habis=p.stok===0;const rendah=p.stok>0&&p.stok<=p.stokMin;
  return '<div class="product-card"><div class="product-img" style="background:linear-gradient(135deg,'+p.warna+',#FFFFFF)">'+
    '<span>'+p.emoji+'</span>'+
    '<div class="product-badges">'+(p.organik?'<span class="badge badge-dark"><i data-lucide="leaf"></i> Organik</span>':'')+
    (habis?'<span class="badge badge-red">Habis</span>':rendah?'<span class="badge badge-yellow">Rendah</span>':'')+'</div>'+
    '<span class="product-rating"><i data-lucide="star"></i> '+p.rating+'</span></div>'+
    '<div class="product-body"><div class="product-cat">'+esc(p.kategori)+'</div>'+
    '<div class="product-name" data-aksi="detail-produk" data-id="'+p.id+'">'+esc(p.nama)+'</div>'+
    '<div class="product-loc"><i data-lucide="map-pin"></i> '+esc(p.lokasi)+'</div>'+
    '<div class="product-price"><div><div class="product-price-main">'+rp(p.harga)+'</div>'+
    '<div class="product-price-unit">/ '+esc(p.satuan)+'</div></div>'+
    (habis?'<button class="btn btn-secondary btn-sm" disabled>Habis</button>':'<button class="btn btn-primary btn-sm" data-aksi="tambah-keranjang" data-id="'+p.id+'"><i data-lucide="plus"></i> Tambah</button>')+
    '</div></div></div>'}

function pembeliKatalog(){const cari=KATA_CARI.toLowerCase();
  const list=DB.produk.filter(p=>{const cc=!cari||p.nama.toLowerCase().includes(cari)||p.petani.toLowerCase().includes(cari);
    const ck=FILTER_KATEGORI==='Semua'||p.kategori===FILTER_KATEGORI;return cc&&ck});
  return '<div class="page-head"><div><h1 class="page-title">Katalog Panen</h1><p class="page-sub">'+list.length+' produk segar</p></div></div>'+
    '<div class="pill-row mb-5">'+KATEGORI.map(k=>'<button class="pill'+(FILTER_KATEGORI===k?' active':'')+'" data-aksi="filter-kategori" data-kategori="'+esc(k)+'">'+esc(k)+'</button>').join('')+'</div>'+
    (list.length?'<div class="product-grid">'+list.map(p=>kartuProduk(p)).join('')+'</div>':
    '<div class="card"><div class="empty"><div class="empty-icon"><i data-lucide="search-x"></i></div><h3>Tidak Ada Produk</h3><p>Coba ubah filter.</p></div></div>')}

function pembeliDetail(id){const p=DB.produk.find(x=>x.id===id);if(!p)return '<div class="card"><div class="empty"><h3>Produk tidak ditemukan</h3></div></div>';
  const habis=p.stok===0;
  return '<a href="#/pembeli/katalog" class="btn btn-ghost btn-sm mb-4"><i data-lucide="arrow-left"></i> Kembali</a>'+
    '<div class="two-col"><div>'+
    '<div class="card mb-5"><div style="height:280px;background:linear-gradient(135deg,'+p.warna+',#FFFFFF);display:grid;place-items:center;font-size:120px">'+p.emoji+'</div></div>'+
    '<div class="card"><div class="card-head"><div class="card-title">Deskripsi</div></div><div class="card-body"><p class="text-sm" style="line-height:1.7">'+esc(p.deskripsi)+'</p></div></div>'+
    '</div><div>'+
    '<div class="card mb-4"><div class="card-body">'+
    '<div class="product-cat mb-2">'+esc(p.kategori)+'</div>'+
    '<h1 class="text-2xl font-extrabold mb-2">'+esc(p.nama)+'</h1>'+
    '<div class="flex items-center gap-3 mb-3"><span class="product-rating" style="position:static"><i data-lucide="star"></i> '+p.rating+'</span>'+
    '<span class="text-xs text-muted">'+angka(p.terjual)+' terjual</span>'+(p.organik?'<span class="badge badge-dark"><i data-lucide="leaf"></i> Organik</span>':'')+'</div>'+
    '<div class="product-loc mb-3"><i data-lucide="map-pin"></i> '+esc(p.petani)+' • '+esc(p.lokasi)+'</div>'+
    '<div class="divider"></div>'+
    '<div class="product-price-main" style="font-size:28px">'+rp(p.harga)+'</div>'+
    '<div class="product-price-unit mb-4">/ '+esc(p.satuan)+'</div>'+
    '<div class="mb-3"><span class="label">Stok</span><div class="font-bold">'+p.stok+' '+esc(p.satuan)+'</div></div>'+
    '<div class="mb-3"><span class="label">Batch</span><div class="text-sm">'+esc(p.batch)+'</div></div>'+
    (p.kedaluwarsa?'<div class="mb-4"><span class="label">Kedaluwarsa</span><div class="text-sm">'+tgl(p.kedaluwarsa)+'</div></div>':'')+
    (habis?'<button class="btn btn-secondary btn-block" disabled>Stok Habis</button>':'<button class="btn btn-primary btn-block btn-lg" data-aksi="tambah-keranjang" data-id="'+p.id+'"><i data-lucide="shopping-cart"></i> Tambah ke Keranjang</button>')+
    '</div></div>'+
    '<div class="card"><div class="card-head"><div class="card-title">Jaminan Mutu</div></div><div class="card-body">'+
    '<div class="flex items-start gap-3 mb-3"><span class="badge badge-green">🛡️</span><div><div class="font-bold text-sm">100% Bebas Pestisida</div></div></div>'+
    '<div class="flex items-start gap-3 mb-3"><span class="badge badge-green">🚚</span><div><div class="font-bold text-sm">Rantai Dingin Terjaga</div></div></div>'+
    '<div class="flex items-start gap-3"><span class="badge badge-green">🔄</span><div><div class="font-bold text-sm">Garansi Ganti Baru</div></div></div>'+
    '</div></div></div></div>'}

function pembeliKeranjang(){const k=DB.keranjang[SESI.id]||{};
  const items=Object.keys(k).map(id=>{const p=DB.produk.find(x=>x.id===id);return p?{...p,jumlah:k[id]}:null}).filter(Boolean);
  const subtotal=items.reduce((a,i)=>a+i.harga*i.jumlah,0);
  const ongkir=items.length?15000:0;const total=subtotal+ongkir;
  if(!items.length)return '<div class="page-head"><div><h1 class="page-title">Keranjang</h1></div></div>'+
    '<div class="card"><div class="empty"><div class="empty-icon"><i data-lucide="shopping-cart"></i></div><h3>Keranjang Kosong</h3><p>Yuk mulai belanja!</p><a href="#/pembeli/katalog" class="btn btn-primary mt-4"><i data-lucide="store"></i> Mulai Belanja</a></div></div>';
  return '<div class="page-head"><div><h1 class="page-title">Keranjang</h1><p class="page-sub">'+items.length+' produk</p></div></div>'+
    '<div class="two-col"><div class="card"><div class="card-body" style="padding:8px 20px">'+
    items.map(i=>'<div class="cart-item"><div class="cart-img" style="background:'+i.warna+'">'+i.emoji+'</div>'+
    '<div style="flex:1;min-width:0"><div class="font-bold truncate">'+esc(i.nama)+'</div>'+
    '<div class="text-xs text-muted">'+rp(i.harga)+' / '+esc(i.satuan)+'</div>'+
    '<div class="flex items-center gap-3 mt-2"><div class="qty">'+
    '<button data-aksi="qty" data-id="'+i.id+'" data-delta="-1">−</button><span>'+i.jumlah+'</span>'+
    '<button data-aksi="qty" data-id="'+i.id+'" data-delta="1">+</button></div>'+
    '<button class="btn btn-danger btn-sm" data-aksi="hapus-item" data-id="'+i.id+'"><i data-lucide="trash-2"></i> Hapus</button></div></div>'+
    '<div class="font-bold text-g">'+rp(i.harga*i.jumlah)+'</div></div>').join('')+
    '</div></div>'+
    '<div class="card" style="align-self:start"><div class="card-head"><div class="card-title">Ringkasan</div></div><div class="card-body">'+
    '<div class="summary-row"><span>Subtotal</span><span class="value">'+rp(subtotal)+'</span></div>'+
    '<div class="summary-row"><span>Ongkir</span><span class="value">'+rp(ongkir)+'</span></div>'+
    '<div class="summary-row total"><span>Total</span><span>'+rp(total)+'</span></div>'+
    '<a href="#/pembeli/checkout" class="btn btn-primary btn-block btn-lg mt-4"><i data-lucide="credit-card"></i> Lanjut Bayar</a>'+
    '<a href="#/pembeli/katalog" class="btn btn-ghost btn-block mt-2">Lanjut Belanja</a>'+
    '</div></div></div>'}

function pembeliCheckout(){
  const k=DB.keranjang[SESI.id]||{};
  const items=Object.keys(k).map(id=>{const p=DB.produk.find(x=>x.id===id);return p?{...p,jumlah:k[id]}:null}).filter(Boolean);
  if(!items.length){setTimeout(()=>{location.hash='#/pembeli/keranjang'},100);return ''}
  const subtotal=items.reduce((a,i)=>a+i.harga*i.jumlah,0);
  return '<a href="#/pembeli/keranjang" class="btn btn-ghost btn-sm mb-4"><i data-lucide="arrow-left"></i> Kembali</a>'+
    '<div class="page-head"><div><h1 class="page-title">Konfirmasi & Bayar</h1><p class="page-sub">Periksa pesanan Anda</p></div></div>'+
    '<div class="two-col"><div>'+
    '<div class="card mb-4"><div class="card-head"><div class="card-title">Alamat Pengiriman</div></div><div class="card-body">'+
    '<div class="font-bold">'+esc(SESI.nama)+'</div><div class="text-sm text-muted mt-1">'+esc(SESI.alamat||'Belum ada alamat')+'</div>'+
    '<div class="text-sm text-muted mt-1">'+esc(SESI.telepon||'-')+'</div>'+
    '<button class="btn btn-outline btn-sm mt-3" data-aksi="edit-profil"><i data-lucide="pencil"></i> Ubah Alamat</button>'+
    '</div></div>'+
    '<div class="card mb-4"><div class="card-head"><div class="card-title">Metode Pengiriman</div></div><div class="card-body">'+
    '<label class="method-card active" data-kirim="dingin" data-biaya="15000"><input type="radio" name="kirim" value="dingin" checked style="display:none"><span class="emoji">🚚</span><div><div class="title">Taniku Express</div><div class="note">Cooler Box • Rp 15.000</div></div></label>'+
    '<label class="method-card" data-kirim="hub" data-biaya="0"><input type="radio" name="kirim" value="hub" style="display:none"><span class="emoji">🏪</span><div><div class="title">Ambil di Hub Lembang</div><div class="note">Gratis</div></div></label>'+
    '</div></div>'+
    '<div class="card mb-4"><div class="card-head"><div class="card-title">Metode Pembayaran</div></div><div class="card-body">'+
    '<label class="method-card active" data-bayar="va"><input type="radio" name="bayar" value="va" checked style="display:none"><span class="emoji">🏦</span><div><div class="title">Virtual Account</div><div class="note">BCA, Mandiri, BRI, BNI</div></div></label>'+
    '<label class="method-card" data-bayar="qris"><input type="radio" name="bayar" value="qris" style="display:none"><span class="emoji">📱</span><div><div class="title">QRIS (Scan QR)</div><div class="note">GoPay, OVO, ShopeePay, DANA</div></div></label>'+
    '<label class="method-card" data-bayar="cod"><input type="radio" name="bayar" value="cod" style="display:none"><span class="emoji">💵</span><div><div class="title">COD</div><div class="note">Khusus Lembang</div></div></label>'+
    '</div></div>'+
    '<div class="card mb-4"><div class="card-head"><div class="card-title">Kode Promo</div></div><div class="card-body">'+
    '<div class="flex gap-2"><input class="input" id="co-promo" placeholder="Contoh: PANENSEGAR" style="flex:1">'+
    '<button class="btn btn-secondary" data-aksi="terapkan-promo">Pakai</button></div>'+
    '<div id="co-promo-info" class="text-xs text-muted mt-2">Masukkan kode promo untuk potongan ongkir/belanja</div>'+
    '</div></div>'+
    '<div class="card"><div class="card-head"><div class="card-title">Catatan Kurir</div></div><div class="card-body"><textarea class="input" id="co-catatan" placeholder="Titipkan di pos satpam jika rumah kosong..."></textarea></div></div>'+
    '</div><div class="card" style="align-self:start"><div class="card-head"><div class="card-title">Ringkasan</div></div><div class="card-body">'+
    items.map(i=>'<div class="flex justify-between mb-2 text-sm"><span>'+i.emoji+' '+esc(i.nama)+' × '+i.jumlah+'</span><span class="font-bold">'+rp(i.harga*i.jumlah)+'</span></div>').join('')+
    '<div class="divider"></div>'+
    '<div class="summary-row"><span>Subtotal</span><span class="value">'+rp(subtotal)+'</span></div>'+
    '<div class="summary-row"><span>Ongkir</span><span class="value" id="co-ongkir">Rp 15.000</span></div>'+
    '<div class="summary-row" id="co-diskon-row" style="display:none"><span>Diskon Promo</span><span class="value text-g" id="co-diskon">-Rp 0</span></div>'+
    '<div class="summary-row total"><span>Total</span><span id="co-total">'+rp(subtotal+15000)+'</span></div>'+
    '<button class="btn btn-primary btn-block btn-lg mt-4" data-aksi="buat-pesanan" data-subtotal="'+subtotal+'">'+
    '<i data-lucide="shopping-bag"></i> Buat Pesanan</button>'+
    '<p class="text-xs text-muted text-center mt-3">Pembayaran aman & terenkripsi</p>'+
    '</div></div></div>'}

async function pembeliPesanan(sub){
  let list = [];
  try {
    const res = await Api.pesananPembeli(SESI.id);
    list = (res || []).map(o => ({
      id: o.id,
      nomor: o.nomor,
      pembeliId: o.pembeli_id,
      pembeliNama: o.pembeli_nama,
      item: Array.isArray(o.item) ? o.item : (typeof o.item === 'string' ? JSON.parse(o.item) : []),
      subtotal: o.subtotal,
      ongkir: o.ongkir,
      diskon: o.diskon,
      biayaLayanan: o.biaya_layanan,
      total: o.total,
      promoKode: o.promo_kode,
      status: o.status,
      statusPembayaran: o.status_pembayaran,
      metodePembayaran: o.metode_pembayaran,
      metodeBayarKode: o.metode_bayar_kode || 'va',
      alamat: o.alamat,
      catatan: o.catatan,
      tanggal: o.tanggal,
      kurir: o.kurir,
      resi: o.resi,
      garisWaktu: o.garis_waktu ? (typeof o.garis_waktu === 'string' ? JSON.parse(o.garis_waktu) : o.garis_waktu) : []
    }));
    list.sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
    DB.pesanan = list;
    simpanDB();
  } catch (e) {
    console.error('Gagal ambil pesanan pembeli:', e);
    list = (DB.pesanan || []).filter(o => o.pembeliId === SESI.id);
  }

  if (sub && sub[1]) {
    const o = list.find(x => String(x.id) === String(sub[1]) || x.nomor === sub[1]);
    if (o) return detailPesanan(o);
  }

  return '<div class="page-head"><div><h1 class="page-title">Pesanan Saya</h1><p class="page-sub">' + list.length + ' total</p></div></div>' +
    (list.length ? '<div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>No.</th><th>Tanggal</th><th>Item</th><th>Total</th><th>Status</th><th></th></tr></thead><tbody>' +
    list.map(o => '<tr><td class="font-bold">' + esc(o.nomor) + '</td><td class="text-xs text-muted">' + tglWaktu(o.tanggal) + '</td>' +
    '<td class="text-xs">' + (o.item ? o.item.length : 0) + ' produk</td><td class="font-bold text-g">' + rp(o.total) + '</td>' +
    '<td><span class="badge ' + (STATUS_PESANAN[o.status]?.badge || 'badge-yellow') + '">' + (STATUS_PESANAN[o.status]?.label || o.status) + '</span></td>' +
    '<td style="text-align:right"><a href="#/pembeli/pesanan/' + o.id + '" class="btn btn-outline btn-sm">Detail</a></td></tr>').join('') +
    '</tbody></table></div></div>' : '<div class="card"><div class="empty"><div class="empty-icon"><i data-lucide="inbox"></i></div><h3>Belum Ada Pesanan</h3><p>Mulai belanja sekarang!</p><a href="#/pembeli/katalog" class="btn btn-primary mt-4">Mulai Belanja</a></div></div>');
}

function detailPesanan(o){
  return '<a href="#/pembeli/pesanan" class="btn btn-ghost btn-sm mb-4"><i data-lucide="arrow-left"></i> Kembali</a>'+
    '<div class="page-head"><div><h1 class="page-title">'+esc(o.nomor)+'</h1><p class="page-sub">'+tglWaktu(o.tanggal)+'</p></div>'+
    '<span class="badge '+(STATUS_PESANAN[o.status]?.badge||'badge-yellow')+'">'+(STATUS_PESANAN[o.status]?.label||o.status)+'</span></div>'+
    '<div class="two-col"><div>'+
    '<div class="card mb-4"><div class="card-head"><div class="card-title">Rincian Produk</div></div><div class="card-body" style="padding:8px 20px">'+
    (o.item||[]).map(i=>'<div class="cart-item"><div class="cart-img" style="background:#DDEBDD">'+(i.emoji||'🌿')+'</div>'+
    '<div style="flex:1"><div class="font-bold">'+esc(i.nama)+'</div><div class="text-xs text-muted">'+rp(i.harga)+' × '+i.jumlah+'</div></div>'+
    '<div class="font-bold text-g">'+rp(i.harga*i.jumlah)+'</div></div>').join('')+'</div></div>'+
    '<div class="card mb-4"><div class="card-head"><div class="card-title">Lini Masa</div></div><div class="card-body"><div class="timeline">'+
    (o.garisWaktu||[]).map(g=>'<div class="tl-item'+(g.selesai?' done':'')+'"><div class="tl-dot">'+(g.selesai?'<i data-lucide="check"></i>':'')+'</div>'+
    '<div class="tl-title">'+esc(g.tahap)+'</div><div class="tl-time">'+esc(g.waktu)+'</div>'+
    (g.catatan?'<div class="tl-note">'+esc(g.catatan)+'</div>':'')+'</div>').join('')+'</div></div></div>'+
    '<div class="card"><div class="card-head"><div class="card-title">Alamat Pengiriman</div></div><div class="card-body">'+
    '<div class="font-bold">'+esc(o.pembeliNama)+'</div><div class="text-sm text-muted mt-1">'+esc(o.alamat)+'</div>'+
    (o.catatan?'<div class="mt-3 p-3" style="background:var(--cream);border-radius:12px"><div class="text-xs font-bold mb-1">Catatan:</div><div class="text-xs text-muted">'+esc(o.catatan)+'</div></div>':'')+'</div></div>'+
    '</div><div>'+
    (o.kurir?'<div class="card mb-4"><div class="card-head"><div class="card-title">Kurir</div></div><div class="card-body">'+
    '<div class="flex items-center gap-3 mb-3"><div class="user-avatar">🚚</div><div><div class="font-bold">'+esc(o.kurir)+'</div><div class="text-xs text-muted">Taniku Express</div></div></div>'+
    (o.resi?'<div class="text-xs text-muted">Resi: '+esc(o.resi)+'</div>':'')+'</div></div>':'')+
    '<div class="card"><div class="card-head"><div class="card-title">Rincian Pembayaran</div></div><div class="card-body">'+
    '<div class="summary-row"><span>Subtotal</span><span class="value">'+rp(o.subtotal)+'</span></div>'+
    '<div class="summary-row"><span>Ongkir</span><span class="value">'+rp(o.ongkir)+'</span></div>'+
    (o.diskon?'<div class="summary-row"><span>Diskon</span><span class="value text-g">-'+rp(o.diskon)+'</span></div>':'')+
    '<div class="summary-row"><span>Biaya Layanan</span><span class="value">'+rp(o.biayaLayanan||0)+'</span></div>'+
    '<div class="summary-row total"><span>Total</span><span>'+rp(o.total)+'</span></div>'+
    '<div class="mt-3 text-xs text-muted">Metode: '+esc(o.metodePembayaran||'-')+'</div>'+
    '<div class="mt-1 badge '+(o.statusPembayaran==='lunas'?'badge-green':'badge-yellow')+'">'+(o.statusPembayaran==='lunas'?'LUNAS':'Menunggu')+'</div>'+
    ((o.status==='menunggu_bayar') ?
   '<div style="background:rgba(232,199,102,.25);border-radius:12px;padding:16px;margin-top:16px">'+
   '<div class="font-bold text-sm mb-2">⏳ Menunggu Pembayaran</div>'+
   '<p class="text-xs text-muted mb-3">Selesaikan pembayaran untuk memproses pesanan Anda.</p>'+
   '<button class="btn btn-primary btn-block" data-aksi="bayar-pesanan" data-id="'+o.id+'" data-metode="'+esc(o.metodeBayarKode||'va')+'">'+
   '<i data-lucide="credit-card"></i> Bayar Sekarang — '+rp(o.total)+'</button>'+
    '</div>' : '')+
    '</div></div></div></div>';
}

function pembeliCuaca(){
  const s = SENSOR;
  window.__CHART_AFTER = () => {
    const c = document.getElementById('chartCuacaPembeli');
    if (!c || !window.Chart) return;
    CHART_AKTIF = new Chart(c, {
      type: 'line',
      data: {
        labels: s.tren24Jam.map(t => t.jam),
        datasets: [
          { label: 'Suhu (°C)', data: s.tren24Jam.map(t => t.suhu), borderColor: '#5B9BD5', backgroundColor: 'rgba(91,155,213,.15)', tension: .4, fill: true },
          { label: 'Kel. Tanah (%)', data: s.tren24Jam.map(t => t.kelembapanTanah), borderColor: '#2F6B4F', backgroundColor: 'rgba(47,107,79,.12)', tension: .4, fill: true }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: false }, x: { grid: { display: false } } } }
    });
  };

  return '<div class="page-head"><div><h1 class="page-title">Cuaca & IoT Kebun</h1>' +
    '<p class="page-sub" id="cuaca-lokasi">Memuat cuaca real dari Lembang...</p></div>' +
    '<span class="badge badge-green"><i data-lucide="radio"></i> Sensor Aktif</span></div>' +

    '<div class="weather-hero mb-5" id="cuaca-hero">' +
    '<div class="text-xs uppercase tracking-wide" style="opacity:.85">Memuat data...</div>' +
    '<div class="weather-temp" id="cuaca-suhu">--°C</div>' +
    '<div class="text-sm" id="cuaca-kondisi" style="opacity:.9">Mengambil data dari satelit...</div>' +
    '<div class="weather-row" id="cuaca-row"></div>' +
    '</div>' +

    '<div class="card mb-5"><div class="card-head"><div><div class="card-title">Tren 24 Jam</div><div class="card-sub">Data dari sensor Open-Meteo</div></div></div>' +
    '<div class="card-body"><div class="chart-wrap"><canvas id="chartCuacaPembeli"></canvas></div></div></div>' +

    '<div class="card"><div class="card-head"><div><div class="card-title">Prakiraan 4 Hari</div><div class="card-sub">Sumber: Open-Meteo (real-time)</div></div></div>' +
    '<div class="card-body"><div class="product-grid" id="cuaca-prakiraan">' +
    '<div class="text-center text-muted py-5">Memuat prakiraan...</div>' +
    '</div></div></div>';
}

/* ===== MUAT CUACA REAL (dipanggil setelah render) ===== */
async function muatCuaca() {
  try {
    const data = await Api.cuacaReal();
    const cur = data.current;

    const elLokasi = document.getElementById('cuaca-lokasi');
    const elSuhu = document.getElementById('cuaca-suhu');
    const elKondisi = document.getElementById('cuaca-kondisi');
    const elRow = document.getElementById('cuaca-row');
    const elPrakiraan = document.getElementById('cuaca-prakiraan');

    if (elLokasi) elLokasi.textContent = 'Kota Bandung • Data real-time Open-Meteo';
    if (elSuhu) elSuhu.textContent = Math.round(cur.temperature_2m * 10) / 10 + '°C';
    if (elKondisi) elKondisi.textContent = Api.kodeCuacaKeTeks(cur.weather_code) + ' • Terasa ' + Math.round(cur.apparent_temperature) + '°C';

    if (elRow) elRow.innerHTML =
      '<div class="weather-cell"><span style="opacity:.85">Kel. Udara</span><b>' + cur.relative_humidity_2m + '%</b></div>' +
      '<div class="weather-cell"><span style="opacity:.85">Curah Hujan</span><b>' + cur.precipitation + ' mm/j</b></div>' +
      '<div class="weather-cell"><span style="opacity:.85">Angin</span><b>' + cur.wind_speed_10m + ' km/j</b></div>' +
      '<div class="weather-cell"><span style="opacity:.85">Arah Angin</span><b>' + cur.wind_direction_10m + '°</b></div>';

    if (elPrakiraan) {
      elPrakiraan.innerHTML = data.daily.time.map((t, i) => {
        const hari = i === 0 ? 'Hari Ini' : new Date(t).toLocaleDateString('id-ID', { weekday: 'long' });
        const emoji = data.daily.weather_code[i] >= 51 ? '🌧️' : data.daily.weather_code[i] >= 2 ? '☁️' : '☀️';
        return '<div class="card" style="box-shadow:none"><div class="card-body text-center">' +
          '<div class="font-bold mb-2">' + hari + '</div>' +
          '<div style="font-size:36px;margin:8px 0">' + emoji + '</div>' +
          '<div class="font-extrabold text-g">' + Math.round(data.daily.temperature_2m_min[i]) + '° - ' + Math.round(data.daily.temperature_2m_max[i]) + '°</div>' +
          '<div class="text-xs text-muted mt-1">' + Api.kodeCuacaKeTeks(data.daily.weather_code[i]) + '</div>' +
          '<div class="text-xs text-muted mt-1">Hujan ' + data.daily.precipitation_probability_max[i] + '%</div>' +
          '</div></div>';
      }).join('');
    }

    console.log('✅ Cuaca real-time loaded:', cur.temperature_2m + '°C, ' + Api.kodeCuacaKeTeks(cur.weather_code));
  } catch (e) {
    console.warn('❌ Cuaca real gagal, pakai mock:', e.message);
    const elLokasi = document.getElementById('cuaca-lokasi');
    const elSuhu = document.getElementById('cuaca-suhu');
    const elKondisi = document.getElementById('cuaca-kondisi');
    if (elLokasi) elLokasi.textContent = 'Mode offline — data simulasi';
    if (elSuhu) elSuhu.textContent = SENSOR.suhu + '°C';
    if (elKondisi) elKondisi.textContent = SENSOR.kondisi + ' (fallback)';
  }
}

/* ===== PEMBELI NOTIF ===== */
async function pembeliNotif(){
  let list = [];
  try {
    const res = await Api.daftarNotifikasi('pembeli');
    list = res || [];
    DB.notifikasi = DB.notifikasi.filter(n => n.peran !== 'pembeli')
      .concat(list.map(n => ({...n, peran:'pembeli'})));
    simpanDB();
  } catch (e) {
    console.error('Gagal ambil notif pembeli:', e);
    list = DB.notifikasi.filter(n => n.peran === 'pembeli');
  }
  list = list.sort((a, b) => new Date(b.waktu) - new Date(a.waktu));

  return '<div class="page-head"><div><h1 class="page-title">Notifikasi</h1>' +
    '<p class="page-sub">' + list.filter(n => !n.dibaca).length + ' belum dibaca</p></div>' +
    '<div class="flex gap-2">' +
    '<button class="btn btn-outline" data-aksi="tandai-semua"><i data-lucide="check-check"></i> Tandai Semua</button>' +
    '<button class="btn btn-danger" data-aksi="hapus-lama"><i data-lucide="trash-2"></i> Hapus Lama</button>' +
    '</div></div>' +
    '<div class="card">' +
    (list.length ? list.map(n => notifItem(n)).join('') :
      '<div class="empty"><div class="empty-icon"><i data-lucide="bell-off"></i></div>' +
      '<h3>Tidak Ada Notifikasi</h3></div>') +
    '</div>';
}

/* ===== MASUK ===== */
async function aksiMasuk(f){
  const d = new FormData(f);
  const email = (d.get('email') || '').trim().toLowerCase();
  const sandi = d.get('sandi');

  if (!email || !sandi) {
    toast('Email dan sandi wajib diisi', 'error');
    return;
  }

  try {
    const hasil = await Api.masuk(email, sandi);
    Api.setToken(hasil.token);

    const u = hasil.pengguna;
    SESI = {
      id: u.id,
      nama: u.nama,
      email: u.email,
      peran: u.peran,
      telepon: u.telepon || '',
      alamat: u.alamat || '',
      avatar: u.avatar || '',
      foto: u.foto || ''
    };
    simpanSesi(SESI);

    toast('Selamat datang, ' + u.nama + '!', 'success');

    // Redirect berdasarkan peran
    const tujuan = u.peran === 'admin' ? '#/admin' : '#/pembeli';

    // Paksa update HALAMAN_KINI & render
    HALAMAN_KINI = tujuan;
    if (location.hash !== tujuan) {
      location.hash = tujuan;
    }
    // Force render kalau hashchange tidak trigger
    setTimeout(() => {
      if (HALAMAN_KINI !== tujuan) {
        HALAMAN_KINI = tujuan;
        render();
      }
    }, 100);

  } catch (err) {
    console.error('Login error:', err);
    toast(err.message || 'Login gagal', 'error');
  }
}

/* ==== DAFTAR ==== */
async function aksiDaftar(f){
  const d = new FormData(f);
  const nama = (d.get('nama') || '').trim();
  const email = (d.get('email') || '').trim().toLowerCase();
  const sandi = d.get('sandi');
  const peran = d.get('peran') || 'pembeli';

  if (!nama || !email || !sandi) {
    toast('Semua kolom wajib diisi.', 'error');
    return;
  }

  try {
    // Daftar dulu
    const hasil = await Api.daftar({ nama, email, sandi, peran });

    // Setelah daftar, langsung login otomatis
    const login = await Api.masuk(email, sandi);
    Api.setToken(login.token);

    const u = login.pengguna;
    SESI = {
      id: u.id,
      nama: u.nama,
      email: u.email,
      peran: u.peran,
      telepon: u.telepon || '',
      alamat: u.alamat || '',
      avatar: u.avatar,
      foto: u.foto
    };
    simpanSesi(SESI);
    toast('Akun berhasil dibuat. Selamat datang!', 'success');
    location.hash = peran === 'admin' ? '#/admin' : '#/pembeli';
  } catch (err) {
    console.error(err);
    toast(err.message || 'Pendaftaran gagal', 'error');
  }
}

async function aksiKeluar(){
  SESI = null;
  simpanSesi(null);
  Api.setToken('');
  DB = muatDB(); // reset data lokal biar bersih
  HALAMAN_KINI = '#/masuk';
  if (location.hash !== '#/masuk') {
    location.hash = '#/masuk';
    // hashchange bakal trigger rute() otomatis
  } else {
    // hash udah sama, hashchange nggak akan trigger — panggil manual
    await rute();
  }
  toast('Anda telah keluar.', 'info');
}

/* Fungsi 1: Buat pesanan (status: menunggu_bayar) */
async function aksiBuatPesanan(){
  const btn = document.querySelector('[data-aksi="buat-pesanan"]');
  if (!btn) return;
  const subtotal = Number(btn.dataset.subtotal) || 0;
  const mk = document.querySelector('.method-card.active[data-kirim]');
  const mb = document.querySelector('.method-card.active[data-bayar]');
  const ongkir = mk ? Number(mk.dataset.biaya) : 15000;
  const metodeBayar = mb ? mb.dataset.bayar : 'va';
  const promo = window.__PROMO_AKTIF || null;
  const diskon = promo ? (promo.tipe === 'ongkir' ? Math.min(promo.nilai, ongkir) : promo.nilai) : 0;
  const bl = 1000;
  const total = Math.max(0, subtotal + ongkir + bl - diskon);

  const k = DB.keranjang[SESI.id] || {};
  const items = Object.keys(k).map(id => {
    const p = DB.produk.find(x => x.id === id);
    return p ? { produkId: p.id, nama: p.nama, jumlah: k[id], harga: p.harga, satuan: p.satuan, emoji: p.emoji } : null;
  }).filter(Boolean);
  if (!items.length) { toast('Keranjang kosong.', 'error'); return; }
  for (const it of items) {
    const p = DB.produk.find(x => x.id === it.produkId);
    if (p && p.stok < it.jumlah) { toast('Stok ' + p.nama + ' tidak cukup.', 'error'); return; }
  }

  const labelBayar = metodeBayar === 'va' ? 'Transfer Bank (VA)' :
                     metodeBayar === 'qris' ? 'Dompet Digital (QRIS)' : 'Bayar di Tempat (COD)';

  try {
    const hasil = await Api.buatPesanan({
      pembeliId: SESI.id, pembeliNama: SESI.nama, item: items,
      subtotal: subtotal, ongkir: ongkir, diskon: diskon, biayaLayanan: bl, total: total,
      promoKode: promo ? promo.kode : null,
      status: metodeBayar === 'cod' ? 'diproses' : 'menunggu_bayar',
      statusPembayaran: metodeBayar === 'cod' ? 'menunggu' : 'belum',
      metodePembayaran: labelBayar,
      alamat: SESI.alamat || '-',
      catatan: (document.getElementById('co-catatan') || {}).value || ''
    });

    items.forEach(it => {
      const p = DB.produk.find(x => x.id === it.produkId);
      if (p) { p.stok -= it.jumlah; p.terjual += it.jumlah; }
    });

    DB.keranjang[SESI.id] = {};
    simpanDB();
    window.__PROMO_AKTIF = null;

    toast(metodeBayar === 'cod' ? 'Pesanan berhasil dibuat.' : 'Pesanan dibuat. Silakan selesaikan pembayaran.', 'success');
    location.hash = '#/pembeli/pesanan/' + hasil.id;
  } catch (e) {
    console.error(e);
    toast('Gagal buat pesanan: ' + e.message, 'error');
  }
}

/* ==== AKSI KERANJANG ==== */
async function aksiTambahKeranjang(id){
  const p = DB.produk.find(x => x.id === id);
  if (!p) return;
  if (p.stok === 0) { toast('Stok habis.', 'error'); return; }
  if (!DB.keranjang[SESI.id]) DB.keranjang[SESI.id] = {};
  const sek = DB.keranjang[SESI.id][id] || 0;
  if (sek >= p.stok) { toast('Stok tidak mencukupi.', 'error'); return; }
  DB.keranjang[SESI.id][id] = sek + 1;
  simpanDB();
  toast(p.nama + ' ditambahkan ke keranjang.', 'success');
  await render();
}

async function aksiHapusItem(id){
  if (!DB.keranjang[SESI.id]) return;
  delete DB.keranjang[SESI.id][id];
  simpanDB();
  toast('Produk dihapus dari keranjang.', 'info');
  await render();
}

async function aksiUbahQty(id, d){
  if (!DB.keranjang[SESI.id]) return;
  const p = DB.produk.find(x => x.id === id);
  if (!p) return;
  let q = (DB.keranjang[SESI.id][id] || 1) + d;
  if (q < 1) q = 1;
  if (q > p.stok) { toast('Stok tidak cukup.', 'error'); return; }
  DB.keranjang[SESI.id][id] = q;
  simpanDB();
  render();
}

/* ==== AKSI PRODUK ==== */
async function aksiHapusProduk(id){
  const p = DB.produk.find(x => x.id === id);
  if (!p) return;
  if (!confirm('Hapus produk "' + p.nama + '"?')) return;
  DB.produk = DB.produk.filter(x => x.id !== id);
  simpanDB();
  toast('Produk dihapus.', 'success');
  await render();
}

/* ==== AKSI NOTIFIKASI ==== */
async function aksiBacaNotif(id){
  try {
    await Api.bacaNotifikasi(id);
  } catch (e) { /* notif lokal tetap ditandai */ }
  const n = DB.notifikasi.find(x => String(x.id) === String(id));
  if (n) n.dibaca = true;
  simpanDB();
  if (n && n.tautan && n.tautan !== HALAMAN_KINI) {
    location.hash = n.tautan.replace('#', '');
  } else {
    await render();
  }
}

/* ===== MODAL ===== */
function modalQRIS(total,nomor){
  const qr='https://api.qrserver.com/v1/create-qr-code/?size=250x250&data='+encodeURIComponent('TANIKU-'+nomor+'-'+total);
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Bayar dengan QRIS</div>'+
    '<div class="modal-sub">Scan di aplikasi e-wallet / m-banking</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="qris-box"><div class="qris-logo">⚡ QRIS • Semua Bank & E-Wallet</div>'+
    '<img src="'+qr+'" alt="QRIS">'+
    '<div class="font-bold text-lg mt-2">'+rp(total)+'</div>'+
    '<div class="text-xs text-muted mt-1">ID: '+nomor+'</div></div>'+
    '<div style="background:var(--g3);border-radius:12px;padding:12px;font-size:12px;color:var(--g);line-height:1.7">'+
    '<b>💡 Cara bayar:</b><br>1. Buka GoPay/OVO/ShopeePay/DANA<br>2. Pilih <b>Scan QR</b><br>'+
    '3. Arahkan ke QR di atas<br>4. Konfirmasi nominal '+rp(total)+'<br>5. Tekan tombol di bawah</div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Tutup</button>'+
    '<button class="btn btn-primary" data-aksi="konfirmasi-bayar"><i data-lucide="check"></i> Saya Sudah Bayar</button></div></div>');
}

function modalVA(total,nomor){
  const bank=['BCA','Mandiri','BRI','BNI'][Math.floor(Math.random()*4)];
  const kode=bank==='BCA'?'8808':bank==='Mandiri'?'8888':bank==='BRI'?'8899':'8898';
  const va=kode+String(Math.floor(Math.random()*9000+1000))+String(Math.floor(Math.random()*9000+1000));
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Pembayaran Virtual Account</div>'+
    '<div class="modal-sub">Transfer sesuai nominal</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="va-box"><div class="va-bank">🏦 '+bank+' Virtual Account</div>'+
    '<div class="va-number">'+va+'</div>'+
    '<div class="va-hint">Total: <b>'+rp(total)+'</b> • ID: '+nomor+'</div></div>'+
    '<div style="background:rgba(232,199,102,.25);border-radius:12px;padding:12px;font-size:12px;color:var(--brown);line-height:1.7;margin-bottom:12px">'+
    '<b>⚠️ Penting:</b> Transfer tepat sampai digit terakhir.</div>'+
    '<div style="background:var(--g3);border-radius:12px;padding:12px;font-size:12px;color:var(--g);line-height:1.7">'+
    '<b>💡 Cara bayar:</b><br>1. Buka m-banking / ATM<br>2. Pilih <b>Transfer → Virtual Account</b><br>'+
    '3. Masukkan kode: <b>'+va+'</b><br>4. Konfirmasi nominal '+rp(total)+'<br>5. Tekan tombol di bawah</div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Tutup</button>'+
    '<button class="btn btn-primary" data-aksi="konfirmasi-bayar"><i data-lucide="check"></i> Saya Sudah Bayar</button></div></div>');
}

function modalCOD(total,nomor){
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Bayar di Tempat (COD)</div>'+
    '<div class="modal-sub">Bayar tunai ke kurir saat terima</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="va-box"><div class="va-bank">💵 COD</div>'+
    '<div style="font-size:26px;font-weight:800;color:var(--g);margin:10px 0">'+rp(total)+'</div>'+
    '<div class="va-hint">ID: '+nomor+'</div></div>'+
    '<div style="background:var(--g3);border-radius:12px;padding:12px;font-size:12px;color:var(--g);line-height:1.7">'+
    '<b>💡 Info:</b><br>1. Siapkan uang tunai '+rp(total)+'<br>'+
    '2. Kurir akan datang ke alamat Anda<br>3. Bayar langsung ke kurir<br>4. Khusus wilayah Lembang</div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="konfirmasi-bayar"><i data-lucide="check"></i> Konfirmasi Pesanan</button></div></div>');
}

function modalEditProfil(){
  const u = SESI || {};
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Ubah Profil</div>'+
    '<div class="modal-sub">Perbarui data akun Anda</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="profile-avatar-edit">'+
    '<div class="profile-avatar-big" id="pf-avatar">'+(u.foto?'<img src="'+u.foto+'">':esc(u.avatar||inisial(u.nama)))+'</div>'+
    '<label class="avatar-upload"><i data-lucide="camera"></i> Ganti Foto<input type="file" id="pf-file" accept="image/*" style="display:none"></label>'+
    '</div>'+
    '<div class="form-group"><label class="label">Nama Lengkap</label><input class="input" id="pf-nama" value="'+esc(u.nama||'')+'"></div>'+
    '<div class="form-group"><label class="label">Email</label><input class="input" id="pf-email" type="email" value="'+esc(u.email||'')+'"></div>'+
    '<div class="form-group"><label class="label">Nomor WhatsApp / HP</label><input class="input" id="pf-telepon" value="'+esc(u.telepon||'')+'" placeholder="0812-xxxx-xxxx"></div>'+
    '<div class="form-group"><label class="label">Alamat Lengkap</label><textarea class="input" id="pf-alamat" placeholder="Jl. Contoh No. 123, Kelurahan, Kecamatan, Kota">'+esc(u.alamat||'')+'</textarea></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-profil"><i data-lucide="save"></i> Simpan</button></div></div>');
  setTimeout(()=>{
    const fi=document.getElementById('pf-file');
    if(fi) fi.addEventListener('change',e=>{
      const f=e.target.files[0];if(!f)return;
      const r=new FileReader();
      r.onload=ev=>{const av=document.getElementById('pf-avatar');av.innerHTML='<img src="'+ev.target.result+'">';av.dataset.foto=ev.target.result;};
      r.readAsDataURL(f);
    });
  },50);
}

function modalTambahProduk(){
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Tambah Produk Baru</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="form-group"><label class="label">Nama Produk *</label><input class="input" id="mp-nama"></div>'+
    '<div class="form-group"><label class="label">Kategori *</label><select class="input" id="mp-kategori">'+KATEGORI.filter(k=>k!=='Semua').map(k=>'<option>'+k+'</option>').join('')+'</select></div>'+
    '<div class="form-group"><label class="label">Emoji / Ikon Produk</label>'+
    '<div class="pill-row" id="mp-emoji-pick" style="gap:4px;flex-wrap:wrap">'+
    EMOJI_PILIHAN.map(e=>'<button type="button" class="pill" data-emoji="'+e+'" style="font-size:22px;padding:6px 10px">'+e+'</button>').join('')+
    '</div><input type="hidden" id="mp-emoji" value="🌱"></div>'+
    '<div class="form-group"><label class="label">Harga (Rp) *</label><input class="input" id="mp-harga" type="number"></div>'+
    '<div class="form-group"><label class="label">Satuan *</label><input class="input" id="mp-satuan" placeholder="kg / ikat"></div>'+
    '<div class="form-group"><label class="label">Stok *</label><input class="input" id="mp-stok" type="number"></div>'+
    '<div class="form-group"><label class="label">Stok Minimum</label><input class="input" id="mp-stokMin" type="number" value="10"></div>'+
    '<div class="form-group"><label class="label">Nomor Batch</label><input class="input" id="mp-batch" placeholder="Contoh: JRN-2025-01"></div>'+
    '<div class="form-group"><label class="label">Tanggal Kedaluwarsa</label><input class="input" id="mp-kedaluwarsa" type="date"></div>'+
    '<div class="form-group"><label class="label">Petani / Mitra</label><input class="input" id="mp-petani" placeholder="Gapoktan Sukamaju"></div>'+
    '<div class="form-group"><label class="label">Lokasi Kebun</label><input class="input" id="mp-lokasi" placeholder="Cikole, Lembang"></div>'+
    '<div class="form-group"><label class="label">Deskripsi</label><textarea class="input" id="mp-deskripsi"></textarea></div>'+
    '<div class="form-row"><label><input type="checkbox" id="mp-organik"> Organik</label></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-produk-baru"><i data-lucide="save"></i> Simpan</button></div></div>');
  setTimeout(()=>{
    const pick=document.getElementById('mp-emoji-pick');
    if(pick) pick.querySelectorAll('button[data-emoji]').forEach(b=>{
      b.addEventListener('click',()=>{
        pick.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        document.getElementById('mp-emoji').value=b.dataset.emoji;
      });
    });
  },50);
}

function modalEditProduk(id){
  const p=DB.produk.find(x=>x.id===id);if(!p)return;
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Ubah Produk</div>'+
    '<div class="modal-sub">'+esc(p.nama)+'</div></div><button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="form-group"><label class="label">Nama</label><input class="input" id="ep-nama" value="'+esc(p.nama)+'"></div>'+
    '<div class="form-group"><label class="label">Kategori</label><select class="input" id="ep-kategori">'+KATEGORI.filter(k=>k!=='Semua').map(k=>'<option'+(k===p.kategori?' selected':'')+'>'+k+'</option>').join('')+'</select></div>'+
    '<div class="form-group"><label class="label">Emoji</label>'+
    '<div class="pill-row" id="ep-emoji-pick" style="gap:4px;flex-wrap:wrap">'+
    EMOJI_PILIHAN.map(e=>'<button type="button" class="pill'+(p.emoji===e?' active':'')+'" data-emoji="'+e+'" style="font-size:22px;padding:6px 10px">'+e+'</button>').join('')+
    '</div><input type="hidden" id="ep-emoji" value="'+esc(p.emoji||'🌱')+'"></div>'+
    '<div class="form-group"><label class="label">Harga</label><input class="input" id="ep-harga" type="number" value="'+p.harga+'"></div>'+
    '<div class="form-group"><label class="label">Satuan</label><input class="input" id="ep-satuan" value="'+esc(p.satuan)+'"></div>'+
    '<div class="form-group"><label class="label">Stok</label><input class="input" id="ep-stok" type="number" value="'+p.stok+'"></div>'+
    '<div class="form-group"><label class="label">Stok Minimum</label><input class="input" id="ep-stokMin" type="number" value="'+p.stokMin+'"></div>'+
    '<div class="form-group"><label class="label">Nomor Batch</label><input class="input" id="ep-batch" value="'+esc(p.batch||'')+'"></div>'+
    '<div class="form-group"><label class="label">Kedaluwarsa</label><input class="input" id="ep-kedaluwarsa" type="date" value="'+(p.kedaluwarsa||'')+'"></div>'+
    '<div class="form-group"><label class="label">Deskripsi</label><textarea class="input" id="ep-deskripsi">'+esc(p.deskripsi||'')+'</textarea></div>'+
    '<div class="form-row"><label><input type="checkbox" id="ep-organik"'+(p.organik?' checked':'')+'> Organik</label></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-produk-edit" data-id="'+p.id+'"><i data-lucide="save"></i> Simpan</button></div></div>');
  setTimeout(()=>{
    const pick=document.getElementById('ep-emoji-pick');
    if(pick) pick.querySelectorAll('button[data-emoji]').forEach(b=>{
      b.addEventListener('click',()=>{
        pick.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        document.getElementById('ep-emoji').value=b.dataset.emoji;
      });
    });
  },50);
}

function modalStokMasuk(){
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Input Stok Masuk</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="form-group"><label class="label">Produk *</label><select class="input" id="sm-produk">'+
    DB.produk.map(p=>'<option value="'+p.id+'">'+esc(p.nama)+' (stok: '+p.stok+')</option>').join('')+'</select></div>'+
    '<div class="form-group"><label class="label">Jumlah Masuk *</label><input class="input" id="sm-jumlah" type="number" min="1"></div>'+
    '<div class="form-group"><label class="label">Batch Baru</label><input class="input" id="sm-batch"></div>'+
    '<div class="form-group"><label class="label">Kedaluwarsa Baru</label><input class="input" id="sm-kedaluwarsa" type="date"></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-stok-masuk"><i data-lucide="plus-circle"></i> Simpan</button></div></div>');
}

function modalDetailPesanan(id){const o=DB.pesanan.find(x=>x.id===id);if(!o)return;
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">'+esc(o.nomor)+'</div>'+
    '<div class="modal-sub">'+tglWaktu(o.tanggal)+'</div></div><button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body"><div class="mb-4"><span class="badge '+(STATUS_PESANAN[o.status]?.badge||'badge-yellow')+'">'+(STATUS_PESANAN[o.status]?.label||o.status)+'</span></div>'+
    '<div class="mb-4"><div class="text-xs font-bold text-muted mb-1">PEMBELI</div><div class="font-bold">'+esc(o.pembeliNama)+'</div>'+
    '<div class="text-xs text-muted">'+esc(o.alamat)+'</div></div><div class="divider"></div>'+
    '<div class="text-xs font-bold text-muted mb-2">ITEM</div>'+
    o.item.map(i=>'<div class="flex justify-between py-2"><span>'+(i.emoji||'🌿')+' '+esc(i.nama)+' × '+i.jumlah+'</span>'+
    '<span class="font-bold">'+rp(i.harga*i.jumlah)+'</span></div>').join('')+
    '<div class="divider"></div><div class="summary-row"><span>Subtotal</span><span class="value">'+rp(o.subtotal)+'</span></div>'+
    '<div class="summary-row"><span>Ongkir</span><span class="value">'+rp(o.ongkir)+'</span></div>'+
    (o.diskon?'<div class="summary-row"><span>Diskon</span><span class="value text-g">-'+rp(o.diskon)+'</span></div>':'')+
    '<div class="summary-row total"><span>Total</span><span>'+rp(o.total)+'</span></div></div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Tutup</button></div></div>')}

function modalUbahStatus(id){const o=DB.pesanan.find(x=>x.id===id);if(!o)return;
  const opsi=['menunggu','dibayar','diproses','dikirim','selesai','dibatalkan'];
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Ubah Status</div>'+
    '<div class="modal-sub">'+esc(o.nomor)+'</div></div><button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="form-group"><label class="label">Status Baru</label><select class="input" id="us-status">'+
    opsi.map(s=>'<option value="'+s+'"'+(s===o.status?' selected':'')+'>'+STATUS_PESANAN[s].label+'</option>').join('')+'</select></div>'+
    '<div class="form-group"><label class="label">Catatan</label><textarea class="input" id="us-catatan"></textarea></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-status" data-id="'+o.id+'"><i data-lucide="save"></i> Simpan</button></div></div>')}

function modalTambahMitra(){
  bukaModal('<div class="modal"><div class="modal-head"><div><div class="modal-title">Daftarkan Mitra Baru</div></div>'+
    '<button class="btn-icon" data-aksi="tutup-modal"><i data-lucide="x"></i></button></div>'+
    '<div class="modal-body">'+
    '<div class="form-group"><label class="label">Nama Poktan *</label><input class="input" id="mm-nama"></div>'+
    '<div class="form-group"><label class="label">Ketua</label><input class="input" id="mm-ketua"></div>'+
    '<div class="form-group"><label class="label">Lokasi</label><input class="input" id="mm-lokasi"></div>'+
    '<div class="form-group"><label class="label">Luas (Ha)</label><input class="input" id="mm-luas" type="number" step="0.1"></div>'+
    '<div class="form-group"><label class="label">Komoditas</label><input class="input" id="mm-komoditas"></div>'+
    '<div class="form-group"><label class="label">Status</label><select class="input" id="mm-status">'+
    '<option value="calon">Calon Mitra</option><option value="aktif">Aktif</option><option value="perlu-audit">Perlu Audit</option></select></div>'+
    '</div>'+
    '<div class="modal-foot"><button class="btn btn-outline" data-aksi="tutup-modal">Batal</button>'+
    '<button class="btn btn-primary" data-aksi="simpan-mitra"><i data-lucide="save"></i> Daftarkan</button></div></div>');
}

/* ===== PEMBAYARAN ===== */
function aksiBayarPesanan(pesananId, metodeBayar){
  const o = DB.pesanan.find(x => String(x.id) === String(pesananId));
  if (!o) { toast('Pesanan tidak ditemukan.', 'error'); return; }
  const nomor = 'TNK-' + String(o.id).slice(-6).toUpperCase();
  window.__BAYAR = { pesananId: o.id, total: o.total, metodeBayar, nomor };
  if (metodeBayar === 'qris') modalQRIS(o.total, nomor);
  else if (metodeBayar === 'va') modalVA(o.total, nomor);
  else if (metodeBayar === 'cod') modalCOD(o.total, nomor);
}

async function aksiKonfirmasiBayar(){
  const b = window.__BAYAR;
  if (!b) { toast('Data pembayaran hilang.', 'error'); return; }
  const o = DB.pesanan.find(x => String(x.id) === String(b.pesananId));
  if (!o) { toast('Pesanan tidak ditemukan.', 'error'); return; }

  o.status = 'dibayar';
  o.statusPembayaran = 'lunas';
  o.garisWaktu = (o.garisWaktu || []).map(g => {
    if (g.tahap === 'Pembayaran Diterima') {
      return { ...g, selesai: true, waktu: tglWaktu(new Date()), catatan: 'Terkonfirmasi' };
    }
    return g;
  });
  if (!o.garisWaktu.some(g => g.tahap === 'Pembayaran Diterima')) {
    o.garisWaktu.push({
      tahap: 'Pembayaran Diterima',
      waktu: tglWaktu(new Date()),
      selesai: true,
      catatan: o.metodePembayaran
    });
  }

  // Kirim notif ke ADMIN (via backend)
  try {
    await Api.tambahNotifikasi({
      peran: 'admin',
      tipe: 'pesanan',
      judul: 'Pembayaran Diterima',
      pesan: 'Pesanan ' + o.nomor + ' telah dibayar via ' + o.metodePembayaran + '.',
      tautan: '#/admin/pesanan'
    });
  } catch (e) { console.error('Gagal kirim notif admin:', e); }

  // Kirim notif ke PEMBELI sendiri
  try {
    await Api.tambahNotifikasi({
      peran: 'pembeli',
      tipe: 'pesanan',
      judul: 'Pembayaran Berhasil',
      pesan: 'Pesanan ' + o.nomor + ' sebesar ' + rp(o.total) + ' telah dibayar. Menunggu konfirmasi admin.',
      tautan: '#/pembeli/pesanan/' + o.id
    });
  } catch (e) { console.error('Gagal kirim notif pembeli:', e); }

  simpanDB();
  tutupModal();
  toast('Pembayaran berhasil dikonfirmasi!', 'success');
  window.__BAYAR = null;
  await render();
}

/* ===== EVENT ===== */
function pasangEvent(){
  window.addEventListener('hashchange',rute);

    document.addEventListener('click', async e=>{
    const bd=e.target.closest('.modal-backdrop');
    if(bd&&(e.target===bd||e.target.closest('[data-aksi="tutup-modal"]'))){tutupModal();return}

    const mc=e.target.closest('.method-card');
    if(mc&&!e.target.closest('[data-aksi]')){
      const grup=mc.parentElement.querySelectorAll('.method-card');
      grup.forEach(x=>x.classList.remove('active'));
      mc.classList.add('active');
      const r=mc.querySelector('input[type=radio]');if(r)r.checked=true;
      if(mc.dataset.kirim){
        const aktif=document.querySelector('.method-card.active[data-kirim]');
        const biaya=aktif?Number(aktif.dataset.biaya):15000;
        const btnBayar=document.querySelector('[data-aksi="buat-pesanan"]');
        const subtotal=btnBayar?Number(btnBayar.dataset.subtotal):0;
        const promo=window.__PROMO_AKTIF;
        const diskon=promo?(promo.tipe==='ongkir'?Math.min(promo.nilai,biaya):promo.nilai):0;
        const total=Math.max(0,subtotal+biaya-diskon);
        const ongkirEl=document.getElementById('co-ongkir');
        const totalEl=document.getElementById('co-total');
        const diskonEl=document.getElementById('co-diskon');
        if(ongkirEl) ongkirEl.textContent=rp(biaya);
        if(diskonEl&&diskon>0) diskonEl.textContent='-'+rp(diskon);
        if(totalEl) totalEl.textContent=rp(total);
      }
      return;
    }

    const el=e.target.closest('[data-aksi]');if(!el)return;
    const a=el.dataset.aksi;const id=el.dataset.id;
    switch(a){
      case 'buka-menu': MENU_BUKA=true; await render(); break;
      case 'tutup-menu': MENU_BUKA=false; await render(); break;
      case 'keluar': await aksiKeluar(); break;
      case 'tutup-modal': tutupModal();break;
      case 'detail-produk': location.hash = SESI.peran==='admin' ? '#/admin/produk' : '#/pembeli/produk/'+id; break;
      // BARIS BARU
      case 'tambah-keranjang': await aksiTambahKeranjang(id); break;
      case 'hapus-item': await aksiHapusItem(id); break;
      case 'qty': await aksiUbahQty(id, parseInt(el.dataset.delta, 10)); break;
      case 'hapus-produk': await aksiHapusProduk(id); break;
      case 'filter-kategori': FILTER_KATEGORI=el.dataset.kategori; await render(); break;
      case 'tambah-produk':await modalTambahProduk();break;
      case 'edit-produk': await modalEditProduk(id);break;
      case 'stok-masuk':await modalStokMasuk();break;
      case 'detail-pesanan':modalDetailPesanan(id);break;
      case 'ubah-status': await modalUbahStatus(id);break;
      case 'tambah-mitra': await modalTambahMitra();break;
      case 'tandai-semua':
        try {
          await Api.bacaSemuaNotifikasi(SESI.peran);
          DB.notifikasi.forEach(n => { if (n.peran === SESI.peran) n.dibaca = true; });
          simpanDB();
          toast('Semua ditandai dibaca.','success');
          await render();
        } catch (err) { toast('Gagal: ' + err.message, 'error'); }
        break;
       case 'hapus-lama': {
        const lama = DB.notifikasi.filter(n => n.peran === SESI.peran && n.dibaca);
        for (const n of lama) { try { await Api.hapusNotifikasi(n.id); } catch (e) {} }
        DB.notifikasi = DB.notifikasi.filter(n => n.peran !== SESI.peran || !n.dibaca);
        simpanDB();
        toast('Notifikasi lama dihapus.','success');
        await render();
        break;
      }
      case 'baca-notif': await aksiBacaNotif(id); break;
      case 'edit-profil': await modalEditProfil();break;
      case 'simpan-profil': {
  const nama = (document.getElementById('pf-nama').value || '').trim();
  const email = (document.getElementById('pf-email').value || '').trim();
  const telepon = (document.getElementById('pf-telepon').value || '').trim();
  const alamat = (document.getElementById('pf-alamat').value || '').trim();
  const av = document.getElementById('pf-avatar');
  const foto = av && av.dataset.foto ? av.dataset.foto : (SESI.foto || '');

  if (!nama) { toast('Nama wajib diisi', 'error'); break; }
  if (!email) { toast('Email wajib diisi', 'error'); break; }

  SESI.nama = nama;
  SESI.email = email;
  SESI.telepon = telepon;
  SESI.alamat = alamat;
  SESI.avatar = inisial(nama);
  if (foto) SESI.foto = foto;

  simpanSesi(SESI);
  tutupModal();
  toast('Profil berhasil diperbarui.', 'success');
  await render();
  break;
}
      case 'simpan-produk-baru':{
        const nama=document.getElementById('mp-nama').value.trim();
        if(!nama){toast('Nama produk wajib diisi.','error');break}
        const kategori=document.getElementById('mp-kategori').value;
        const emoji=document.getElementById('mp-emoji').value||'🌱';
        const warnaMap={'Sayuran':'#DDEBDD','Buah-buahan':'#EAF3D9','Beras & Biji':'#DDEBDD','Rempah-rempah':'#EFE2D6','Pupuk & Nutrisi':'#E4E0D2','Bibit Unggul':'#DDEBDD','Alat Pertanian':'#E4E0D2'};
        DB.produk.unshift({
          id:uid('p'),nama,kategori,emoji,warna:warnaMap[kategori]||'#DDEBDD',
          harga:Number(document.getElementById('mp-harga').value)||0,
          satuan:document.getElementById('mp-satuan').value.trim()||'kg',
          stok:Number(document.getElementById('mp-stok').value)||0,
          stokMin:Number(document.getElementById('mp-stokMin').value)||10,
          batch:document.getElementById('mp-batch').value||'-',
          kedaluwarsa:document.getElementById('mp-kedaluwarsa').value||null,
          organik:document.getElementById('mp-organik').checked,
          rating:5,terjual:0,
          petani:document.getElementById('mp-petani').value||'Taniku Store',
          lokasi:document.getElementById('mp-lokasi').value||'Lembang',
          deskripsi:document.getElementById('mp-deskripsi').value||''
        });
        const btn = document.querySelector('[data-aksi="simpan-produk-baru"]');
animasiTombol(btn, true);
setTimeout(() => {
  simpanDB();
  tutupModal();
  toast('Produk Berhasil Disimpan', 'success');
    render();
}, 800);break;
      }
      case 'simpan-produk-edit':{
        const p=DB.produk.find(x=>x.id===id);if(!p)break;
        p.nama=document.getElementById('ep-nama').value.trim();
        p.kategori=document.getElementById('ep-kategori').value;
        p.emoji=document.getElementById('ep-emoji').value||p.emoji;
        p.harga=Number(document.getElementById('ep-harga').value)||0;
        p.satuan=document.getElementById('ep-satuan').value.trim();
        p.stok=Number(document.getElementById('ep-stok').value)||0;
        p.stokMin=Number(document.getElementById('ep-stokMin').value)||10;
        p.batch=document.getElementById('ep-batch').value||'';
        p.kedaluwarsa=document.getElementById('ep-kedaluwarsa').value||null;
        p.deskripsi=document.getElementById('ep-deskripsi').value||'';
        p.organik=document.getElementById('ep-organik').checked;
        simpanDB();tutupModal();toast('Data berhasil disimpan.','success');render();break;
      }
      case 'simpan-stok-masuk':{
        const p=DB.produk.find(x=>x.id===document.getElementById('sm-produk').value);if(!p)break;
        const j=Number(document.getElementById('sm-jumlah').value)||0;
        if(j<=0){toast('Jumlah harus > 0.','error');break}
        p.stok+=j;
        if(document.getElementById('sm-batch').value) p.batch=document.getElementById('sm-batch').value;
        if(document.getElementById('sm-kedaluwarsa').value) p.kedaluwarsa=document.getElementById('sm-kedaluwarsa').value;
        simpanDB();tutupModal();toast('Stok '+p.nama+' +'+j+'.','success');render();break;
      }
      case 'simpan-status': {
  const o = DB.pesanan.find(x => x.id === id);
  if (!o) break;
  const sb = document.getElementById('us-status').value;
  const cat = document.getElementById('us-catatan').value || 'Diperbarui Admin';
  o.status = sb;
  if (sb === 'dikirim') {
    o.kurir = o.kurir || 'Kang Dadang Suherman';
    o.resi = o.resi || 'TNK-EXP-' + Math.floor(Math.random() * 900000 + 100000);
  }
  if (['dibayar', 'diproses', 'dikirim', 'selesai'].includes(sb)) o.statusPembayaran = 'lunas';
  o.garisWaktu = (o.garisWaktu || []).map(g => ({ ...g, selesai: true, waktu: g.waktu === '—' ? tglWaktu(new Date()) : g.waktu }));
  o.garisWaktu.push({ tahap: 'Status: ' + STATUS_PESANAN[sb].label, waktu: tglWaktu(new Date()), selesai: true, catatan: cat });

  // Update ke backend
  try {
    await Api.ubahStatusPesanan(o.id, sb, o.statusPembayaran);
  } catch (e) { console.error('Gagal update status:', e); }

  // Kirim notif ke PEMBELI
  try {
    await Api.tambahNotifikasi({
      peran: 'pembeli',
      tipe: 'pesanan',
      judul: 'Pesanan ' + o.nomor + ' Diperbarui',
      pesan: 'Status: ' + STATUS_PESANAN[sb].label + '.',
      tautan: '#/pembeli/pesanan/' + o.id
    });
  } catch (e) { console.error('Gagal kirim notif pembeli:', e); }

  simpanDB();
  tutupModal();
  toast('Status diperbarui.', 'success');
  await render();
  break;
}
      case 'simpan-mitra':{
        const nama=document.getElementById('mm-nama').value.trim();
        if(!nama){toast('Nama Poktan wajib diisi.','error');break}
        DB.mitra.unshift({id:uid('m'),nama,
          ketua:document.getElementById('mm-ketua').value||'-',
          lokasi:document.getElementById('mm-lokasi').value||'-',
          luas:Number(document.getElementById('mm-luas').value)||0,
          komoditas:document.getElementById('mm-komoditas').value||'-',
          status:document.getElementById('mm-status').value||'calon',
          pasokan:0,mutu:0,sertifikat:false});
        simpanDB();tutupModal();toast('Mitra didaftarkan.','success');render();break;
      }
            case 'tambah-promo':modalTambahPromo();break;
      case 'edit-promo':modalEditPromo(id);break;
      case 'toggle-promo':{
        const p=(DB.promo||[]).find(x=>x.id===id);if(!p)break;
        p.aktif=!p.aktif;simpanDB();
        toast('Promo '+(p.aktif?'diaktifkan':'dinonaktifkan')+'.','success');render();break;
      }
      case 'hapus-promo':{
        const p=(DB.promo||[]).find(x=>x.id===id);if(!p)break;
        if(!confirm('Hapus promo "'+p.kode+'"?'))break;
        DB.promo=DB.promo.filter(x=>x.id!==id);simpanDB();
        toast('Promo dihapus.','success');render();break;
      }
      case 'simpan-promo-baru':{
        const kode=(document.getElementById('pr-kode').value||'').trim().toUpperCase();
        if(!kode){toast('Kode promo wajib diisi.','error');break}
        if((DB.promo||[]).some(x=>x.kode===kode)){toast('Kode sudah ada.','error');break}
        const nilai=Number(document.getElementById('pr-nilai').value)||0;
        if(nilai<=0){toast('Nilai diskon harus > 0.','error');break}
        const kad=document.getElementById('pr-kadaluwarsa').value;
        if(!kad){toast('Kadaluwarsa wajib diisi.','error');break}
        if(!DB.promo)DB.promo=[];
        DB.promo.push({
          id:uid('pr'),kode,tipe:document.getElementById('pr-tipe').value,
          nilai,minBelanja:Number(document.getElementById('pr-min').value)||0,
          kadaluwarsa:kad,ket:document.getElementById('pr-ket').value||'',
          aktif:document.getElementById('pr-aktif').checked
        });
        simpanDB();tutupModal();toast('Promo ditambahkan.','success');render();break;
      }
      case 'simpan-promo-edit':{
        const p=(DB.promo||[]).find(x=>x.id===id);if(!p)break;
        const kode=(document.getElementById('pr-kode').value||'').trim().toUpperCase();
        if(!kode){toast('Kode wajib diisi.','error');break}
        if((DB.promo||[]).some(x=>x.kode===kode&&x.id!==id)){toast('Kode sudah dipakai promo lain.','error');break}
        p.kode=kode;
        p.tipe=document.getElementById('pr-tipe').value;
        p.nilai=Number(document.getElementById('pr-nilai').value)||0;
        p.minBelanja=Number(document.getElementById('pr-min').value)||0;
        p.kadaluwarsa=document.getElementById('pr-kadaluwarsa').value;
        p.ket=document.getElementById('pr-ket').value||'';
        p.aktif=document.getElementById('pr-aktif').checked;
        simpanDB();tutupModal();toast('Promo diperbarui.','success');render();break;
      }
      case 'buat-pesanan': await aksiBuatPesanan(); break;
      case 'bayar-pesanan':{
        aksiBayarPesanan(id,el.dataset.metode||'va');
        break;
      }
      case 'konfirmasi-bayar': await aksiKonfirmasiBayar();break;
      case 'terapkan-promo':{
        const kode=(document.getElementById('co-promo').value||'').trim().toUpperCase();
        const info=document.getElementById('co-promo-info');
        if(!kode){info.textContent='Masukkan kode promo.';info.className='text-xs text-red mt-2';break}
        const pr=(DB.promo||[]).find(x=>x.kode===kode);
        if(!pr){info.textContent='Kode promo tidak ditemukan.';info.className='text-xs text-red mt-2';
          window.__PROMO_AKTIF=null;break}
        if(!pr.aktif){info.textContent='Kode promo sedang tidak aktif.';info.className='text-xs text-red mt-2';
          window.__PROMO_AKTIF=null;break}
        if(pr.kadaluwarsa && new Date(pr.kadaluwarsa)<new Date()){
          info.textContent='Kode promo sudah kadaluwarsa pada '+new Date(pr.kadaluwarsa).toLocaleString('id-ID',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})+'.';
          info.className='text-xs text-red mt-2';
          window.__PROMO_AKTIF=null;break;
        }
        const subtotal=Number(document.querySelector('[data-aksi="buat-pesanan"]').dataset.subtotal);
        if(subtotal<pr.minBelanja){
          info.textContent='Minimal belanja '+rp(pr.minBelanja)+' untuk kode ini.';
          info.className='text-xs text-red mt-2';break;
        }
        window.__PROMO_AKTIF=pr;
        info.textContent='✓ '+pr.ket+' — berlaku sampai '+new Date(pr.kadaluwarsa).toLocaleString('id-ID',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});
        info.className='text-xs text-g font-bold mt-2';
        const mk=document.querySelector('.method-card.active[data-kirim]');
        const ongkir=mk?Number(mk.dataset.biaya):15000;
        const diskon=pr.tipe==='ongkir'?Math.min(pr.nilai,ongkir):pr.nilai;
        const total=Math.max(0,subtotal+ongkir-diskon);
        document.getElementById('co-ongkir').textContent=rp(ongkir);
        document.getElementById('co-diskon-row').style.display='flex';
        document.getElementById('co-diskon').textContent='-'+rp(diskon);
        document.getElementById('co-total').textContent=rp(total);
        toast('Kode promo diterapkan.','success');break;
      }
    }
  });

  document.addEventListener('submit', async e=>{
  const f=e.target.closest('[data-form]');if(!f)return;e.preventDefault();
  const j=f.dataset.form;
  if(j==='masuk') await aksiMasuk(f);
  else if(j==='daftar') await aksiDaftar(f);
});

  document.addEventListener('input',e=>{
    const inp=e.target.closest('[data-cari]');if(!inp)return;
    KATA_CARI=inp.value;
    clearTimeout(CARI_TIMEOUT);
    CARI_TIMEOUT=setTimeout(async ()=>{
  const pos=inp.selectionStart;
  await render();
  const baru=document.querySelector('[data-cari]');
  if(baru){baru.focus();try{baru.setSelectionRange(pos,pos)}catch(x){}}
},350);
  });

  document.addEventListener('keydown',e=>{if(e.key==='Escape')tutupModal()});
}

/* ==== ANIMASI HELPER ==== */
function animasiTombol(el, teksSukses) {
  if (!el) return;
  const teksAsli = el.innerHTML;
  el.classList.add('loading');
  el.disabled = true;
  setTimeout(() => {
    el.classList.remove('loading');
    el.classList.add('success');
    if (teksSukses) el.innerHTML = '';
    setTimeout(() => {
      el.classList.remove('success');
      el.innerHTML = teksAsli;
      el.disabled = false;
    }, 900);
  }, 800);
}

function bounceKeranjang() {
  const ikon = document.querySelector('.topbar-actions .btn-icon[href*="keranjang"]');
  if (!ikon) return;
  ikon.classList.remove('bounce');
  void ikon.offsetWidth;
  ikon.classList.add('bounce');
}

/* ===== INIT ===== */
async function muatNotif() {
  if (!SESI) return;
  try {
    const res = await Api.daftarNotifikasi(SESI.peran);
    DB.notifikasi = DB.notifikasi.filter(n => n.peran !== SESI.peran)
      .concat((res || []).map(n => ({...n, peran: SESI.peran})));
    simpanDB();
  } catch (e) {
    console.error('Gagal muat notif:', e);
  }
}

async function init(){
  DB = muatDB();
  SESI = muatSesi();
  await muatNotif();
  pasangEvent();
  await rute();

  setInterval(async () => {
    if (!SESI) return;
    try {
      const res = await Api.daftarNotifikasi(SESI.peran);
      const baru = (res || []).map(n => ({...n, peran: SESI.peran}));
      const lamaBelum = DB.notifikasi.filter(n => n.peran === SESI.peran && !n.dibaca).length;
      const baruBelum = baru.filter(n => !n.dibaca).length;
      if (baruBelum !== lamaBelum) {
        DB.notifikasi = DB.notifikasi.filter(n => n.peran !== SESI.peran).concat(baru);
        simpanDB();
        if (HALAMAN_KINI.includes('notifikasi')) await rute();
        else if (window.lucide) lucide.createIcons();
      }
    } catch (e) {}
  }, 10000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
else init();
})();