const HelloController = (app) => {
    app.get('/hello', (req, res) => {res.send('Mic testing 1 2 3...')})

    app.get('/', (req, res) => {res.send('Health check 200')})
}

export default HelloController;

