const UsuarioModel = require('../models/characters.models')

const addCharacterService = async (req) => {
    const character = req.body;
    const newCharacter = new UsuarioModel(character);
    await newCharacter.save();
    return character
}

module.exports = addCharacterService;