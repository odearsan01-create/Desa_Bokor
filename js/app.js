/**
 * DESA BOKOR - Website Resmi
 * Main Application JavaScript (Reactive local-first with Admin Dashboard CRUD)
 */

// =========================================
// DEFAULT DATA STATE
// =========================================
const DEFAULT_STATE = {
  logo: {
    img: 'assets/images/logo.png',
    icon: '🌿',
    title: 'Desa Bokor',
    subtitle: 'Kec. Tumpang, Kab. Malang'
  },
  hero: [
    {
      img: 'assets/images/hero1.webp',
      badge: '🌿 Selamat Datang',
      title: 'Website Resmi<br><span>Desa Bokor</span>',
      subtitle: 'Sumber informasi terpercaya tentang pemerintahan, potensi, dan layanan Desa Bokor, Kec. Tumpang, Kab. Malang.',
      cta1Text: '📋 Lihat Profil Desa',
      cta1Action: "navigate('profil')",
      cta2Text: '🗺️ Jelajahi Peta',
      cta2Action: "navigate('peta')"
    },
    {
      img: 'assets/images/hero2.webp',
      badge: '👥 Komunitas',
      title: 'Desa Bokor<br><span>Bersatu Maju</span>',
      subtitle: 'Bersama membangun desa yang maju, sejahtera, dan berdaya saing dengan semangat gotong royong.',
      cta1Text: '🤝 Tentang Kami',
      cta1Action: "navigate('profil','visi-misi')",
      cta2Text: '📞 Hubungi Kami',
      cta2Action: "navigate('kontak')"
    },
    {
      img: 'assets/images/hero3.webp',
      badge: '🌾 Alam & Budaya',
      title: 'Keindahan<br><span>Desa Bokor</span>',
      subtitle: 'Dikelilingi alam yang asri and kaya budaya, Desa Bokor menawarkan kehidupan yang harmonis dan damai.',
      cta1Text: '🗺️ Peta Digital',
      cta1Action: "navigate('peta')",
      cta2Text: '📋 Profil Desa',
      cta2Action: "navigate('profil')"
    }
  ],
  stats: {
    penduduk: '3.847',
    kk: '1.124',
    luas: '4,2 km²',
    dusunRwRt: '5 RW / 18 RT'
  },
  quickAccess: {
    profilTitle: 'Profil Desa',
    profilDesc: 'Kenali lebih dekat Desa Bokor — visi misi, sejarah, dan struktur pemerintahan desa.',
    petaTitle: 'Peta Digital',
    petaDesc: 'Jelajahi peta interaktif lokasi kantor, sekolah, tempat ibadah, dan fasilitas desa lainnya.',
    kontakTitle: 'Hubungi Kami',
    kontakDesc: 'Sampaikan pertanyaan, saran, atau keluhan Anda kepada pemerintah Desa Bokor.'
  },
  welcome: {
    tag: '🌿 Sambutan Kepala Desa',
    title: 'Membangun Desa Bokor yang Maju dan Sejahtera',
    text1: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Dengan penuh rasa syukur kepada Allah SWT, kami menyambut kehadiran Anda di website resmi Pemerintah Desa Bokor.",
    text2: 'Website ini hadir sebagai wujud komitmen kami dalam memberikan keterbukaan informasi publik kepada seluruh warga masyarakat Desa Bokor. Semoga website ini dapat menjadi media komunikasi dan informasi yang bermanfaat.',
    text3: 'Mari bersama-sama kita wujudkan Desa Bokor yang maju, mandiri, dan sejahtera.',
    name: 'Bpk. Sujarwo, S.Sos.',
    titleSub: 'Kepala Desa Bokor',
    avatar: '👨‍💼',
    img: 'assets/images/hero3.webp',
    badgeIcon: '🏆',
    badgeTitle: 'Desa Aktif',
    badgeSub: 'Kab. Malang 2024'
  },
  visiMisi: {
    tag: '🎯 Arah Pembangunan',
    title: 'Visi dan Misi Desa Bokor',
    desc: 'Komitmen Pemerintah Desa Bokor dalam mewujudkan masyarakat yang sejahtera dan mandiri.',
    visi: '"Terwujudnya Desa Bokor yang Maju, Mandiri, Berdaya Saing, dan Sejahtera Berlandaskan Nilai-nilai Keagamaan, Budaya, dan Kearifan Lokal."',
    misi: [
      'Meningkatkan kualitas tata kelola pemerintahan desa yang transparan, akuntabel, dan partisipatif.',
      'Meningkatkan kualitas sumber daya manusia melalui pendidikan, pelatihan, dan pemberdayaan masyarakat.',
      'Mengembangkan potensi ekonomi lokal berbasis pertanian, UMKM, dan pariwisata desa.',
      'Meningkatkan dan memelihara infrastruktur desa yang berkualitas dan merata.',
      'Melestarikan nilai budaya, adat istiadat, dan kearifan lokal Desa Bokor.'
    ]
  },
  nilaiUtama: [
    { icon: '🤝', title: 'Gotong Royong', desc: 'Bekerja bersama untuk kepentingan bersama' },
    { icon: '⚖️', title: 'Keadilan', desc: 'Merata dan berkeadilan untuk semua warga' },
    { icon: '🌱', title: 'Keberlanjutan', desc: 'Membangun untuk generasi sekarang dan mendatang' },
    { icon: '🔍', title: 'Transparansi', desc: 'Keterbukaan informasi untuk masyarakat' },
    { icon: '💪', title: 'Mandiri', desc: 'Kemandirian desa dalam berbagai aspek' }
  ],
  pemerintahDesa: {
    bpd: { name: 'Drs. H. M. Yasin', pos: 'BPD', avatar: 'bpd', img: '' },
    kades: { name: 'Arianto', pos: 'Kepala Desa', avatar: 'kades', img: '' },
    sekdes: { name: 'Bagus Hadi Wijaya', pos: 'Sekretaris Desa', avatar: 'sekdes', img: '' },
    kaur: [
      { id: 'kaur-keu', name: 'Dewi Rahayu, SE.', pos: 'Kaur Keuangan', avatar: 'kaur', img: '' },
      { id: 'kaur-um', name: 'Bambang Santoso', pos: 'Kaur TU & Umum', avatar: 'kaur', img: '' },
      { id: 'kaur-ren', name: 'Ahmad Rizki, S.IP.', pos: 'Kaur Perencanaan', avatar: 'kaur', img: '' }
    ],
    kasi: [
      { id: 'kasi-pem', name: 'Hendra Wijaya', pos: 'Kasi Pemerintahan', avatar: 'kasi', img: '' },
      { id: 'kasi-kesra', name: 'Siti Nurjanah', pos: 'Kasi Kesejahteraan', avatar: 'kasi', img: '' },
      { id: 'kasi-pel', name: 'Agus Prasetyo', pos: 'Kasi Pelayanan', avatar: 'kasi', img: '' }
    ],
    kadus: [
      { id: 'kawil', name: 'Novia Indrawati', pos: 'Kepala Wilayah', avatar: 'kadus', img: '' }
    ],
    rwList: [
      { rw: 'RW 01', leader: 'Suparman' },
      { rw: 'RW 02', leader: 'Sutrisno' },
      { rw: 'RW 03', leader: 'Murniati' },
      { rw: 'RW 04', leader: 'Wahyono' },
      { rw: 'RW 05', leader: 'Slamet' }
    ],
    rtList: [
      { rt: 'RT 01 / RW 01', leader: 'Kusnan' },
      { rt: 'RT 02 / RW 01', leader: 'Subari' },
      { rt: 'RT 03 / RW 01', leader: 'Ngatimin' },
      { rt: 'RT 01 / RW 02', leader: 'Sujono' },
      { rt: 'RT 02 / RW 02', leader: 'Wardi' },
      { rt: 'RT 01 / RW 03', leader: 'Karsiman' },
      { rt: 'RT 02 / RW 03', leader: 'Ponimin' },
      { rt: 'RT 01 / RW 04', leader: 'Mulyono' },
      { rt: 'RT 02 / RW 04', leader: 'Sutaji' },
      { rt: 'RT 01 / RW 05', leader: 'Supardi' },
      { rt: 'RT 02 / RW 05', leader: 'Sumarno' }
    ]
  },
  kontak: {
    alamat: 'Jl. Raya Bokor No. 01, Desa Bokor, Kec. Tumpang, Kab. Malang',
    telepon: '(0341) 787-XXXX',
    email: 'desaborkor@malangkab.go.id',
    kecamatan: 'Kecamatan Tumpang',
    kabupaten: 'Kabupaten Malang',
    jamOperasional: {
      senin_jumat: '08.00 - 16.00 WIB',
      sabtu: '08.00 - 12.00 WIB',
      minggu: 'Tutup'
    },
    koordinatKantor: { lat: -8.0167, lng: 112.8167 },
    imgPeta: ''
  },
  peta: [
    {
      id: 'kades',
      name: 'Rumah Kepala Desa',
      person: 'Bpk. Sujarwo, S.Sos.',
      lat: -8.0155,
      lng: 112.8180,
      type: 'perangkat',
      subtype: 'Kepala Desa',
      icon: '🏠',
      color: '#1265f0',
      bg: '#e5f0ff',
      img: 'assets/images/hero2.webp',
      gmaps: ''
    },
    {
      id: 'sekdes',
      name: 'Rumah Sekretaris Desa',
      person: 'Ibu Sriani Wulandari, SE.',
      lat: -8.0190,
      lng: 112.8145,
      type: 'perangkat',
      subtype: 'Sekretaris Desa',
      icon: '🏠',
      color: '#1265f0',
      bg: '#e5f0ff',
      img: 'assets/images/hero2.webp',
      gmaps: ''
    },
    {
      id: 'rt01',
      name: 'Rumah Ketua RT 01',
      person: 'Bpk. Ahmad Fauzi',
      lat: -8.0140,
      lng: 112.8195,
      type: 'perangkat',
      subtype: 'Ketua RT',
      icon: '🏡',
      color: '#1265f0',
      bg: '#e5f0ff',
      img: '',
      gmaps: ''
    },
    {
      id: 'rt02',
      name: 'Rumah Ketua RT 02',
      person: 'Bpk. Suwanto',
      lat: -8.0178,
      lng: 112.8160,
      type: 'perangkat',
      subtype: 'Ketua RT',
      icon: '🏡',
      color: '#1265f0',
      bg: '#e5f0ff',
      img: '',
      gmaps: ''
    },
    {
      id: 'rt03',
      name: 'Rumah Ketua RT 03',
      person: 'Ibu Mulyati',
      lat: -8.0200,
      lng: 112.8188,
      type: 'perangkat',
      subtype: 'Ketua RT',
      icon: '🏡',
      color: '#1265f0',
      bg: '#e5f0ff',
      img: '',
      gmaps: ''
    },
    {
      id: 'rw01',
      name: 'Rumah Ketua RW 01',
      person: 'Bpk. Suparman',
      lat: -8.0165,
      lng: 112.8135,
      type: 'perangkat',
      subtype: 'Ketua RW',
      icon: '🏘️',
      color: '#1265f0',
      bg: '#e5f0ff',
      img: '',
      gmaps: ''
    },
    {
      id: 'rw02',
      name: 'Rumah Ketua RW 02',
      person: 'Bpk. Sutrisno',
      lat: -8.0210,
      lng: 112.8170,
      type: 'perangkat',
      subtype: 'Ketua RW',
      icon: '🏘️',
      color: '#1265f0',
      bg: '#e5f0ff',
      img: '',
      gmaps: ''
    },
    {
      id: 'kantor_desa',
      name: 'Kantor Desa Bokor',
      person: 'Pemerintah Desa Bokor',
      lat: -8.0167,
      lng: 112.8167,
      type: 'kantor',
      subtype: 'Kantor Desa',
      icon: '🏛️',
      color: '#376200',
      bg: '#ecffd5',
      img: 'assets/images/hero3.webp',
      gmaps: ''
    },
    {
      id: 'tk1',
      name: 'TK Pertiwi Bokor',
      person: 'Taman Kanak-Kanak',
      lat: -8.0148,
      lng: 112.8175,
      type: 'sekolah',
      subtype: 'TK',
      icon: '🎒',
      color: '#f57c00',
      bg: '#fff3e0',
      img: '',
      gmaps: ''
    },
    {
      id: 'sd1',
      name: 'SDN Bokor 01',
      person: 'Sekolah Dasar Negeri 01 Bokor',
      lat: -8.0183,
      lng: 112.8155,
      type: 'sekolah',
      subtype: 'SD',
      icon: '📚',
      color: '#f57c00',
      bg: '#fff3e0',
      img: '',
      gmaps: ''
    },
    {
      id: 'sd2',
      name: 'SDN Bokor 02',
      person: 'Sekolah Dasar Negeri 02 Bokor',
      lat: -8.0205,
      lng: 112.8183,
      type: 'sekolah',
      subtype: 'SD',
      icon: '📚',
      color: '#f57c00',
      bg: '#fff3e0',
      img: '',
      gmaps: ''
    },
    {
      id: 'masjid1',
      name: 'Masjid Al-Ikhlas',
      person: 'Masjid Jami\' Desa Bokor',
      lat: -8.0160,
      lng: 112.8190,
      type: 'ibadah',
      subtype: 'Masjid',
      icon: '🕌',
      color: '#6a1b9a',
      bg: '#f3e5f5',
      img: '',
      gmaps: ''
    },
    {
      id: 'masjid2',
      name: 'Musholla Nurul Huda',
      person: 'Tempat Ibadah Dusun 2',
      lat: -8.0195,
      lng: 112.8148,
      type: 'ibadah',
      subtype: 'Musholla',
      icon: '🕌',
      color: '#6a1b9a',
      bg: '#f3e5f5',
      img: '',
      gmaps: ''
    },
    {
      id: 'pustu1',
      name: 'Pustu Desa Bokor',
      person: 'Puskesmas Pembantu Kesehatan',
      lat: -8.0170,
      lng: 112.8140,
      type: 'kesehatan',
      subtype: 'Pustu',
      icon: '🏥',
      color: '#c62828',
      bg: '#ffebee',
      img: '',
      gmaps: ''
    },
    {
      id: 'lumbung1',
      name: 'Lumbung Pangan Desa Bokor',
      person: 'Fasilitas penyimpanan dan pengelolaan pangan milik Desa Bokor.',
      lat: -8.0175,
      lng: 112.8180,
      type: 'lumbung',
      subtype: 'Lumbung Desa',
      icon: '🌾',
      color: '#d97706',
      bg: '#fef3c7',
      img: '',
      gmaps: ''
    },
    {
      id: 'makam1',
      name: 'TPU Timur Desa Bokor',
      person: 'Tempat Pemakaman Umum Wilayah Timur',
      lat: -8.0182,
      lng: 112.8130,
      type: 'pemakaman',
      subtype: 'Pemakaman',
      icon: '🪦',
      color: '#4b5563',
      bg: '#f3f4f6',
      img: '',
      gmaps: ''
    },
    {
      id: 'makam2',
      name: 'TPU Barat Desa Bokor',
      person: 'Tempat Pemakaman Umum Wilayah Barat',
      lat: -8.0150,
      lng: 112.8080,
      type: 'pemakaman',
      subtype: 'Pemakaman',
      icon: '🪦',
      color: '#4b5563',
      bg: '#f3f4f6',
      img: '',
      gmaps: ''
    }
  ]
};

// =========================================
// STATE MANAGER
// =========================================
let BOKOR_STATE = null;

// Default admin credentials (stored separately in localStorage)
const ADMIN_CRED_KEY = 'desa_bokor_admin_cred';
const DEFAULT_ADMIN = { email: 'admin@desaborkor.id', password: 'bokor2024' };

function getAdminCred() {
  if (BOKOR_STATE && BOKOR_STATE.admin) {
    return BOKOR_STATE.admin;
  }
  try {
    const c = localStorage.getItem(ADMIN_CRED_KEY);
    return c ? JSON.parse(c) : DEFAULT_ADMIN;
  } catch (_) { return DEFAULT_ADMIN; }
}

function saveAdminCred(email, password) {
  localStorage.setItem(ADMIN_CRED_KEY, JSON.stringify({ email, password }));
  if (BOKOR_STATE) {
    BOKOR_STATE.admin = { email, password };
    saveState(BOKOR_STATE);
  }
}

function isAdminLoggedIn() {
  return sessionStorage.getItem('bokor_admin_session') === 'authenticated';
}

function adminDoLogin(email, password) {
  const cred = getAdminCred();
  return email.trim() === cred.email.trim() && password === cred.password;
}

function adminSetSession() {
  sessionStorage.setItem('bokor_admin_session', 'authenticated');
}

function adminClearSession() {
  sessionStorage.removeItem('bokor_admin_session');
}

