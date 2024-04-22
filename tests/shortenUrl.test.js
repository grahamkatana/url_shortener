const { app, server } = require('../index');
const request = require('supertest');
// Unit testing for the URLs

describe("Shorten a given URL API", () => {
    // kill the server after tests are done
    afterAll(() => {
        server.close();
    })
    // test getting all urls
    it("GET /api/v1/shorten --> response object", async () => {
        const response = await request(app).get('/api/v1/shorten');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
    })
    // test creating a url
    it("POST /api/v1/shorten --> response object", async () => {
        const response = await request(app).post('/api/v1/shorten').send({
            "fullUrl": "https://www.google.com"
        });
        expect(response.status).toBe(201);
        expect(response.body).toBeInstanceOf(Object);
    })
    // test creating a url withourt the required body params
    it("POST /api/v1/shorten --> response object", async () => {
        const response = await request(app).post('/api/v1/shorten')
        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body.errors).toBeInstanceOf(Array);
    })
    // try an invalid short url
    it("GET/api/v1/shorten/:shortenedUrl --> response object", async () => {
        const response = await request(app).get('/api/v1/shorten/bx1')
        expect(response.status).toBe(404);
        expect(response.body).toBeInstanceOf(Object);

    })
    // redirect to a url
    it("GET/api/v1/shorten/:shortenedUrl --> response object", async () => {
        await request(app).get('/api/v1/shorten/Zj84uDnzv1V')

    })
})