const WebSocket = require('ws');

const client = new WebSocket('ws://localhost:8080');

client.on('open', () => {
    console.log('Connected to the server');
    client.send('Hello, WebSocket!');
});

client.on('message', (message) => {
    console.log(`Received: ${message}`);
});

client.on('close', () => {
    console.log('Disconnected from the server');
});
