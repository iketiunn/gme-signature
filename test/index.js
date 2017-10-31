const genSignedUrl = require('../')
const test = require('tap').test

const privateKey = 'vNIXE0xscrmjlyV-12Nj_BvUPaw='
test('Test from offical site', t => {
  t.plan(1)
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID'
  // const clientID = 'clientID'
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
  const signedUrl = genSignedUrl(url, privateKey, clientID)

  t.same(
    'https://maps.googleapis.com/maps/api/geocode/json?address=New+York&client=clientID&signature=chaRF2hTJKOScPr-RQCEhZbSzIE=',
    signedUrl
  )
})

test('Deraction api', t => {
  t.plan(1)
  const url = 'https://maps.googleapis.com/maps/api/directions/json?origin=25.0626333,121.515451&destination=25.064742,121.516717&client=clientID'
  const signedUrl = genSignedUrl(url, privateKey)

  t.same(
    'https://maps.googleapis.com/maps/api/directions/json?origin=25.0626333,121.515451&destination=25.064742,121.516717&client=clientID&signature=MR1Qc7fTFlRGF5KqKmZV05i95rg=',
    signedUrl
  )
})
