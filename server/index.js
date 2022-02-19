const express = require('express')
const app = express()
const cors = require('cors')
const tasks = require('./routes/task')
const connection = require('./db')
app.use(express.json())
app.use(cors())

connection()

app.use("api/tasks", tasks)
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`))
