/* Thanks to
 * Dani Techno. - FullStack Engineer (Creator)
 * Miftah GanzZ. - (Constributor)
 * api.miftah.biz.id / api-miftah.xyz (API provider)
 * api.caliph.biz.id (API provider)
 * module provider
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  accountType: String,
  dailyLimit: Number,
  isPremium: Boolean,
  expirationDate: Date
});

module.exports = mongoose.model('User', userSchema);