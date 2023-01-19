const UsuarioModel = require('../models/characters.models')

const putCharacterService = async (req) => {
    const { name } = req.params;
    const character = req.body;
    const putCharacter = await UsuarioModel.findOne({ name })
    putCharacter.name = character.name;
    putCharacter.status = character.status;
    putCharacter.species = character.species;
    putCharacter.gender = character.gender;
    await putCharacter.save();
    return putCharacter.name;
}

module.exports = putCharacterService;