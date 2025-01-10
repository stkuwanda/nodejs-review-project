// const { en } = require('./greeting.json');
import greetings from './greeting.json' with { type: 'json' };

export default function en() {
	console.log(greetings.en);
}

// module.exports = greet;
