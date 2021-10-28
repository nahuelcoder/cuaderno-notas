const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const port = 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs')  
app.set('views', './views')

// ROUTES
app.use('/', require('./routes/index.route'))
app.use('/new_entry', require('./routes/index.route'))

// STATIC FILES
app.use(express.static(path.join(__dirname,'../public')))

app.listen(port, () => console.log(`Servidor activo en puerto ${port}`))