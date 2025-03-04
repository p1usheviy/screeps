var action = require('action');

var roleAttacker = {

    run: function(creep, source) {
        
        var cont = creep.room.controller;
        if (cont.my) { action.moveTo(creep, Game.flags.FlagA, '#ff0000'); }
        else { if(creep.reserveController(cont) == ERR_NOT_IN_RANGE) { action.moveTo(creep, cont, '#ff0000'); } }
        return;
        
        var closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) { creep.attack(closestHostile); }
        else { action.moveTo(creep, Game.flags.FlagA, '#ff0000'); }
        
	}
};

module.exports = roleAttacker;