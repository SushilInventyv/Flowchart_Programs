import { request } from 'http2';
function displayData() {

    // Replace 'your-http2-endpoint.com' and '/path' with your specific endpoint and path
    const options = {
        hostname: "http://localhost:3000/products",
        // path: '/mobiles',
        method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
    };

    const req = request(options, (res) => {
        res.on('data', (chunk) => {
            console.log(`Received chunk of data: ${chunk}`);
            // Process received data here
        });

        res.on('end', () => {
            console.log('No more data received');
            // Do something after all data has been received
        });
    });

    req.on('error', (e) => {
        console.error(`Request error: ${e}`);
    });

    // Send the request
    req.end();
}

displayData();