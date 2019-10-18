
const db = require('../../data/dbConfig')

const playerModel = require('../players/players-model')

describe('players model', () => {
	beforeEach(async () => {
		await db('players').truncate();
	});



	describe('add function', () => {
		it('should add player to database', async () => {
			const initial = await db('players')
			expect(initial).toHaveLength(0)
	
			const player = await playerModel.add({name: 'matthew', sport: 'coding'})
	
			const players = await db('players')
			expect(players).toHaveLength(1)
		})
	
		it('should return the added play', async () => {
			const player = await playerModel.add({name: 'matthew', sport: 'coding'})
			expect(player.name).toBe('matthew')
			expect(player.sport).toBe('coding')
		})
	})

	describe('remove function', () => {
		it('should remove player from db', async () => {
			const player = await playerModel.add({name: 'matthew', sport: 'coding'})

			const initial = await db('players')
			expect(initial).toHaveLength(1)
	
			const deletedPlayer = await playerModel.remove(player.id)
	
			const players = await db('players')
			expect(players).toHaveLength(0)
		})

		it('should return removed player', async () => {
			const player = await playerModel.add({name: 'matthew', sport: 'coding'})

			const initial = await db('players')
			expect(initial).toHaveLength(1)
	
			const deletedPlayer = await playerModel.remove(player.id)
	
			expect(deletedPlayer.name).toBe('matthew')
		})

		it('should return message: "could not delete player" if id is invalid', async () => {
			const player = await playerModel.add({name: 'matthew', sport: 'coding'})

			const initial = await db('players')
			expect(initial).toHaveLength(1)
	
			const deletedPlayer = await playerModel.remove(4)
	
			expect(deletedPlayer.message).toBe('could not delete player')
		})
	})
})