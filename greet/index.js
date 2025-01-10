// const english = require('./english');
// const shona = require('./shona');

// module.exports = { english, shona };

import en from './english.js';
import sh from './shona.js';

export const english = en;
export const shona = sh;
export default function run() {
	console.log('I ran!');
}


