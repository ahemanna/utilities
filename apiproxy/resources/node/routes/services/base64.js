exports.encode = function(req, res) {
    var asciiStr = req.rawBody;
    console.log("Data - ", asciiStr);
    var b64 = (new Buffer(asciiStr)).toString("base64");
    console.log("Base64 encoded data - ", b64);
    res.send(b64);
}

exports.decode = function(req, res) {
    var b64 = req.rawBody;
    console.log("Encoded data - ", b64);
    var asciiStr = new Buffer(b64, "base64");
    console.log("Data - ", asciiStr);
    res.send(asciiStr);
}
