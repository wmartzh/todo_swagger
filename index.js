require("dotenv").config({ path: "./.env" });

const express = require("express");
const connection = require("./mongo");


const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const router = require('./api/router');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Todo Express API with Swagger",
			version: "0.1.0",
			description:
				"This is a simple CRUD API application made with Express and documented with Swagger",
		
			contact: {
				name: "wamartzh",
				url: "https://github.com/wmartzh",
				email: "wmartzh@mail.com",
			},
		},
		servers: [
			{
				url: "http://localhost:"+ process.env.PORT+"/v1",
			},
		],
	},
	apis: ["./api/router.js"],
};

app = express();


const especs =swaggerJsdoc(options)

app.use('/v1',router)

app.use("/docs",swaggerUi.serve,swaggerUi.setup(especs))
connection();

app.listen(process.env.PORT, () => {
	console.log("Server running at http://localhost:" + process.env.PORT);
});
