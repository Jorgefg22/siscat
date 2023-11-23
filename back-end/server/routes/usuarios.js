const ususariosController = require('../controllers').usuarios;
module.exports=(app)=>{
    app.post('/api/usuario',ususariosController.create)
}