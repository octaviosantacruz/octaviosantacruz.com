import type { Locale } from "../i18n/translations";

// Page content in both languages. Every claim about a project must stay true
// to its repository and public site; a project site is not a public demo.

interface Fact {
	label: string;
	value: string;
}

interface Project {
	key: "switchboard" | "sigea" | "custodia";
	title: string;
	stage: string;
	status: "live" | "pilot" | "demo";
	href: string;
	linkLabel: string;
	demo?: { href: string; label: string };
	subtitle: string;
	body: string;
	today: string;
	next: string;
	tags: string[];
}

interface Heading {
	kicker: string;
	title: string;
}

export interface Content {
	nav: { projects: string; experience: string; profile: string; contact: string };
	hero: {
		statement: string;
		support: string;
		ctaProjects: string;
		ctaContact: string;
		nowLabel: string;
		now: Fact[];
	};
	sections: Record<"projects" | "experience" | "profile" | "certifications" | "education" | "contact", Heading>;
	showcase: { label: string; today: string; next: string };
	about: string[];
	competencies: string[];
	metrics: { value: string; label: string }[];
	experience: {
		period: string;
		title: string;
		company: string;
		location: string;
		bullets: string[];
		tags: string[];
	}[];
	certifications: { title: string; detail: string; note?: string; href: string }[];
	projects: Project[];
	education: { title: string; detail: string };
	contact: { body: string; links: { label: string; href: string; icon: "email" | "linkedin" | "github" }[] };
}

