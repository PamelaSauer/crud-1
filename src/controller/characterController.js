const UsuarioModel = require('../models/characters.models');
const addCharacterService = require('../services/addCharacterService');
const getCharacterService = require('../services/getCharacterService');
const putCharacterService = require('../services/putCharacterService');
const deleteCharacterService = require('../services/deleteCharacterService');


const addCharacterController = async (req, res) => {
    try {
        const addCharacter = await addCharacterService (req)
        res.json({message: `Se creó el personaje ${addCharacter.name}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}


const getCharacterController = async (req, res) => {
    try {
        const character = await getCharacterService();
        res.json(character)
    } catch (error) {
        console.log(error);
        res.json({message: error.message})

    }
}

const putCharacterController = async (req, res) => {
    try {
        const putCharacter = await putCharacterService(req);
        res.json({message: `Se modificó el personaje ${putCharacter}`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const deleteCharacterController = async (req, res) => {
    try {
        const deleteCharacter = await deleteCharacterService(req);
        res.json({message: `El personaje ${deleteCharacter} fue eliminado con éxito`})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}


module.exports = { addCharacterController, getCharacterController, putCharacterController, deleteCharacterController }