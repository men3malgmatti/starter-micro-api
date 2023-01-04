const statik = require('node-static');

const file = new statik.Server('./dist',{gzip: true});



require('http').createServer(function (request, response) {
    console.log('yoo');
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(process.env.PORT || 3000);