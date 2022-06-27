class ItcAccordion {
	constructor(target, config) {
		this._el = typeof target === 'string' ? document.querySelector(target) : target;
		const defaultConfig = {
			alwaysOpen: true
		};
		this._config = Object.assign(defaultConfig, config);
		this.addEventListener();
	}
	addEventListener() {
		this._el.addEventListener('click', (e) => {
			const elHeader = e.target.closest('.item__tab');
			if (!elHeader) {
				return;
			}
			if (!this._config.alwaysOpen) {
				const elOpenItem = this._el.querySelector('.adreses__item_show');
				if (elOpenItem) {
					elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('adreses__item_show') : null;
				}
			}
			elHeader.parentElement.classList.toggle('adreses__item_show');
		});
	}
}

new ItcAccordion('#techwork__adreses', { alwaysOpen: false });