var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  id: Number,
  timeStamp : { type: Date, default: Date.now }, 
	title: String,
  description: String, 
  imagePath: String, 
	category: String, 
 	addedBy: String, 
 	likes: Number, 
	dislikes: Number, 
 	wished: Number, 
 	retailerName: String, 
	link: String, 
 	cover: Boolean, 
 	galleryId: Number
});
module.exports = mongoose.model('Products', ProductSchema);