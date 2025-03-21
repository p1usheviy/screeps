var action = require('action');
var get_store = require('storing');

var roleHarvester = {

    run: function(creep, source, store) {
        if(creep.memory.storing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.storing = false;
            creep.say('harvest');
	    }
	    if(!creep.memory.storing && creep.store.getFreeCapacity() == 0) {
	        creep.memory.storing = true;
	        creep.say('store');
	    }
        
        if(creep.memory.storing) {
            if(store) { if(creep.transfer(store, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) { action.moveTo(creep, store, '#ffffff'); } }
            else { creep.moveTo(Game.flags.Flag1); }
        }
	    else { if(creep.harvest(source) == ERR_NOT_IN_RANGE) { action.moveTo(creep, source, '#ffaa00'); } }
	}
};

module.exports = roleHarvester;