var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dota 物品
 * ==================
 */

var Dotaitem = new keystone.List('Dotaitem', {
	map: { name: 'lname_zh' }, // 用于UI中选择列表中的value值
});

Dotaitem.add({
  // 这里把unique: true去掉，否则会造成以下错误
  // MongoError: E11000 duplicate key error index: storm-esports.dotaitems.$lname_en_1 dup key: { : null }
  item_id: {type: Types.Text, unique: true},
  lname: { type: Types.Text}, 
  lname_zh: { type: Types.Text},
  item_icon: { type: Types.CloudinaryImage, note: '物品icon'},
  active: {type: Types.Text, note: '主动技能'},
  active_zh: {type: Types.Text, note: '主动技能'},
  passive: {type: Types.Text, note: '被动'},
  passive_zh: {type: Types.Text, note: '被动'},
  disassemble: {type: Types.Boolean, note: '可拆分'},
  last_version: { type: Types.Relationship, ref: 'Dotaversion', note: '上次更新版本' },
  skills: {type: Types.List, fields: {
    name: {type: Types.Text, note: '技能'},
    name_zh: {type: Types.Text},
    cooldown_time: {type: Types.Text, note: '冷却时间'},
    cost_mana: {type: Types.Number, note: '消耗魔法'},
    damage: {type: Types.Select, options: 'magical, physical', note: '伤害类型'},
    affects: {type: Types.Select, options: 'enemies, self, allies', note: '影响目标'},
    ability: {type: Types.Select, options: 'No Target, Passive, Target Unit', note: '技能属性'},
    ability_zh: {type: Types.Select, options: '无目标, 被动, 单位目标'},
    desc: {type: Types.Markdown, height: 200},
    desc_zh: {type: Types.Markdown, height: 200},
    attribs: {type: Types.Markdown, height: 200},
    attribs_zh: {type: Types.Markdown, height: 200}
    // 前端会报错，且保存不了
    // attribs: {type: Types.List, fields: {
    //   key: {type: Types.Text}, 
    //   key_zh: {type: Types.Text}, 
    //   value: {type: Types.Text}
    // }, note: '物品属性'},
  }},
  bonus: {
    health: {type: Types.Text, note: '生命值'},
    mana: {type: Types.Text, note: '魔法'},
    strength: { type: Types.Text, note: '加力量' },
    agility: { type: Types.Text, note: '敏捷加成' },
    intelligence: { type: Types.Text, note: '智力加成' },
    att_speed: { type: Types.Text, note: '攻击速度' },
    mov_speed: {type: Types.Text, note: '移动速度'},
    att_damage: {type: Types.Text, note: '攻击力'}
  },

  additional_info: {type: Types.Markdown, height: 400, note: '额外信息'},
  additional_info_zh: {type: Types.Markdown, height: 400, note: '额外信息'},
  notes: {type: Types.Markdown, height: 400, notes: '附录'},
  notes_zh: {type: Types.Markdown,  height: 400,notes: '附录'},
  tips: {type: Types.Markdown,  height: 400, note: '小技巧'},
  tips_zh: {type: Types.Markdown, height: 400, note: '小技巧'},
  against_heros: {type: Types.List, fields: {
    hero: { type: Types.Relationship, ref: 'Dotahero' },
    note: { type: Types.Markdown },
    note_zh: { type: Types.Markdown }
  }, note: '克制英雄'},
  benefit_heros: {type: Types.List, fields: {
    hero: { type: Types.Relationship, ref: 'Dotahero' },
    note: { type: Types.Markdown },
    note_zh: { type: Types.Markdown }
  }, note: '有益英雄'},
});

Dotaitem.defaultColumns = 'lname_zh, lname';
Dotaitem.register();
