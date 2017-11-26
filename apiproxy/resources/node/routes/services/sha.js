var crypto = require("crypto");

exports.sha256 = function(req, res) {
    var plainStr = req.rawBody;
    console.log("Data - ", plainStr);
    var hashStr = crypto.createHash("sha256").update(plainStr).digest("hex");
    console.log("SHA256 hashed - ", hashStr);
    res.send(hashStr);
}

exports.sha512 = function(req, res) {
    var plainStr = req.rawBody;
    console.log("Data - ", plainStr);
    var hashStr = crypto.createHash("sha512").update(plainStr).digest("hex");
    console.log("SHA512 hashed - ", hashStr);
    res.send(hashStr);
}
