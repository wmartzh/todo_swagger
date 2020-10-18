const db = require("monk")(process.env.DB_URL);
const Joi = require("joi");
const todoCollection = db.get("todos");

const createTodo = async (req, res) => {
	const validateTodo = Joi.object({
		title: Joi.string(),
		description: Joi.string(),
		due_date: Joi.date(),
		schedule: Joi.date(),
	});

	const { error, value } = validateTodo.validate(req.body);

	if (error) {
		res.status(400).json(error.details);
	} else {
		todoCollection.insert(value).then(() => {
			res.status(201).json({
				message: "Todo created succesfuly",
			});
		});
	}
};

module.exports = { createTodo };
