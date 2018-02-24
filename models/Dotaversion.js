var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dotaversion Model
 * ==================
 */

var Dotaversion = new keystone.List('Dotaversion', {
	map: { name: 'version' }, // 用于UI中选择列表中的value值
});

Dotaversion.add({
	version: { type: Types.Text, required: true, initial: true, index: true },
	release: { type: Types.Date }
});


/**
 * 管理界面, 单个dotaversion就可以显示Dotaheros数据列表
 */
Dotaversion.relationship({ ref: 'Dotahero', path: 'dotaheros', refPath: 'last_version' });

Dotaversion.defaultColumns = 'version, release';
Dotaversion.register();
