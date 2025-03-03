const prios = {
        'spawn': 5,
        'extension': 6,
        'tower': 3,
        'container': -1
    };

function get_store(list) {
    
    var stors = _.filter(Game.structures, (struct) => list.includes(struct.structureType) && struct.store.getFreeCapacity(RESOURCE_ENERGY) > 0); //console.log(stors);
    if (stors.length > 0) {
        stors.sort((a,b) =>
            {
                //console.log(a.structureType);
                let prio_a = 0;
                if (prios.hasOwnProperty(a.structureType)) { prio_a = prios[a.structureType]; }
                let prio_b = 0;
                if (prios.hasOwnProperty(b.structureType)) { prio_b = prios[b.structureType]; }
                return prio_b - prio_a;
            }
        ); 
        
        return stors[0];
    }
    else { return null; }
}

module.exports = get_store;