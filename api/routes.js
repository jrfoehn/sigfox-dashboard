var appRouter = function (app) {
    app.post("/api/device", function(req, res) {
        let axios = require('axios');
        let base64 = require('base-64');
        let url = "https://backend.sigfox.com/api/devices/" + req.body.device_id + "/messages";
        let apiHeaders = {
            headers: {
                Authorization: "Basic " + base64.encode(req.body.api_usr + ":" + req.body.api_pwd),
            }
        };
        axios.get(url, apiHeaders)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(e => {
                console.error("error " + e);
                console.log(axios.defaults.baseURL, url);
                res.status(500).send(e);
            });
        // res.status(200).send({message: 'ok'})
    });
};

module.exports = appRouter;
