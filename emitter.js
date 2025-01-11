export function Emitter() {
	this.events = {};
}

Emitter.prototype.on = function (type, listener) {
	this.events[type] = this.events[type] ?? [];
	this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
	if (this.events[type])
		for (let i = 0; i < this.events[type].length; i++) {
			this.events[type][i]();
		}
};

console.log('A sample EventEmitter');
const emitter = new Emitter();

emitter.on('greet', function () {
  console.log('The greeting was received.');
});

emitter.on('greet', function () {
  console.log('it is a wonderful day to receive a greeting!');
});

console.log('Hi there!');
emitter.emit('greet');
