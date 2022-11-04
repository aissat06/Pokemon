// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    taille: Number,
    weight: Number,

});

const Poke = mongoose.model('Poke', pokeSchema)

module.exports = Poke;