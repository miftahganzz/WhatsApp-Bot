/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator)
 * Miftah GanzZ. - (Constributor)
 * api.miftah.biz.id / api-miftah.xyz (API provider)
 * api.caliph.biz.id (API provider)
 * module provider
*/

const mongoose = require('mongoose');
const chalk = require('chalk');

const config = require('../config/mainConfig.js');

let db = mongoose.connection;

mongoose.connect(config.mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;