export const SITE = {
	name: "Octavio Santacruz",
	url: "https://octaviosantacruz.com",
	title: "Octavio Santacruz — Security Operations Analyst",
	description:
		"Portfolio profesional de Octavio Santacruz, Security Operations Analyst / ingeniero en seguridad basado en Paraguay.",
	locale: "es",
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

export const NAV_LINKS = [
	{ href: "#sobre-mi", label: "Sobre mí" },
	{ href: "#experiencia", label: "Experiencia" },
	{ href: "#certificaciones", label: "Certificaciones" },
	{ href: "#proyectos", label: "Proyectos" },
	{ href: "#contacto", label: "Contacto" },
] as const;
