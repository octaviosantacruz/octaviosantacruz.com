import type { Locale } from "../i18n/translations";

// Custodia case study, in both languages. Same rule as content.ts: every
// claim must stay true to the product's repository. The demo is local and
// uses fictional data; nothing here says it is public, that a Go backend
// exists, or that any real tool is connected.

interface Run {
	id: string;
	complete: boolean;
	returned: string;
	effect: string;
	key?: boolean;
}

export interface CaseContent {
	meta: { title: string; description: string };
	back: string;
	hero: {
		kicker: string;
		name: string;
		role: string;
		statement: string;
		support: string;
		badges: string[];
		ctaShots: string;
		ctaProjects: string;
		nowLabel: string;
		now: { label: string; value: string }[];
	};
	problem: { kicker: string; title: string; items: { title: string; text: string }[] };
	design: { kicker: string; title: string; intro: string; principles: { label: string; title: string; text: string }[] };
	runs: {
		kicker: string;
		title: string;
		intro: string;
		caption: string;
		columns: { run: string; completeness: string; returned: string; effect: string };
		complete: string;
		partial: string;
		rows: Run[];
		note: string;
	};
	shots: { kicker: string; title: string; items: { key: "inventory" | "changes"; alt: string; caption: string }[] };
	evidence: { kicker: string; title: string; intro: string; items: string[]; note: string };
	status: {
		kicker: string;
		title: string;
		done: { title: string; items: string[] };
		pending: { title: string; items: string[] };
		note: string;
	};
	close: { title: string; projects: string; contact: string };
}

