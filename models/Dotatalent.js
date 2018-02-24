var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dotatalent Model
 * ==================
 */

var Dotatalent = new keystone.List('Dotatalent', {
	map: { name: 'bonus_zh' }, // 用于UI中选择列表中的value值, 也用于详情页的h1标题
});

Dotatalent.add({
  talent_id: { type: Types.Text },
	location: { type: Types.Select, options: 'left, right' },
  lvl: { type: Types.Select, options: '10, 15, 20, 25' },
  bonus: { type: Types.Text },
  bonus_zh: { type: Types.Text, initial: true },
  hero_url: { type: Types.Relationship, ref: 'Dotahero' },
  hero_id: {type: Types.Text},
  affect: { type: Types.Relationship, ref: 'Dotaability', note: '影响技能' }
});


/**
 * 管理界面, 单个Dotatalent就可以显示Dotaheros数据列表
 */

Dotatalent.defaultColumns = 'bonus_zh, location, lvl';
Dotatalent.register();
