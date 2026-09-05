const sections = document.querySelectorAll<HTMLElement>("main.content section[id]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

const linkByTargetId = new Map<string, HTMLAnchorElement>();
for (const link of navLinks) {
	const href = link.getAttribute("href");
	if (href?.startsWith("#")) linkByTargetId.set(href.slice(1), link);
}

let activeId = "";

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
}

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
