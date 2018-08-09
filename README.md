# ionic3 xmpp  strophe.js
This is a XMPP chat Client build using [Strophe.js](http://strophe.im/strophejs/) and Ionic3. This is an implementation to Multi-user chat.

## Soruce code clone
git clone https://github.com/vishalrakholiya/ionic3-xmpp-strophe-js

## Installation
```shell
$ npm install -g cordova ionic
$ cd xmpp-ionic3-master
$ npm install
```

## Configuration
* /src/app/xmpp.service.ts

```shell
private BOSH_SERVICE: string = "http://localhost:7070/http-bind/";  // Your bosh service
private CONFERENCE_SERVICE: string = "conference.localhost";        // Your conference service
```

## Development server
```shell
$ ionic serve
```
