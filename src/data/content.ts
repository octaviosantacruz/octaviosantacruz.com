import type { Locale } from "../i18n/translations";

// Page content in both languages. Every claim about a project must stay true
// to its repository and public site; a project site is not a public demo.

interface Fact {
	label: string;
	value: string;
}

interface Point {
	label: string;
	text: string;
}

interface Project {
	title: string;
	type: string;
	stage: string;
	availability: string;
	href?: string;
	linkLabel?: string;
	subtitle: string;
	meta: string;
	body: string;
	tags: string[];
	// Each project in the showcase says what problem it answers, how, and
	// what can be seen today. A visual is a real screenshot
	// (src/assets/projects); until a project has one, comingSoon fills the
	// space and says so.
	featured: {
		image?: "switchboard-passkeys";
		imageAlt?: string;
		caption?: string;
		comingSoon?: string;
		points: Point[];
		demo?: Demo;
	};
}

// A replay of how Switchboard decides, with example identities. The codes are
// Switchboard's real decision codes (internal/auth/authz.go).
export interface Decision {
	identity: string;
	policy: string;
	outcome: "allowed" | "denied" | "stepup";
	outcomeLabel: string;
	code: string;
	reason: string;
}

interface Demo {
	title: string;
	note: string;
	summary: string;
	pause: string;
	play: string;
	labels: { request: string; identity: string; policy: string; decision: string; reason: string };
	request: string;
	decisions: Decision[];
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
	showcase: { label: string; pause: string; play: string };
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
			projects: { kicker: "Selected work", title: "Projects I build and run" },
			experience: { kicker: "Experience", title: "Enterprise security, hands on" },
			profile: { kicker: "Profile", title: "How I work" },
			certifications: { kicker: "Credentials", title: "Certifications" },
			education: { kicker: "Education", title: "Education" },
			contact: { kicker: "Contact", title: "Opportunities and collaboration" },
		},
		showcase: { label: "Projects", pause: "Pause rotation", play: "Resume rotation" },
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
				title: "Switchboard",
				type: "Source opens with the first alpha",
				stage: "In development",
				availability: "Project site · no public demo",
				href: "https://switchboard.octaviosantacruz.com/",
				linkLabel: "Visit the project site",
				featured: {
					demo: {
						title: "How it decides",
						note: "Example identities",
						summary:
							"Example of three Switchboard decisions for the same private site: a member of the admins group is allowed; someone outside the group is refused with the code missing_required_group; a member whose sign-in is three hours old is asked to confirm with a passkey again, code reauthentication_required.",
						pause: "Pause",
						play: "Play",
						labels: { request: "request", identity: "identity", policy: "policy", decision: "decision", reason: "reason" },
						request: "GET private.octaviosantacruz.com/",
						decisions: [
							{ identity: "ana@example.com · passkey", policy: "group admins", outcome: "allowed", outcomeLabel: "Allowed", code: "allowed", reason: "ana is in admins" },
							{ identity: "leo@example.com · passkey", policy: "group admins", outcome: "denied", outcomeLabel: "Refused", code: "missing_required_group", reason: "leo is not in admins" },
							{ identity: "ana@example.com · signed in 3 h ago", policy: "admins · sign-in within 15 min", outcome: "stepup", outcomeLabel: "Confirm", code: "reauthentication_required", reason: "asks for a fresh passkey" },
						],
					},
					image: "switchboard-passkeys",
					imageAlt:
						"Switchboard's passkey page listing three passkeys (Google Password Manager, Apple Passwords and a device passkey) with buttons to remove one or add another.",
					caption: "Switchboard's passkey page, with example data.",
					points: [
						{ label: "Problem", text: "Small teams put internal apps online with no sign-in, or behind a VPN everyone shares." },
						{ label: "Approach", text: "One Go binary at the edge: passkey sign-in, per-route policies, and a reason recorded for every request it allows or refuses." },
						{ label: "Today", text: "It serves the SIGEA and Switchboard sites and signs me in at auth.octaviosantacruz.com." },
					],
				},
				subtitle: "Self-hosted, identity-aware gateway in one Go binary",
				meta: "Security engineering / Zero-trust access / 2026 - Present",
				body:
					"Routes apps by name with automatic certificates, signs people in with passkeys (step-up and device-bound rules included), and explains why each request was allowed or refused. It already runs my public edge: it serves the SIGEA and Switchboard sites, deploys static sites with rollback, and reaches a homelab through its own outbound tunnel. A private CA and infrastructure access are next on the roadmap.",
				tags: ["Go", "Passkeys", "OIDC", "Tunnels", "Static sites"],
			},
			{
				title: "SIGEA",
				type: "Self-hosted pilot",
				stage: "Rebuilding (v2)",
				availability: "Project site and devlog · no public demo",
				href: "https://sigea.octaviosantacruz.com/",
				linkLabel: "Visit the project site",
				subtitle: "Exposure inventory that tells you what changed",
				meta: "Security engineering / Exposure management",
				body:
					"An agent inside the network inventories the services you expose and compares every scan with the previous comparable one, so you see what appeared, changed or went away, with the evidence behind it. A partial scan never counts as a service going away. The v2 rebuild in Go and PostgreSQL is documented in a public devlog with per-module progress.",
				tags: ["Go", "PostgreSQL", "Nmap", "React"],
				featured: {
					comingSoon: "Screenshots on the way",
					points: [
						{ label: "Problem", text: "Teams rarely know what they expose until someone else scans them for them." },
						{ label: "Approach", text: "An agent inside the network inventories services and compares every scan with the previous comparable one; a partial scan never counts as a service going away." },
						{ label: "Today", text: "The v2 rebuild in Go and PostgreSQL, documented in a public devlog with per-module progress." },
					],
				},
			},
			{
				title: "Custodia",
				type: "Private lab / closed source",
				stage: "In development",
				availability: "Private app · no public demo",
				subtitle: "Operational CMDB for CyberArk and Netskope",
				meta: "CyberArk Access Visibility Tool / 2026 - Present",
				body:
					"Operational inventory and source-specific views for CyberArk and Netskope, with access controls, audit trails, and human review. Private work in active development; no public access or demo is offered.",
				tags: ["CyberArk", "Netskope", "FastAPI", "React", "PostgreSQL"],
				featured: {
					comingSoon: "Screenshots with demo data on the way",
					points: [
						{ label: "Problem", text: "CyberArk and Netskope each hold part of the access picture, in separate consoles." },
						{ label: "Approach", text: "One operational inventory with views kept separate by source, access controls, audit trails and human review; nothing is inferred across sources." },
						{ label: "Today", text: "Private work in active development; no public access or demo." },
					],
				},
			},
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
			projects: { kicker: "Trabajo seleccionado", title: "Proyectos que construyo y opero" },
			experience: { kicker: "Experiencia", title: "Seguridad empresarial, en la práctica" },
			profile: { kicker: "Perfil", title: "Cómo trabajo" },
			certifications: { kicker: "Credenciales", title: "Certificaciones" },
			education: { kicker: "Formación", title: "Educación" },
			contact: { kicker: "Contacto", title: "Oportunidades y colaboración" },
		},
		showcase: { label: "Proyectos", pause: "Pausar rotación", play: "Reanudar rotación" },
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
				title: "Switchboard",
				type: "Código abierto desde la primera alfa",
				stage: "En desarrollo",
				availability: "Sitio del proyecto · sin demo pública",
				href: "https://switchboard.octaviosantacruz.com/",
				linkLabel: "Ver el sitio del proyecto",
				featured: {
					demo: {
						title: "Cómo decide",
						note: "Identidades de ejemplo",
						summary:
							"Ejemplo de tres decisiones de Switchboard para el mismo sitio privado: a un miembro del grupo admins lo deja pasar; a alguien fuera del grupo lo rechaza con el código missing_required_group; a un miembro que inició sesión hace tres horas le pide volver a confirmar con su passkey, código reauthentication_required.",
						pause: "Pausar",
						play: "Reanudar",
						labels: { request: "solicitud", identity: "identidad", policy: "política", decision: "decisión", reason: "motivo" },
						request: "GET private.octaviosantacruz.com/",
						decisions: [
							{ identity: "ana@example.com · passkey", policy: "grupo admins", outcome: "allowed", outcomeLabel: "Permitido", code: "allowed", reason: "ana está en admins" },
							{ identity: "leo@example.com · passkey", policy: "grupo admins", outcome: "denied", outcomeLabel: "Rechazado", code: "missing_required_group", reason: "leo no está en admins" },
							{ identity: "ana@example.com · sesión de hace 3 h", policy: "admins · login de menos de 15 min", outcome: "stepup", outcomeLabel: "Confirmar", code: "reauthentication_required", reason: "pide una passkey reciente" },
						],
					},
					image: "switchboard-passkeys",
					imageAlt:
						"Página de passkeys de Switchboard con tres passkeys (Google Password Manager, Apple Passwords y una passkey del dispositivo) y botones para quitar una o agregar otra.",
					caption: "Página de passkeys de Switchboard, con datos de ejemplo.",
					points: [
						{ label: "Problema", text: "Los equipos chicos publican apps internas sin login, o detrás de una VPN que comparten todos." },
						{ label: "Enfoque", text: "Un binario Go en el borde: login con passkeys, políticas por ruta y el motivo registrado de cada solicitud que permite o rechaza." },
						{ label: "Hoy", text: "Sirve los sitios de SIGEA y Switchboard y me autentica en auth.octaviosantacruz.com." },
					],
				},
				subtitle: "Gateway autohospedado con identidad, en un solo binario Go",
				meta: "Ingeniería de seguridad / Acceso zero trust / 2026 - Actualidad",
				body:
					"Enruta aplicaciones por nombre con certificados automáticos, autentica personas con passkeys (incluye reautenticación y reglas por dispositivo) y explica por qué permitió o rechazó cada solicitud. Ya opera mi borde público: sirve los sitios de SIGEA y Switchboard, publica sitios estáticos con rollback y llega a un homelab por su propio túnel saliente. Una CA privada y el acceso a infraestructura son los próximos pasos del roadmap.",
				tags: ["Go", "Passkeys", "OIDC", "Túneles", "Sitios estáticos"],
			},
			{
				title: "SIGEA",
				type: "Piloto autohospedado",
				stage: "Reconstrucción (v2)",
				availability: "Sitio del proyecto y devlog · sin demo pública",
				href: "https://sigea.octaviosantacruz.com/",
				linkLabel: "Ver el sitio del proyecto",
				subtitle: "Inventario de exposición que te dice qué cambió",
				meta: "Ingeniería de seguridad / Gestión de exposición",
				body:
					"Un agente dentro de la red inventaría los servicios expuestos y compara cada escaneo con el anterior comparable: muestra qué apareció, cambió o desapareció, con la evidencia que lo respalda. Un escaneo parcial nunca cuenta como un servicio que desapareció. La reconstrucción v2 en Go y PostgreSQL se documenta en un devlog público con progreso por módulo.",
				tags: ["Go", "PostgreSQL", "Nmap", "React"],
				featured: {
					comingSoon: "Capturas en camino",
					points: [
						{ label: "Problema", text: "Los equipos rara vez saben qué exponen hasta que otro los escanea por ellos." },
						{ label: "Enfoque", text: "Un agente dentro de la red inventaría los servicios y compara cada escaneo con el anterior comparable; un escaneo parcial nunca cuenta como un servicio que desapareció." },
						{ label: "Hoy", text: "La reconstrucción v2 en Go y PostgreSQL, documentada en un devlog público con progreso por módulo." },
					],
				},
			},
			{
				title: "Custodia",
				type: "Lab privado / código cerrado",
				stage: "En desarrollo",
				availability: "App privada · sin demo pública",
				subtitle: "CMDB operacional para CyberArk y Netskope",
				meta: "Herramienta de visibilidad de accesos en CyberArk / 2026 - Actualidad",
				body:
					"Inventario operacional y vistas separadas por fuente para CyberArk y Netskope, con controles de acceso, auditoría y revisión humana. Trabajo privado en desarrollo activo; no se ofrece acceso público ni una demo.",
				tags: ["CyberArk", "Netskope", "FastAPI", "React", "PostgreSQL"],
				featured: {
					comingSoon: "Capturas con datos de demostración en camino",
					points: [
						{ label: "Problema", text: "CyberArk y Netskope tienen cada uno una parte del panorama de accesos, en consolas separadas." },
						{ label: "Enfoque", text: "Un inventario operacional con vistas separadas por fuente, controles de acceso, auditoría y revisión humana; nada se infiere entre fuentes." },
						{ label: "Hoy", text: "Trabajo privado en desarrollo activo; sin acceso público ni demo." },
					],
				},
			},
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
