const usuarios = require('../models').usuarios;
function create(req,res){
 usuarios.create(req.body)
 .then(usuarios => {
    res.status(200).send({usuarios});
 })
 .catch(err=>{
    res.status(500).send({err});
 })

}

module.exports = {
    create
}