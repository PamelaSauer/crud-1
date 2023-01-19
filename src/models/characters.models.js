const { model, Schema } = require('mongoose');

const characterSchema = new Schema ({
    id: { type: Number },
  name: { type: String },
  status: { type: String },
  species: { type: String },
  type: { type: String },
  gender: { type: String },
  url: { type: String },
})

const UsuarioModel = model("Character", characterSchema );

module.exports = UsuarioModel;