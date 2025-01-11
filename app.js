// const { english, shona } = require('./greet');

import { english, shona } from './greet/index.js'; // run will not be available since it's a default export
import run from './greet/index.js'; // run will be available from default export
import Emitter from './emitter.js';

// setting up the event emitter object
const emtr = new Emitter();

// setting up event type and corresponding listener/handler
emtr.on('greet', function() {
  console.log('A greeting has occurred!');
});

emtr.on('greet', function () {
  run();
});

// trigger event
english();
shona();

// programmatically emitting the event
emtr.emit('greet');