function loadState() {
  const local = localStorage.getItem('desa_bokor_state');
  if (local) {
    try {
      BOKOR_STATE = JSON.parse(local);
      if (BOKOR_STATE.logo && !BOKOR_STATE.logo.img) {
        BOKOR_STATE.logo.img = DEFAULT_STATE.logo.img;
      }
      if (BOKOR_STATE.kontak) {
        if (!BOKOR_STATE.kontak.alamat || BOKOR_STATE.kontak.alamat.includes('Jl. Bokor No. 01')) {
          BOKOR_STATE.kontak.alamat = 'Jl. Raya Bokor No. 01, Desa Bokor, Kec. Tumpang, Kab. Malang';
        }
      }
      // Migrate admin credentials if missing
      if (!BOKOR_STATE.admin) {
        BOKOR_STATE.admin = getAdminCred();
      }
      // Migrate peta lumbung & pemakaman markers if missing
      if (BOKOR_STATE.peta && !BOKOR_STATE.peta.some(m => m.type === 'lumbung')) {
        const defaultLumbung = DEFAULT_STATE.peta.find(m => m.type === 'lumbung');
        if (defaultLumbung) BOKOR_STATE.peta.push(defaultLumbung);
      }
      if (BOKOR_STATE.peta && !BOKOR_STATE.peta.some(m => m.type === 'pemakaman')) {
        const defaultMakam = DEFAULT_STATE.peta.find(m => m.type === 'pemakaman');
        if (defaultMakam) BOKOR_STATE.peta.push(defaultMakam);
      }
      if (BOKOR_STATE.peta && !BOKOR_STATE.peta.some(m => m.id === 'makam2')) {
        const defaultMakamBarat = DEFAULT_STATE.peta.find(m => m.id === 'makam2');
        if (defaultMakamBarat) BOKOR_STATE.peta.push(defaultMakamBarat);
      }
      if (BOKOR_STATE.kontak && BOKOR_STATE.kontak.imgPeta === undefined) {
        BOKOR_STATE.kontak.imgPeta = '';
      }
      // Migrate pemerintahDesa rtList, bpd, and img properties
      if (BOKOR_STATE.pemerintahDesa) {
        if (!BOKOR_STATE.pemerintahDesa.bpd) {
          BOKOR_STATE.pemerintahDesa.bpd = JSON.parse(JSON.stringify(DEFAULT_STATE.pemerintahDesa.bpd));
        }
        if (!BOKOR_STATE.pemerintahDesa.rtList) {
          BOKOR_STATE.pemerintahDesa.rtList = JSON.parse(JSON.stringify(DEFAULT_STATE.pemerintahDesa.rtList || []));
        }
        if (BOKOR_STATE.pemerintahDesa.kades) {
          if (!BOKOR_STATE.pemerintahDesa.kades.img) BOKOR_STATE.pemerintahDesa.kades.img = '';
        }
        if (BOKOR_STATE.pemerintahDesa.sekdes) {
          if (!BOKOR_STATE.pemerintahDesa.sekdes.img) BOKOR_STATE.pemerintahDesa.sekdes.img = '';
        }
        ['kaur', 'kasi', 'kadus'].forEach(type => {
          if (BOKOR_STATE.pemerintahDesa[type]) {
            BOKOR_STATE.pemerintahDesa[type].forEach(staff => {
              if (!staff.img) staff.img = '';
            });
          }
        });
      }
    } catch (e) {
      BOKOR_STATE = JSON.parse(JSON.stringify(DEFAULT_STATE));
      BOKOR_STATE.admin = getAdminCred();
    }
  } else {
    BOKOR_STATE = JSON.parse(JSON.stringify(DEFAULT_STATE));
    BOKOR_STATE.admin = getAdminCred();
    localStorage.setItem('desa_bokor_state', JSON.stringify(BOKOR_STATE));
  }
  return BOKOR_STATE;
}

function saveState(state) {
  BOKOR_STATE = state;
  localStorage.setItem('desa_bokor_state', JSON.stringify(state));

  // Kirim state ke API serverless Vercel untuk disimpan di GitHub
  fetch('/api/save-state', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state)
  })
  .then(res => {
    if (!res.ok) {
      console.error('Gagal menyimpan state ke GitHub');
    } else {
      console.log('State berhasil disimpan ke GitHub');
    }
  })
  .catch(err => {
    console.error('Error saat menghubungi API save-state:', err);
  });
}

function resetStateToDefault() {
  if (confirm('Apakah Anda yakin ingin mengembalikan semua data website ke pengaturan awal/default?')) {
    BOKOR_STATE = JSON.parse(JSON.stringify(DEFAULT_STATE));
    BOKOR_STATE.admin = getAdminCred();
    saveState(BOKOR_STATE);
    showToast('✅ Berhasil direset ke default!');
    setTimeout(() => location.reload(), 1000);
  }
}

// Initial Load
async function initApp() {
  try {
    const res = await fetch('js/data.json?t=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === 'object') {
        localStorage.setItem('desa_bokor_state', JSON.stringify(data));
      }
    }
  } catch (e) {
    console.warn('Gagal memuat data dari server, menggunakan data lokal/default:', e);
  }

  // Load state
  loadState();

  // Render aplikasi
  renderHeader();
  renderFooter();
  startWibClock();
  handleRoute();
}

// =========================================
// IMAGE FILE ENCODER & COMPRESSION
// =========================================
function processImageFile(file, callback) {
  if (!file) return;

  const fileName = file.name ? file.name.toLowerCase() : '';
  const fileType = file.type ? file.type.toLowerCase() : '';
  const isHeic = fileName.endsWith('.heic') || fileName.endsWith('.heif') || fileType.includes('heic') || fileType.includes('heif');

  if (isHeic) {
    showToast('⏳ Mengonversi berkas HEIC/HEIF ke JPEG... Mohon tunggu sebentar.', 8000);
    
    const runConversion = () => {
      heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.65
      })
      .then((convertedBlob) => {
        const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        compressImage(blob, callback);
      })
      .catch((error) => {
        console.error('Gagal mengonversi HEIC:', error);
        showToast('❌ Format HEIC/HEIF gagal dikonversi. Coba gunakan berkas JPG/PNG.');
        compressImage(file, callback);
      });
    };

    if (typeof heic2any !== 'undefined') {
      runConversion();
    } else {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/heic2any@0.0.4/dist/heic2any.min.js';
      script.onload = () => {
        if (typeof heic2any !== 'undefined') {
          runConversion();
        } else {
          showToast('❌ Gagal menginisialisasi pustaka HEIC.');
          compressImage(file, callback);
        }
      };
      script.onerror = () => {
        showToast('❌ Gagal mengunduh modul konversi HEIC dari CDN.');
        compressImage(file, callback);
      };
      document.head.appendChild(script);
    }
  } else {
    compressImage(file, callback);
  }
}

function compressImage(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const max_width = 800; // Optimal width for localStorage payload
      const scale = max_width / img.width;

      if (img.width > max_width) {
        canvas.width = max_width;
        canvas.height = img.height * scale;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Compress to JPEG format with 0.65 quality to save space
      const dataUrl = canvas.toDataURL('image/jpeg', 0.65);
      callback(dataUrl);
    };
  };
}

// =========================================
// ROUTING
// =========================================
const routes = {
  'beranda': renderBeranda,
  'profil': renderProfil,
  'peta': renderPeta,
  'kontak': renderKontak,
  'admin': renderAdmin
};

let currentPage = '';
let mapInstance = null;
let activeFilter = 'semua';

function navigate(page, subpage = null) {
  const hash = subpage ? `${page}/${subpage}` : page;
  window.location.hash = hash;
}

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || 'beranda';
  const [page, subpage] = hash.split('/');

  const renderFn = routes[page];
  if (!renderFn) {
    navigate('beranda');
    return;
  }

  // Always force render when loading admin or map pages to reset components
  if (currentPage !== page || page === 'admin' || page === 'peta') {
    currentPage = page;
    renderFn(subpage);
  } else if (page === 'profil') {
    renderProfil(subpage);
  }

  updateNavActive(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavActive(page) {
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.page === page) el.classList.add('active');
  });
  document.querySelectorAll('.nav-mobile-item').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.page === page) el.classList.add('active');
  });
}

// =========================================
// HEADER RENDER
// =========================================
function renderHeader() {
  const header = document.getElementById('header');
  const data = BOKOR_STATE.logo;
  header.innerHTML = `
    <div class="container">
      <div class="header-inner">
        <a class="logo" href="#beranda">
          ${data.img ? `<img src="${data.img}" class="logo-img" alt="Logo">` : `<div class="logo-icon">${data.icon || '🌿'}</div>`}
          <div class="logo-text">
            <span class="logo-title">${data.title}</span>
            <span class="logo-subtitle">${data.subtitle}</span>
          </div>
        </a>

        <!-- Real-Time WIB Clock Widget -->
        <div class="header-wib-clock-wrap">
          <div class="header-wib-clock">
            <span class="clock-icon">🕒</span>
            <span id="wib-clock-text">Memuat WIB...</span>
          </div>
        </div>

        <nav class="nav-desktop">
          <div class="nav-item">
            <span class="nav-link" data-page="beranda" onclick="navigate('beranda')">Beranda</span>
          </div>

          <div class="nav-item">
            <span class="nav-link" data-page="profil" onclick="navigate('profil')">
              Profil Desa
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </span>
            <div class="nav-dropdown">
              <div class="nav-dropdown-item" onclick="navigate('profil', 'visi-misi')">
                <div class="dropdown-icon">🎯</div>
                <div class="nav-dropdown-label">
                  <span>Visi dan Misi</span>
                  <span>Arah pembangunan desa</span>
                </div>
              </div>
              <div class="nav-dropdown-item" onclick="navigate('profil', 'struktur')">
                <div class="dropdown-icon">👥</div>
                <div class="nav-dropdown-label">
                  <span>Struktur Organisasi</span>
                  <span>Pemerintahan Desa</span>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item">
            <span class="nav-link" data-page="peta" onclick="navigate('peta')">
              Peta Digital
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </span>
            <div class="nav-dropdown">
              <div class="nav-dropdown-item" onclick="setMapFilter('perangkat'); navigate('peta')">
                <div class="dropdown-icon">🏠</div>
                <div class="nav-dropdown-label">
                  <span>Rumah Perangkat Desa</span>
                  <span>Kades, Sekdes, RT, RW</span>
                </div>
              </div>
              <div class="nav-dropdown-item" onclick="setMapFilter('kantor'); navigate('peta')">
                <div class="dropdown-icon">🏛️</div>
                <div class="nav-dropdown-label">
                  <span>Kantor Desa</span>
                  <span>Lokasi kantor pemerintahan</span>
                </div>
              </div>
              <div class="nav-dropdown-item" onclick="setMapFilter('lumbung'); navigate('peta')">
                <div class="dropdown-icon">🌾</div>
                <div class="nav-dropdown-label">
                  <span>Lumbung Desa</span>
                  <span>Lokasi lumbung pangan desa</span>
                </div>
              </div>
              <div class="nav-dropdown-item" onclick="setMapFilter('sekolah'); navigate('peta')">
                <div class="dropdown-icon">🏫</div>
                <div class="nav-dropdown-label">
                  <span>Sekolah</span>
                  <span>Fasilitas pendidikan</span>
                </div>
              </div>
              <div class="nav-dropdown-item" onclick="setMapFilter('ibadah'); navigate('peta')">
                <div class="dropdown-icon">🕌</div>
                <div class="nav-dropdown-label">
                  <span>Tempat Ibadah</span>
                  <span>Masjid dan musholla</span>
                </div>
              </div>
              <div class="nav-dropdown-item" onclick="setMapFilter('kesehatan'); navigate('peta')">
                <div class="dropdown-icon">🏥</div>
                <div class="nav-dropdown-label">
                  <span>Kesehatan (Pustu)</span>
                  <span>Pos kesehatan desa</span>
                </div>
              </div>
              <div class="nav-dropdown-item" onclick="setMapFilter('pemakaman'); navigate('peta')">
                <div class="dropdown-icon">🪦</div>
                <div class="nav-dropdown-label">
                  <span>Tempat Pemakaman</span>
                  <span>TPU / Pemakaman umum desa</span>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item">
            <span class="nav-link" data-page="kontak" onclick="navigate('kontak')">Kontak</span>
          </div>

          <div class="nav-item" style="margin-left: 12px;">
            <span class="nav-link" data-page="admin" onclick="navigate('admin')" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 20px;">
              ⚙️ Admin
            </span>
          </div>
        </nav>

        <button class="hamburger" id="hamburger-btn" onclick="toggleMobileNav()" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <nav class="nav-mobile" id="nav-mobile">
      <div class="mobile-wib-clock-bar">
        <span style="color:#facc15;">🕒</span> <span id="wib-clock-mobile-text">Memuat WIB...</span>
      </div>
      <div class="nav-mobile-item" data-page="beranda" onclick="navigate('beranda'); closeMobileNav()">🏠 Beranda</div>
      <div>
        <div class="nav-mobile-item" data-page="profil" onclick="navigate('profil'); closeMobileNav()">📋 Profil Desa</div>
        <div class="nav-mobile-sub">
          <span class="nav-mobile-item" onclick="navigate('profil','visi-misi'); closeMobileNav()">› Visi dan Misi</span>
          <span class="nav-mobile-item" onclick="navigate('profil','struktur'); closeMobileNav()">› Struktur Organisasi</span>
        </div>
      </div>
      <div>
        <div class="nav-mobile-item" data-page="peta" onclick="navigate('peta'); closeMobileNav()">🗺️ Peta Digital</div>
        <div class="nav-mobile-sub">
          <span class="nav-mobile-item" onclick="setMapFilter('perangkat'); navigate('peta'); closeMobileNav()">› Rumah Perangkat Desa</span>
          <span class="nav-mobile-item" onclick="setMapFilter('kantor'); navigate('peta'); closeMobileNav()">› Kantor Desa</span>
          <span class="nav-mobile-item" onclick="setMapFilter('lumbung'); navigate('peta'); closeMobileNav()">› Lumbung Desa</span>
          <span class="nav-mobile-item" onclick="setMapFilter('sekolah'); navigate('peta'); closeMobileNav()">› Sekolah</span>
          <span class="nav-mobile-item" onclick="setMapFilter('ibadah'); navigate('peta'); closeMobileNav()">› Tempat Ibadah</span>
          <span class="nav-mobile-item" onclick="setMapFilter('kesehatan'); navigate('peta'); closeMobileNav()">› Kesehatan</span>
          <span class="nav-mobile-item" onclick="setMapFilter('pemakaman'); navigate('peta'); closeMobileNav()">› Tempat Pemakaman</span>
        </div>
      </div>
      <div class="nav-mobile-item" data-page="kontak" onclick="navigate('kontak'); closeMobileNav()">📞 Kontak</div>
      <div class="nav-mobile-item" data-page="admin" onclick="navigate('admin'); closeMobileNav()" style="background: rgba(255,255,255,0.1); border-top: 1px solid rgba(255,255,255,0.2); margin-top: 8px;">⚙️ Admin Panel</div>
    </nav>
  `;
}

function toggleMobileNav() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('nav-mobile');
  btn.classList.toggle('open');
  nav.classList.toggle('open');
}

