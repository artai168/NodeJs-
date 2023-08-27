const index = function(req, res, next) {
    //console.log('/');

    const msg = req.body;
    let msg_Detial = msg.description;
    // Output the book to the console for debugging
    //console.log(msg);
    //books.push(book);
    console.log(msg_Detial);
    res.send('Your message had been recorded');

};

const lightProfile = function(req, res, next) {
    //console.log('/');

    const msg = req.body;
    let msg_Detial = msg.description;
    // Output the book to the console for debugging
    //console.log(msg);
    //books.push(book);
    console.log(msg_Detial);
    res.send('Your message had been recorded');

};

module.exports.index = index;