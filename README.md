REF: https://developers.google.com/maps/documentation/directions/get-api-key#digital-signature-premium

### Usage
```js
/** Sign url with clientId in url */
const sign = require('gme-signature')
const privateKey = 'vNIXE0xscrmjlyV-12Nj_BvUPaw=' // Example from the link
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID'
const signed = sign(url, privateKey)
console.log(signed) // 'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID&signature=chaRF2hTJKOScPr-RQCEhZbSzIE='

/** Sign url without clientId in url */
const sign = require('gme-signature')
const privateKey = 'vNIXE0xscrmjlyV-12Nj_BvUPaw=' // Example from the link
const clientId = 'clientID'
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=New+York'
const signed= sign(url, privateKey, clientId)
console.log(signed) // 'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID&signature=chaRF2hTJKOScPr-RQCEhZbSzIE='

/** Example with dereaction api */
const sign = require('gme-signature')
const privateKey = 'vNIXE0xscrmjlyV-12Nj_BvUPaw=' // Example from the link
const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=25.0626333,121.515451&destination=25.064742,121.516717&client=clientID'
const signed = sign(url, privateKey)
console.log(signed) // 'https://maps.googleapis.com/maps/api/directions/json?origin=25.0626333,121.515451&destination=25.064742,121.516717&client=clientID&signature=MR1Qc7fTFlRGF5KqKmZV05i95rg='
```

