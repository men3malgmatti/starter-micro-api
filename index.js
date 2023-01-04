const statik = require('node-static');

const file = new statik.Server('./dist',{gzip: true});



require('http').createServer(function (request, response) {
    
    request.addListener('end', function () {
        //
        console.log('Serve files!');
        //
        file.serve(request, response);
    }).resume();
}).listen(process.env.PORT || 3000);