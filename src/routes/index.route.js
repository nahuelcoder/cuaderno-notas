const express = require('express')

const router = express.Router()
const controller = require('../controllers/index.controller')

router.get('/', controller.index)
router.get('/new_entry', controller.new_entry)
router.post('/new_entry', controller.new_entry_post)

module.exports = router