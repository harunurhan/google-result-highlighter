const RESULT_CONTAINER_SELECTOR = '.g';
const RESULT_LINK_IN_CONTAINER_SELECTOR = 'a';
const RESULT_TITLE_IN_CONTAINER_LINK = 'h3';


function highlightTrustedResults(trustedHostToHighlightColor) {
	const resultContainers = document.querySelectorAll(RESULT_CONTAINER_SELECTOR);
	for (const container of resultContainers) {
		const link = container.querySelector(RESULT_LINK_IN_CONTAINER_SELECTOR);
		if (trustedHostToHighlightColor.hasOwnProperty(link.hostname)) {
			const highlightColor = trustedHostToHighlightColor[link.hostname];
			const resultTitle = container.querySelector(RESULT_TITLE_IN_CONTAINER_LINK);
			resultTitle.style.backgroundColor = highlightColor;
		}
	}
}

function onPageLoad() {
	chrome.storage.sync.get({
		trustedPages: {}
	}, ({ trustedPages }) => {
		highlightTrustedResults(trustedPages);
	});
};

window.addEventListener('load', onPageLoad);
