import dllRoutes from './api/v1/routes/dll.route'

{
    app.get('/', (req, res) => {
        res.send('Hello, World!'); // Send a response back to the client
    });
    
    return app;
}