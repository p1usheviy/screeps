const counts = [
    ['harvester', 2],
    ['fixer', 0],
    ['builder', 3],
    ['upgrader', 2],
    ['attacker', 0]
];

const parts = [WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE];
const parts_min = [WORK,CARRY,MOVE];
const parts_attacker = [CLAIM,MOVE];


function spawning(spawn) {
    
    if (spawn.spawning == null) {
        for (const [pos, [role, count]] of Object.entries(counts)) {
            let creeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);  
            if(creeps.length < count) {
                var newName = role + Game.time;
                if (role == 'attacker') {
                    spawn.spawnCreep(parts_attacker, newName, {memory: {role: role}});
                }
                else {
                    console.log('Spawning new  ' + newName);
                    let res = spawn.spawnCreep(parts, newName, {memory: {role: role}});
                    if (res == ERR_NOT_ENOUGH_ENERGY && role == 'harvester') { spawn.spawnCreep(parts_min, newName, {memory: {role: role}}); console.log('Spawning min new  ' + newName); }
                }
            }
        }
        
        let cr = spawn.pos.findInRange(FIND_MY_CREEPS, 1);
        console.log(cr);
    }
    else { 
        var spawningCreep = Game.creeps[spawn.spawning.name];
        spawn.room.visual.text(spawningCreep.memory.role, spawn.pos.x + 1, spawn.pos.y, {align: 'left', opacity: 0.8});
    }
}

module.exports = spawning;