export const content: Record<Locale, Content> = {
	en: {
		nav: { projects: "Projects", experience: "Experience", profile: "Profile", contact: "Contact" },
		hero: {
			statement: "Security you can operate.",
			support: "Identity, access and automation. From operations to code.",
			ctaProjects: "See my projects",
			ctaContact: "Let's talk",
			nowLabel: "At a glance",
			now: [
				{ label: "Based in", value: "Asunción, Paraguay · open to relocation and remote roles" },
				{ label: "Now", value: "Security Operations Analyst at ITTI - Grupo Vazquez" },
				{ label: "Building", value: "Switchboard, running my own public edge" },
			],
		},
		sections: {
			projects: { kicker: "In progress", title: "Projects I’m working on" },
			experience: { kicker: "Experience", title: "Enterprise security, hands on" },
			profile: { kicker: "Profile", title: "How I work" },
			certifications: { kicker: "Credentials", title: "Certifications" },
			education: { kicker: "Education", title: "Education" },
			contact: { kicker: "Contact", title: "Opportunities and collaboration" },
		},
		showcase: { label: "Projects", today: "Today", next: "What’s next" },
		about: [
			"I work across security operations, privileged access, data protection, and vulnerability management, connecting offensive testing with defensive engineering.",
			"My recent work includes enterprise-scale implementations across 40+ companies: CyberArk PAM and PSM, BigID data discovery, Netskope DLP governance, vulnerability remediation, and security automation.",
		],
		competencies: [
			"Security Operations",
			"Privileged Access Management",
			"Identity & Access Management",
			"Data Protection",
			"Vulnerability Management",
			"Security Automation",
			"Internal Penetration Testing",
			"MITRE ATT&CK",
		],
		metrics: [
			{ value: "40+", label: "companies covered by enterprise security implementations" },
			{ value: "20+", label: "companies onboarded to CyberArk PSM governance" },
			{ value: "5+", label: "security operations workflows automated" },
		],
		experience: [
			{
				period: "Sep 2025 - Present",
				title: "Security Operations Analyst",
				company: "ITTI - Grupo Vazquez",
				location: "Asuncion, Paraguay",
				bullets: [
					"Led the end-to-end reimplementation of CyberArk PAM across 40+ companies, migrating nominal accounts from Privilege Cloud to Secure Infrastructure Access and improving license utilization.",
					"Deployed CyberArk PSM across 20+ companies, enabling centralized session recording and privileged session governance at enterprise scale.",
					"Implemented BigID for sensitive-data discovery and classification across multiple environments, supporting GDPR-aligned governance.",
					"Tuned Netskope DLP policies per business unit to improve detection accuracy and reduce false positives.",
					"Built Netskope and BigID behavioral-analytics workflows that surfaced anomalous data-access patterns for internal fraud investigations.",
				],
				tags: ["CyberArk", "BigID", "Netskope", "PAM", "DLP"],
			},
			{
				period: "May 2024 - Sep 2025",
				title: "Information Security Analyst",
				company: "Personal Paraguay",
				location: "Asuncion, Paraguay",
				bullets: [
					"Led internal penetration testing and coordinated vulnerability remediation across 40+ production servers.",
					"Designed a structured vulnerability-management process integrated with asset inventory and IAM controls.",
					"Automated 5+ recurring security operations tasks using Ansible and custom scripts, reducing manual effort across the team.",
				],
				tags: ["Pentesting", "Vulnerability Management", "Ansible", "IAM"],
			},
			{
				period: "Jul 2023 - May 2024",
				title: "Information Security Analyst",
				company: "NEST Security",
				location: "Asuncion, Paraguay",
				bullets: [
					"Promoted from intern to full-time analyst after delivering vulnerability assessments supporting red-team exercises and defensive control improvements.",
				],
				tags: ["Vulnerability Assessment", "Red Team Support"],
			},
		],
		certifications: [
			{ title: "Netskope Accredited SSE Administrator", detail: "Netskope", href: "https://verify.skilljar.com/c/udnku33wxk5e" },
			{ title: "Netskope Administrator Accreditation", detail: "Netskope", href: "https://verify.skilljar.com/c/rxx37fvsvrra" },
			{ title: "BigID Fundamentals - Core 4 Series", detail: "BigID University", href: "https://university.bigid.com/student/award/nSnhLNrTkAcoAwUbbQcCvt5q" },
			{ title: "Nessus Fundamentals", detail: "Tenable", note: "Expired Jan 17, 2026", href: "https://nessusfundamentals.tenable.com/528ba68c-841f-4e90-babf-7bbff58bfaea" },
			{ title: "Privileged Access Management with CyberArk", detail: "Udemy", href: "https://www.udemy.com/certificate/UC-ed99a7b1-be02-4a5a-a85b-95c75fdfc24b/" },
			{ title: "Junior Cybersecurity Analyst Career Path", detail: "Cisco / Credly", href: "https://www.credly.com/badges/6e52ad96-c457-438f-ba54-594f4f565ac6" },
		],
		projects: [
			{
				key: "switchboard",
				title: "Switchboard",
				stage: "Running on my own infrastructure",
					status: "live",
				href: "https://switchboard.octaviosantacruz.com/",
				linkLabel: "Explore Switchboard",
				subtitle: "Your apps. Your access rules.",
				body: "A front door for self-hosted applications. Identify the person, check the policy and explain every access decision, from the public edge to a service at home.",
				today: "Passkeys, route policies, static sites and an outbound homelab tunnel run on my own edge.",
				next: "Let applications verify the identity from Switchboard, starting with Custodia.",
				tags: [
					"Go",
					"Passkeys",
					"Policies",
					"Tunnels"
				]
			},
			{
				key: "custodia",
				title: "Custodia",
				stage: "Public demo with a fictional company",
					status: "demo",
				href: "https://custodia.octaviosantacruz.com/",
				linkLabel: "Explore the site",
					demo: { href: "https://custodia.octaviosantacruz.com/demo/", label: "Open the live demo" },
				subtitle: "The picture between your security tools.",
				body: "People, devices and access belong in the same investigation. Keep each tool’s inventory intact, connect records with explicit rules and show the evidence behind the conclusion.",
				today: "An interactive Acme Corp demo with synthetic CyberArk and Netskope records. No live tool is connected.",
				next: "Verified access through Switchboard, a Go backend and more tools with explicit integration contracts.",
				tags: [
					"React",
					"TypeScript",
					"Correlation",
					"Go planned"
				]
			},
			{
				key: "sigea",
				title: "SIGEA",
				stage: "Rebuilding for a self-hosted pilot",
					status: "pilot",
				href: "https://sigea.octaviosantacruz.com/",
				linkLabel: "Follow the SIGEA devlog",
				subtitle: "Know what changed on your network.",
				body: "An exposure inventory with a memory. Collect what a network exposes, compare it with a previous observation and keep the evidence that makes each change explainable.",
				today: "A Go agent, a backend foundation and a public devlog. The v2 product is still being rebuilt.",
				next: "Prove the inventory → change → evidence workflow in a self-hosted pilot.",
				tags: [
					"Go",
					"PostgreSQL",
					"Network inventory",
					"Evidence"
				]
			}
		],

		education: {
			title: "B.Eng. Computer Science",
			detail:
				"Taiwan-Paraguay Polytechnic University (UPTP), Asuncion. Completed 15 months of full-time coursework in Taiwan through a merit-based academic exchange.",
		},
		contact: {
			body: "Let's talk about professional opportunities, projects and security challenges in identity, privileged access, data protection and automation.",
			links: [
				{ label: "Email", href: "mailto:octavio.santacruz3@gmail.com", icon: "email" },
				{ label: "LinkedIn", href: "https://linkedin.com/in/octaviosantacruz", icon: "linkedin" },
				{ label: "GitHub", href: "https://github.com/octaviosantacruz", icon: "github" },
			],
		},
	},
	es: {
		nav: { projects: "Proyectos", experience: "Experiencia", profile: "Perfil", contact: "Contacto" },
		hero: {
			statement: "Seguridad que se puede operar.",
			support: "Identidad, accesos y automatización. De la operación al código.",
			ctaProjects: "Ver mis proyectos",
			ctaContact: "Hablemos",
			nowLabel: "En resumen",
			now: [
				{ label: "Desde", value: "Asunción, Paraguay · abierto a reubicación y roles remotos" },
				{ label: "Hoy", value: "Security Operations Analyst en ITTI - Grupo Vazquez" },
				{ label: "Construyendo", value: "Switchboard, funcionando en mi propio edge público" },
			],
		},
		sections: {
			projects: { kicker: "En desarrollo", title: "Proyectos en los que estoy trabajando" },
			experience: { kicker: "Experiencia", title: "Seguridad empresarial, en la práctica" },
			profile: { kicker: "Perfil", title: "Cómo trabajo" },
			certifications: { kicker: "Credenciales", title: "Certificaciones" },
			education: { kicker: "Formación", title: "Educación" },
			contact: { kicker: "Contacto", title: "Oportunidades y colaboración" },
		},
		showcase: { label: "Proyectos", today: "Hoy", next: "Lo que sigue" },
		about: [
			"Trabajo entre operaciones de seguridad, accesos privilegiados, protección de datos y gestión de vulnerabilidades, combinando pruebas ofensivas con ingeniería defensiva.",
			"Mi experiencia reciente incluye implementaciones empresariales en más de 40 compañías: CyberArk PAM y PSM, descubrimiento de datos con BigID, gobierno DLP con Netskope, remediación de vulnerabilidades y automatización de seguridad.",
		],
		competencies: [
			"Security Operations",
			"Privileged Access Management",
			"Identity & Access Management",
			"Data Protection",
			"Gestión de Vulnerabilidades",
			"Automatización de Seguridad",
			"Pentesting Interno",
			"MITRE ATT&CK",
		],
		metrics: [
			{ value: "40+", label: "compañías cubiertas por implementaciones de seguridad empresarial" },
			{ value: "20+", label: "compañías incorporadas a gobierno CyberArk PSM" },
			{ value: "5+", label: "flujos de operaciones de seguridad automatizados" },
		],
		experience: [
			{
				period: "Sep 2025 - Actualidad",
				title: "Security Operations Analyst",
				company: "ITTI - Grupo Vazquez",
				location: "Asunción, Paraguay",
				bullets: [
					"Lideré la reimplementación end-to-end de CyberArk PAM en más de 40 compañías, migrando cuentas nominales desde Privilege Cloud hacia Secure Infrastructure Access y mejorando la utilización de licencias.",
					"Desplegué CyberArk PSM en más de 20 compañías, habilitando grabación centralizada de sesiones y gobierno de accesos privilegiados a escala empresarial.",
					"Implementé BigID para descubrimiento y clasificación de datos sensibles en múltiples entornos, apoyando gobierno de datos alineado a GDPR.",
					"Ajusté políticas DLP de Netskope por unidad de negocio para mejorar la precisión de detección y reducir falsos positivos.",
					"Construí flujos de analítica de comportamiento con Netskope y BigID para detectar patrones anómalos de acceso a datos en investigaciones internas de fraude.",
				],
				tags: ["CyberArk", "BigID", "Netskope", "PAM", "DLP"],
			},
			{
				period: "May 2024 - Sep 2025",
				title: "Information Security Analyst",
				company: "Personal Paraguay",
				location: "Asunción, Paraguay",
				bullets: [
					"Lideré pentesting interno y coordiné la remediación de vulnerabilidades en más de 40 servidores productivos.",
					"Diseñé un proceso estructurado de gestión de vulnerabilidades integrado con inventario de activos y controles IAM.",
					"Automaticé más de 5 tareas recurrentes de operaciones de seguridad con Ansible y scripts propios, reduciendo el esfuerzo manual del equipo.",
				],
				tags: ["Pentesting", "Vulnerability Management", "Ansible", "IAM"],
			},
			{
				period: "Jul 2023 - May 2024",
				title: "Information Security Analyst",
				company: "NEST Security",
				location: "Asunción, Paraguay",
				bullets: [
					"Promovido de pasante a analista full-time tras entregar evaluaciones de vulnerabilidades para ejercicios de red team y mejoras de controles defensivos.",
				],
				tags: ["Vulnerability Assessment", "Red Team Support"],
			},
		],
		certifications: [
			{ title: "Netskope Accredited SSE Administrator", detail: "Netskope", href: "https://verify.skilljar.com/c/udnku33wxk5e" },
			{ title: "Netskope Administrator Accreditation", detail: "Netskope", href: "https://verify.skilljar.com/c/rxx37fvsvrra" },
			{ title: "BigID Fundamentals - Core 4 Series", detail: "BigID University", href: "https://university.bigid.com/student/award/nSnhLNrTkAcoAwUbbQcCvt5q" },
			{ title: "Nessus Fundamentals", detail: "Tenable", note: "Expirada el 17 ene 2026", href: "https://nessusfundamentals.tenable.com/528ba68c-841f-4e90-babf-7bbff58bfaea" },
			{ title: "Privileged Access Management with CyberArk", detail: "Udemy", href: "https://www.udemy.com/certificate/UC-ed99a7b1-be02-4a5a-a85b-95c75fdfc24b/" },
			{ title: "Junior Cybersecurity Analyst Career Path", detail: "Cisco / Credly", href: "https://www.credly.com/badges/6e52ad96-c457-438f-ba54-594f4f565ac6" },
		],
		projects: [
			{
				key: "switchboard",
				title: "Switchboard",
				stage: "En uso en mi infraestructura",
					status: "live",
				href: "https://switchboard.octaviosantacruz.com/",
				linkLabel: "Explorar Switchboard",
				subtitle: "Tus aplicaciones. Tus reglas de acceso.",
				body: "Una puerta de entrada para aplicaciones autohospedadas. Identificar a la persona, comprobar la política y explicar cada decisión, desde el borde público hasta un servicio en casa.",
				today: "Passkeys, políticas por ruta, sitios estáticos y un túnel saliente al homelab funcionan en mi propio edge.",
				next: "Que las aplicaciones verifiquen la identidad de Switchboard, empezando por Custodia.",
				tags: [
					"Go",
					"Passkeys",
					"Políticas",
					"Túneles"
				]
			},
			{
				key: "custodia",
				title: "Custodia",
				stage: "Demo pública de una empresa ficticia",
					status: "demo",
				href: "https://custodia.octaviosantacruz.com/",
				linkLabel: "Explorar el sitio",
					demo: { href: "https://custodia.octaviosantacruz.com/demo/", label: "Abrir la demo en vivo" },
				subtitle: "La imagen entre tus herramientas de seguridad.",
				body: "Personas, equipos y accesos forman parte de la misma investigación. Conservar el inventario de cada herramienta, vincular registros con reglas explícitas y mostrar la evidencia de cada conclusión.",
				today: "Demo interactiva de Acme Corp con registros sintéticos de CyberArk y Netskope. Sin herramientas reales conectadas.",
				next: "Acceso verificable por Switchboard, backend Go y más herramientas con contratos de integración explícitos.",
				tags: [
					"React",
					"TypeScript",
					"Correlación",
					"Go previsto"
				]
			},
			{
				key: "sigea",
				title: "SIGEA",
				stage: "Reconstrucción para un piloto autohospedado",
					status: "pilot",
				href: "https://sigea.octaviosantacruz.com/",
				linkLabel: "Seguir el devlog de SIGEA",
				subtitle: "Saber qué cambió en tu red.",
				body: "Un inventario de exposición con memoria. Observar lo que expone una red, compararlo con una captura anterior y conservar la evidencia que permite explicar cada cambio.",
				today: "Agente Go, base del backend y devlog público. El producto v2 sigue en reconstrucción.",
				next: "Probar el recorrido inventario → cambio → evidencia en un piloto autohospedado.",
				tags: [
					"Go",
					"PostgreSQL",
					"Inventario de red",
					"Evidencia"
				]
			}
		],

		education: {
			title: "B.Eng. Computer Science",
			detail:
				"Universidad Politécnica Taiwán-Paraguay (UPTP), Asunción. Completé 15 meses de cursado full-time en Taiwán mediante un intercambio académico por mérito.",
		},
		contact: {
			body: "Hablemos de oportunidades profesionales, proyectos y desafíos de seguridad en identidad, accesos privilegiados, protección de datos y automatización.",
			links: [
				{ label: "Email", href: "mailto:octavio.santacruz3@gmail.com", icon: "email" },
				{ label: "LinkedIn", href: "https://linkedin.com/in/octaviosantacruz", icon: "linkedin" },
				{ label: "GitHub", href: "https://github.com/octaviosantacruz", icon: "github" },
			],
		},
	},
};
