const url = require('url')
const crypto = require('crypto')
const qs = require('querystring')

function decodeB64UrlSafe (v) {
  return Buffer.from(v.replace(/-/g, '+').replace(/_/g, '/'), 'base64')
}

function encodeB64UrlSafe (v) {
  return Buffer.from(v)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

/**
 * Sign url based on given url and private key
 *
 * @param {string} urlToSign - Target url to sign, contains your query, if not provide client, pass it into paramters
 * @param {string} privateKey - Base64 url safe encoded string
 * @param {string=} client - clientID
 */
function signUrl (urlToSign, privateKey, clientID) {
  if (privateKey === undefined) throw new Error('Miss privateKey!')
  const { protocol, hostname, pathname, query } = url.parse(urlToSign)
  const q = qs.parse(query)
  if (clientID !== undefined) q.client = clientID
  if (q.client === undefined) throw new Error('Miss clientID!')

  const decodedKey = decodeB64UrlSafe(privateKey)
  const portionToSign = pathname + '?' + qs.stringify(q).replace(/%20/g, '+').replace(/%2C/g, ',')
  const signature = crypto.createHmac('sha1', decodedKey)
    .update(portionToSign)
    .digest()
  const encodedSignature = encodeB64UrlSafe(signature)
  const sigUrl = portionToSign + '&signature=' + encodedSignature

  return `${protocol}//${hostname}${sigUrl}`
}

module.exports = signUrl
