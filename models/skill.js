const skills = [
    {id: 111, skill: 'CSS', learned: true},
    {id: 222, skill: 'Html', learned: true},
    {id: 333, skill: 'JavaSript', learned: true},
    {id: 444, skill: 'jquery', learned: true},
    {id: 555, skill: 'Express', learned: false}
]
module.exports = {
    getAll
    }
function getAll(){
    return skills;
}
function getOne(id){
    id=parseInt(id)
    return skills.find(skill =>skill.id === id)
}

