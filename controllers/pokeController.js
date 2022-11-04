const Favori = require('../models/pokeModel');

const getPokes = function(req, res, next) {
    const pokes = []
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=80')
        .then(res => res.json())
        .then(data => {
            res.render('pokes', {
                title1: 'Les pokemons',
                message: "Hello world",
                pokes,
                pokemon: data.results
            });
        })
}

const detailPoke = function(req, res, next) {
    const pokemon = []

    fetch('https://pokeapi.co/api/v2/pokemon/' + req.params.name)
        .then(res => res.json())
        .then(data => {
            res.render('pokemon', {
                title1: 'Details Pokemon',
                pokemon,
                taille: data.height,
                name: data.name,
                weight: data.weight,
                picture: data.sprites.front_shiny
            });
        })
}



const create = (req, res) => {
    const { name } = req.params
    Favori.create({ name })
        .then(poke => {
            res.status(201).json(poke)
        })
        .catch(err => res.status(500).json(err))
}

const getFavorisPokes = (req, res) => {
    Favori.find((err, favPokes) => {
        res.status(200).render('favorisPokes', { favPokes, title: 'Mes Pokemons Favoris', })
    })
}

const deletePoke = async(req, res) => {
    const { name } = req.params

    await Favori.deleteMany({ name })

    return res.status(200).send("OK")
}

module.exports = {
    getPokes,
    detailPoke,
    create,
    getFavorisPokes,
    deletePoke
}