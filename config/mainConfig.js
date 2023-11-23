/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator)
 * Miftah GanzZ. - (Constributor)
 * api.miftah.biz.id / api-miftah.xyz (API provider)
 * api.caliph.biz.id (API provider)
 * module provider
*/

/*
true = enable,
false = disable.
*/

module.exports = {
  session_folder_name: 'session',
  pairing_code: true,
  browser: ["Chrome (Windows)", "latest"],
  prefix: '.',
  image_url: 'https://telegra.ph/file/f0fa86144d97805672ec9.jpg',
  audio_url: 'https://file.api.miftahganzz.my.id/file/ish392HoVe.mp3',
  public_mode: false,
  offline_status: false,
  auto_update_profile_status: false,
  auto_read_messages: true,
  auto_typing: true,
  auto_recording: false,
  mongodb_uri: 'mongodb+srv://xxxx', // Register here: https://mongodb.com/#sign-up
  api: {
    miftah: {
      api_url: 'https://api-miftah.xyz',
      api_key: 'your_apikey' // Register here: https://api-miftah.xyz/#sign-up
    },
    caliph: {
      api_url: 'https://api.caliph.biz.id', // Register here: https://api.caliph.biz.id/#sign-up
      api_key: 'your_apikey'
    }
  },
  bot: {
    name: 'Miftah BOT',
    profile_status: 'Bot aktif 24/7'
  },
  owner: {
    name: ["Miftah GanzZ."],
    number: ["628xxxx"]
  },
  daily_limit: {
    free: 25,
    premium: Infinity
  },
  watermark: {
    sticker: {
      package_name: 'Created by',
      author_name: 'Miftah Bot.'
    }
  },
  react: {
    process: '⏳',
    success: '✅',
    failed: '❌'
  },
  cron_jobs: {
    time: '0 0 * * *',
    timzone: 'Asia/Jakarta'
  },
  message: {
    plans_and_pricing: '*Plans & Pricing*\n\n*Plan:*\n- Free (benefit): Limit 25/day\n- Premium (benefit): Limit infinity/unlimited\n\n*Price:*\n- Premium 7 hari: 3rb\n- Premium 14 hari: 5rb\n- Premium 1 bulan 10rb\n- Premium 2 bulan: 20rb\n- Premium 1 tahun: 120rb\n\n*Contact owner:* 6285171226069',
    not_registered: 'Anda belum terdaftar sebagai pengguna. Untuk mendaftar, ketik: .register [yourname].',
    especially_premium: 'Anda harus memiliki akun Premium untuk mengakses fitur ini.',
    especially_owners: 'Anda tidak diizinkan mengakses fitur ini.',
    daily_limit: 'Maaf, limit harian Anda telah habis. Limit akan direset setiap pukul jam 12 malam WIB.'
  },
  date: {
    country: 'id-ID',
    time_zone: 'Asia/Jakarta'
  }
}