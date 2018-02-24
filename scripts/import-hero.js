'use strict'
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/dota2baike')

const Schema = mongoose.Schema;
const Types = Schema.Types

const dotaheros_zh = require('./hero-zh.json')
const dotaheros = require('./hero-en.json')

const DotaheroSchema = new Schema({
  hero_id: Types.String,
  lname_zh: Types.String,
  lname: Types.String,
  attack_type: Types.String,
  bio_zh: Types.String,
  bio: Types.String,
  roles: Types.Mixed
})

let DotaheroModel = mongoose.model('Dotahero', DotaheroSchema)

let count = 0

for (let key in dotaheros) {
  for (let kee in dotaheros_zh) {
    if (key === kee) {
      let lname_zh = dotaheros_zh[kee].name
      let rolesObj = {}
      for (let i = 0; i < dotaheros[key].roles.length; i++) {
        let lowerKey = dotaheros[key].roles[i].toLowerCase()
        rolesObj[lowerKey] = 1
      }

      let dotaheroEntity = new DotaheroModel({
        hero_id: key,
        lname_zh: dotaheros_zh[kee].name,
        lname: dotaheros[key].name,
        bio_zh: dotaheros_zh[key].bio,
        bio: dotaheros[key].bio,
        attack_type: dotaheros[key].atk.toLowerCase(),
        roles: rolesObj 
      })

      dotaheroEntity.save(function () {
        count += 1
        console.log('保存第' + count + '个英雄, ' + lname_zh + ' 成功!')
      })
    }
  }
}