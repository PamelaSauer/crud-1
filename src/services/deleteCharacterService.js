const UsuarioModel = require('../models/characters.models');

const deleteCharacterService = async (req) => {
    const { name } = req.params;
    const response = await UsuarioModel.deleteOne({ name: name });
    if(response.deletedCount == 0) throw new Error (`No se encontró el usuario ${name}.`)
    return name;
}

module.exports = deleteCharacterService;