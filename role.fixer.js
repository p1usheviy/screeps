var action = require('action');

var roleFixer = {

    /** @param {Creep} creep **/
    run: function(creep, source) {
        var target = 0;
	    if(creep.memory.fixing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.fixing = false;
            creep.say('harvest');
	    }
	    if(!creep.memory.fixing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.fixing = true;
	        creep.say('fix');
	    }

	    if(creep.memory.fixing) {
	        var targets = creep.room.find(FIND_STRUCTURES, 
	            { filter: (structure) => 
	                structure.hits < structure.hitsMax / 1.1 &&
	                structure.structureType != STRUCTURE_WALL
	            }
	        );
	        //console.log(targets);
	        if (targets.length > 0) {
    	        targets.sort((a,b) =>
    	            {
                        if (a.structureType == STRUCTURE_ROAD && b.structureType != STRUCTURE_ROAD) { return 1; }
                        if (a.structureType != STRUCTURE_ROAD && b.structureType == STRUCTURE_ROAD) { return -1; }
                        return a.hits / a.hitsMax - b.hits / b.hitsMax;
                    }
                );
                target = targets[0];
	        }
	        else { target = 0; }
            if (target != 0) {
                if(creep.repair(target) == ERR_NOT_IN_RANGE) { action.moveTo(creep, target, '#00ff00'); }
            }
            else { creep.moveTo(Game.flags.Flag1); }
	    }
	    else {
	        const containers = creep.room.find(FIND_STRUCTURES, {filter: (s) => (s.structureType == STRUCTURE_CONTAINER && s.store.energy >= 50)}); 
	        if (containers.length > 10) {
                if (creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) { action.moveTo(creep, containers[0], '#ffaa00'); }
	        }
            else {
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) { action.moveTo(creep, source, '#ffaa00'); }
            }
	    }
	}
};

module.exports = roleFixer;