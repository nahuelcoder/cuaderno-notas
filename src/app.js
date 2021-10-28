const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// RUTAS
app.use('/', require('./routes/index'))

//app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Servidor activo en puerto ${port}`))