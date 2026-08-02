export type Locale = "es" | "en";

interface Section {
	num: string;
	title: string;
}

interface Translation {
	siteTitle: string;
	siteDescription: string;
	ogLocale: string;
	skipLink: string;
	navLabel: string;
	location: string;
	nav: {
		sobreMi: string;
		experiencia: string;
		certificaciones: string;
		proyectos: string;
		contacto: string;
		educacion: string;
	};
	sections: {
		sobreMi: Section;
		experiencia: Section;
		certificaciones: Section;
		proyectos: Section;
		contacto: Section;
		educacion: Section;
	};
}

export const translations: Record<Locale, Translation> = {
	es: {
		siteTitle: "Octavio Santacruz — Cybersecurity Engineer",
		siteDescription:
			"Portfolio profesional de Octavio Santacruz, ingeniero en ciberseguridad enfocado en operaciones de seguridad, identidad y proteccion de datos.",
		ogLocale: "es_PY",
		skipLink: "Saltar al contenido",
		navLabel: "Navegación principal",
		location: "Paraguay",
		nav: {
			sobreMi: "Sobre mí",
			experiencia: "Experiencia",
			certificaciones: "Certificaciones",
			proyectos: "Proyectos",
			contacto: "Contacto",
			educacion: "Educación",
		},
		sections: {
			sobreMi: { num: "01", title: "Sobre mí" },
			experiencia: { num: "02", title: "Experiencia" },
			certificaciones: { num: "03", title: "Certificaciones" },
			proyectos: { num: "04", title: "Proyectos" },
			educacion: { num: "05", title: "Educación" },
			contacto: { num: "06", title: "Contacto" },
		},
	},
	en: {
		siteTitle: "Octavio Santacruz — Cybersecurity Engineer",
		siteDescription:
			"Professional portfolio of Octavio Santacruz, Cybersecurity Engineer focused on security operations, identity, and data protection.",
		ogLocale: "en_US",
		skipLink: "Skip to content",
		navLabel: "Primary navigation",
		location: "Paraguay",
		nav: {
			sobreMi: "About",
			experiencia: "Experience",
			certificaciones: "Certifications",
			proyectos: "Projects",
			contacto: "Contact",
			educacion: "Education",
		},
		sections: {
			sobreMi: { num: "01", title: "About" },
			experiencia: { num: "02", title: "Experience" },
			certificaciones: { num: "03", title: "Certifications" },
			proyectos: { num: "04", title: "Projects" },
			educacion: { num: "05", title: "Education" },
			contacto: { num: "06", title: "Contact" },
		},
	},
};
