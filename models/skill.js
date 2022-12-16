const skills = [
    {id: 111, skill: 'CSS', learned: true},
    {id: 222, skill: 'Html', learned: true},
    {id: 333, skill: 'JavaSript', learned: true},
    {id: 444, skill: 'jquery', learned: true},
    {id: 555, skill: 'Express', learned: false}
]
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
    }
function getAll(){
    return skills;
}
function getOne(id){
    id=parseInt(id)
    return skills.find(skill =>skill.id === id)
}
function create(skill){
    skill.id = Date.now() % 1000;
    skills.push(skill)

}

function deleteOne(id){
    id=parseInt(id)
    const idx= skills.findIndex(skill => skill.id ===id)
    skills.splice(idx, 1)
}

