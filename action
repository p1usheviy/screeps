var action = {

    moveTo: function(creep, target, color) {
        if (creep.ticksToLive < 40 && creep.store[RESOURCE_ENERGY] == 0) {
            creep.suicide();
            console.log("died empty");
        }
        let res = creep.moveTo(target, {visualizePathStyle: {stroke: color}});
            if (res == ERR_NO_PATH) {
                let r = Math.floor(Math.random() * 8) + 1;
                //console.log('random ' + r);
                creep.move(r);
            }
	}
};

module.exports = action;