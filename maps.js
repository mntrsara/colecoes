const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Maria', 'ADMIN');
userRoles.set('Julia', 'ADMIN');
userRoles.set('Debora', 'USER');
userRoles.set('Beatriz', 'USER');

console.log(getAdmins(userRoles));