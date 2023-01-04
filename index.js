const statik = require('node-static');

const file = new statik.Server('./dist');



require('http').createServer(function (request, response) {
    console.log('yoo');
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);