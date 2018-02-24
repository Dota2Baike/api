var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dotahero Model
 * ==========
 */
var Dotahero = new keystone.List('Dotahero', {
	// 控制dotaheros admin页面，列表的主键。不加的话会显示id。
	// 也会显示在创建新的entity的modal中
  map: { name: 'lname_zh' }
});

Dotahero.add({
	lname_zh: { type: Types.Text},
	lname: { type: Types.Text},
	nick_names: { type: Types.TextArray },
	hero_id: { type: Types.Text, index: true, unique: true },
	last_version: { type: Types.Relationship, ref: 'Dotaversion', note: '上次更新版本'},
	hero_icon: {type: Types.CloudinaryImage},
	small_avatar: { type: Types.CloudinaryImage },
	large_avatar: { type: Types.CloudinaryImage},
	cover_img: { type: Types.CloudinaryImage },
  primary_attr: { type: Types.Select, options: 'strength, agility, intelligence' },
  // primary_attr_zh: { type: Types.Select, options: '力量, 敏捷, 智力' },
	attack_type: { type: Types.Select, options: 'ranged, melee'},
	// attack_typ_zh: { type: Types.Select, options: '远程, 近战'},
	bio_zh: {type: Types.Textarea, height: 200 },
	bio: {type: Types.Textarea, height: 200 },
	roles: {
		carry: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0 },
		durable: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0, note: '耐久' },
		support: { type: Types.Select,numeric: true, options:[0, 1, 2, 3], default: 0 },
		escape: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0 },
		nuker: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0, note: '高爆发' },
		pusher: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0, note: '推进' },
		disabler: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0, note: '控制' },
		intiator: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0, note: '先手' },
		jungler: { type: Types.Select,numeric: true, options: [0, 1, 2, 3], default: 0, note: '打野' },
	},
	legs: { type: Types.Number, format: '0.00%'},
	health: { type: Types.NumberArray },
	h_regen_amp: { type: Types.TextArray, note: '回血加成'},
	mana: { type: Types.NumberArray},
	m_regen_amp: { type: Types.TextArray, note: '回魔加成' },
	armor: { type: Types.TextArray},
	spell_dmg: { type: Types.TextArray, note: '技能伤害'},
	att_sec: { type: Types.TextArray, note: '攻击频率' },
	damage: { type: Types.TextArray },
	move_sp_amp: { type: Types.TextArray, note: '移速加成，敏捷英雄'},
	status_res: {type: Types.TextArray, note: '状态抗性，力量英雄'},
	magic_res: {type: Types.TextArray, note: '魔法抗性， 智力英雄'},
	base_health_regen: { type: Types.Number, note: '基础生命恢复' },
	base_mana_regen: { type: Types.Number, note: '基础魔法恢复' },
	movement_speed: { type: Types.Number, note: '移动速度' },
	turn_rate: { type: Types.Number, note: '转身速率'},
	version_range: { type: Types.NumberArray, note: '视野: 1800/800' },
	attack_range: { type: Types.Number, note: '攻击距离'},
	projectile_speed: { type: Types.Text },
	attac_animation: { type: Types.TextArray, note: '攻击动作: 0.3+0.6' },
	base_attack_time: { type: Types.Number, note: '基础攻击间隔' },
	magic_resistance: { type: Types.Number, note: '魔法抗性, 智力英雄无' },
	collision_size: { type: Types.Number, note: '碰撞体积' },
});


Dotahero.relationship({ ref: 'Dotaability', path: 'dotaabilities', refPath: 'hero_url' });
Dotahero.relationship({ ref: 'Dotatalent', path: 'dotatalents', refPath: 'hero_url' });

/**
 * Registration
 */
Dotahero.defaultColumns = 'lname_zh, lname, primary_attr, attack_type, hero_icon, small_avatar';
Dotahero.register();
