const router = require("express").Router();

const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

const { createTodo} = require('./todoController')

/**
 *  @swagger
 *  /todo:
 *     post:
 *          description: Create a new Todo
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: Title of todo,
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: A description task.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Todo created succesfuly 
 */


router.post('/todo',jsonParser,createTodo)



module.exports = router;
