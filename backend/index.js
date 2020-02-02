const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/:endpoint?', (req, res) => {
    const endpoint = req.params.endpoint ? req.params.endpoint : 'random_ten';
    request(
        { url: `https://joke-api-strict-cors.appspot.com/${endpoint}` }, 
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: (error && error.message) ? error.message : 'Something went wrong' });
            }

            res.json(JSON.parse(body));
        }
    )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));