function closeMobileNav() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('nav-mobile');
  btn.classList.remove('open');
  nav.classList.remove('open');
}

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// =========================================
// FOOTER RENDER
// =========================================
function renderFooter() {
  const footer = document.getElementById('footer');
  const logo = BOKOR_STATE.logo;
  const k = BOKOR_STATE.kontak;
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">
            ${logo.img ? `<img src="${logo.img}" class="logo-img" alt="Logo">` : `<div class="logo-icon">${logo.icon || '🌿'}</div>`}
            <div class="logo-text">
              <span class="logo-title">${logo.title}</span>
              <span class="logo-subtitle" style="color:rgba(255,255,255,0.6)">${logo.subtitle}</span>
            </div>
          </div>
          <p class="footer-desc">
            Website resmi Pemerintah Desa Bokor, Kecamatan Tumpang, Kabupaten Malang, Jawa Timur.
            Mewujudkan transparansi dan keterbukaan informasi publik untuk masyarakat.
          </p>
          <div class="footer-socials">
            <a class="social-btn" title="Facebook">📘</a>
            <a class="social-btn" title="Instagram">📷</a>
            <a class="social-btn" title="YouTube">▶️</a>
            <a class="social-btn" title="WhatsApp">💬</a>
          </div>
        </div>

        <div>
          <div class="footer-section-title">NAVIGASI</div>
          <div class="footer-links">
            <span class="footer-link" onclick="navigate('beranda')">Beranda</span>
            <span class="footer-link" onclick="navigate('profil','visi-misi')">Visi dan Misi</span>
            <span class="footer-link" onclick="navigate('profil','struktur')">Struktur Organisasi</span>
            <span class="footer-link" onclick="navigate('peta')">Peta Digital</span>
            <span class="footer-link" onclick="navigate('kontak')">Kontak</span>
          </div>
        </div>

        <div>
          <div class="footer-section-title">PETA DIGITAL</div>
          <div class="footer-links">
            <span class="footer-link" onclick="setMapFilter('perangkat'); navigate('peta')">Rumah Perangkat Desa</span>
            <span class="footer-link" onclick="setMapFilter('kantor'); navigate('peta')">Kantor Desa</span>
            <span class="footer-link" onclick="setMapFilter('lumbung'); navigate('peta')">Lumbung Desa</span>
            <span class="footer-link" onclick="setMapFilter('sekolah'); navigate('peta')">Sekolah (TK & SD)</span>
            <span class="footer-link" onclick="setMapFilter('ibadah'); navigate('peta')">Tempat Ibadah</span>
            <span class="footer-link" onclick="setMapFilter('kesehatan'); navigate('peta')">Kesehatan (Pustu)</span>
            <span class="footer-link" onclick="setMapFilter('pemakaman'); navigate('peta')">Tempat Pemakaman</span>
          </div>
        </div>

        <div>
          <div class="footer-section-title">KONTAK</div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">📍</span>
            <span class="footer-contact-text">${k.alamat}</span>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">📞</span>
            <span class="footer-contact-text">${k.telepon}</span>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">🕐</span>
            <span class="footer-contact-text">Senin – Jumat: ${k.jamOperasional.senin_jumat}</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Pemerintah Desa Bokor. | <a href="#admin" style="color: var(--secondary-3); font-weight: 700;">Kelola Website (Admin Dashboard)</a></span>
        <span>Dibangun dengan ❤️ untuk <a>Masyarakat Desa Bokor</a></span>
      </div>
    </div>
  `;
}

// =========================================
// PAGE: BERANDA (HOME)
// =========================================
let heroInterval = null;
let currentSlide = 0;

function renderBeranda() {
  const app = document.getElementById('app');
  const h = BOKOR_STATE.hero;
  const s = BOKOR_STATE.stats;
  const qa = BOKOR_STATE.quickAccess;
  const w = BOKOR_STATE.welcome;
  const p = BOKOR_STATE.peta;

  // Filter Categories counts for sidebar
  const countPerangkat = p.filter(m => m.type === 'perangkat').length;
  const countKantor = p.filter(m => m.type === 'kantor').length;
  const countSekolah = p.filter(m => m.type === 'sekolah').length;
  const countIbadah = p.filter(m => m.type === 'ibadah').length;
  const countKesehatan = p.filter(m => m.type === 'kesehatan').length;
  const countLumbung = p.filter(m => m.type === 'lumbung').length;

  app.innerHTML = `
    <div class="page">
      <!-- Hero Carousel -->
      <section class="hero" id="hero-section">
        <div class="hero-slides" id="hero-slides">
          ${h.map((slide, i) => `
            <div class="hero-slide" id="slide-${i}">
              <img src="${slide.img}" alt="Desa Bokor ${i + 1}" onerror="this.src='assets/images/hero1.webp'" loading="${i === 0 ? 'eager' : 'lazy'}">
              <div class="hero-overlay"></div>
              <div class="hero-content">
                <div class="container">
                  <div class="hero-badge"><span></span>${slide.badge}</div>
                  <h1 class="hero-title">${slide.title}</h1>
                  <p class="hero-subtitle">${slide.subtitle}</p>
                  <div class="hero-cta">
                    <button class="btn btn-primary" onclick="${slide.cta1Action || "navigate('profil')" }">${slide.cta1Text || 'Tampilkan'}</button>
                    <button class="btn btn-outline" onclick="${slide.cta2Action || "navigate('peta')" }">${slide.cta2Text || 'Jelajahi'}</button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Arrow Controls -->
        <button class="hero-arrow hero-arrow-left" onclick="changeSlide(-1)" aria-label="Previous">‹</button>
        <button class="hero-arrow hero-arrow-right" onclick="changeSlide(1)" aria-label="Next">›</button>

        <!-- Dots -->
        <div class="hero-controls">
          ${h.map((_, i) => `
            <button class="hero-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Slide ${i + 1}"></button>
          `).join('')}
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon blue">👥</div>
            <div class="stat-info">
              <div class="stat-value">${s.penduduk}</div>
              <div class="stat-label">Total Penduduk</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon green">🏠</div>
            <div class="stat-info">
              <div class="stat-value">${s.kk}</div>
              <div class="stat-label">Kepala Keluarga</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon gold">🌾</div>
            <div class="stat-info">
              <div class="stat-value">${s.luas}</div>
              <div class="stat-label">Luas Wilayah</div>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon orange">🏘️</div>
            <div class="stat-info">
              <div class="stat-value">${s.dusunRwRt}</div>
              <div class="stat-label">Dusun & Lingkungan</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Access -->
      <section class="quick-access">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">✨ Layanan Desa</div>
            <h2 class="section-title">Akses <span>Informasi</span> Cepat</h2>
            <p class="section-desc">Temukan berbagai informasi and layanan Desa Bokor dengan mudah dan cepat.</p>
          </div>
          <div class="quick-grid">
            <div class="quick-card" onclick="navigate('profil')">
              <div class="quick-icon blue">📋</div>
              <h3 class="quick-title">${qa.profilTitle}</h3>
              <p class="quick-desc">${qa.profilDesc}</p>
              <span class="quick-arrow">Lihat Profil →</span>
            </div>
            <div class="quick-card" onclick="navigate('peta')">
              <div class="quick-icon green">🗺️</div>
              <h3 class="quick-title">${qa.petaTitle}</h3>
              <p class="quick-desc">${qa.petaDesc}</p>
              <span class="quick-arrow">Buka Peta →</span>
            </div>
            <div class="quick-card" onclick="navigate('kontak')">
              <div class="quick-icon gold">📞</div>
              <h3 class="quick-title">${qa.kontakTitle}</h3>
              <p class="quick-desc">${qa.kontakDesc}</p>
              <span class="quick-arrow">Kirim Pesan →</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Welcome/Sambutan -->
      <section class="welcome-section">
        <div class="container">
          <div class="welcome-grid">
            <div class="welcome-image">
              <img src="${w.img}" alt="Kepala Desa" onerror="this.src='assets/images/hero3.webp'" loading="lazy">
              <div class="welcome-image-badge">
                <span class="badge-icon">${w.badgeIcon}</span>
                <div class="badge-text">
                  <strong>${w.badgeTitle}</strong>
                  <span>${w.badgeSub}</span>
                </div>
              </div>
            </div>
            <div class="welcome-text-content">
              <div class="welcome-tag">${w.tag}</div>
              <h2 class="welcome-title">${w.title}</h2>
              <p class="welcome-text">${w.text1}</p>
              <p class="welcome-text">${w.text2}</p>
              <p class="welcome-text">${w.text3}</p>
              <div class="welcome-signature">
                <div class="welcome-avatar">${w.avatar}</div>
                <div class="welcome-name">
                  <strong>${w.name}</strong>
                  <span>${w.titleSub}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Peta Preview Section -->
      <section style="background: var(--gray-0); padding: 80px 0;">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">🗺️ Peta Digital</div>
            <h2 class="section-title">Lokasi <span>Fasilitas Desa</span></h2>
            <p class="section-desc">Temukan lokasi kantor desa, sekolah, tempat ibadah, dan fasilitas kesehatan di Desa Bokor.</p>
          </div>

          <div style="display:grid; grid-template-columns: 1fr 320px; gap: 28px; align-items: start;">
            <!-- Map -->
            <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-2xl); border: 1px solid var(--gray-3); position: relative;">
              <div id="home-map" style="height: 480px; width: 100%;"></div>
              <div style="position:absolute; bottom:16px; left:16px; background:white; border-radius:12px; padding:12px 16px; box-shadow:var(--shadow-lg); z-index:500; font-size:13px; font-weight:700; color:var(--gray-8); display:flex; align-items:center; gap:8px;">
                📍 Desa Bokor, Kec. Tumpang, Kab. Malang
              </div>
            </div>

            <!-- Legend Panel -->
            <div style="display:flex; flex-direction:column; gap:16px;">
              <!-- Categories -->
              ${[
                { icon: '🏠', color: '#1265f0', bg: '#e5f0ff', label: 'Perangkat Desa', count: countPerangkat, filter: 'perangkat' },
                { icon: '🏛️', color: '#376200', bg: '#ecffd5', label: 'Kantor Desa', count: countKantor, filter: 'kantor' },
                { icon: '🌾', color: '#d97706', bg: '#fef3c7', label: 'Lumbung Pangan', count: countLumbung, filter: 'lumbung' },
                { icon: '📚', color: '#f57c00', bg: '#fff3e0', label: 'Sekolah', count: countSekolah, filter: 'sekolah' },
                { icon: '🕌', color: '#6a1b9a', bg: '#f3e5f5', label: 'Tempat Ibadah', count: countIbadah, filter: 'ibadah' },
                { icon: '🏥', color: '#c62828', bg: '#ffebee', label: 'Kesehatan (Pustu)', count: countKesehatan, filter: 'kesehatan' }
              ].map(cat => `
                <div onclick="setMapFilter('${cat.filter}'); navigate('peta');"
                  style="background:white; border-radius:12px; padding:16px; display:flex; align-items:center; gap:14px; border:1px solid var(--gray-2); cursor:pointer; transition:all 0.2s ease; box-shadow:var(--shadow-sm);"
                  onmouseover="this.style.transform='translateX(4px)'; this.style.borderColor='${cat.color}'; this.style.boxShadow='0 4px 16px rgba(0,0,0,0.1)';"
                  onmouseout="this.style.transform=''; this.style.borderColor='var(--gray-2)'; this.style.boxShadow='var(--shadow-sm)';"
                >
                  <div style="width:44px; height:44px; border-radius:10px; background:${cat.bg}; display:flex; align-items:center; justify-content:center; font-size:20px; flex-shrink:0;">${cat.icon}</div>
                  <div style="flex:1;">
                    <div style="font-size:14px; font-weight:700; color:var(--gray-9);">${cat.label}</div>
                    <div style="font-size:12px; color:var(--gray-5); margin-top:2px;">${cat.count} lokasi</div>
                  </div>
                  <div style="font-size:18px; color:var(--gray-4);">›</div>
                </div>
              `).join('')}

              <button onclick="navigate('peta')" style="margin-top:8px; padding:14px; border-radius:12px; background:linear-gradient(135deg,var(--primary-6),var(--primary-8)); color:white; font-size:15px; font-weight:700; font-family:var(--font-family); cursor:pointer; border:none; box-shadow:0 4px 20px rgba(7,82,216,0.35); transition:all 0.2s ease;"
                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 28px rgba(7,82,216,0.5)';"
                onmouseout="this.style.transform=''; this.style.boxShadow='0 4px 20px rgba(7,82,216,0.35)';"
              >
                🗺️ Buka Peta Lengkap
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  initHeroCarousel();
  setTimeout(initHomeMap, 300);
}

function initHeroCarousel() {
  currentSlide = 0;
  if (heroInterval) clearInterval(heroInterval);
  heroInterval = setInterval(() => changeSlide(1), 5000);
}

function goToSlide(index) {
  currentSlide = index;
  updateSlide();
  if (heroInterval) clearInterval(heroInterval);
  heroInterval = setInterval(() => changeSlide(1), 5000);
}

function changeSlide(dir) {
  const h = BOKOR_STATE.hero;
  currentSlide = (currentSlide + dir + h.length) % h.length;
  updateSlide();
}

function updateSlide() {
  const slidesEl = document.getElementById('hero-slides');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slidesEl) return;
  slidesEl.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

// =========================================
// PAGE: PROFIL DESA
// =========================================
function renderProfil(subpage) {
  const activeTab = subpage === 'struktur' ? 'struktur' : 'visi-misi';
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <div class="page-hero-content">
            <div class="page-breadcrumb">
              <span onclick="navigate('beranda')">Beranda</span>
              <span class="separator">›</span>
              <span>Profil Desa</span>
            </div>
            <h1 class="page-title">Profil Desa Bokor</h1>
            <p class="page-subtitle">Mengenal lebih dalam tentang Desa Bokor, Kecamatan Tumpang, Kabupaten Malang</p>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="profile-tabs">
        <div class="container">
          <div class="tab-list">
            <button class="tab-btn ${activeTab === 'visi-misi' ? 'active' : ''}" onclick="navigate('profil','visi-misi')" id="tab-visi">
              🎯 Visi dan Misi
            </button>
            <button class="tab-btn ${activeTab === 'struktur' ? 'active' : ''}" onclick="navigate('profil','struktur')" id="tab-struktur">
              👥 Struktur Organisasi
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Content -->
      <div id="tab-content">
        ${activeTab === 'visi-misi' ? renderVisiMisi() : renderStruktur()}
      </div>
    </div>
  `;
}

function renderVisiMisi() {
  const vm = BOKOR_STATE.visiMisi;
  const nu = BOKOR_STATE.nilaiUtama;
  return `
    <section class="visi-misi-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${vm.tag}</div>
          <h2 class="section-title">${vm.title}</h2>
          <p class="section-desc">${vm.desc}</p>
        </div>

        <div class="visi-misi-grid">
          <!-- Visi -->
          <div class="vm-card visi">
            <div class="vm-header">
              <div class="vm-icon blue">🌟</div>
              <div>
                <div class="vm-title">Visi</div>
                <div class="vm-subtitle">Cita-cita Desa Bokor</div>
              </div>
            </div>
            <p class="vm-text">${vm.visi}</p>
          </div>

          <!-- Misi -->
          <div class="vm-card misi">
            <div class="vm-header">
              <div class="vm-icon green">🎯</div>
              <div>
                <div class="vm-title">Misi</div>
                <div class="vm-subtitle">Langkah menuju visi desa</div>
              </div>
            </div>
            <div class="misi-list">
              ${vm.misi.map((m, idx) => `
                <div class="misi-item">
                  <div class="misi-num">${idx + 1}</div>
                  <p class="misi-text">${m}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Nilai-nilai Desa -->
        <div class="section-header" style="margin-top:64px">
          <div class="section-tag">💎 Nilai Utama</div>
          <h2 class="section-title">Nilai-nilai <span>Desa Bokor</span></h2>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:20px;">
          ${nu.map(v => `
            <div style="background:white; border-radius:16px; padding:28px 24px; text-align:center; box-shadow:0 2px 8px rgba(0,0,0,0.07); border:1px solid #e9ecef; transition:all 0.25s ease; cursor:default;"
              onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 32px rgba(0,0,0,0.12)'"
              onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.07)'"
            >
              <div style="font-size:36px; margin-bottom:12px;">${v.icon}</div>
              <div style="font-size:16px; font-weight:700; color:#212529; margin-bottom:8px;">${v.title}</div>
              <div style="font-size:13px; color:#868e96; line-height:1.5;">${v.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function orgCardV2(p) {
  if (!p) return '';
  const hasImg = !!p.img;
  const fallbackEmoji = p.avatar === 'kades' 
    ? '👨‍💼' 
    : p.avatar === 'sekdes' 
      ? '👩‍💼' 
      : p.avatar === 'bpd' 
        ? '🏛️' 
        : p.avatar === 'kaur' 
          ? '📋' 
          : p.avatar === 'kasi' 
            ? '⚙️' 
            : '👤';

  return `
    <div class="org-card-v2">
      <div class="org-card-photo-box">
        ${hasImg 
          ? `<img src="${p.img}" class="org-card-img-v2" alt="${p.name}">` 
          : `<div class="org-card-avatar-v2">${fallbackEmoji}</div>`
        }
      </div>
      <div class="org-card-content-box">
        <div class="org-card-role-bar" title="${p.pos || ''}">${p.pos || 'JABATAN'}</div>
        <div class="org-card-name-bar" title="${p.name || ''}">${p.name || 'NAMA'}</div>
      </div>
    </div>
  `;
}

function drawOrgConnectors() {
  const container = document.getElementById('org-chart-container');
  const svg = document.getElementById('org-svg-canvas');
  if (!container || !svg) return;

  svg.innerHTML = '';
  const cRect = container.getBoundingClientRect();

  function getPoint(id, position = 'center') {
    const el = document.getElementById(id);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const x = r.left - cRect.left;
    const y = r.top - cRect.top;
    
    if (position === 'top') return { x: x + r.width / 2, y: y };
    if (position === 'bottom') return { x: x + r.width / 2, y: y + r.height };
    if (position === 'left') return { x: x, y: y + r.height / 2 };
    if (position === 'right') return { x: x + r.width, y: y + r.height / 2 };
    return { x: x + r.width / 2, y: y + r.height / 2 };
  }

  function addPath(d, isDashed = false, strokeColor = '#1e293b', strokeWidth = 2) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('stroke', strokeColor);
    path.setAttribute('stroke-width', strokeWidth);
    path.setAttribute('fill', 'none');
    if (isDashed) {
      path.setAttribute('stroke-dasharray', '6,4');
    }
    svg.appendChild(path);
  }

  const bpdRight = getPoint('node-bpd', 'right');
  const kadesLeft = getPoint('node-kades', 'left');
  const kadesBottom = getPoint('node-kades', 'bottom');
  const sekdesLeft = getPoint('node-sekdes', 'left');

  // 1. BPD -> KEPALA DESA (Horizontal DASHED)
  if (bpdRight && kadesLeft) {
    addPath(`M ${bpdRight.x} ${bpdRight.y} L ${kadesLeft.x} ${bpdRight.y}`, true);
  }

  // 2. KEPALA DESA -> Vertical Main Spine (SOLID)
  if (kadesBottom) {
    const spineYMid = kadesBottom.y + 40;
    addPath(`M ${kadesBottom.x} ${kadesBottom.y} L ${kadesBottom.x} ${spineYMid}`, false);

    // 3. Main Spine -> SEKRETARIS DESA (Horizontal DASHED)
    if (sekdesLeft) {
      addPath(`M ${kadesBottom.x} ${sekdesLeft.y} L ${sekdesLeft.x} ${sekdesLeft.y}`, true);
    }

    // 4. Main Spine -> KASI Group & KAUR Group (SOLID Orthogonal)
    const kasiPoints = [0, 1, 2].map(i => getPoint(`node-kasi-${i}`, 'top')).filter(Boolean);
    const kaurPoints = [0, 1, 2].map(i => getPoint(`node-kaur-${i}`, 'top')).filter(Boolean);

    if (kasiPoints.length > 0 || kaurPoints.length > 0) {
      const firstKasiTop = kasiPoints[0] ? kasiPoints[0].y : (kaurPoints[0] ? kaurPoints[0].y : spineYMid + 60);
      const busY = firstKasiTop - 25;

      addPath(`M ${kadesBottom.x} ${spineYMid} L ${kadesBottom.x} ${busY}`, false);

      if (kasiPoints.length > 0) {
        const minKasiX = Math.min(...kasiPoints.map(p => p.x));
        const maxKasiX = Math.max(...kasiPoints.map(p => p.x));
        addPath(`M ${minKasiX} ${busY} L ${Math.max(maxKasiX, kadesBottom.x)} ${busY}`, false);
        kasiPoints.forEach(p => addPath(`M ${p.x} ${busY} L ${p.x} ${p.y}`, false));
      }

      if (kaurPoints.length > 0) {
        const minKaurX = Math.min(...kaurPoints.map(p => p.x));
        const maxKaurX = Math.max(...kaurPoints.map(p => p.x));
        addPath(`M ${Math.min(minKaurX, kadesBottom.x)} ${busY} L ${maxKaurX} ${busY}`, false);
        kaurPoints.forEach(p => addPath(`M ${p.x} ${busY} L ${p.x} ${p.y}`, false));
      }

      // 5. Main Spine -> KEPALA WILAYAH (SOLID)
      const kawilTop = getPoint('node-kawil', 'top');
      if (kawilTop) {
        const kasiBottoms = [0, 1, 2].map(i => getPoint(`node-kasi-${i}`, 'bottom')).filter(Boolean);
        const kaurBottoms = [0, 1, 2].map(i => getPoint(`node-kaur-${i}`, 'bottom')).filter(Boolean);
        const allBottoms = [...kasiBottoms, ...kaurBottoms].map(p => p.y);
        const maxStaffBottom = allBottoms.length > 0 ? Math.max(...allBottoms) : busY + 100;
        const kawilBusY = maxStaffBottom + 25;

        addPath(`M ${kadesBottom.x} ${busY} L ${kadesBottom.x} ${kawilBusY}`, false);
        addPath(`M ${kadesBottom.x} ${kawilBusY} L ${kawilTop.x} ${kawilBusY}`, false);
        addPath(`M ${kawilTop.x} ${kawilBusY} L ${kawilTop.x} ${kawilTop.y}`, false);
      }
    }
  }
}

function renderStruktur() {
  const pd = BOKOR_STATE.pemerintahDesa;

  // Trigger SVG connector calculation after rendering to DOM
  setTimeout(() => drawOrgConnectors(), 60);

  return `
    <section class="org-section">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">👥 Pemerintah Desa</div>
          <h2 class="section-title">Struktur <span>Organisasi</span></h2>
          <p class="section-desc">Pemerintahan Desa Bokor, Kecamatan Tumpang, Kabupaten Malang</p>
        </div>

        <!-- Org Chart Container with SVG Connectors -->
        <div class="org-chart-outer">
          <div class="org-chart-wrapper" id="org-chart-container">
            <svg class="org-svg-connectors" id="org-svg-canvas"></svg>

            <!-- Row 1: BPD, KEPALA DESA, SEKRETARIS DESA -->
            <div class="org-row org-row-top">
              <div class="org-node-container" id="node-bpd">
                ${orgCardV2(pd.bpd || { name: 'Drs. H. M. Yasin', pos: 'BPD', avatar: 'bpd' })}
              </div>
              <div class="org-node-container" id="node-kades">
                ${orgCardV2(pd.kades || { name: 'Arianto', pos: 'Kepala Desa', avatar: 'kades' })}
              </div>
              <div class="org-node-container" id="node-sekdes">
                ${orgCardV2(pd.sekdes || { name: 'Bagus Hadi Wijaya', pos: 'Sekretaris Desa', avatar: 'sekdes' })}
              </div>
            </div>

            <!-- Row 2: KASI & KAUR Section -->
            <div class="org-row org-row-staff">
              <!-- KASI (Unsur Pelaksana Teknis) -->
              <div class="org-group org-group-kasi">
                <div class="org-group-title">UNSUR PELAKSANA TEKNIS (KASI)</div>
                <div class="org-group-cards">
                  ${(pd.kasi || []).map((p, i) => `
                    <div class="org-node-container" id="node-kasi-${i}">
                      ${orgCardV2(p)}
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- KAUR (Unsur Staf Sekretariat) -->
              <div class="org-group org-group-kaur">
                <div class="org-group-title">UNSUR STAF SEKRETARIAT (KAUR)</div>
                <div class="org-group-cards">
                  ${(pd.kaur || []).map((p, i) => `
                    <div class="org-node-container" id="node-kaur-${i}">
                      ${orgCardV2(p)}
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Row 3: KEPALA WILAYAH Section -->
            <div class="org-row org-row-bottom">
              <div class="org-node-container" id="node-kawil">
                ${(pd.kadus && pd.kadus[0]) 
                  ? orgCardV2(pd.kadus[0]) 
                  : orgCardV2({ name: 'Novia Indrawati', pos: 'Kepala Wilayah', avatar: 'kadus' })
                }
              </div>
            </div>

          </div>
        </div>

        <!-- RT/RW Info -->
        <div style="margin-top:64px; background:white; border-radius:20px; padding:40px; box-shadow:0 2px 8px rgba(0,0,0,0.07); border:1px solid #e9ecef;">
          <div class="section-header" style="margin-bottom:32px;">
            <div class="section-tag">🏘️ RT & RW</div>
            <h3 class="section-title" style="font-size:1.5rem;">Daftar <span>Ketua RW</span></h3>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px,1fr)); gap:12px; margin-bottom:40px;">
            ${(pd.rwList || []).map(rw => `
              <div style="background:#f8f9fa; border-radius:12px; padding:16px; border:1px solid #dee2e6;">
                <div style="font-size:13px; font-weight:700; color:#0752d8; margin-bottom:8px;">🌿 ${rw.rw}</div>
                <div style="font-size:12px; color:#495057; font-weight:500;">Ketua: ${rw.leader}</div>
              </div>
            `).join('')}
          </div>

          <div class="section-header" style="margin-bottom:32px; border-top:1px solid #dee2e6; padding-top:32px;">
            <h3 class="section-title" style="font-size:1.5rem;">Daftar <span>Ketua RT</span></h3>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px,1fr)); gap:12px;">
            ${(pd.rtList || []).map(rt => `
              <div style="background:#f8f9fa; border-radius:12px; padding:16px; border:1px solid #dee2e6;">
                <div style="font-size:13px; font-weight:700; color:#4a8200; margin-bottom:8px;">📍 ${rt.rt}</div>
                <div style="font-size:12px; color:#495057; font-weight:500;">Ketua: ${rt.leader}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

// =========================================
// PAGE: PETA DIGITAL
// =========================================
function setMapFilter(filter) {
  activeFilter = filter;
}

function renderPeta() {
  const app = document.getElementById('app');
  const p = BOKOR_STATE.peta;

  const filtered = activeFilter === 'semua'
    ? p
    : p.filter(m => m.type === activeFilter);

  app.innerHTML = `
    <div class="page map-page">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <div class="page-hero-content">
            <div class="page-breadcrumb">
              <span onclick="navigate('beranda')">Beranda</span>
              <span class="separator">›</span>
              <span>Peta Digital</span>
            </div>
            <h1 class="page-title">Peta Digital Desa Bokor</h1>
            <p class="page-subtitle">Jelajahi lokasi fasilitas dan perangkat desa secara interaktif</p>
          </div>
        </div>
      </div>

      <!-- Map Filters -->
      <div class="map-controls">
        <div class="container">
          <div class="map-filter-list">
            <button class="map-filter-btn ${activeFilter === 'semua' ? 'active' : ''}" onclick="filterMap('semua')" id="filter-semua">
              <span class="filter-dot" style="background:#495057"></span> Semua Lokasi
            </button>
            <button class="map-filter-btn ${activeFilter === 'perangkat' ? 'active' : ''}" onclick="filterMap('perangkat')" id="filter-perangkat">
              <span class="filter-dot" style="background:#1265f0"></span> Perangkat Desa
            </button>
            <button class="map-filter-btn ${activeFilter === 'kantor' ? 'active' : ''}" onclick="filterMap('kantor')" id="filter-kantor">
              <span class="filter-dot" style="background:#376200"></span> Kantor Desa
            </button>
            <button class="map-filter-btn ${activeFilter === 'lumbung' || activeFilter === 'lumbung_desa' ? 'active' : ''}" onclick="filterMap('lumbung')" id="filter-lumbung">
              <span class="filter-dot" style="background:#d97706"></span> Lumbung Desa
            </button>
            <button class="map-filter-btn ${activeFilter === 'sekolah' ? 'active' : ''}" onclick="filterMap('sekolah')" id="filter-sekolah">
              <span class="filter-dot" style="background:#f57c00"></span> Sekolah
            </button>
            <button class="map-filter-btn ${activeFilter === 'ibadah' ? 'active' : ''}" onclick="filterMap('ibadah')" id="filter-ibadah">
              <span class="filter-dot" style="background:#6a1b9a"></span> Tempat Ibadah
            </button>
            <button class="map-filter-btn ${activeFilter === 'kesehatan' ? 'active' : ''}" onclick="filterMap('kesehatan')" id="filter-kesehatan">
              <span class="filter-dot" style="background:#c62828"></span> Kesehatan
            </button>
            <button class="map-filter-btn ${activeFilter === 'pemakaman' ? 'active' : ''}" onclick="filterMap('pemakaman')" id="filter-pemakaman">
              <span class="filter-dot" style="background:#4b5563"></span> Pemakaman
            </button>
          </div>
        </div>
      </div>

      <!-- Map Layout -->
      <div class="map-layout">
        <!-- Sidebar -->
        <div class="map-sidebar">
          <div class="map-sidebar-header">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <div class="map-sidebar-title" id="sidebar-title">Semua Lokasi</div>
              <div class="map-sidebar-count" id="sidebar-count">Menampilkan ${filtered.length} lokasi</div>
            </div>
            <input type="text" id="map-search-input" class="admin-input" style="padding:8px 12px; font-size:13px; border-radius:8px; border:1px solid var(--gray-3);" placeholder="🔍 Cari nama, kategori, atau deskripsi..." oninput="searchMapLocations(this.value)">
          </div>
          <div class="map-marker-list" id="marker-list">
            ${renderMarkerList(filtered)}
          </div>
        </div>

        <!-- Map Container -->
        <div id="map-container">
          <div id="leaflet-map"></div>
          <!-- Legend -->
          <div class="map-legend ${window.innerWidth <= 768 ? 'collapsed' : ''}" id="map-legend">
            <div class="map-legend-header" onclick="toggleLegend(event)" style="display:flex; justify-content:space-between; align-items:center; cursor:pointer; user-select:none;">
              <div class="map-legend-title" style="margin-bottom:0;">🗺️ Legenda</div>
              <span class="legend-toggle-icon" style="font-size:10px; color:var(--gray-5); transition:transform 0.3s ease; display:inline-block;">▼</span>
            </div>
            <div class="map-legend-content" style="margin-top:12px; transition:opacity 0.2s ease;">
              <div class="legend-item"><div class="legend-dot" style="background:#1265f0"></div>Perangkat Desa</div>
              <div class="legend-item"><div class="legend-dot" style="background:#376200"></div>Kantor Desa</div>
              <div class="legend-item"><div class="legend-dot" style="background:#d97706"></div>Lumbung Pangan</div>
              <div class="legend-item"><div class="legend-dot" style="background:#f57c00"></div>Sekolah</div>
              <div class="legend-item"><div class="legend-dot" style="background:#6a1b9a"></div>Tempat Ibadah</div>
              <div class="legend-item"><div class="legend-dot" style="background:#c62828"></div>Kesehatan</div>
              <div class="legend-item"><div class="legend-dot" style="background:#4b5563"></div>Pemakaman</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(initMap, 300);
}

function toggleLegend(event) {
  if (event) event.stopPropagation();
  const legend = document.getElementById('map-legend');
  if (legend) {
    legend.classList.toggle('collapsed');
  }
}

function renderMarkerList(markers) {
  return markers.map(m => `
    <div class="map-marker-item" id="sidebar-${m.id}" onclick="focusMarker('${m.id}')">
      <div class="marker-icon" style="background:${m.bg || '#e5f0ff'}">${m.icon || '📍'}</div>
      <div class="marker-info">
        <div class="marker-name">${m.name}</div>
        <div class="marker-sub">${m.person}</div>
      </div>
      <span class="marker-category" style="background:${m.bg || '#e5f0ff'}; color:${m.color || '#1265f0'}">${m.subtype}</span>
    </div>
  `).join('');
}

function addRoadNameLabels(map) {
  if (!map) return;

  const roadCoords = [
    [-8.0190, 112.8144],
    [-8.0180, 112.8155],
    [-8.0175, 112.8165],
    [-8.0168, 112.8177],
    [-8.0162, 112.8188],
    [-8.004788, 112.740514],
    [-8.00361, 112.74472],
    [-8.00775, 112.758]
  ];

  roadCoords.forEach(coord => {
    const labelIcon = L.divIcon({
      className: 'custom-road-native-text',
      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif, 'Outfit';
          font-size: 11px;
          font-weight: 700;
          color: #444444;
          background: #f7f2cf;
          padding: 2px 10px;
          min-width: 145px;
          text-align: center;
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: 0.3px;
          line-height: 1.3;
          display: inline-block;
          border-radius: 2px;
        ">
          Jalan Raya Bokor
        </div>
      `,
      iconSize: [145, 18],
      iconAnchor: [72, 9]
    });

    L.marker(coord, {
      icon: labelIcon,
      interactive: false,
      zIndexOffset: -100
    }).addTo(map);
  });
}

let leafletMarkers = {};

function initMap() {
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
  }

  const mapEl = document.getElementById('leaflet-map');
  if (!mapEl) return;

  const k = BOKOR_STATE.kontak;
  mapInstance = L.map('leaflet-map', {
    center: [k.koordinatKantor.lat, k.koordinatKantor.lng],
    zoom: 15,
    zoomControl: true
  });

  const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and GIS User Community',
    maxZoom: 19
  });

  const streetsLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });

  satelliteLayer.addTo(mapInstance);

  L.control.layers({
    "🛰️ Mode Satelit": satelliteLayer,
    "🗺️ Mode Peta Jalan": streetsLayer
  }, null, { position: 'topright' }).addTo(mapInstance);

  leafletMarkers = {};
  addMarkersToMap(BOKOR_STATE.peta);
  addRoadNameLabels(mapInstance);

  setTimeout(() => {
    if (mapInstance) {
      mapInstance.invalidateSize();
    }
  }, 200);

  if (activeFilter !== 'semua') {
    filterMap(activeFilter);
  }
}

function createMarkerIcon(marker) {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        width: 40px; height: 40px;
        background: ${marker.color || '#1265f0'};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        display: flex; align-items: center; justify-content: center;
      ">
        <span style="transform: rotate(45deg); font-size: 16px;">${marker.icon || '📍'}</span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -44]
  });
}

function addMarkersToMap(markers) {
  markers.forEach(m => {
    const icon = createMarkerIcon(m);
    const gmapsUrl = m.gmaps || `https://www.google.com/maps/search/?api=1&query=${m.lat},${m.lng}`;

    let popupContent = `
      <div style="font-family: 'Outfit', sans-serif; padding: 4px; min-width: 200px;">
        <div style="font-size:20px; margin-bottom:8px; text-align:center;">${m.icon || '📍'}</div>
    `;

    if (m.img) {
      popupContent += `<img class="popup-image" src="${m.img}" alt="${m.name}">`;
    }

    popupContent += `
        <div class="popup-title">${m.name}</div>
        <div class="popup-sub">${m.person}</div>
        <span class="popup-badge" style="background:${m.bg || '#e5f0ff'}; color:${m.color || '#1265f0'};">${m.subtype}</span>
        <div class="popup-coords" style="margin-top:6px; font-size:11px; color:#868e96;">📍 ${parseFloat(m.lat).toFixed(5)}, ${parseFloat(m.lng).toFixed(5)}</div>
        <a href="${gmapsUrl}" target="_blank" class="popup-btn-gmaps" style="width: 100%; display: flex;">🗺️ Rute Google Maps</a>
      </div>
    `;

    const marker = L.marker([m.lat, m.lng], { icon })
      .addTo(mapInstance)
      .bindPopup(popupContent, { maxWidth: 250 });

    marker.on('click', () => {
      document.querySelectorAll('.map-marker-item').forEach(el => el.classList.remove('active'));
      const sidebarItem = document.getElementById(`sidebar-${m.id}`);
      if (sidebarItem) {
        sidebarItem.classList.add('active');
        sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    leafletMarkers[m.id] = { leaflet: marker, data: m };
  });
}

function filterMap(filter) {
  activeFilter = filter;

  document.querySelectorAll('.map-filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`filter-${filter}`);
  if (activeBtn) activeBtn.classList.add('active');

  const filtered = filter === 'semua'
    ? BOKOR_STATE.peta
    : BOKOR_STATE.peta.filter(m => m.type === filter || (filter === 'lumbung' && m.type === 'lumbung_desa') || (filter === 'lumbung_desa' && m.type === 'lumbung'));

  Object.entries(leafletMarkers).forEach(([id, { leaflet, data }]) => {
    if (filter === 'semua' || data.type === filter || (filter === 'lumbung' && data.type === 'lumbung_desa') || (filter === 'lumbung_desa' && data.type === 'lumbung')) {
      if (!mapInstance.hasLayer(leaflet)) leaflet.addTo(mapInstance);
    } else {
      if (mapInstance.hasLayer(leaflet)) mapInstance.removeLayer(leaflet);
    }
  });

  const titles = {
    semua: 'Semua Lokasi',
    perangkat: 'Rumah Perangkat Desa',
    kantor: 'Kantor Desa',
    lumbung: 'Lumbung Desa',
    lumbung_desa: 'Lumbung Desa',
    sekolah: 'Sekolah',
    ibadah: 'Tempat Ibadah',
    kesehatan: 'Kesehatan (Pustu)',
    pemakaman: 'Tempat Pemakaman'
  };

  const titleEl = document.getElementById('sidebar-title');
  const countEl = document.getElementById('sidebar-count');
  const listEl = document.getElementById('marker-list');

  if (titleEl) titleEl.textContent = titles[filter] || 'Semua Lokasi';
  if (countEl) countEl.textContent = `Menampilkan ${filtered.length} lokasi`;
  if (listEl) listEl.innerHTML = renderMarkerList(filtered);

  const searchInput = document.getElementById('map-search-input');
  if (searchInput) searchInput.value = '';

  if (filtered.length > 0 && mapInstance) {
    const group = L.featureGroup(
      filtered.map(m => leafletMarkers[m.id]?.leaflet).filter(Boolean)
    );
    if (group.getLayers().length > 0) {
      mapInstance.fitBounds(group.getBounds().pad(0.2));
    }
  }
}

function searchMapLocations(query) {
  const q = query.toLowerCase().trim();
  const currentCategory = activeFilter;
  const filtered = BOKOR_STATE.peta.filter(m => {
    const matchesCategory = currentCategory === 'semua' || m.type === currentCategory || (currentCategory === 'lumbung' && m.type === 'lumbung_desa') || (m.type === 'lumbung' && currentCategory === 'lumbung_desa');
    if (!matchesCategory) return false;
    if (!q) return true;
    return (m.name && m.name.toLowerCase().includes(q)) ||
           (m.person && m.person.toLowerCase().includes(q)) ||
           (m.subtype && m.subtype.toLowerCase().includes(q)) ||
           (m.type && m.type.toLowerCase().includes(q));
  });

  const listEl = document.getElementById('marker-list');
  const countEl = document.getElementById('sidebar-count');
  if (listEl) listEl.innerHTML = renderMarkerList(filtered);
  if (countEl) countEl.textContent = `Menampilkan ${filtered.length} lokasi`;

  Object.entries(leafletMarkers).forEach(([id, { leaflet, data }]) => {
    const isMatched = filtered.some(m => m.id === id);
    if (isMatched) {
      if (!mapInstance.hasLayer(leaflet)) leaflet.addTo(mapInstance);
    } else {
      if (mapInstance.hasLayer(leaflet)) mapInstance.removeLayer(leaflet);
    }
  });
}

function focusMarker(id) {
  const markerData = leafletMarkers[id];
  if (!markerData || !mapInstance) return;

  mapInstance.setView([markerData.data.lat, markerData.data.lng], 17, { animate: true });
  markerData.leaflet.openPopup();

  document.querySelectorAll('.map-marker-item').forEach(el => el.classList.remove('active'));
  const item = document.getElementById(`sidebar-${id}`);
  if (item) item.classList.add('active');
}

// =========================================
// HOME MAP
// =========================================
let homeMapInstance = null;

function initHomeMap() {
  const el = document.getElementById('home-map');
  if (!el) return;
  if (homeMapInstance) { homeMapInstance.remove(); homeMapInstance = null; }

  const k = BOKOR_STATE.kontak;
  homeMapInstance = L.map('home-map', {
    center: [k.koordinatKantor.lat, k.koordinatKantor.lng],
    zoom: 15,
    zoomControl: true,
    scrollWheelZoom: false
  });

  const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19
  });

  const streetsLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
  });

  satelliteLayer.addTo(homeMapInstance);

  L.control.layers({
    "🛰️ Mode Satelit": satelliteLayer,
    "🗺️ Mode Peta Jalan": streetsLayer
  }, null, { position: 'topright' }).addTo(homeMapInstance);

  BOKOR_STATE.peta.forEach(m => {
    const icon = L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="width:34px;height:34px;background:${m.color || '#1265f0'};border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
          <span style="transform:rotate(45deg);font-size:14px;">${m.icon || '📍'}</span>
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 34],
      popupAnchor: [0, -38]
    });

    const gmapsUrl = m.gmaps || `https://www.google.com/maps/search/?api=1&query=${m.lat},${m.lng}`;

    let popupContent = `
      <div style="font-family:'Outfit',sans-serif;padding:4px;min-width:180px;">
    `;

    if (m.img) {
      popupContent += `<img src="${m.img}" alt="${m.name}" style="width:100%; height:90px; object-fit:cover; border-radius:4px; margin-bottom:6px;">`;
    }

    popupContent += `
        <div style="font-size:13px;font-weight:700;color:#212529;">${m.name}</div>
        <div style="font-size:11px;color:#868e96;margin-bottom:6px;">${m.person} (${m.subtype})</div>
        <a href="${gmapsUrl}" target="_blank" class="popup-btn-gmaps" style="width:100%; display:flex; padding:6px 8px; font-size:11px; margin-top:4px;">🗺️ Rute Google Maps</a>
      </div>
    `;

    L.marker([m.lat, m.lng], { icon })
      .addTo(homeMapInstance)
      .bindPopup(popupContent, { maxWidth: 220 });
  });

  addRoadNameLabels(homeMapInstance);

  const group = L.featureGroup(BOKOR_STATE.peta.map(m => L.marker([m.lat, m.lng])));
  if (group.getLayers().length > 0) {
    homeMapInstance.fitBounds(group.getBounds().pad(0.15));
  }

  setTimeout(() => { if (homeMapInstance) homeMapInstance.invalidateSize(); }, 200);
}

// =========================================
// PAGE: KONTAK
// =========================================
function renderKontak() {
  const app = document.getElementById('app');
  const k = BOKOR_STATE.kontak;
  app.innerHTML = `
    <div class="page">
      <!-- Page Hero -->
      <div class="page-hero">
        <div class="container">
          <div class="page-hero-content">
            <div class="page-breadcrumb">
              <span onclick="navigate('beranda')">Beranda</span>
              <span class="separator">›</span>
              <span>Kontak</span>
            </div>
            <h1 class="page-title">Hubungi Kami</h1>
            <p class="page-subtitle">Sampaikan pertanyaan, saran, atau keluhan Anda kepada Pemerintah Desa Bokor</p>
          </div>
        </div>
      </div>

      <!-- Contact Content -->
      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            <!-- Info Column -->
            <div class="contact-info">
              <div class="contact-card">
                <div class="contact-item">
                  <div class="contact-icon">📍</div>
                  <div class="contact-detail">
                    <strong>Alamat Kantor</strong>
                    <span>${k.alamat}</span>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">📞</div>
                  <div class="contact-detail">
                    <strong>Telepon</strong>
                    <span>${k.telepon}</span>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="contact-icon">🗺️</div>
                  <div class="contact-detail">
                    <strong>Kecamatan / Kabupaten</strong>
                    <span>${k.kecamatan}, ${k.kabupaten}</span>
                  </div>
                </div>
              </div>

              <!-- Hours -->
              <div class="hours-card">
                <div class="hours-title">🕐 Jam Operasional</div>
                <div class="hours-row">
                  <span class="hours-day">Senin – Jumat</span>
                  <span class="hours-time">${k.jamOperasional.senin_jumat}</span>
                </div>
                <div class="hours-row">
                  <span class="hours-day">Sabtu</span>
                  <span class="hours-time">${k.jamOperasional.sabtu}</span>
                </div>
                <div class="hours-row">
                  <span class="hours-day">Minggu & Hari Libur</span>
                  <span class="hours-time closed">${k.jamOperasional.minggu}</span>
                </div>
              </div>

              <!-- Mini Map / Peta Lokasi -->
              <div style="border-radius:16px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.1); height:200px; border:1px solid #dee2e6; margin-bottom:12px;">
                ${k.imgPeta 
                  ? `<img src="${k.imgPeta}" alt="Peta Lokasi Kantor Desa" style="width:100%; height:100%; object-fit:cover;">`
                  : `<div id="mini-map" style="width:100%; height:100%;"></div>`
                }
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=${k.koordinatKantor.lat},${k.koordinatKantor.lng}" target="_blank" class="btn-submit" style="display:block; text-align:center; background:var(--primary); color:white; padding:12px; border-radius:12px; text-decoration:none; font-weight:600; font-size:14px; margin-bottom: 24px;">
                🗺️ Buka di Google Maps
              </a>
            </div>

            <!-- Form Column -->
            <div class="contact-form-card">
              <div class="form-title">💬 Kirim Pesan</div>
              <div class="form-desc">Isi formulir di bawah ini dan kami akan merespons sesegera mungkin.</div>

              <form id="contact-form" onsubmit="submitForm(event)">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label" for="nama">Nama Lengkap <span>*</span></label>
                    <input class="form-input" type="text" id="nama" placeholder="Masukkan nama Anda" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label" for="nik">No. HP / WhatsApp <span>*</span></label>
                    <input class="form-input" type="text" id="nik" placeholder="Masukkan nomor HP/WA Anda" required>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="perihal">Perihal <span>*</span></label>
                  <select class="form-select" id="perihal" required>
                    <option value="">-- Pilih Perihal --</option>
                    <option value="layanan">Pertanyaan Layanan Desa</option>
                    <option value="pengaduan">Pengaduan / Keluhan</option>
                    <option value="saran">Saran & Masukan</option>
                    <option value="informasi">Permintaan Informasi</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="pesan">Isi Pesan <span>*</span></label>
                  <textarea class="form-textarea" id="pesan" placeholder="Tuliskan pesan Anda di sini..." required></textarea>
                </div>

                <button type="submit" class="btn-submit">
                  📨 Kirim Pesan
                </button>

                <div class="form-success" id="form-success">
                  ✅ Pesan Anda berhasil dikirim! Kami akan merespons dalam 1-2 hari kerja.
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Init mini map
  setTimeout(() => {
    const miniMap = L.map('mini-map', {
      center: [k.koordinatKantor.lat, k.koordinatKantor.lng],
      zoom: 15,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false
    });

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: ''
    }).addTo(miniMap);

    L.marker(
      [k.koordinatKantor.lat, k.koordinatKantor.lng],
      {
        icon: L.divIcon({
          className: '',
          html: `<div style="background:#0752d8;width:32px;height:32px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
          <span style="transform:rotate(45deg);font-size:14px;">🏛️</span>
        </div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 32]
        })
      }
    ).addTo(miniMap).bindPopup('<b>Kantor Desa Bokor</b>').openPopup();
    addRoadNameLabels(miniMap);
  }, 200);
}

