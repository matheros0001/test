## Installation
```txt
npm i alex-selfbot
```

## Delcaration
```js
const Alex = require('alex-selfbot');
```

## Fast Demo
```js
const Alex = require('alex-selfbot');
Alex.start({
    token: "false", // You must type account token here
    status: "idle", // You need to type account statues here if you don't need type "false"
    channel_id: "12345678", // You need to type voice channel id here if you don't need type "false"
    mute: "true", // you can add self mute if you don't need type "false"
    def: "true" // you can add self defend if you don't need type "false"
})
```

## Code Demo
```js
const Alex = require('alex-selfbot');
Alex.setStatus("idle");
Alex.joinVoice("12345678");
Alex.login(token);
```