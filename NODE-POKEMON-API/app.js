const express = require('express')
const pokemons = require('../mock-pokemon')

const app = express()
const port = 3000

app.get('/', (req,res) => res.send(`Hello fils !`))
// ADD PREMIER ROUTE 
app.get('/api/pokemons/:id/', (req,res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id ===id )
    res.send(`Pokemon name :${pokemon.name}`)
})

app.listen(port, () => console.log(`App is starting to : http://localhost:${port}`))