function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '⏳ Mengalihkan...';
  btn.disabled = true;

  const nama = document.getElementById('nama').value;
  const nik = document.getElementById('nik').value;
  const perihalSelect = document.getElementById('perihal');
  const perihalText = perihalSelect.options[perihalSelect.selectedIndex].text;
  const pesan = document.getElementById('pesan').value;

  const k = BOKOR_STATE.kontak;
  let cleanPhone = (k.telepon || '').replace(/[^0-9]/g, '');
  if (cleanPhone.startsWith('0')) {
    cleanPhone = '62' + cleanPhone.substring(1);
  }

  const textMessage = `Halo Admin Desa Bokor,\n\nSaya ingin mengirimkan pesan:\n- *Nama Lengkap:* ${nama}\n- *No. HP / WhatsApp:* ${nik}\n- *Perihal:* ${perihalText}\n- *Isi Pesan:* ${pesan}`;
  const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(textMessage)}`;

  setTimeout(() => {
    window.open(url, '_blank');
    document.getElementById('contact-form').reset();
    btn.textContent = '📨 Kirim Pesan';
    btn.disabled = false;
    showToast('✉️ Berhasil diarahkan ke WhatsApp Desa Bokor!');
  }, 1000);
}

// =========================================
// PAGE: ADMIN DASHBOARD (localStorage CRUD)
// =========================================
let activeAdminTab = 'umum';

// ---- ADMIN LOGIN PAGE ----
function renderAdminLogin() {
  const app = document.getElementById('app');
  const logo = BOKOR_STATE.logo;
  const logoEl = logo.img
    ? `<img src="${logo.img}" class="admin-login-logo-img" alt="Logo">`
    : `<div class="admin-login-logo-icon">${logo.icon || '🌿'}</div>`;

  app.innerHTML = `
    <div class="admin-login-page" id="admin-login-page">
      <div class="admin-login-orb"></div>
      <div class="admin-login-orb"></div>
      <div class="admin-login-orb"></div>

      <div class="admin-login-card">
        <div class="admin-login-logo">
          ${logoEl}
          <div class="admin-login-titles">
            <div class="admin-login-desa-name">${logo.title || 'Desa Bokor'}</div>
            <div class="admin-login-badge">🛠️ Panel Administrator</div>
          </div>
        </div>

        <h2 class="admin-login-heading">Masuk ke Admin</h2>
        <p class="admin-login-subheading">Masukkan kredensial untuk mengakses dashboard pengelolaan website.</p>

        <div class="admin-login-error" id="login-error">
          ⚠️ <span id="login-error-msg">Email atau password salah. Silakan coba lagi.</span>
        </div>

        <form onsubmit="adminLogin(event)" autocomplete="off">
          <div class="admin-login-form-group">
            <label class="admin-login-label" for="login-email">Alamat Email</label>
            <div class="admin-login-input-wrap">
              <span class="admin-login-input-icon">📧</span>
              <input class="admin-login-input" type="email" id="login-email"
                placeholder="admin@desaborkor.id" required autocomplete="username">
            </div>
          </div>
          <div class="admin-login-form-group">
            <label class="admin-login-label" for="login-password">Password</label>
            <div class="admin-login-input-wrap">
              <span class="admin-login-input-icon">🔒</span>
              <input class="admin-login-input" type="password" id="login-password"
                placeholder="Masukkan password" required autocomplete="current-password">
              <button type="button" class="admin-login-toggle-pw" onclick="toggleAdminPw('login-password', this)" title="Tampilkan/Sembunyikan">👁️</button>
            </div>
          </div>
          <button type="submit" class="admin-login-btn" id="login-submit-btn">🔐 Masuk Dashboard</button>
        </form>

        <div class="admin-login-back">
          <a onclick="navigate('beranda')">← Kembali ke Beranda</a>
        </div>
      </div>
    </div>
  `;
}

function adminLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const pw = document.getElementById('login-password').value;
  const btn = document.getElementById('login-submit-btn');
  const errBox = document.getElementById('login-error');

  btn.disabled = true;
  btn.textContent = '⏳ Memverifikasi...';
  errBox.classList.remove('show');

  // Simulate brief validation delay for UX
  setTimeout(() => {
    if (adminDoLogin(email, pw)) {
      adminSetSession();
      showToast('✅ Login berhasil! Selamat datang di Dashboard Admin.');
      renderAdmin('umum');
    } else {
      errBox.classList.add('show');
      document.getElementById('login-error-msg').textContent = 'Email atau password salah. Silakan coba lagi.';
      btn.disabled = false;
      btn.textContent = '🔐 Masuk Dashboard';
      // Shake animation
      const card = document.querySelector('.admin-login-card');
      if (card) { card.style.animation = 'none'; card.offsetHeight; card.style.animation = 'loginShake 0.4s ease'; }
    }
  }, 600);
}

function adminLogout() {
  if (confirm('Apakah Anda yakin ingin keluar dari Dashboard Admin?')) {
    adminClearSession();
    showToast('👋 Anda telah keluar dari Admin Panel.');
    navigate('beranda');
  }
}

function toggleAdminPw(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  const isHidden = inp.type === 'password';
  inp.type = isHidden ? 'text' : 'password';
  btn.textContent = isHidden ? '🙈' : '👁️';
}

function renderAdmin(subpage = 'umum') {
  // Guard: redirect to login if not authenticated
  if (!isAdminLoggedIn()) {
    renderAdminLogin();
    return;
  }

  activeAdminTab = subpage;
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="page">
      <!-- Page Hero -->
      <div class="page-hero" style="padding: 40px 0 24px;">
        <div class="container">
          <div class="admin-top-bar">
            <div style="position:relative; z-index:2;">
              <div class="page-breadcrumb">
                <span onclick="navigate('beranda')">Beranda</span>
                <span class="separator">›</span>
                <span>Dashboard Admin</span>
              </div>
              <h1 class="page-title" style="font-size: 2.25rem;">🛠️ Pengaturan Website</h1>
            </div>
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap; position:relative; z-index:2;">
              <button class="admin-logout-btn" onclick="adminLogout()">
                🚪 Keluar
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Admin Layout -->
      <div class="admin-container">
        <!-- Sidebar Navigation -->
        <div class="admin-sidebar">
          <div class="admin-sidebar-header">Pengaturan Konten</div>
          <button class="admin-sidebar-btn ${activeAdminTab === 'umum' ? 'active' : ''}" onclick="navigate('admin','umum')">📁 Umum & Logo</button>
          <button class="admin-sidebar-btn ${activeAdminTab === 'hero' ? 'active' : ''}" onclick="navigate('admin','hero')">🖼️ Hero Banner</button>
          <button class="admin-sidebar-btn ${activeAdminTab === 'sambutan' ? 'active' : ''}" onclick="navigate('admin','sambutan')">👴 Sambutan Kades</button>
          <button class="admin-sidebar-btn ${activeAdminTab === 'profil' ? 'active' : ''}" onclick="navigate('admin','profil')">🎯 Profil & Visi Misi</button>
          <button class="admin-sidebar-btn ${activeAdminTab === 'organisasi' ? 'active' : ''}" onclick="navigate('admin','organisasi')">👥 Struktur Organisasi</button>
          <button class="admin-sidebar-btn ${activeAdminTab === 'peta' ? 'active' : ''}" onclick="navigate('admin','peta')">🗺️ Peta Digital (CRUD)</button>
          <button class="admin-sidebar-btn ${activeAdminTab === 'kontak' ? 'active' : ''}" onclick="navigate('admin','kontak')">📞 Kontak & Footer</button>
          <button class="admin-sidebar-btn ${activeAdminTab === 'keamanan' ? 'active' : ''}" onclick="navigate('admin','keamanan')" style="margin-top:auto; border-top:1px solid var(--gray-2); padding-top:12px;">🔐 Keamanan Akun</button>
        </div>

        <!-- Dynamic Content Area -->
        <div class="admin-content" id="admin-content-pane">
          ${renderAdminTab()}
        </div>
      </div>
    </div>
  `;
}

