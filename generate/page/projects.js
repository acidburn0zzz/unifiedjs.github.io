'use strict'

var h = require('hastscript')
var breadcrumbs = require('../molecule/breadcrumbs.js')
var list = require('../component/project/list.js')
var sort = require('../component/project/helper-sort.js')
var page = require('./page.js')

module.exports = projects

function projects(data) {
  return page(h('.row-l.column-l', h('h2', breadcrumbs('/explore/project/'))), [
    h('.content', h('h3', 'All projects')),
    list(data, sort(data, Object.keys(data.projectByRepo)))
  ])
}
