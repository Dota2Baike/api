var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dotamechanism Model // Dota 机制
 * ==================
 * 跳到躲技能
 * 分身继承
 */

var Dotamechanism = new keystone.List('Dotamechanism', {
  map: { name: 'desc_zh' }, // 用于UI中选择列表中的value值
  autoKey: { path: 'slug', from: 'desc', unique: true }
});

Dotamechanism.add({
  desc: { type: Types.Text },
  desc_zh: { type: Types.Text },
  releated_item: {type: Types.List, fields: {
    item: {type: Types.Relationship, ref: 'Dotaitem'}
  }},
  releated_ability: {type: Types.List, fields: {
    ability: {type: Types.Relationship, ref: 'Dotaability'}
  }}
});


/**
 * 管理界面, 单个dotaversion就可以显示Dotaheros数据列表
 */

Dotamechanism.defaultColumns = 'desc_zh, desc, releated_item';
Dotamechanism.register();