function renderAdminTab() {
  switch (activeAdminTab) {
    case 'umum': return renderAdminUmum();
    case 'hero': return renderAdminHero();
    case 'sambutan': return renderAdminSambutan();
    case 'profil': return renderAdminProfil();
    case 'organisasi': return renderAdminOrganisasi();
    case 'peta': return renderAdminPeta();
    case 'kontak': return renderAdminKontak();
    case 'keamanan': return renderAdminKeamanan();
    default: return renderAdminUmum();
  }
}

// -----------------------------------------
// TAB: UMUM & LOGO
// -----------------------------------------
function renderAdminUmum() {
  const state = BOKOR_STATE;
  const hasLogo = !!state.logo.img;
  return `
    <div class="admin-card">
      <div class="admin-card-title">📁 Identitas Logo & Header</div>
      <form onsubmit="saveAdminUmum(event)">
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Nama/Judul Desa</label>
            <input type="text" class="admin-input" id="logo-title" value="${state.logo.title}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Sub-judul Desa</label>
            <input type="text" class="admin-input" id="logo-subtitle" value="${state.logo.subtitle}" required>
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">🖼️ Gambar Logo</label>
          <div class="logo-upload-area" onclick="document.getElementById('logo-file-input').click()" style="cursor:pointer;">
            <input type="file" id="logo-file-input" accept="image/*, .heic, .heif, .HEIC, .HEIF" style="display:none;" onchange="uploadLogoImage(event)">
            <div id="logo-preview-box" class="logo-preview-box" style="display:${hasLogo ? 'flex' : 'none'};">
              <img id="logo-preview" src="${state.logo.img || ''}" class="logo-img" style="width:72px;height:72px;object-fit:contain;">
              <span style="font-size:0.8rem; color:var(--primary-5); font-weight:600;">Klik untuk ganti logo</span>
            </div>
            <div id="logo-placeholder" class="logo-upload-placeholder" style="display:${hasLogo ? 'none' : 'flex'};">
              <span style="font-size:36px;">📂</span>
              <span style="font-size:0.9rem; font-weight:600; color:var(--gray-7);">Klik untuk unggah gambar logo</span>
              <span style="font-size:0.78rem; color:var(--gray-5);">PNG, JPG, SVG · Maks. 2MB · Rasio 1:1 direkomendasikan</span>
            </div>
          </div>
          <p style="font-size:0.78rem; color:var(--gray-5); margin-top:8px;">Logo akan ditampilkan di Navbar dan Footer website.</p>
        </div>

        <div class="admin-card-title" style="margin-top: 32px; border-top: 1px solid var(--gray-2); padding-top: 24px;">📈 Data Statistik Beranda</div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Total Penduduk</label>
            <input type="text" class="admin-input" id="stat-penduduk" value="${state.stats.penduduk}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Kepala Keluarga (KK)</label>
            <input type="text" class="admin-input" id="stat-kk" value="${state.stats.kk}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Luas Wilayah</label>
            <input type="text" class="admin-input" id="stat-luas" value="${state.stats.luas}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">RW & RT (Dusun/Lingkungan)</label>
            <input type="text" class="admin-input" id="stat-dusun" value="${state.stats.dusunRwRt}" required>
          </div>
        </div>

        <div class="admin-card-title" style="margin-top: 32px; border-top: 1px solid var(--gray-2); padding-top: 24px;">✨ Kartu Akses Cepat</div>
        <div class="admin-form-group">
          <label class="admin-label">1. Deskripsi Profil Desa</label>
          <input type="text" class="admin-input" id="qa-profil-desc" value="${state.quickAccess.profilDesc}" required>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">2. Deskripsi Peta Digital</label>
          <input type="text" class="admin-input" id="qa-peta-desc" value="${state.quickAccess.petaDesc}" required>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">3. Deskripsi Hubungi Kami</label>
          <input type="text" class="admin-input" id="qa-kontak-desc" value="${state.quickAccess.kontakDesc}" required>
        </div>

        <div class="admin-action-row">
          <button type="submit" class="admin-btn admin-btn-save">💾 Simpan Perubahan</button>
        </div>
      </form>
    </div>
  `;
}

