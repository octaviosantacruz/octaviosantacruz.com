export const SITE = {
	name: "Octavio Santacruz",
	url: "https://octaviosantacruz.com",
	author: "Octavio Santacruz",
} as const;

export const PERSON = {
	givenName: "Octavio",
	familyName: "Santacruz",
	fullName: "Octavio Santacruz",
	jobTitle: "Security Operations Analyst",
	addressCountry: "PY",
	addressLocality: "Paraguay",
	// TODO: reemplazar con las URLs reales antes del lanzamiento.
	sameAs: [
		"https://www.linkedin.com/in/TODO",
		"https://github.com/TODO",
	],
} as const;

// Anchors are language-agnostic; labels come from src/i18n/translations.ts.
export const NAV_SECTIONS = [
	{ href: "#sobre-mi", key: "sobreMi" },
	{ href: "#experiencia", key: "experiencia" },
	{ href: "#certificaciones", key: "certificaciones" },
	{ href: "#proyectos", key: "proyectos" },
	{ href: "#contacto", key: "contacto" },
] as const;
