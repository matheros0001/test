const Alex = require('alex-selfbot');
// you can online more than 100 account in one host
const { start } = Alex;

start({
    token: "OTg5ODYxNTk5MzI4MjM1NTkx.G51pF0.Ooe77e7ilUa1gOtET-QVaoztcH_6LUtE0H_fpU", // You must type account token here
    status: "idle", // You need to type account statues here if you don't need type "false"
    channel_id: "975414323029610517", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "true" // you can add self defend if you don't need type "false"
});

start({
    token: "OTg5MTE1NjkxNTY1MjExNjg4.GDtczG.Ts4pAjKRUJ9qJe1Cv3sog7nYP4DGYC5E3MBUOs", // You must type account token here
    status: "dnd", // You need to type account statues here if you don't need type "false"
    channel_id: "988685516142678046", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "false" // you can add self defend if you don't need type "false"
});
