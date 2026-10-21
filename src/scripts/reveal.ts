// Cards, roles and credentials rise into place the first time they enter the
// viewport. The page is complete without this script: the hiding class is
// only added here, and never when the visitor asks for reduced motion.
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (items.length && !still && "IntersectionObserver" in window) {
	// Siblings revealed together enter one after another.
	for (const item of items) {
		const siblings = [...(item.parentElement?.children ?? [])].filter((el) => el.hasAttribute("data-reveal"));
		item.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(item), 5) * 70}ms`);
	}
	document.documentElement.classList.add("reveal-ready");

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add("is-in");
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: "0px 0px -8% 0px" },
	);
	for (const item of items) observer.observe(item);
}
