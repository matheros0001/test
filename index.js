const Alex = require('alex-selfbot');
// you can online more than 100 account in one host
const { start } = Alex;

start({
    token: "OTg1NTIwODc5OTcyNzgyMTAw.GQ7_3W.S8F3aM9zjGIwkdew5iY_1dGYOIT45kCDYKCLzM", // You must type account token here
    status: "idle", // You need to type account statues here if you don't need type "false"
    channel_id: "975414323029610517", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "false" // you can add self defend if you don't need type "false"
});

start({
    token: "ODUzMjcwMzI0MTc4NDUyNTAw.GBoKxH.J1BjK2Dc30FjPAQhNORtYn8-USaRGWCTd6wn6Q", // You must type account token here
    status: "dnd", // You need to type account statues here if you don't need type "false"
    channel_id: "975414323029610517", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "true" // you can add self defend if you don't need type "false"
});

start({
    token: "ODUyOTQ0OTM3NTQ0NTgxMTcx.G4X4yO.51BHGDEPa6iH_F78jGLyqdyhbzm4O3zPqfBFeI", // You must type account token here
    status: "dnd", // You need to type account statues here if you don't need type "false"
    channel_id: "992156379458576404", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "true" // you can add self defend if you don't need type "false"
});
