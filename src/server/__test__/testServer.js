const request = require('supertest');
const express = require('express');
import 'babel-polyfill'

const app = require('../index')

describe('POST /sentiment', function () {
    it('json respond', async () => {
        const respone = await request(app)
            .post('/sentiment')
            .send({ data: 'https://en.wikipedia.org/wiki/Network' })
        expect(respone.statusCode).toEqual(200)
        expect(respone.body.text).toEqual('Sections')
    });
});