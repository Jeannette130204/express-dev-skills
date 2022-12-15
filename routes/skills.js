var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills')
router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show)
/* GET users listing. */
// var skillsCtrl = require('../controller/skills')
// var skillsCtrl = require('../controller/mySkills')

module.exports = router;
