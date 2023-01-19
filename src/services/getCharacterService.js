const UsuarioModel = require('../models/characters.models')
const axios = require('axios')

const getDataFromAPI = async() => {
    try {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character/1,183');
      return data;
    } catch (error) {
      throw error;
    }
  }

const getCharacterService = async () => {
    const charactersAPI = await getDataFromAPI();
    for (let i = 0; i < charactersAPI.length; i++) {
      const characterData = charactersAPI[i];
      let character = await UsuarioModel.findOne({ id: characterData.id });
      if (!character) {
        const { error } = UsuarioModel.validate(characterData);
        if(error) {
          throw error;
        }
        character = new UsuarioModel(characterData);
        await character.save();
      }
    }
    return UsuarioModel.find();
}

module.exports = getCharacterService