const { app, server } = require('../index');
const request = require('supertest');

describe("Shorten a given URL API", () => {
    afterAll(() => {
        server.close();
    })
    it("GET /api/v1/shorten --> response object", async () => {
        const response = await request(app).get('/api/v1/shorten');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })
    it("POST /api/v1/shorten --> response object", async () => {
        const response = await request(app).post('/api/v1/shorten').send({
            "fullUrl": "https://www.google.com"
        });
        expect(response.status).toBe(201);
        expect(response.body).toBeInstanceOf(Object);
    })
    it("POST /api/v1/shorten --> response object", async () => {
        const response = await request(app).post('/api/v1/shorten')
        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.errors).toBeInstanceOf(Array);
    })
    it("GET/api/v1/shorten/:shortenedUrl --> response object", async () => {
        const response = await request(app).get('/api/v1/shorten/bx1')
        expect(response.status).toBe(404);
        expect(response.body).toBeInstanceOf(Object);


    })
    it("GET/api/v1/shorten/:shortenedUrl --> response object", async () => {
        await request(app).get('/api/v1/shorten/Zj84uDnzv')

    })
})