// const { english, shona } = require('./greet');

import { english, shona } from './greet/index.js'; // run will not be available since it's a default export
import run from './greet/index.js'; // run will be available from default export
english();
shona();
run();
