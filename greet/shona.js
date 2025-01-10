// const { sh } = require('./greeting.json');
import greetings from './greeting.json' with { type: 'json' };

export default function sh() {
	console.log(greetings.sh);
}

// module.exports = greet;
