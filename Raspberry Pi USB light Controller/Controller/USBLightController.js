var serialport = require('serialport');
/*
var port = new serialport('/dev/ttyUSB0', {baudRate: 9600, dataBits: 8});

function signal_To_US(str)
{
    port.on('open', async function()
    {
        console.log('Port ouvert sur /dev/ttyAMA0 @ 9600 bds');
        try
        {
            port.write(hex_Command(str));            
        }
        catch(e)
        {
        console.log('Error: ' + e);
        }
    });
}
*/
function hex_Command(str) {
    return new Buffer.from(str, "hex")
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

function flashLishts(str_color)
{
    //signal_To_US(str_color);
    console.log(`The following light turns on: ${str_color}`);
}




module.exports.flashLishts = flashLishts;