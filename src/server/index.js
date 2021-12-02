const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const axios = require('axios');


const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())


app.get('/', function (reqeust, response) {
    response.sendFile('dist/index.html')
})

app.post('/sentiment', (reqeust, resp) => {
    console.log(reqeust.body);
    const userUrl = reqeust.body.data

    axios(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${userUrl}`)
        .then((response) => {
            const result = response.data
            resp.send({
                text: result.sentence_list[0].text,
                score_tag: result.score_tag,
                agreement: result.agreement,
                subjectivity: result.subjectivity,
                confidence: result.confidence,
                irony: result.irony
            })
        })
        .catch(error => console.log(error))
})

app.get('/test', function (reqeust, response) {
    console.log(1)
    response.send(mockAPIResponse)
})

app.listen(8081, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port 8081!`)
})

module.exports = app
