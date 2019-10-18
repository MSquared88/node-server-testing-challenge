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

    const response = await db('players').where({id}).delete()
    if(!!response){
        return player
    }
    else {
        return {message: 'could not delete player'}
    }
}

