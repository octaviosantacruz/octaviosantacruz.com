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
	};
	sections: {
		sobreMi: Section;
		experiencia: Section;
		certificaciones: Section;
		proyectos: Section;
		contacto: Section;
	};
}

export const translations: Record<Locale, Translation> = {
	es: {
		siteTitle: "Octavio Santacruz — Security Operations Analyst",
		siteDescription:
			"Portfolio profesional de Octavio Santacruz, Security Operations Analyst / ingeniero en seguridad basado en Paraguay.",
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
		},
		sections: {
			sobreMi: { num: "01", title: "Sobre mí" },
			experiencia: { num: "02", title: "Experiencia" },
			certificaciones: { num: "03", title: "Certificaciones" },
			proyectos: { num: "04", title: "Proyectos" },
			contacto: { num: "05", title: "Contacto" },
		},
	},
	en: {
		siteTitle: "Octavio Santacruz — Security Operations Analyst",
		siteDescription:
			"Professional portfolio of Octavio Santacruz, Security Operations Analyst based in Paraguay.",
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
		},
		sections: {
			sobreMi: { num: "01", title: "About" },
			experiencia: { num: "02", title: "Experience" },
			certificaciones: { num: "03", title: "Certifications" },
			proyectos: { num: "04", title: "Projects" },
			contacto: { num: "05", title: "Contact" },
		},
	},
};
