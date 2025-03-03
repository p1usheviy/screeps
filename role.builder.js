var action = require('action');

var roleBuilder = {

    run: function(creep) {

	    if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('harvest');
	    }
	    if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
	        creep.memory.building = true;
	        creep.say('build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) { if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) { action.moveTo(creep, targets[0], '#cc44ff'); } }
            else { creep.moveTo(Game.flags.Flag1); }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
	        source = sources[0];
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) { action.moveTo(creep, source, '#ffaa00'); }
	    }
	}
};

module.exports = roleBuilder;