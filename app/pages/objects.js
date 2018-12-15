const R2D2 = {
	E: 2.718281828459045,
	PI: 3.14159265359,
	pow(x, n) {
		return +x * pow(x, n);
	},
	max(a, b) {
		if (a > b) {
		return a
	} else {
		return b
	}
	},
	min(a, b) {
		if (a > b) {
			return b
		} else {
			return a
		}
	 	},
	add(a, b) {
		return +a + +b
	},
	diam(len) {
		return len / 2 * R2D2.PI
	},
	disk(a, b, c) {
		return b * b - 4 * a * c
	}
}

	R2D2.max(2, 3)


