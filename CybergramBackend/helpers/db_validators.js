const Usuario = require('../Models/usuario');

const emailExiste = async(email = '') => {
    let usuario =  await Usuario.findOne({ email: email})
        if (usuario){
            throw new Error(`Este correo : ${email}  ya esta registrado `)
        }
}

module.exports = {
    emailExiste
}