let tempLogoBase64 = '';

function uploadLogoImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  processImageFile(file, (dataUrl) => {
    tempLogoBase64 = dataUrl;

    // Update new upload-area UI
    const previewBox = document.getElementById('logo-preview-box');
    const placeholder = document.getElementById('logo-placeholder');
    const preview = document.getElementById('logo-preview');

    if (preview) {
      preview.src = dataUrl;
    }
    if (previewBox) previewBox.style.display = 'flex';
    if (placeholder) placeholder.style.display = 'none';

    showToast('📸 Gambar logo berhasil dimuat — klik Simpan untuk menerapkan!');
  });
}

function saveAdminUmum(e) {
  e.preventDefault();
  if (tempLogoBase64) {
    BOKOR_STATE.logo.img = tempLogoBase64;
    tempLogoBase64 = '';
  }
  BOKOR_STATE.logo.title = document.getElementById('logo-title').value;
  BOKOR_STATE.logo.subtitle = document.getElementById('logo-subtitle').value;

  BOKOR_STATE.stats.penduduk = document.getElementById('stat-penduduk').value;
  BOKOR_STATE.stats.kk = document.getElementById('stat-kk').value;
  BOKOR_STATE.stats.luas = document.getElementById('stat-luas').value;
  BOKOR_STATE.stats.dusunRwRt = document.getElementById('stat-dusun').value;

  BOKOR_STATE.quickAccess.profilDesc = document.getElementById('qa-profil-desc').value;
  BOKOR_STATE.quickAccess.petaDesc = document.getElementById('qa-peta-desc').value;
  BOKOR_STATE.quickAccess.kontakDesc = document.getElementById('qa-kontak-desc').value;

  saveState(BOKOR_STATE);
  renderHeader();
  renderFooter();
  showToast('✅ Berhasil menyimpan konfigurasi umum!');
}

// -----------------------------------------
// TAB: HERO BANNER
// -----------------------------------------
function renderAdminHero() {
  const h = BOKOR_STATE.hero;
  return `
    <div class="admin-card">
      <div class="admin-card-title">🖼️ Slide Carousel Banner</div>
      <p style="font-size: 13px; color: var(--gray-5); margin-bottom: 24px;">Website memiliki 3 Slide utama yang berputar otomatis di Beranda.</p>
      
      ${h.map((slide, idx) => `
        <div style="background:var(--gray-0); border:1px solid var(--gray-2); border-radius:12px; padding:24px; margin-bottom:24px;">
          <div style="font-size:16px; font-weight:800; color:var(--primary-6); margin-bottom:16px;">Slide #${idx + 1}</div>
          <div class="admin-grid-2">
            <div class="admin-form-group">
              <label class="admin-label">Lencana Slide (Badge)</label>
              <input type="text" class="admin-input" id="hero-badge-${idx}" value="${slide.badge}" required>
            </div>
            <div class="admin-form-group">
              <label class="admin-label">Judul Banner (Gunakan &lt;span&gt; untuk warna gradasi)</label>
              <input type="text" class="admin-input" id="hero-title-${idx}" value="${slide.title.replace(/"/g, '&quot;')}" required>
            </div>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Sub-judul Banner</label>
            <textarea class="admin-textarea" id="hero-sub-${idx}" required>${slide.subtitle}</textarea>
          </div>
          <div class="admin-grid-2" style="align-items:center;">
            <div class="admin-form-group">
              <label class="admin-label">Ganti Gambar Latar</label>
              <input type="file" accept="image/*, .heic, .heif, .HEIC, .HEIF" onchange="uploadHeroImage(event, ${idx})">
            </div>
            <div class="admin-form-group">
              <label class="admin-label">Pratinjau Gambar</label>
              <img id="hero-preview-${idx}" src="${slide.img}" class="admin-image-preview" style="width:120px; height:70px;">
            </div>
          </div>
        </div>
      `).join('')}

      <div class="admin-action-row">
        <button onclick="saveAdminHero()" class="admin-btn admin-btn-save">💾 Simpan Slide Banner</button>
      </div>
    </div>
  `;
}

function uploadHeroImage(event, index) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      BOKOR_STATE.hero[index].img = dataUrl;
      document.getElementById(`hero-preview-${index}`).src = dataUrl;
      showToast('📸 Gambar slide berhasil dimuat di memori!');
    });
  }
}

function saveAdminHero() {
  BOKOR_STATE.hero.forEach((_, idx) => {
    BOKOR_STATE.hero[idx].badge = document.getElementById(`hero-badge-${idx}`).value;
    BOKOR_STATE.hero[idx].title = document.getElementById(`hero-title-${idx}`).value;
    BOKOR_STATE.hero[idx].subtitle = document.getElementById(`hero-sub-${idx}`).value;
  });
  saveState(BOKOR_STATE);
  showToast('✅ Berhasil memperbarui slide banner!');
}

// -----------------------------------------
// TAB: SAMBUTAN KADES
// -----------------------------------------
function renderAdminSambutan() {
  const w = BOKOR_STATE.welcome;
  return `
    <div class="admin-card">
      <div class="admin-card-title">👴 Sambutan Kepala Desa</div>
      <form onsubmit="saveAdminWelcome(event)">
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Lencana Tag Sambutan</label>
            <input type="text" class="admin-input" id="w-tag" value="${w.tag}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Judul Sambutan</label>
            <input type="text" class="admin-input" id="w-title" value="${w.title}" required>
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">Paragraf 1</label>
          <textarea class="admin-textarea" id="w-text1" required>${w.text1}</textarea>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Paragraf 2</label>
          <textarea class="admin-textarea" id="w-text2" required>${w.text2}</textarea>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Paragraf 3</label>
          <textarea class="admin-textarea" id="w-text3" required>${w.text3}</textarea>
        </div>

        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label class="admin-label">Nama Kepala Desa</label>
            <input type="text" class="admin-input" id="w-name" value="${w.name}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Sub-jabatan</label>
            <input type="text" class="admin-input" id="w-titlesub" value="${w.titleSub}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Emoji Avatar Kades</label>
            <input type="text" class="admin-input" id="w-avatar" value="${w.avatar}" required>
          </div>
        </div>

        <div class="admin-card-title" style="margin-top: 32px; border-top: 1px solid var(--gray-2); padding-top: 24px;">🏆 Lencana Prestasi Kades</div>
        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label class="admin-label">Ikon Prestasi (Emoji)</label>
            <input type="text" class="admin-input" id="w-badgeicon" value="${w.badgeIcon}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Nama Prestasi</label>
            <input type="text" class="admin-input" id="w-badgetitle" value="${w.badgeTitle}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Tahun/Keterangan</label>
            <input type="text" class="admin-input" id="w-badgesub" value="${w.badgeSub}" required>
          </div>
        </div>

        <div class="admin-card-title" style="margin-top: 32px; border-top: 1px solid var(--gray-2); padding-top: 24px;">📸 Foto Kepala Desa</div>
        <div class="admin-grid-2" style="align-items:center;">
          <div class="admin-form-group">
            <label class="admin-label">Unggah Foto Baru</label>
            <input type="file" accept="image/*, .heic, .heif, .HEIC, .HEIF" onchange="uploadWelcomeImage(event)">
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Pratinjau Foto</label>
            <img id="welcome-preview" src="${w.img}" class="admin-image-preview" style="width:100px; height:100px; border-radius:50%;">
          </div>
        </div>

        <div class="admin-action-row">
          <button type="submit" class="admin-btn admin-btn-save">💾 Simpan Sambutan Kades</button>
        </div>
      </form>
    </div>
  `;
}

function uploadWelcomeImage(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      BOKOR_STATE.welcome.img = dataUrl;
      document.getElementById('welcome-preview').src = dataUrl;
      showToast('📸 Foto kepala desa berhasil diubah!');
    });
  }
}

function saveAdminWelcome(e) {
  e.preventDefault();
  const w = BOKOR_STATE.welcome;
  w.tag = document.getElementById('w-tag').value;
  w.title = document.getElementById('w-title').value;
  w.text1 = document.getElementById('w-text1').value;
  w.text2 = document.getElementById('w-text2').value;
  w.text3 = document.getElementById('w-text3').value;
  w.name = document.getElementById('w-name').value;
  w.titleSub = document.getElementById('w-titlesub').value;
  w.avatar = document.getElementById('w-avatar').value;

  w.badgeIcon = document.getElementById('w-badgeicon').value;
  w.badgeTitle = document.getElementById('w-badgetitle').value;
  w.badgeSub = document.getElementById('w-badgesub').value;

  saveState(BOKOR_STATE);
  showToast('✅ Berhasil menyimpan sambutan kepala desa!');
}

// -----------------------------------------
// TAB: PROFIL & VISI MISI
// -----------------------------------------
function renderAdminProfil() {
  const vm = BOKOR_STATE.visiMisi;
  const nu = BOKOR_STATE.nilaiUtama;
  return `
    <div class="admin-card">
      <div class="admin-card-title">🎯 Visi dan Misi Desa</div>
      <form onsubmit="saveAdminVisiMisi(event)">
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Lencana Tag Profil</label>
            <input type="text" class="admin-input" id="vm-tag" value="${vm.tag}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Judul Halaman Visi Misi</label>
            <input type="text" class="admin-input" id="vm-title" value="${vm.title}" required>
          </div>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Sub-deskripsi Singkat</label>
          <input type="text" class="admin-input" id="vm-desc" value="${vm.desc}" required>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Visi Desa</label>
          <textarea class="admin-textarea" id="vm-visi" required>${vm.visi}</textarea>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">Misi Desa (Satu Baris Per Misi)</label>
          <textarea class="admin-textarea" id="vm-misi" style="min-height: 120px;" required>${vm.misi.join('\n')}</textarea>
        </div>

        <div class="admin-action-row">
          <button type="submit" class="admin-btn admin-btn-save">💾 Simpan Visi & Misi</button>
        </div>
      </form>
    </div>

    <!-- Nilai Utama CRUD -->
    <div class="admin-card">
      <div class="admin-card-title">
        <span>💎 Nilai Utama Desa (Gotong Royong, dll.)</span>
        <button class="admin-btn admin-btn-add" onclick="openNilaiModal()">➕ Tambah Nilai</button>
      </div>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Ikon</th>
            <th>Judul Nilai</th>
            <th>Deskripsi Singkat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${nu.map((n, idx) => `
            <tr>
              <td style="font-size:24px;">${n.icon}</td>
              <td><strong>${n.title}</strong></td>
              <td>${n.desc}</td>
              <td>
                <button class="admin-btn-edit" onclick="openNilaiModal(${idx})">Edit</button>
                <button class="admin-btn-delete" onclick="deleteNilai(${idx})">Hapus</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function saveAdminVisiMisi(e) {
  e.preventDefault();
  BOKOR_STATE.visiMisi.tag = document.getElementById('vm-tag').value;
  BOKOR_STATE.visiMisi.title = document.getElementById('vm-title').value;
  BOKOR_STATE.visiMisi.desc = document.getElementById('vm-desc').value;
  BOKOR_STATE.visiMisi.visi = document.getElementById('vm-visi').value;

  const misiLines = document.getElementById('vm-misi').value.split('\n');
  BOKOR_STATE.visiMisi.misi = misiLines.map(line => line.trim()).filter(Boolean);

  saveState(BOKOR_STATE);
  showToast('✅ Visi & Misi berhasil disimpan!');
}

// Nilai Utama Modals
function openNilaiModal(index = null) {
  const isEdit = index !== null;
  const nu = isEdit ? BOKOR_STATE.nilaiUtama[index] : { icon: '', title: '', desc: '' };

  const modal = document.createElement('div');
  modal.className = 'admin-modal';
  modal.id = 'nilai-modal';
  modal.innerHTML = `
    <div class="admin-modal-content">
      <div class="admin-card-title">${isEdit ? '📝 Edit' : '➕ Tambah'} Nilai Utama</div>
      <form onsubmit="saveNilaiItem(event, ${index})">
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Ikon (Emoji)</label>
            <input type="text" class="admin-input" id="nu-icon" value="${nu.icon}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Judul Nilai</label>
            <input type="text" class="admin-input" id="nu-title" value="${nu.title}" required>
          </div>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Deskripsi</label>
          <input type="text" class="admin-input" id="nu-desc" value="${nu.desc}" required>
        </div>
        <div class="admin-action-row">
          <button type="button" class="admin-btn admin-btn-reset" onclick="closeNilaiModal()">Batal</button>
          <button type="submit" class="admin-btn admin-btn-save">Simpan</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeNilaiModal() {
  const modal = document.getElementById('nilai-modal');
  if (modal) modal.remove();
}

function saveNilaiItem(e, index) {
  e.preventDefault();
  const icon = document.getElementById('nu-icon').value;
  const title = document.getElementById('nu-title').value;
  const desc = document.getElementById('nu-desc').value;

  const item = { icon, title, desc };

  if (index !== null) {
    BOKOR_STATE.nilaiUtama[index] = item;
  } else {
    BOKOR_STATE.nilaiUtama.push(item);
  }

  saveState(BOKOR_STATE);
  closeNilaiModal();
  renderAdmin('profil');
  showToast('✅ Berhasil menyimpan nilai utama!');
}

function deleteNilai(index) {
  if (confirm('Hapus nilai utama ini?')) {
    BOKOR_STATE.nilaiUtama.splice(index, 1);
    saveState(BOKOR_STATE);
    renderAdmin('profil');
    showToast('🗑️ Berhasil menghapus nilai utama!');
  }
}

// -----------------------------------------
// TAB: STRUKTUR ORGANISASI
// -----------------------------------------
function renderAdminOrganisasi() {
  const pd = BOKOR_STATE.pemerintahDesa;
  return `
    <div class="admin-card">
      <div class="admin-card-title">👥 Pimpinan Inti Desa</div>
      <form onsubmit="saveAdminPimpinan(event)">
        <!-- 1. BPD (Badan Permusyawaratan Desa) -->
        <div class="admin-grid-2" style="background:var(--gray-0); border-radius:12px; padding:20px; margin-bottom:20px;">
          <div style="font-weight:700; font-size:15px; grid-column: 1/-1; color:var(--primary-7);">1. BPD (Badan Permusyawaratan Desa)</div>
          <div class="admin-form-group">
            <label class="admin-label">Nama Ketua/Perwakilan BPD</label>
            <input type="text" class="admin-input" id="lead-bpd-name" value="${(pd.bpd && pd.bpd.name) || ''}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Jabatan</label>
            <input type="text" class="admin-input" id="lead-bpd-pos" value="${(pd.bpd && pd.bpd.pos) || 'BPD'}" required>
          </div>
          <div class="admin-form-group" style="grid-column: 1/-1;">
            <label class="admin-label">Foto BPD</label>
            <input type="file" accept="image/*, .heic, .heif, .HEIC, .HEIF" onchange="uploadBpdPhoto(event)">
            <div style="margin-top:10px; display:flex; align-items:center; gap:12px;">
              <img id="lead-bpd-preview" src="${(pd.bpd && pd.bpd.img) || ''}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; display:${(pd.bpd && pd.bpd.img) ? 'block' : 'none'}; border:1px solid var(--gray-3);">
              <span id="lead-bpd-placeholder" style="display:${(pd.bpd && pd.bpd.img) ? 'none' : 'block'}; font-size:12px; color:var(--gray-5);">Tidak ada foto</span>
            </div>
          </div>
        </div>

        <!-- 2. Kepala Desa -->
        <div class="admin-grid-2" style="background:var(--gray-0); border-radius:12px; padding:20px; margin-bottom:20px;">
          <div style="font-weight:700; font-size:15px; grid-column: 1/-1; color:var(--primary-7);">2. Kepala Desa</div>
          <div class="admin-form-group">
            <label class="admin-label">Nama Kepala Desa</label>
            <input type="text" class="admin-input" id="lead-kades-name" value="${pd.kades.name}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Jabatan</label>
            <input type="text" class="admin-input" id="lead-kades-pos" value="${pd.kades.pos}" required>
          </div>
          <div class="admin-form-group" style="grid-column: 1/-1;">
            <label class="admin-label">Foto Kepala Desa</label>
            <input type="file" accept="image/*, .heic, .heif, .HEIC, .HEIF" onchange="uploadKadesPhoto(event)">
            <div style="margin-top:10px; display:flex; align-items:center; gap:12px;">
              <img id="lead-kades-preview" src="${pd.kades.img || ''}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; display:${pd.kades.img ? 'block' : 'none'}; border:1px solid var(--gray-3);">
              <span id="lead-kades-placeholder" style="display:${pd.kades.img ? 'none' : 'block'}; font-size:12px; color:var(--gray-5);">Tidak ada foto</span>
            </div>
          </div>
        </div>

        <!-- 3. Sekretaris Desa -->
        <div class="admin-grid-2" style="background:var(--gray-0); border-radius:12px; padding:20px; margin-bottom:20px;">
          <div style="font-weight:700; font-size:15px; grid-column: 1/-1; color:var(--primary-7);">3. Sekretaris Desa</div>
          <div class="admin-form-group">
            <label class="admin-label">Nama Sekretaris Desa</label>
            <input type="text" class="admin-input" id="lead-sekdes-name" value="${pd.sekdes.name}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Jabatan</label>
            <input type="text" class="admin-input" id="lead-sekdes-pos" value="${pd.sekdes.pos}" required>
          </div>
          <div class="admin-form-group" style="grid-column: 1/-1;">
            <label class="admin-label">Foto Sekretaris Desa</label>
            <input type="file" accept="image/*, .heic, .heif, .HEIC, .HEIF" onchange="uploadSekdesPhoto(event)">
            <div style="margin-top:10px; display:flex; align-items:center; gap:12px;">
              <img id="lead-sekdes-preview" src="${pd.sekdes.img || ''}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; display:${pd.sekdes.img ? 'block' : 'none'}; border:1px solid var(--gray-3);">
              <span id="lead-sekdes-placeholder" style="display:${pd.sekdes.img ? 'none' : 'block'}; font-size:12px; color:var(--gray-5);">Tidak ada foto</span>
            </div>
          </div>
        </div>

        <div class="admin-action-row">
          <button type="submit" class="admin-btn admin-btn-save">💾 Simpan Pimpinan</button>
        </div>
      </form>
    </div>

    <!-- Kaur, Kasi, Kadus CRUD -->
    <div class="admin-card">
      <div class="admin-card-title">
        <span>👥 Perangkat Staf Desa (Kaur, Kasi, Kepala Wilayah)</span>
        <button class="admin-btn admin-btn-add" onclick="openStaffModal()">➕ Tambah Staf</button>
      </div>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Kategori</th>
            <th>Nama Lengkap</th>
            <th>Jabatan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${['kaur', 'kasi', 'kadus'].flatMap(type =>
            (pd[type] || []).map((staff, idx) => `
              <tr>
                <td>
                  ${staff.img 
                    ? `<img src="${staff.img}" style="width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid var(--gray-3);">`
                    : `<span style="font-size:20px;">👤</span>`
                  }
                </td>
                <td><span style="font-weight:800; font-size:11px; text-transform:uppercase; background:var(--gray-1); padding:4px 8px; border-radius:4px;">${type}</span></td>
                <td><strong>${staff.name}</strong></td>
                <td>${staff.pos}</td>
                <td>
                  <button class="admin-btn-edit" onclick="openStaffModal('${type}', ${idx})">Edit</button>
                  <button class="admin-btn-delete" onclick="deleteStaff('${type}', ${idx})">Hapus</button>
                </td>
              </tr>
            `)
          ).join('')}
        </tbody>
      </table>
    </div>

    <!-- RW List CRUD -->
    <div class="admin-card">
      <div class="admin-card-title">
        <span>🏘️ Ketua RW</span>
        <button class="admin-btn admin-btn-add" onclick="openRwModal()">➕ Tambah RW</button>
      </div>

      <table class="admin-table">
        <thead>
          <tr>
            <th>RW</th>
            <th>Nama Ketua RW</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${(pd.rwList || []).map((rw, idx) => `
            <tr>
              <td><strong>${rw.rw}</strong></td>
              <td>${rw.leader}</td>
              <td>
                <button class="admin-btn-edit" onclick="openRwModal(${idx})">Edit</button>
                <button class="admin-btn-delete" onclick="deleteRw(${idx})">Hapus</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- RT List CRUD -->
    <div class="admin-card">
      <div class="admin-card-title">
        <span>🏘️ Ketua RT</span>
        <button class="admin-btn admin-btn-add" onclick="openRtModal()">➕ Tambah RT</button>
      </div>

      <table class="admin-table">
        <thead>
          <tr>
            <th>RT</th>
            <th>Nama Ketua RT</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${(pd.rtList || []).map((rt, idx) => `
            <tr>
              <td><strong>${rt.rt}</strong></td>
              <td>${rt.leader}</td>
              <td>
                <button class="admin-btn-edit" onclick="openRtModal(${idx})">Edit</button>
                <button class="admin-btn-delete" onclick="deleteRt(${idx})">Hapus</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

let tempBpdBase64 = '';
function uploadBpdPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      tempBpdBase64 = dataUrl;
      const preview = document.getElementById('lead-bpd-preview');
      const placeholder = document.getElementById('lead-bpd-placeholder');
      if (preview) {
        preview.src = dataUrl;
        preview.style.display = 'block';
      }
      if (placeholder) {
        placeholder.style.display = 'none';
      }
      showToast('📸 Foto BPD berhasil dimuat!');
    });
  }
}

