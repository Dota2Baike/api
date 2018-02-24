'use strict'
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/dota2baike')

const Schema = mongoose.Schema;
const Types = Schema.Types

let ability_zh = require('./ability-zh.json')
let ability_en = require('./ability-en.json')

const DotaabilitySchema = new Schema({
  ability_id: Types.String,
  lname: Types.String,
  lname_zh: Types.String,
  desc: Types.String,
  desc_zh: Types.String,
  notes: Types.String,
  notes_zh: Types.String,
  backdrop: Types.String,
  backdrop_zh: Types.String,
  hero_id: Types.String
})

let DotaabilityModel = mongoose.model('Dotaability', DotaabilitySchema)

let count = 0

for (let key in ability_en.abilitydata) {
  for (let kee in ability_zh.abilitydata) {
    if (key.indexOf('special_') == 0) {
     break; 
    }
    if (key === kee) {
      let abi_en = ability_en.abilitydata[key]
      let abi_zh = ability_zh.abilitydata[key]

      let DotaabilityEntity = new DotaabilityModel({
        ability_id: key,
        lname: abi_en.dname,
        lname_zh: abi_zh.dname,
        desc: abi_en.desc,
        desc_zh: abi_zh.desc,
        notes: abi_en.notes,
        notes_zh: abi_zh.notes,
        backdrop: abi_en.lore,
        backdrop_zh: abi_zh.lore,
        hero_id: abi_en.hurl
      })

      DotaabilityEntity.save(function () {
        count += 1
        console.log('保存第' + count + '个技能, ' + abi_zh.dname + ' 成功!')
      })
    }
  }
}