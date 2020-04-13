const express = require('express');
const request = require('request');
var cors = require('cors')
const app = express();
app.use(cors())
const port = 5000;

app.get('/getWeather', (req, res) => {
    request(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=998e91a933ce60e317d2770555b8b051`,
        function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                res.send(parsedBody);
            }
        });
});

app.listen(port, () => console.log('Listening'));