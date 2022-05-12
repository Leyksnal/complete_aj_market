const mongoose = require("mongoose");
// const url = "mongodb://localhost/marketPlace";

const uri = "mongodb+srv://leke:codelab2020@cluster0.l1t2m.mongodb.net/AjMarketplace?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
	console.log("Database now connected...!");
});
