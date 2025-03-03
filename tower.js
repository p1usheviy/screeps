
function towering() {
    
    var towers = _.filter(Game.structures, (struct) => struct.structureType == STRUCTURE_TOWER);
    for(var num in towers) {
        let tower = towers[num];
        //console.log(tower);
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) { tower.attack(closestHostile);  return; }
        
        if (tower.store[RESOURCE_ENERGY] > 800) {
            var closestDamagedCreep = tower.pos.findClosestByRange(FIND_MY_CREEPS, { filter: (creep) => creep.hits < creep.hitsMax / 2 });
            if(closestDamagedCreep) { tower.heal(closestDamagedCreep); return; }
            
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, { filter: (structure) => structure.hits < structure.hitsMax / 1.3 });
            if(closestDamagedStructure) { tower.repair(closestDamagedStructure); }
        }
    }
}

module.exports = towering;