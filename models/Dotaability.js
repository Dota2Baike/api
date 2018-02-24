var keystone = require('keystone');
var Types = keystone.Field.Types;

var Dotaability = new keystone.List('Dotaability', {
  map: { name: 'lname_zh' }
});

Dotaability.add({
  hero_url: {type: Types.Relationship, ref: 'Dotahero'},
  hero_id: {type: Types.Text},
  sequence: {type: Types.Number, note: '第几个技能'},
  ability_id: { type: Types.Text, unique: true },
  lname: {type: Types.Text, unique: true},
  lname_zh: {type: Types.Text, unique: true, initial: true},
  abi_img: {type: Types.CloudinaryImage},
  ability: {type: Types.TextArray, note: '技能属性: aura, no_target, passive, target_point, target_unit, channeled'},
  // ability_zh: {type: Types.TextArray, note: '技能属性: 无目标, 被动, 单位目标, 持续施法'},
  peculiarity: {type: Types.List, fields: {
    is_effective: { type: Types.Boolean },
    mechanism: { type: Types.Relationship, ref: 'Dotamechanism', note: '相关Dota机制' }
  },  note: '技能特性'},
  affects: {type: Types.TextArray, note: '影响目标: enemies, self, allies, enemy_heroes, trees, allied_heroes'},
  damage: {type: Types.TextArray, note: '伤害类型: magical, physical, pure'},
  attribs: {type: Types.List, fields: {
    key_zh: {type: Types.Text}, 
    key: {type: Types.Text}, 
    value: {type: Types.Text}
  }, note: '技能属性'},
  cooldown: {type: Types.Text, note: '冷却时间'},
  mana: { type: Types.Text, note: '消耗魔法' },
  aghanim: { type: Types.Text, note: '阿哈利姆神帐效果' },
  aghanim_zh: { type: Types.Text, note: '阿哈利姆神帐效果' },
  desc: {type: Types.Textarea, height: 200},
  desc_zh: {type: Types.Textarea, height: 200, note: '技能描述'},
  backdrop: {type: Types.Textarea, height: 200},
  backdrop_zh: {type: Types.Textarea, height: 200, note: '技能背景'},
  notes: {type: Types.Markdown, height: 500},
  notes_zh: {type: Types.Markdown, height: 500},
})

Dotaability.defaultColumns = 'lname_zh, hero_id, abi_img';
Dotaability.register()