import request from 'supertest';
import app from './api';

test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: 'Hi'});
})