const sections = document.querySelectorAll<HTMLElement>("main.content section[id]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

const linkByTargetId = new Map<string, HTMLAnchorElement>();
for (const link of navLinks) {
	const href = link.getAttribute("href");
	if (href?.startsWith("#")) linkByTargetId.set(href.slice(1), link);
}

function setActive(id: string): void {
	for (const link of navLinks) link.classList.remove("is-active");
	linkByTargetId.get(id)?.classList.add("is-active");
}

if (sections.length && navLinks.length) {
	const observer = new IntersectionObserver(
		(entries) => {
			const mostVisible = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (mostVisible) setActive(mostVisible.target.id);
		},
		{ rootMargin: "-40% 0px -50% 0px", threshold: [0, 1] },
	);

	for (const section of sections) observer.observe(section);
}
