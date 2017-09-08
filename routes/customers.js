module.exports = (server) => {
    server.get('/customers', (req, res) => {
        res.send({ "kundenr": 52154, "navn": "Ginger Emiel" });
    });
};