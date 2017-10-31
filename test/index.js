const genSignedUrl = require('../')
const test = require('tap').test

test('Test from offical site', t => {
  t.plan(1)
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID'
  // const clientID = 'clientID'
  const privateKey = 'vNIXE0xscrmjlyV-12Nj_BvUPaw='
  const signedUrl = genSignedUrl(url, privateKey)

  t.same(
    'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID&signature=chaRF2hTJKOScPr-RQCEhZbSzIE=',
    signedUrl
  )
})

test('Test with clientID as paramter', t => {
  t.plan(1)
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=New+York'
  const clientID = 'clientID'
  const privateKey = 'vNIXE0xscrmjlyV-12Nj_BvUPaw='
  const signedUrl = genSignedUrl(url, privateKey, clientID)

  t.same(
    'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID&signature=chaRF2hTJKOScPr-RQCEhZbSzIE=',
    signedUrl
  )
})
