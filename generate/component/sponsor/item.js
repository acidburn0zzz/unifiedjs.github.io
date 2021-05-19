'use strict'

var h = require('hastscript')
var ocBadge = require('../../atom/micro/oc.js')
var ghBadge = require('../../atom/micro/gh.js')
var twitterBadge = require('../../atom/micro/tw.js')
var urlLine = require('../../atom/micro/url.js')
var card = require('../../atom/card/item.js')

module.exports = item

var base = 'http://opencollective.com/'

function item(d) {
  var {name, description, image, oc, github, twitter, url, gold} = d
  var className = gold ? ['gold'] : []
  var footer = [ocBadge(oc)]

  if (github) {
    footer.push(ghBadge(github))
  }

  if (twitter) {
    footer.push(twitterBadge(twitter))
  }

  if (url) {
    footer.push(urlLine(url, {rel: ['sponsored', 'nofollow']}))
  }

  return card(
    base + oc,
    h('.column', [
      h('h3.row', [
        h('.thumbnail', {
          className,
          role: 'presentation',
          style: 'background-image:url(' + image + ')'
        }),
        h('span.ellipsis', name)
      ]),
      description ? h('p.double-ellipsis', description) : []
    ]),
    footer
  )
}
