# WhatsApp BOT Multi Device Pairing Code - NodeJs
## Fitur
* Artificial Intelligence
* Downloader
* Searcher
* Stalker
* Maker
* Random Image
* URL Shortener
* Converter
* Islamic
* Tools
* Authentication
* Owner/Admin

## Instalasi
### Instal/clone proyek
```bash
git clone https://github.com/miftahganzz/WhatsApp-Bot.git
```

### Pimdah Direktori (CD)
```bash
cd wa-bot
```

### MongoDb
#### Buat akun dan database MongoDb
Daftar dan buat database dan dapatkan MongoDb URI: <a href="https://mongodb.com">https://mongodb.com</a>

#### Edit ./config/mainConfig.js > mongodb_uri
```javascript
mongodb_uri: 'Your_MongoDb_URI', // Register here: https://mongodb.com/#sign-up
```

### Application Programming Interface (API)
#### Dapatkan Kunci API
Daftar dan dapatkan kunci API:
1. <a href="https://api-miftah.xyz">https://api-miftah.xyz</a>
2. <a href="https://api.caliph.biz.id">https://api.caliph.biz.id</a>

#### Edit ./config/mainConfig.js > api
```javascript
api: {
  dani: {
    ...
    api_key: 'Your_API_key' // Register here: https://api-miftah.xyz/#sign-up
  },
  caliph: {
    ...
    api_key: 'Your_API_key' // Register here: https://api.caliph.biz.id/#sign-up
  }
}
```

### Instal dependensi
#### Menggunakan Npm
```bash
npm install
```
#### Atau menggunakan Yarn
```bash
yarn install
```

### Jalankan server
#### Menggunakan Npm
```bash
npm run start
```

#### Atau menggunakan Yarn
```bash
yarn run start
```

#### Atau menggunakan Node
```bash
node run start
```

#### Atau menggunakan Bun
```bash
bun run start
```

## Thanks to
* Dani Techno. - FullStack Engineer (Creator)
* Miftah GanzZ - (Constributor)
* api.miftah.biz.id / api-miftah.xyz (API provider)
* api.caliph.biz.id (API provider)
* Module Provider
