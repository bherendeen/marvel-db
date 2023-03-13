const request = require('supertest');
const express = require("express");
const router = require( '../routes/characterRoutes');



// TESTS FOR CHARACTER ROUTE ===================================================================================================================================

const app = new express();
app.use('/', router);

describe('Character Routes', function () {

  // GET ALL CHARACTERS
  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });

});