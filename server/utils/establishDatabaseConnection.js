const mongoose = require("mongoose")

module.exports = async function(url) {
	try {
		mongoose.Promise = global.Promise
		await mongoose.connect(url, { useNewUrlParser: true })
		console.log("Connection to database established!")
	} catch (error) {
		console.log(error);
	}
}