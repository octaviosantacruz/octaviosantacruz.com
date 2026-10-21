const sections = document.querySelectorAll<HTMLElement>("main.content section[id]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

const linkByTargetId = new Map<string, HTMLAnchorElement>();
for (const link of navLinks) {
	const href = link.getAttribute("href");
	if (href?.startsWith("#")) linkByTargetId.set(href.slice(1), link);
}

const indicator = document.querySelector<HTMLElement>(".nav-indicator");
let activeId = "";

// One bar under the header links moves to the active one instead of each
// link switching its own underline on and off.
function placeIndicator(link: HTMLAnchorElement | undefined): void {
	if (!indicator) return;
	if (!link || link.offsetParent === null) {
		indicator.style.opacity = "0";
		return;
	}
	const nav = indicator.parentElement!.getBoundingClientRect();
	const box = link.getBoundingClientRect();
	indicator.style.opacity = "1";
	indicator.style.width = `${box.width - 24}px`;
	indicator.style.transform = `translateX(${box.left - nav.left + 12}px)`;
}

function setActive(id: string): void {
	if (id === activeId) return;
	activeId = id;
	for (const link of navLinks) {
		link.classList.remove("is-active");
		link.removeAttribute("aria-current");
	}
	const link = linkByTargetId.get(id);
	if (link) {
		link.classList.add("is-active");
		link.setAttribute("aria-current", "true");
	}
	placeIndicator(link);
}

window.addEventListener("resize", () => placeIndicator(linkByTargetId.get(activeId)));

if (sections.length && navLinks.length) {
	const lastSection = sections[sections.length - 1];

	const atDocumentEnd = (): boolean =>
		window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

	const observer = new IntersectionObserver(
		(entries) => {
			// Once scrolled to the bottom, the last section wins even if its
			// trigger band never fully enters the viewport.
			if (atDocumentEnd()) {
				setActive(lastSection.id);
				return;
			}

			const mostVisible = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (mostVisible) setActive(mostVisible.target.id);
		},
		{ rootMargin: "-40% 0px -50% 0px", threshold: [0, 1] },
	);

	for (const section of sections) observer.observe(section);

	window.addEventListener(
		"scroll",
		() => {
			if (atDocumentEnd()) setActive(lastSection.id);
		},
		{ passive: true },
	);
}
