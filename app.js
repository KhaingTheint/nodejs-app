// path
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//OS
const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//File System
const fs=require('fs');
// const files=fs.readdirSync('./');
// console.log(`Files :${files}`);

fs.readdir('./',function(err,files){
  if(err)console.log('Error',err);
  else console.log('Result',files);
});

//Event
const EventEmitter=require('events');
const emitter=new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(arg){
  console.log('Listener Called' , arg);
});
//Raise an event
emitter.emit('messageLogged' , { id : 1 ,url : 'http://'});
