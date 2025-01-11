const obj = {
	name: 'Simba',
	greet: function (data) {
		console.log('data:', data);
		console.log(`Hi ${this.name}!`);
	},
};

obj.greet();
this.name = 'Tendie';
obj.greet.call(this, 1);
obj.greet.apply({ name: 'Kuku' }, ['test']);
