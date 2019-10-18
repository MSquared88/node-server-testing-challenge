const db = require('../../data/dbConfig')

module.exports = {
    add, 
    remove,
    get, 
}

function get () {
    db('players')
}

async function add (player) {
   const [id] = await db('players').insert(player)

   return db('players').where({id}).first()
}

async function remove(id) {
    const player = await db('players').where({id}).first()

    await db('players').where({id}).delete()

    return player
}

