const server = require('./server')

const request = require('supertest')

describe('GET /', () => {

    it('it should return status 200', async () => {
        const response = await request(server).get('/')

        expect(response.status).toBe(200)
    })

    it('should return json', async () => {
        const response = await request(server).get('/')

        expect(response.type).toMatch(/json/i)
    })

    it('should return server is running', async () => {
        const response = await request(server).get('/')

        expect(response.body).toEqual({message: 'server is running'})
    })
})