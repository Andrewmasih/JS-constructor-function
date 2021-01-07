function Car(year, owner, manufacturer) {
	this.year = year;
	this.owner = owner;
	this.manufacturer = manufacturer;
	this.speak = function () {
		return `vrooooooom!`;
	};
}
