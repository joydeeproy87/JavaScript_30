let countDown;

function timer(seconds) {
	const now = Date.now();
	const then = now + seconds * 1000;

	countDown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		console.log(secondsLeft);
		if (secondsLeft < 0) {
			clearInterval(countDown);
			return;
		}
	}, 1000);
}