let tempKadesBase64 = '';
function uploadKadesPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      tempKadesBase64 = dataUrl;
      const preview = document.getElementById('lead-kades-preview');
      const placeholder = document.getElementById('lead-kades-placeholder');
      if (preview) {
        preview.src = dataUrl;
        preview.style.display = 'block';
      }
      if (placeholder) {
        placeholder.style.display = 'none';
      }
      showToast('📸 Foto Kepala Desa berhasil dimuat!');
    });
  }
}

let tempSekdesBase64 = '';
function uploadSekdesPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      tempSekdesBase64 = dataUrl;
      const preview = document.getElementById('lead-sekdes-preview');
      const placeholder = document.getElementById('lead-sekdes-placeholder');
      if (preview) {
        preview.src = dataUrl;
        preview.style.display = 'block';
      }
      if (placeholder) {
        placeholder.style.display = 'none';
      }
      showToast('📸 Foto Sekretaris Desa berhasil dimuat!');
    });
  }
}

function saveAdminPimpinan(e) {
  e.preventDefault();
  if (!BOKOR_STATE.pemerintahDesa.bpd) BOKOR_STATE.pemerintahDesa.bpd = {};
  BOKOR_STATE.pemerintahDesa.bpd.name = document.getElementById('lead-bpd-name').value;
  BOKOR_STATE.pemerintahDesa.bpd.pos = document.getElementById('lead-bpd-pos').value;
  if (tempBpdBase64) {
    BOKOR_STATE.pemerintahDesa.bpd.img = tempBpdBase64;
    tempBpdBase64 = '';
  }

  BOKOR_STATE.pemerintahDesa.kades.name = document.getElementById('lead-kades-name').value;
  BOKOR_STATE.pemerintahDesa.kades.pos = document.getElementById('lead-kades-pos').value;
  if (tempKadesBase64) {
    BOKOR_STATE.pemerintahDesa.kades.img = tempKadesBase64;
    tempKadesBase64 = '';
  }

  BOKOR_STATE.pemerintahDesa.sekdes.name = document.getElementById('lead-sekdes-name').value;
  BOKOR_STATE.pemerintahDesa.sekdes.pos = document.getElementById('lead-sekdes-pos').value;
  if (tempSekdesBase64) {
    BOKOR_STATE.pemerintahDesa.sekdes.img = tempSekdesBase64;
    tempSekdesBase64 = '';
  }

  saveState(BOKOR_STATE);
  showToast('✅ Pimpinan desa (BPD, Kades, Sekdes) berhasil diperbarui!');
  renderAdmin('organisasi');
}

// Staff CRUD Modals
let tempStaffBase64 = '';
function uploadStaffPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      tempStaffBase64 = dataUrl;
      const preview = document.getElementById('staff-preview');
      const placeholder = document.getElementById('staff-preview-placeholder');
      if (preview) {
        preview.src = dataUrl;
        preview.style.display = 'block';
      }
      if (placeholder) {
        placeholder.style.display = 'none';
      }
      showToast('📸 Foto staf berhasil dimuat!');
    });
  }
}

