import app from './src';

async function start() {
    const port = process.env.PORT || 8080;

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}

start();
