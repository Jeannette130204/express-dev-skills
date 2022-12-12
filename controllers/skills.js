const Skill = require('../models/skills')
module.exports ={
    index,
    show
}
function index(req, res){
    res.render('skills/index', {})

}