export const SITE = {
	name: "Octavio Santacruz",
	url: "https://octaviosantacruz.com",
	author: "Octavio Santacruz",
} as const;

export const PERSON = {
	givenName: "Octavio",
	familyName: "Santacruz",
	fullName: "Octavio Santacruz",
	jobTitle: "Cybersecurity Engineer",
	addressCountry: "PY",
	addressLocality: "Paraguay",
	sameAs: ["https://linkedin.com/in/octaviosantacruz", "https://github.com/octaviosantacruz"],
} as const;

export const NAV_SECTIONS = [
	{ href: "#sobre-mi", key: "sobreMi" },
	{ href: "#experiencia", key: "experiencia" },
	{ href: "#certificaciones", key: "certificaciones" },
	{ href: "#proyectos", key: "proyectos" },
	{ href: "#educacion", key: "educacion" },
	{ href: "#contacto", key: "contacto" },
] as const;
