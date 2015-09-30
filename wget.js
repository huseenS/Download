var http = require('http');
var fs = require('fs');
var filename = process.argv[2];

//did user type filename
if (process.argv.length < 3) {
    console.log("Usage: Need filename");
    process.exit(1);
}


function downloadFile(url, dest, callback) {

    var file = fs.createWriteStream(dest);

    var request = http.get(url, function(response) {
        console.log("response??? ");
        file.on('finish', function() {
            console.log("Finished writing!");
        });
        response.pipe(file);
    });
    request.on('error', function(err) {
        console.log("Error!!!", err);
    });

}



/*try {
    var fileBuffer = fs.readFileSync(filename);
    var contents = fileBuffer.toString();
    var contentLines = contents.split('\n');
    var nameArray = [];
    var urlArray = [];

    for (var i = 0; i < contentLines.length; i++) {
        var lines = contentLines[i];
        var linesSplit = lines.split(" ");
        nameArray.push(linesSplit[0]);
        urlArray.push(linesSplit[1]);
        downloadFile(urlArray[i], namesArray[i], null);
    }
    console.log(urlArray, nameArray);
} catch (exp) {
    console.log("failed to read file", filename);
    process.exit(2);
} 
*/
                                           