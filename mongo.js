const monk = require("monk");

const connection = () => {
    db = monk(process.env.DB_URL);
    
	// db.create("todos");
    
    db.then(() => {
		console.log("Connected Correctly to Database");
	
	}).catch((error) => {
		console.error(error);
	});
};
module.exports = connection;
