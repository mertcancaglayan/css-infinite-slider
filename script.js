const numItems = 8;

const containers = {
	toLeft: document.querySelector(".toLeft"),
	toRight: document.querySelector(".toRight"),
	toUp: document.querySelector(".toUp"),
	toDown: document.querySelector(".toDown"),
};

function createLogoItem(index) {
	const item = document.createElement("div");
	item.className = "item";

	const logo = document.createElement("img");
	logo.src = `assets/logo (${index}).svg`;
	logo.alt = `Logo ${index}`;

	item.style.animationDelay = `calc(var(--scroll-duration) / ${numItems} * (${numItems - index}) * -1)`;

	item.appendChild(logo);
	return item;
}

for (let i = 1; i <= numItems; i++) {
	const logoItem = createLogoItem(i);

	containers.toLeft.appendChild(logoItem.cloneNode(true));
	containers.toRight.appendChild(logoItem.cloneNode(true));
	containers.toUp.appendChild(logoItem.cloneNode(true));
	containers.toDown.appendChild(logoItem.cloneNode(true));
}
