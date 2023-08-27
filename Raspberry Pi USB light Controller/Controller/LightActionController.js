const Lights_Profile = require('../LightProfiles/Models/light_Profile.models');
const app = require('../routers');
const USB_Lights = require('./USBLightController');
//const path = require('path');

let _keepOnLights = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function RedLight()
{
    USB_Lights.flashLishts(Lights_Profile.USB_Lights.hex_red_on);
    await sleep(1000);
    USB_Lights.flashLishts(Lights_Profile.USB_Lights.hex_red_off); 
    await sleep(1000);
}

async function RedLight_Service()
{
    while(_keepOnLights)
    {
        //console.log(Lights_Profile.USB_Lights.hex_red_on);        
        await RedLight();
    }

}

const Light_On = function (req, res, next) 
//const Light_On = function () 
{
    const msg = req.body;
    let msg_Detial = msg.color;

    console.log(`Light On function is trying to start! The received colour is ${msg_Detial}`);
    _keepOnLights = true;
    RedLight_Service();
    //res.sendFile(__dirname +"/alert.html");
}

const Light_Off = async function(req, res, next) 
//const Light_Off = async function() 
{
    _keepOnLights = false;
    console.log('Light On function is trying to stop!');
}

module.exports.Light_On = Light_On;
module.exports.Light_Off = Light_Off;
