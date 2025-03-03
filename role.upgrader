var action = require('action');

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep, source) {

        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('harvest');
	    }
	    if(!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
	        creep.memory.upgrading = true;
	        creep.say('upgrade');
	    }

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) { action.moveTo(creep, creep.room.controller, '#6666ff'); }
        }
        else { if(creep.harvest(source) == ERR_NOT_IN_RANGE) { action.moveTo(creep, source, '#ffaa00'); } }
	}
};

module.exports = roleUpgrader;