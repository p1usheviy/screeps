var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleFixer = require('role.fixer');
var roleAttacker = require('role.attacker');

var cleaning = require('cleaning');
var spawning = require('spawning');
var towering = require('tower');
var get_store = require('storing');


module.exports.loop = function () {

    cleaning();
    spawning();
    towering();
    
    var sources = Game.rooms.W58S16.find(FIND_SOURCES); //console.log(sources.length);
    var constrs = Game.rooms.W58S16.find(FIND_CONSTRUCTION_SITES); //console.log(constrs.length);
    
    var store = get_store([STRUCTURE_EXTENSION, STRUCTURE_SPAWN, STRUCTURE_TOWER, STRUCTURE_CONTAINER]); //console.log(store);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            if (store) { roleHarvester.run(creep, sources[0], store); }
            else { roleFixer.run(creep, sources[0]); }
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep, sources[1]);
        }
        if(creep.memory.role == 'builder') {
            if (constrs.length > 0) { roleBuilder.run(creep); }
            else { roleUpgrader.run(creep, sources[0]); }
        }
        if(creep.memory.role == 'fixer') {
            roleFixer.run(creep, sources[0]);
        }
        if(creep.memory.role == 'attacker') {
            roleAttacker.run(creep, sources[0]);
        }
    }
    
    
}