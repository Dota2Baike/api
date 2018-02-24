'use strict'
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/dota2baike')

const Schema = mongoose.Schema;
const Types = Schema.Types

let ability_zh = require('./ability-zh.json')
let ability_en = require('./ability-en.json')

const DotatalentSchema = new Schema({
  talent_id: Types.String,
  bonus: Types.String,
  bonus_zh: Types.String,
  hero_id: Types.String
})

let DotatalentModel = mongoose.model('Dotatalent', DotatalentSchema)

let count = 0

for (let key in ability_en.abilitydata) {
  for (let kee in ability_zh.abilitydata) {
    if (key.indexOf('special') == 0 && key === kee) {
      let abi_en = ability_en.abilitydata[key]
      let abi_zh = ability_zh.abilitydata[key]
      let DotatalentEntity = new DotatalentModel({
        talent_id: key,
        bonus: abi_en.dname,
        bonus_zh: abi_zh.dname,
        desc: abi_en.desc,
        hero_id: abi_en.hurl
      })

      DotatalentEntity.save(function () {
        count += 1
        console.log('保存第' + count + '个天赋, ' + abi_zh.dname + ' 成功!')
      })
    }
  }
}