function openStaffModal(type = 'kaur', index = null) {
  const isEdit = index !== null;
  const staff = isEdit ? BOKOR_STATE.pemerintahDesa[type][index] : { name: '', pos: '', avatar: type, img: '' };
  tempStaffBase64 = staff.img || '';

  const modal = document.createElement('div');
  modal.className = 'admin-modal';
  modal.id = 'staff-modal';
  modal.innerHTML = `
    <div class="admin-modal-content">
      <div class="admin-card-title">${isEdit ? '📝 Edit' : '➕ Tambah'} Perangkat Staf</div>
      <form onsubmit="saveStaffItem(event, '${type}', ${index})">
        <div class="admin-form-group">
          <label class="admin-label">Kategori Perangkat</label>
          <select class="admin-select" id="staff-type" ${isEdit ? 'disabled' : ''}>
            <option value="kaur" ${type === 'kaur' ? 'selected' : ''}>Kaur (Staf Administrasi)</option>
            <option value="kasi" ${type === 'kasi' ? 'selected' : ''}>Kasi (Kepala Seksi Pelayanan)</option>
            <option value="kadus" ${type === 'kadus' ? 'selected' : ''}>Kepala Wilayah</option>
          </select>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Nama Lengkap</label>
          <input type="text" class="admin-input" id="staff-name" value="${staff.name}" required>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Jabatan Eksplisit</label>
          <input type="text" class="admin-input" id="staff-pos" value="${staff.pos}" required>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Foto Perangkat (Opsional)</label>
          <input type="file" accept="image/*, .heic, .heif, .HEIC, .HEIF" onchange="uploadStaffPhoto(event)">
          <div style="margin-top:10px; display:flex; align-items:center; gap:12px;">
            <img id="staff-preview" src="${staff.img || ''}" style="width:50px; height:50px; border-radius:50%; object-fit:cover; display:${staff.img ? 'block' : 'none'}; border:1px solid var(--gray-3);">
            <span id="staff-preview-placeholder" style="display:${staff.img ? 'none' : 'block'}; font-size:12px; color:var(--gray-5);">Tidak ada foto</span>
          </div>
        </div>
        <div class="admin-action-row">
          <button type="button" class="admin-btn admin-btn-reset" onclick="closeStaffModal()">Batal</button>
          <button type="submit" class="admin-btn admin-btn-save">Simpan</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeStaffModal() {
  const modal = document.getElementById('staff-modal');
  if (modal) modal.remove();
}

function saveStaffItem(e, originalType, index) {
  e.preventDefault();
  const name = document.getElementById('staff-name').value;
  const pos = document.getElementById('staff-pos').value;
  const newType = document.getElementById('staff-type').value;

  const item = { name, pos, avatar: newType, img: tempStaffBase64 };
  tempStaffBase64 = '';

  if (index !== null) {
    if (originalType !== newType) {
      BOKOR_STATE.pemerintahDesa[originalType].splice(index, 1);
      if (!BOKOR_STATE.pemerintahDesa[newType]) BOKOR_STATE.pemerintahDesa[newType] = [];
      BOKOR_STATE.pemerintahDesa[newType].push(item);
    } else {
      BOKOR_STATE.pemerintahDesa[originalType][index] = item;
    }
  } else {
    if (!BOKOR_STATE.pemerintahDesa[newType]) {
      BOKOR_STATE.pemerintahDesa[newType] = [];
    }
    BOKOR_STATE.pemerintahDesa[newType].push(item);
  }

  saveState(BOKOR_STATE);
  closeStaffModal();
  renderAdmin('organisasi');
  showToast('✅ Perangkat staf berhasil disimpan!');
}

function deleteStaff(type, index) {
  if (confirm('Hapus perangkat staf ini?')) {
    BOKOR_STATE.pemerintahDesa[type].splice(index, 1);
    saveState(BOKOR_STATE);
    renderAdmin('organisasi');
    showToast('🗑️ Staf berhasil dihapus!');
  }
}

// RW CRUD Modals
function openRwModal(index = null) {
  const isEdit = index !== null;
  const rw = isEdit ? BOKOR_STATE.pemerintahDesa.rwList[index] : { rw: '', leader: '' };

  const modal = document.createElement('div');
  modal.className = 'admin-modal';
  modal.id = 'rw-modal';
  modal.innerHTML = `
    <div class="admin-modal-content">
      <div class="admin-card-title">${isEdit ? '📝 Edit' : '➕ Tambah'} Ketua RW</div>
      <form onsubmit="saveRwItem(event, ${index})">
        <div class="admin-form-group">
          <label class="admin-label">Nomor RW (misal: RW 06)</label>
          <input type="text" class="admin-input" id="rw-number" value="${rw.rw}" required>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Nama Ketua RW</label>
          <input type="text" class="admin-input" id="rw-leader" value="${rw.leader}" required>
        </div>
        <div class="admin-action-row">
          <button type="button" class="admin-btn admin-btn-reset" onclick="closeRwModal()">Batal</button>
          <button type="submit" class="admin-btn admin-btn-save">Simpan</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeRwModal() {
  const modal = document.getElementById('rw-modal');
  if (modal) modal.remove();
}

function saveRwItem(e, index) {
  e.preventDefault();
  const rwNum = document.getElementById('rw-number').value;
  const leader = document.getElementById('rw-leader').value;

  const item = { rw: rwNum, leader };

  if (index !== null) {
    BOKOR_STATE.pemerintahDesa.rwList[index] = item;
  } else {
    BOKOR_STATE.pemerintahDesa.rwList.push(item);
  }

  saveState(BOKOR_STATE);
  closeRwModal();
  renderAdmin('organisasi');
  showToast('✅ Data Ketua RW berhasil disimpan!');
}

function deleteRw(index) {
  if (confirm('Hapus Ketua RW ini?')) {
    BOKOR_STATE.pemerintahDesa.rwList.splice(index, 1);
    saveState(BOKOR_STATE);
    renderAdmin('organisasi');
    showToast('🗑️ RW berhasil dihapus!');
  }
}

// RT CRUD Modals
function openRtModal(index = null) {
  const isEdit = index !== null;
  const rt = isEdit ? BOKOR_STATE.pemerintahDesa.rtList[index] : { rt: '', leader: '' };

  const modal = document.createElement('div');
  modal.className = 'admin-modal';
  modal.id = 'rt-modal';
  modal.innerHTML = `
    <div class="admin-modal-content">
      <div class="admin-card-title">${isEdit ? '📝 Edit' : '➕ Tambah'} Ketua RT</div>
      <form onsubmit="saveRtItem(event, ${index})">
        <div class="admin-form-group">
          <label class="admin-label">Nomor RT / RW (misal: RT 01 / RW 01)</label>
          <input type="text" class="admin-input" id="rt-number" value="${rt.rt}" required>
        </div>
        <div class="admin-form-group">
          <label class="admin-label">Nama Ketua RT</label>
          <input type="text" class="admin-input" id="rt-leader" value="${rt.leader}" required>
        </div>
        <div class="admin-action-row">
          <button type="button" class="admin-btn admin-btn-reset" onclick="closeRtModal()">Batal</button>
          <button type="submit" class="admin-btn admin-btn-save">Simpan</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function closeRtModal() {
  const modal = document.getElementById('rt-modal');
  if (modal) modal.remove();
}

function saveRtItem(e, index) {
  e.preventDefault();
  const rtNum = document.getElementById('rt-number').value;
  const leader = document.getElementById('rt-leader').value;

  const item = { rt: rtNum, leader };

  if (index !== null) {
    BOKOR_STATE.pemerintahDesa.rtList[index] = item;
  } else {
    if (!BOKOR_STATE.pemerintahDesa.rtList) BOKOR_STATE.pemerintahDesa.rtList = [];
    BOKOR_STATE.pemerintahDesa.rtList.push(item);
  }

  saveState(BOKOR_STATE);
  closeRtModal();
  renderAdmin('organisasi');
  showToast('✅ Data Ketua RT berhasil disimpan!');
}

function deleteRt(index) {
  if (confirm('Hapus Ketua RT ini?')) {
    BOKOR_STATE.pemerintahDesa.rtList.splice(index, 1);
    saveState(BOKOR_STATE);
    renderAdmin('organisasi');
    showToast('🗑️ RT berhasil dihapus!');
  }
}

// -----------------------------------------
// TAB: PETA DIGITAL (CRUD MARKER)
// -----------------------------------------
function renderAdminPeta() {
  const p = BOKOR_STATE.peta;
  return `
    <div class="admin-card">
      <div class="admin-card-title">
        <span>🗺️ Lokasi Peta Digital (CRUD)</span>
        <button class="admin-btn admin-btn-add" onclick="openMarkerModal()">➕ Tambah Lokasi Peta</button>
      </div>
      <p style="font-size: 13px; color: var(--gray-5); margin-bottom: 24px;">Masukkan koordinat GPS desa (area Tumpang, Malang sekitar Latitude -8.016, Longitude 112.816). Anda dapat menambahkan foto rumah/fasilitas dan tombol Google Maps.</p>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Ikon</th>
            <th>Nama Fasilitas/Rumah</th>
            <th>PIC / Pemilik</th>
            <th>Kategori</th>
            <th>Subtype</th>
            <th>Koordinat</th>
            <th>Foto</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          ${p.map((marker, idx) => `
            <tr>
              <td style="font-size: 20px;">${marker.icon || '📍'}</td>
              <td><strong>${marker.name}</strong></td>
              <td>${marker.person || '-'}</td>
              <td><span style="font-size: 11px; font-weight:700; background:var(--gray-1); padding:4px 8px; border-radius:4px;">${marker.type}</span></td>
              <td><span style="font-size:11px; font-weight:700; color:${marker.color};">${marker.subtype}</span></td>
              <td style="font-family: monospace; font-size: 12px;">${parseFloat(marker.lat).toFixed(4)}, ${parseFloat(marker.lng).toFixed(4)}</td>
              <td>
                ${marker.img ? `<img src="${marker.img}" style="width: 50px; height: 30px; object-fit: cover; border-radius: 4px;">` : `<span style="color:var(--gray-4);">Tidak ada</span>`}
              </td>
              <td>
                <button class="admin-btn-edit" onclick="openMarkerModal(${idx})">Edit</button>
                <button class="admin-btn-delete" onclick="deleteMarker(${idx})">Hapus</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function openMarkerModal(index = null) {
  const isEdit = index !== null;
  const m = isEdit ? BOKOR_STATE.peta[index] : {
    name: '', person: '', lat: -8.0167, lng: 112.8167, type: 'perangkat', subtype: 'Kepala Desa', icon: '🏠', color: '#1265f0', bg: '#e5f0ff', img: '', gmaps: ''
  };

  const modal = document.createElement('div');
  modal.className = 'admin-modal';
  modal.id = 'marker-modal';
  modal.innerHTML = `
    <div class="admin-modal-content" style="width: 650px;">
      <div class="admin-card-title">${isEdit ? '📝 Edit' : '➕ Tambah'} Lokasi Peta</div>
      <form onsubmit="saveMarkerItem(event, ${index})">
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Nama Lokasi/Rumah</label>
            <input type="text" class="admin-input" id="marker-name" value="${m.name}" placeholder="Rumah Kepala Desa / SDN Bokor" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Nama Penghuni / Keterangan</label>
            <input type="text" class="admin-input" id="marker-person" value="${m.person}" placeholder="Bpk. Sujarwo / Sekolah Negeri" required>
          </div>
        </div>

        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label class="admin-label">Kategori Peta</label>
            <select class="admin-select" id="marker-type" onchange="adjustMarkerColors(this.value)">
              <option value="perangkat" ${m.type === 'perangkat' ? 'selected' : ''}>Perangkat Desa</option>
              <option value="kantor" ${m.type === 'kantor' ? 'selected' : ''}>Kantor Desa</option>
              <option value="lumbung" ${m.type === 'lumbung' ? 'selected' : ''}>Lumbung Pangan</option>
              <option value="sekolah" ${m.type === 'sekolah' ? 'selected' : ''}>Sekolah</option>
              <option value="ibadah" ${m.type === 'ibadah' ? 'selected' : ''}>Tempat Ibadah</option>
              <option value="kesehatan" ${m.type === 'kesehatan' ? 'selected' : ''}>Kesehatan</option>
              <option value="pemakaman" ${m.type === 'pemakaman' ? 'selected' : ''}>Tempat Pemakaman</option>
            </select>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Subtype Label</label>
            <input type="text" class="admin-input" id="marker-subtype" value="${m.subtype}" placeholder="Kepala Desa / SD / Masjid" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Ikon Emoji</label>
            <input type="text" class="admin-input" id="marker-icon" value="${m.icon}" placeholder="🏠 / 📚 / 🕌" required>
          </div>
        </div>

        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Garis Lintang (Latitude)</label>
            <input type="number" step="any" class="admin-input" id="marker-lat" value="${m.lat}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Garis Bujur (Longitude)</label>
            <input type="number" step="any" class="admin-input" id="marker-lng" value="${m.lng}" required>
          </div>
        </div>

        <div class="admin-form-group">
          <label class="admin-label">Link Custom Google Maps (Opsional)</label>
          <input type="url" class="admin-input" id="marker-gmaps" value="${m.gmaps}" placeholder="Bila kosong, otomatis dibuat rute berdasarkan koordinat">
        </div>

        <input type="hidden" id="marker-color" value="${m.color}">
        <input type="hidden" id="marker-bg" value="${m.bg}">

        <div class="admin-grid-2" style="align-items:center; border-top: 1px solid var(--gray-2); padding-top: 16px;">
          <div class="admin-form-group">
            <label class="admin-label">Unggah Foto Rumah/Fasilitas</label>
            <input type="file" accept="image/*, .heic, .heif, .HEIC, .HEIF" onchange="uploadMarkerImage(event)">
          </div>
          <div class="admin-form-group" style="display:flex; flex-direction:column; align-items:center;">
            <label class="admin-label">Pratinjau Foto</label>
            <img id="marker-preview" src="${m.img}" class="admin-image-preview" style="width:120px; height:70px; display:${m.img ? 'block' : 'none'};">
            <div id="marker-preview-placeholder" style="display:${m.img ? 'none' : 'block'}; font-size:12px; color:var(--gray-5);">Tidak ada foto</div>
          </div>
        </div>

        <div class="admin-action-row">
          <button type="button" class="admin-btn admin-btn-reset" onclick="closeMarkerModal()">Batal</button>
          <button type="submit" class="admin-btn admin-btn-save">Simpan Lokasi</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

// Automatically assign colors based on category to maintain premium design
function adjustMarkerColors(category) {
  const colorMap = {
    perangkat: { color: '#1265f0', bg: '#e5f0ff', icon: '🏠' },
    kantor: { color: '#376200', bg: '#ecffd5', icon: '🏛️' },
    lumbung: { color: '#d97706', bg: '#fef3c7', icon: '🌾' },
    sekolah: { color: '#f57c00', bg: '#fff3e0', icon: '📚' },
    ibadah: { color: '#6a1b9a', bg: '#f3e5f5', icon: '🕌' },
    kesehatan: { color: '#c62828', bg: '#ffebee', icon: '🏥' },
    pemakaman: { color: '#4b5563', bg: '#f3f4f6', icon: '🪦' }
  };

  const scheme = colorMap[category] || { color: '#1265f0', bg: '#e5f0ff', icon: '📍' };
  document.getElementById('marker-color').value = scheme.color;
  document.getElementById('marker-bg').value = scheme.bg;
  document.getElementById('marker-icon').value = scheme.icon;
}

let tempMarkerBase64 = '';

function uploadMarkerImage(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      tempMarkerBase64 = dataUrl;
      const preview = document.getElementById('marker-preview');
      const placeholder = document.getElementById('marker-preview-placeholder');
      preview.src = dataUrl;
      preview.style.display = 'block';
      placeholder.style.display = 'none';
      showToast('📸 Foto lokasi berhasil dikonversi ke memori!');
    });
  }
}

function saveMarkerItem(e, index) {
  e.preventDefault();
  const name = document.getElementById('marker-name').value;
  const person = document.getElementById('marker-person').value;
  const lat = parseFloat(document.getElementById('marker-lat').value);
  const lng = parseFloat(document.getElementById('marker-lng').value);
  const type = document.getElementById('marker-type').value;
  const subtype = document.getElementById('marker-subtype').value;
  const icon = document.getElementById('marker-icon').value;
  const color = document.getElementById('marker-color').value;
  const bg = document.getElementById('marker-bg').value;
  const gmaps = document.getElementById('marker-gmaps').value;

  const id = index !== null ? BOKOR_STATE.peta[index].id : 'loc_' + Date.now();
  const oldImg = index !== null ? BOKOR_STATE.peta[index].img : '';

  const item = {
    id,
    name,
    person,
    lat,
    lng,
    type,
    subtype,
    icon,
    color,
    bg,
    img: tempMarkerBase64 || oldImg,
    gmaps
  };

  if (index !== null) {
    BOKOR_STATE.peta[index] = item;
  } else {
    BOKOR_STATE.peta.push(item);
  }

  saveState(BOKOR_STATE);
  tempMarkerBase64 = '';
  closeMarkerModal();
  renderAdmin('peta');
  showToast('✅ Berhasil menyimpan titik lokasi peta!');
}

function deleteMarker(index) {
  if (confirm('Apakah Anda yakin ingin menghapus lokasi ini dari peta?')) {
    BOKOR_STATE.peta.splice(index, 1);
    saveState(BOKOR_STATE);
    renderAdmin('peta');
    showToast('🗑️ Lokasi berhasil dihapus!');
  }
}

function closeMarkerModal() {
  const modal = document.getElementById('marker-modal');
  if (modal) modal.remove();
  tempMarkerBase64 = '';
}

// -----------------------------------------
// TAB: KONTAK & FOOTER
// -----------------------------------------
function renderAdminKontak() {
  const k = BOKOR_STATE.kontak;
  return `
    <div class="admin-card">
      <div class="admin-card-title">📞 Informasi Hubungi Kami</div>
      <form onsubmit="saveAdminKontak(event)">
        <div class="admin-form-group">
          <label class="admin-label">Alamat Kantor Desa</label>
          <input type="text" class="admin-input" id="k-alamat" value="${k.alamat}" required>
        </div>

        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">No. HP / WhatsApp Desa</label>
            <input type="text" class="admin-input" id="k-telp" value="${k.telepon}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Nama Kecamatan</label>
            <input type="text" class="admin-input" id="k-kec" value="${k.kecamatan}" required>
          </div>
        </div>

        <div class="admin-card-title" style="margin-top: 32px; border-top: 1px solid var(--gray-2); padding-top: 24px;">🕐 Jam Operasional Pemerintahan</div>
        <div class="admin-grid-3">
          <div class="admin-form-group">
            <label class="admin-label">Senin – Jumat</label>
            <input type="text" class="admin-input" id="k-jam-sf" value="${k.jamOperasional.senin_jumat}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Sabtu</label>
            <input type="text" class="admin-input" id="k-jam-s" value="${k.jamOperasional.sabtu}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Minggu & Hari Libur</label>
            <input type="text" class="admin-input" id="k-jam-m" value="${k.jamOperasional.minggu}" required>
          </div>
        </div>

        <div class="admin-card-title" style="margin-top: 32px; border-top: 1px solid var(--gray-2); padding-top: 24px;">📍 Peta Lokasi Kantor Desa</div>
        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Lintang (Latitude)</label>
            <input type="number" step="any" class="admin-input" id="k-lat" value="${k.koordinatKantor.lat}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Bujur (Longitude)</label>
            <input type="number" step="any" class="admin-input" id="k-lng" value="${k.koordinatKantor.lng}" required>
          </div>
        </div>

        <div class="admin-form-group" style="margin-top: 16px;">
          <label class="admin-label">Gambar Peta Lokasi (Opsional)</label>
          <p style="font-size:13px; color:var(--gray-6); margin-bottom:8px;">Jika diisi, gambar ini akan ditampilkan menggantikan peta interaktif (Leaflet).</p>
          <input type="file" id="k-img-peta" class="admin-input" accept="image/*" onchange="uploadKontakPeta(event)">
          <div style="margin-top: 12px; width: 100%; height: 150px; background: var(--gray-1); border-radius: 8px; border: 1px dashed var(--gray-4); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
            <img id="k-img-peta-preview" src="${k.imgPeta || ''}" style="width: 100%; height: 100%; object-fit: cover; display: ${k.imgPeta ? 'block' : 'none'};">
            <div id="k-img-peta-placeholder" style="color: var(--gray-5); font-size: 14px; display: ${k.imgPeta ? 'none' : 'block'};">Belum ada gambar</div>
          </div>
        </div>

        <div class="admin-action-row">
          <button type="submit" class="admin-btn admin-btn-save">💾 Simpan Kontak</button>
        </div>
      </form>
    </div>
  `;
}

let tempKontakPetaBase64 = '';
function uploadKontakPeta(event) {
  const file = event.target.files[0];
  if (file) {
    processImageFile(file, (dataUrl) => {
      tempKontakPetaBase64 = dataUrl;
      const preview = document.getElementById('k-img-peta-preview');
      const placeholder = document.getElementById('k-img-peta-placeholder');
      if (preview) {
        preview.src = dataUrl;
        preview.style.display = 'block';
      }
      if (placeholder) placeholder.style.display = 'none';
      showToast('📸 Gambar peta berhasil dimuat!');
    });
  }
}

function saveAdminKontak(e) {
  e.preventDefault();
  BOKOR_STATE.kontak.alamat = document.getElementById('k-alamat').value;
  BOKOR_STATE.kontak.telepon = document.getElementById('k-telp').value;
  BOKOR_STATE.kontak.email = '';
  BOKOR_STATE.kontak.kecamatan = document.getElementById('k-kec').value;

  BOKOR_STATE.kontak.jamOperasional.senin_jumat = document.getElementById('k-jam-sf').value;
  BOKOR_STATE.kontak.jamOperasional.sabtu = document.getElementById('k-jam-s').value;
  BOKOR_STATE.kontak.jamOperasional.minggu = document.getElementById('k-jam-m').value;

  BOKOR_STATE.kontak.koordinatKantor.lat = parseFloat(document.getElementById('k-lat').value);
  BOKOR_STATE.kontak.koordinatKantor.lng = parseFloat(document.getElementById('k-lng').value);
  if (tempKontakPetaBase64) {
    BOKOR_STATE.kontak.imgPeta = tempKontakPetaBase64;
    tempKontakPetaBase64 = '';
  }

  saveState(BOKOR_STATE);
  renderFooter();
  showToast('✅ Berhasil memperbarui data kontak dan operasional!');
}

// =========================================
// TAB: KEAMANAN AKUN
// =========================================
function renderAdminKeamanan() {
  const cred = getAdminCred();
  return `
    <div class="admin-card">
      <div class="admin-card-title">🔐 Keamanan Akun Admin</div>
      <p style="font-size:13px; color:var(--gray-6); margin-bottom:24px; line-height:1.7;">
        Ubah email dan password untuk masuk ke Dashboard Admin.
        Pastikan Anda mengingat kredensial baru sebelum menyimpan.
      </p>

      <div class="admin-cred-box">
        <div class="admin-card-title" style="font-size:1rem; margin-bottom:16px;">📋 Kredensial Saat Ini</div>
        <div style="display:flex; flex-direction:column; gap:8px; font-size:14px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="width:80px; color:var(--gray-6); font-weight:500;">Email</span>
            <span style="font-weight:600; color:var(--gray-9);">${cred.email}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="width:80px; color:var(--gray-6); font-weight:500;">Password</span>
            <span style="font-weight:600; color:var(--gray-9); letter-spacing:3px;">••••••••</span>
          </div>
        </div>
      </div>

      <form onsubmit="saveAdminKeamanan(event)" style="margin-top:28px;" autocomplete="off">
        <div class="admin-card-title" style="font-size:1rem; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid var(--gray-2);">✏️ Ubah Kredensial</div>

        <div class="admin-form-group">
          <label class="admin-label">Konfirmasi Password Lama</label>
          <div style="position:relative; display:flex; align-items:center;">
            <input type="password" class="admin-input" id="cred-old-pw"
              placeholder="Masukkan password saat ini untuk verifikasi" required style="padding-right:44px;">
            <button type="button" onclick="toggleAdminPw('cred-old-pw', this)"
              style="position:absolute; right:12px; background:none; border:none; cursor:pointer; font-size:17px; opacity:0.5; transition:opacity 0.2s;"
              onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.5">👁️</button>
          </div>
        </div>

        <div class="admin-grid-2">
          <div class="admin-form-group">
            <label class="admin-label">Email Baru</label>
            <input type="email" class="admin-input" id="cred-new-email"
              placeholder="email@baru.com" value="${cred.email}" required>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Password Baru</label>
            <div style="position:relative; display:flex; align-items:center;">
              <input type="password" class="admin-input" id="cred-new-pw"
                placeholder="Min. 6 karakter" minlength="6" required style="padding-right:44px;">
              <button type="button" onclick="toggleAdminPw('cred-new-pw', this)"
                style="position:absolute; right:12px; background:none; border:none; cursor:pointer; font-size:17px; opacity:0.5; transition:opacity 0.2s;"
                onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.5">👁️</button>
            </div>
          </div>
          <div class="admin-form-group">
            <label class="admin-label">Konfirmasi Password Baru</label>
            <div style="position:relative; display:flex; align-items:center;">
              <input type="password" class="admin-input" id="cred-confirm-pw"
                placeholder="Ulangi password baru" minlength="6" required style="padding-right:44px;">
              <button type="button" onclick="toggleAdminPw('cred-confirm-pw', this)"
                style="position:absolute; right:12px; background:none; border:none; cursor:pointer; font-size:17px; opacity:0.5; transition:opacity 0.2s;"
                onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.5">👁️</button>
            </div>
          </div>
        </div>

        <div id="cred-error" style="display:none; align-items:center; gap:8px; background:#fff5f5; border:1px solid #fecaca; color:#dc2626; font-size:0.875rem; padding:12px 16px; border-radius:10px; margin-bottom:16px; font-weight:500;">⚠️ <span id="cred-error-msg"></span></div>

        <div class="admin-action-row">
          <button type="submit" class="admin-btn admin-btn-save">🔐 Simpan Kredensial Baru</button>
        </div>
      </form>
    </div>
  `;
}

function saveAdminKeamanan(e) {
  e.preventDefault();
  const errBox = document.getElementById('cred-error');
  const errMsg = document.getElementById('cred-error-msg');

  const oldPw   = document.getElementById('cred-old-pw').value;
  const newEmail = document.getElementById('cred-new-email').value.trim();
  const newPw    = document.getElementById('cred-new-pw').value;
  const confirmPw = document.getElementById('cred-confirm-pw').value;

  const currentCred = getAdminCred();

  const showErr = (msg) => {
    errMsg.textContent = msg;
    errBox.style.display = 'flex';
  };
  errBox.style.display = 'none';

  if (oldPw !== currentCred.password) {
    showErr('Password lama yang Anda masukkan tidak sesuai.');
    return;
  }
  if (newPw.length < 6) {
    showErr('Password baru minimal harus 6 karakter.');
    return;
  }
  if (newPw !== confirmPw) {
    showErr('Konfirmasi password baru tidak cocok. Silakan periksa kembali.');
    return;
  }
  if (!newEmail.includes('@')) {
    showErr('Format email baru tidak valid.');
    return;
  }

  saveAdminCred(newEmail, newPw);
  showToast('✅ Kredensial admin berhasil diperbarui!');

  // Re-render to show updated current credentials
  setTimeout(() => navigate('admin', 'keamanan'), 800);
}

// =========================================
// UTILITY: TOAST NOTIFICATION
// =========================================
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// =========================================
// REAL-TIME WIB CLOCK MANAGER
// =========================================
let wibClockInterval = null;

function getWibFormattedString() {
  const now = new Date();
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

  const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
  const wibDate = new Date(utcMs + (7 * 3600000));

  const dayName = days[wibDate.getDay()];
  const dateNum = wibDate.getDate();
  const monthName = months[wibDate.getMonth()];
  const year = wibDate.getFullYear();
  const hours = String(wibDate.getHours()).padStart(2, '0');
  const minutes = String(wibDate.getMinutes()).padStart(2, '0');
  const seconds = String(wibDate.getSeconds()).padStart(2, '0');

  return `${dayName}, ${dateNum} ${monthName} ${year} • ${hours}:${minutes}:${seconds} WIB`;
}

function startWibClock() {
  const updateAllClocks = () => {
    const text = getWibFormattedString();
    const desktopEl = document.getElementById('wib-clock-text');
    const mobileEl = document.getElementById('wib-clock-mobile-text');
    if (desktopEl) desktopEl.textContent = text;
    if (mobileEl) mobileEl.textContent = text;
  };
  updateAllClocks();
  if (wibClockInterval) clearInterval(wibClockInterval);
  wibClockInterval = setInterval(updateAllClocks, 1000);
}

// =========================================
// INITIALIZE APPLICATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('resize', () => {
    if (typeof drawOrgConnectors === 'function') drawOrgConnectors();
  });
});