export const caseContent: Record<Locale, CaseContent> = {
	es: {
		meta: {
			title: "Custodia — caso de estudio · Octavio Santacruz",
			description:
				"Caso de estudio de Custodia, un producto personal de inventario de seguridad con cambios explicables: decisiones de diseño, demo con datos ficticios y estado real.",
		},
		back: "Proyectos",
		hero: {
			kicker: "Caso de estudio · Producto personal",
			name: "Custodia",
			role: "Inventario de seguridad con cambios explicables",
			statement:
				"Cada herramienta de seguridad ve una parte del inventario. Custodia conserva de dónde viene cada registro, explica qué cambió y mantiene la decisión humana separada de la sincronización.",
			support:
				"Un producto personal en construcción. Hoy existe una demo interactiva con datos ficticios; el backend, las integraciones reales y la publicación vienen después.",
			badges: ["Demo con datos ficticios", "Verificada localmente", "Sin publicar", "Backend Go en preparación"],
			ctaShots: "Ver las capturas",
			ctaProjects: "Volver a proyectos",
			nowLabel: "Estado al 22/10/2026",
			now: [
				{ label: "Demo", value: "Interactiva, con datos ficticios" },
				{ label: "Pruebas", value: "17 del modelo · 16 en navegador" },
				{ label: "Backend", value: "Go y PostgreSQL, en preparación" },
				{ label: "Integraciones reales", value: "Ninguna todavía" },
				{ label: "Demo pública", value: "Sin publicar" },
			],
		},
		problem: {
			kicker: "El problema",
			title: "Una respuesta incompleta se confunde con un inventario vacío",
			items: [
				{
					title: "Datos repartidos",
					text: "El inventario real vive en varias consolas, cada una con su criterio y sus campos. Unirlas por nombre o por correo produce coincidencias falsas.",
				},
				{
					title: "Una ausencia que no es una baja",
					text: "Una consulta parcial, un permiso que falta o un error de red devuelven menos filas. Si el sistema lo toma por «ya no existe», el inventario se corrompe sin avisar.",
				},
				{
					title: "Decisiones que se pierden",
					text: "Quién responde por un recurso y por qué se aceptó algo suele vivir en una planilla aparte. La próxima sincronización no debería poder borrarlo.",
				},
			],
		},
		design: {
			kicker: "Decisiones de diseño",
			title: "Cuatro reglas que el producto no negocia",
			intro: "Están escritas como contrato y probadas contra un ejemplo reproducible, no sólo descritas.",
			principles: [
				{
					label: "Identidad",
					title: "Un registro pertenece a su conexión",
					text: "Se identifica por conexión, colección e ID externo. El mismo ID en dos conexiones son dos registros: el r-17 de Laboratorio Sur nunca se mezcla con el de Norte.",
				},
				{
					label: "Bajas",
					title: "Retirar exige una corrida completa y comparable",
					text: "Una corrida parcial, fallida o de otro alcance puede actualizar lo que vio, pero nunca retira nada.",
				},
				{
					label: "Capas",
					title: "Observación y decisión son cosas distintas",
					text: "El responsable y la nota se guardan aparte, con su historial. Ninguna sincronización los modifica, ni siquiera cuando el registro se retira.",
				},
				{
					label: "Evidencia",
					title: "Cada cambio se explica",
					text: "Antes y después, conexión, corrida y si esa corrida estaba completa. Una baja enlaza con la corrida que la respalda.",
				},
			],
		},
		runs: {
			kicker: "La regla de las bajas",
			title: "Cuatro corridas y un registro que no desaparece por error",
			intro: "El guion de la demo, tal como lo registra el producto. El registro a seguir es r-18 de Laboratorio Norte.",
			caption: "Corridas de Laboratorio Norte y qué ocurre con r-18",
			columns: { run: "Corrida", completeness: "Completitud", returned: "Devolvió", effect: "Qué pasa" },
			complete: "Completa",
			partial: "Parcial",
			rows: [
				{ id: "norte-1", complete: true, returned: "r-17, r-18", effect: "Línea base. Ambos vigentes; no se registran cambios." },
				{
					id: "norte-2",
					complete: true,
					returned: "r-17, r-18, r-19",
					effect: "r-17 cambia (environment: test → staging) y r-19 es un alta. r-18 sigue vigente.",
				},
				{
					id: "norte-3",
					complete: false,
					returned: "r-17",
					effect: "r-18 y r-19 no volvieron y siguen vigentes: una corrida parcial no puede afirmar que desaparecieron.",
					key: true,
				},
				{
					id: "norte-4",
					complete: true,
					returned: "r-17, r-19",
					effect: "r-18 se retira, enlazado a norte-4. La baja sale de una corrida completa y comparable con norte-2.",
					key: true,
				},
			],
			note: "Laboratorio Sur, con su propio r-17, no cambia en ninguno de los pasos. Tampoco la decisión humana sobre r-17 de Norte, un responsable y una nota ficticios.",
		},
		shots: {
			kicker: "Capturas",
			title: "Lo que se ve en la demo",
			items: [
				{
					key: "inventory",
					alt: "Inventario ficticio de Custodia con tres registros de dos conexiones y el detalle de r-17 de Laboratorio Norte: evidencia observada, responsable asignado e historial de decisiones.",
					caption:
						"Inventario, paso 3 del guion. El responsable y la nota de r-17 viven aparte de lo observado. Datos ficticios; el texto de la nota lo escribe el operador.",
				},
				{
					key: "changes",
					alt: "Vista de Cambios con la baja de r-18 respaldada por la corrida norte-4, un alta, un cambio y la tabla de corridas, que incluye la corrida parcial norte-3.",
					caption:
						"Cambios, paso 6. La baja de r-18 se registra recién con una corrida completa; la tabla de corridas muestra la parcial que no retiró nada.",
				},
			],
		},
		evidence: {
			kicker: "Cómo se probó",
			title: "Verificado contra un ejemplo reproducible",
			intro:
				"El guion de siete pasos es un fixture JSON con lo que debe quedar después de cada paso, escrito a mano. El modelo es puro y no tiene dependencias.",
			items: [
				"17 pruebas del modelo: los siete pasos más casos que el guion no recorre, como un alcance nuevo, un registro que reaparece o una corrida con IDs repetidos.",
				"16 pruebas en Chromium sobre el build real: el recorrido completo, Sur sin cambios, teclado y retorno del foco, español e inglés, 375 px sin desplazamiento lateral, accesibilidad WCAG A/AA con axe y ninguna petición fuera del origen.",
				"El backend Go tendrá que pasar el mismo fixture.",
			],
			note: "Corridas locales del 22/10/2026.",
		},
		status: {
			kicker: "Estado real",
			title: "Qué existe y qué no",
			done: {
				title: "Hecho",
				items: [
					"Demo estática en React y TypeScript con tres vistas, detalle por registro, estados de error y español e inglés.",
					"Modelo del inventario y fixture del laboratorio, con pruebas.",
					"Build sin configuración privada ni acceso a la red, empaquetable con manifiesto SHA-256 y avisos de terceros.",
				],
			},
			pending: {
				title: "Pendiente",
				items: [
					"Backend en Go con PostgreSQL y su migrador.",
					"Un primer conector real de sólo lectura, con contrato y pruebas propias.",
					"Acceso: entrar por Switchboard o por OIDC genérico. Hoy sólo está diseñado.",
					"Publicar la demo: requiere aceptación y una decisión de licencia y distribución.",
					"Versión alojada: sólo si hay uso recurrente que la justifique.",
				],
			},
			note: "Nada de esto afirma integración con ningún fabricante: el conector de la demo es simulado.",
		},
		close: { title: "Seguir viendo", projects: "Otros proyectos", contact: "Contacto" },
	},
	en: {
		meta: {
			title: "Custodia — case study · Octavio Santacruz",
			description:
				"Case study of Custodia, a personal security-inventory product with explainable changes: design decisions, a sample-data demo and its real status.",
		},
		back: "Projects",
		hero: {
			kicker: "Case study · Personal product",
			name: "Custodia",
			role: "Security inventory with explainable changes",
			statement:
				"Each security tool sees a part of the inventory. Custodia keeps where every record comes from, explains what changed and keeps human decisions apart from synchronization.",
			support:
				"A personal product under construction. Today there is an interactive demo with fictional data; the backend, live integrations and a public release come later.",
			badges: ["Fictional-data demo", "Verified locally", "Not published", "Go backend in preparation"],
			ctaShots: "See the screenshots",
			ctaProjects: "Back to projects",
			nowLabel: "Status on 2026-10-22",
			now: [
				{ label: "Demo", value: "Interactive, fictional data" },
				{ label: "Tests", value: "17 model · 16 in browser" },
				{ label: "Backend", value: "Go and PostgreSQL, in preparation" },
				{ label: "Live integrations", value: "None yet" },
				{ label: "Public demo", value: "Not published" },
			],
		},
		problem: {
			kicker: "The problem",
			title: "An incomplete answer gets mistaken for an empty inventory",
			items: [
				{
					title: "Scattered data",
					text: "The real inventory lives in several consoles, each with its own criteria and fields. Joining them by name or email produces false matches.",
				},
				{
					title: "An absence that is not a removal",
					text: "A partial query, a missing permission or a network error return fewer rows. If the system takes that for “it is gone”, the inventory is corrupted without a warning.",
				},
				{
					title: "Decisions that get lost",
					text: "Who answers for a resource and why something was accepted usually lives in a separate spreadsheet. The next sync should not be able to erase it.",
				},
			],
		},
		design: {
			kicker: "Design decisions",
			title: "Four rules the product does not negotiate",
			intro: "They are written as a contract and tested against a reproducible example, not only described.",
			principles: [
				{
					label: "Identity",
					title: "A record belongs to its connection",
					text: "It is identified by connection, collection and external ID. The same ID in two connections is two records: r-17 in Laboratorio Sur never merges with r-17 in Norte.",
				},
				{
					label: "Retirements",
					title: "Retiring needs a complete, comparable run",
					text: "A partial, failed or different-scope run may update what it saw, but it never retires anything.",
				},
				{
					label: "Layers",
					title: "Observation and decision are different things",
					text: "The owner and the note are stored apart, with their history. No sync changes them, not even when the record is retired.",
				},
				{
					label: "Evidence",
					title: "Every change is explained",
					text: "Before and after, connection, run and whether that run was complete. A retirement links to the run that backs it.",
				},
			],
		},
		runs: {
			kicker: "The retirement rule",
			title: "Four runs and a record that does not vanish by mistake",
			intro: "The demo script, as the product records it. The record to follow is r-18 in Laboratorio Norte.",
			caption: "Laboratorio Norte runs and what happens to r-18",
			columns: { run: "Run", completeness: "Completeness", returned: "Returned", effect: "What happens" },
			complete: "Complete",
			partial: "Partial",
			rows: [
				{ id: "norte-1", complete: true, returned: "r-17, r-18", effect: "Baseline. Both in force; no changes recorded." },
				{
					id: "norte-2",
					complete: true,
					returned: "r-17, r-18, r-19",
					effect: "r-17 changes (environment: test → staging) and r-19 is an addition. r-18 stays in force.",
				},
				{
					id: "norte-3",
					complete: false,
					returned: "r-17",
					effect: "r-18 and r-19 did not come back and stay in force: a partial run cannot claim they are gone.",
					key: true,
				},
				{
					id: "norte-4",
					complete: true,
					returned: "r-17, r-19",
					effect: "r-18 is retired, linked to norte-4. The retirement comes from a complete run comparable with norte-2.",
					key: true,
				},
			],
			note: "Laboratorio Sur, with its own r-17, does not change in any step. Neither does the human decision on Norte's r-17, a fictional owner and note.",
		},
		shots: {
			kicker: "Screenshots",
			title: "What the demo looks like",
			items: [
				{
					key: "inventory",
					alt: "Custodia fictional inventory with three records from two connections and the details of r-17 in Laboratorio Norte: observed evidence, assigned owner and decision history.",
					caption:
						"Inventory, script step 3. The owner and note on r-17 live apart from what was observed. Fictional data; the note's text is entered by the operator, hence in Spanish.",
				},
				{
					key: "changes",
					alt: "Changes view showing the retirement of r-18 backed by run norte-4, one addition, one change and the runs table, which includes the partial run norte-3.",
					caption:
						"Changes, step 6. The retirement of r-18 is only recorded by a complete run; the runs table shows the partial one that retired nothing.",
				},
			],
		},
		evidence: {
			kicker: "How it was tested",
			title: "Verified against a reproducible example",
			intro:
				"The seven-step script is a JSON fixture with what must remain after each step, written by hand. The model is pure and has no dependencies.",
			items: [
				"17 model tests: the seven steps plus cases the script does not walk, such as a new scope, a record that reappears or a run with repeated IDs.",
				"16 tests in Chromium against the real build: the full walkthrough, Sur unchanged, keyboard and focus return, Spanish and English, 375 px with no sideways scroll, WCAG A/AA accessibility with axe and no request outside the origin.",
				"The Go backend will have to pass the same fixture.",
			],
			note: "Local runs on 2026-10-22.",
		},
		status: {
			kicker: "Real status",
			title: "What exists and what does not",
			done: {
				title: "Done",
				items: [
					"Static demo in React and TypeScript with three views, per-record details, error states and Spanish and English.",
					"Inventory model and lab fixture, with tests.",
					"A build with no private configuration or network access, packageable with a SHA-256 manifest and third-party notices.",
				],
			},
			pending: {
				title: "Pending",
				items: [
					"Go backend with PostgreSQL and its migrator.",
					"A first real read-only connector, with its own contract and tests.",
					"Access: sign in through Switchboard or generic OIDC. Today it is only designed.",
					"Publishing the demo: needs acceptance and a license and distribution decision.",
					"A hosted version: only if recurring use justifies it.",
				],
			},
			note: "None of this claims integration with any vendor: the demo's connector is simulated.",
		},
		close: { title: "Keep looking", projects: "Other projects", contact: "Contact" },
	},
};
