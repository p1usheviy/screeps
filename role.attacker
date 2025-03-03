var action = require('action');

var roleAttacker = {

    run: function(creep, source) {
        
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) { creep.attack(closestHostile); }
        else { action.moveTo(creep, Game.flags.FlagA, '#ff0000'); }
	}
};

module.exports = roleAttacker;