name
cname
pa 敏捷
attribs
    str
        b
        g
    int
        b
        g
    agi
        b
        g
    ms
    dmg
        min
        max
    armor
roles
dac 近战
monkey_king_boundless_strike
    ability: target_point
    affects: enemies
    damage: physical
    cooldown: 25
    magicneed: 100
    attribs: {
        cast_animation: 0.4+0.5

        cast_range: 1200

        effect_length: 1200

        effect_width: 150

        critial_damage: ['140%', '160%', '180%', '200%']

        stun_duration: [0.4, 0.8, 1.2, 1.6]
    }

    name: tree_dance
    ability: target unit
    affects: self/trees
    cooldown: 1.4
    magicneed: 0
    attribs: {
        cast_animation: 0.3+0

        cast_range: 1000

        damage_cooldown: 3

        day_tree_vision: 800

        nignt_tree_vision: 400

        unperch_stun_duration: 4
    }
