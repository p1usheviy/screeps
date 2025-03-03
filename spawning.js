const counts = [
    ['harvester', 1],
    ['fixer', 0],
    ['builder', 2],
    ['upgrader', 2],
    ['attacker', 0]
];

const parts = [WORK,WORK,CARRY,CARRY,MOVE,MOVE];
const parts_min = [WORK,CARRY,MOVE];
const parts_attacker = [ATTACK,ATTACK,MOVE,MOVE];


function spawning() {
    
    if (Game.spawns['Spawn1'].spawning == null) {
        for (const [pos, [role, count]] of Object.entries(counts)) {
            let creeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);  
            if(creeps.length < count) {
                var newName = role + Game.time;
                if (role == 'attacker') {
                    Game.spawns['Spawn1'].spawnCreep(parts_attacker, newName, {memory: {role: role}});
                }
                else {
                    console.log('Spawning new  ' + newName);
                    let res = Game.spawns['Spawn1'].spawnCreep(parts, newName, {memory: {role: role}});
                    if (res == ERR_NOT_ENOUGH_ENERGY && role == 'harvester') { Game.spawns['Spawn1'].spawnCreep(parts_min, newName, {memory: {role: role}}); console.log('Spawning min new  ' + newName); }
                }
            }
        }
    }
    else { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(spawningCreep.memory.role, Game.spawns['Spawn1'].pos.x + 1, Game.spawns['Spawn1'].pos.y, {align: 'left', opacity: 0.8});
    }
}

module.exports = spawning;