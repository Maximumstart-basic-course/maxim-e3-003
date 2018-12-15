const upArray = (arr) => {
	arr.filter((el, i) => {
		const upArrayFinish = []
		if (el > 0) {
		return el + 1;
	} else {
		return null;
	}
	});
}

upArray([2, 3, 8]);