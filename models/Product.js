var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	id: Number,
	title: String,
  	description: String, 
  	imagePath: String, 
  	category: String, 
  	createdBy: String, 
	createDate : { type: Date, default: Date.now }, 
  	likes: Number, 
  	dislikes: Number, 
  	wished: Number, 
  	retailerName: String, 
  	link: String, 
  	cover: Boolean, 
  	galleryId: Number
});
module.exports = mongoose.model('Product', ProductSchema);
