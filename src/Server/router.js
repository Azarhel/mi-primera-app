function router(app) {
    app.get('/', (req, res) => {
        res.send('Hello, World!'); // Send a response back to the client
    });

    app.get('/api/v1/contacto', (req, res) => {
        res.send('Hello, World!'); // Send a response back to the client
    });
    return app;
}
module.exports = router;