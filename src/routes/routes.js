const express = require('express');
const { addCharacterController, getCharacterController, putCharacterController, deleteCharacterController } = require('../controller/characterController')
const { validateCreate } = require('../utils/validator')
const router = express.Router();
const axios = require('axios')



router.post("/", validateCreate, addCharacterController);
router.get("/", getCharacterController);
router.put("/:name", putCharacterController);
router.delete("/:name", deleteCharacterController)

module.exports = router;
