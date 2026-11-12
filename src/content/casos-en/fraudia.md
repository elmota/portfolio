---
titulo: "Fraudia — the workbench of a compliance analyst"
resumen: "Design and frontend for a fraud and compliance platform: from the Alerts flow to a design system governed by documented decisions."
etiquetas: ["Fintech", "Compliance", "Design Systems", "UX/UI leadership", "Angular"]
orden: 1
problema: "An analyst has to decide quickly and with evidence whether a risk alert is real, and leave that decision traceable. The interface had to reduce cognitive load without hiding evidence or pretending to certainties that don't exist."
rol: "UX/UI Design Lead since March 2024, in a team of 2 or 3 people, with my own frontend implementation. Product and UX strategy, Alerts, Cases and Rules flows, design system and technical migration of the frontend."
proceso: "I defined a product blueprint as the single source of truth (foundations, design system, components, patterns, flows, content and implementation), with UX audits of the existing screens and a decision log. I worked on it with the support of coding agents to draft, organize and maintain the documentation."
resultado: "The product is in its pilot phase: built and being tuned internally, not yet tested in real environments. The blueprint lets the team and the coding agents work from the same criteria as that stage moves forward."
---

## In one sentence

I designed how an analyst goes from a queue of alerts to a justified decision, and I build the design system and the frontend that support it, with every product decision documented so the team, and the coding agents we use, work from the same criteria.

## Context

Fraudia is a platform for detecting and investigating fraud and regulatory compliance. Its domains are **alerts**, **cases**, **detection rules**, action **workflows**, reports and data exploration. The people who use it are risk and compliance analysts who review signals, weigh evidence and carry out an authorized action.

The model that organizes the whole product is a complete chain of work:

> Signal → Context → Understanding → Evidence → Investigation → Decision → Action → Traceability → Learning

## The design problem

The analyst's work boils down to a *job to be done*: when they receive an alert, they want to know why it was generated, which facts support or contradict it, what is missing and which action applies, so they can produce a traceable decision without losing the context of their workload.

That demands an interface that explains the priority, not just one that shows a score; that lets them move from the queue to a summary and to the detail without losing filters or position; and that clearly tells a fact apart from an AI inference.

## Key decisions

1. **AI helps, but isn't confused with the facts.** Assistance is shown with progressive disclosure: first a compact *sneak peek* and, only if the analyst asks for it, the full analysis. Data, inferences, limitations and recommendations are visually distinguished.
2. **No action with consequences runs silently.** Choosing a workflow first opens an intermediate context where its requirements and effect are visible. Blocked actions show why they are blocked and what is missing to enable them.
3. **Mobile doesn't cut capability.** The order and the interaction pattern can change, but the mobile view offers the full picture and every action.
4. **Every component feeds the design system.** Every new piece is evaluated for reuse and added to the system in the same task, to avoid parallel systems.
5. **Evidence outranks intuition.** The blueprint separates what was observed, what the business confirmed, what was inferred, what was proposed and what is pending validation. A screenshot, an AI-generated text or a button label isn't enough to establish a business rule.

## What I delivered

- **Alerts flow:** a queue with "My alerts" and "All" views, configurable filters and columns, a side quick view with workflows and history, and a detail view with summary, timeline, transaction activity, documents, notes and log.
- **Product blueprint:** foundations and users, design system (layout, typography, color, motion, states and responsive), components and patterns (optimistic UI, asynchronous operations, contextual flows, AI assistance, dense data spaces), pages and flows, content and governance.
- **UX audits** of the existing screens, with findings and improvement proposals kept separate from normative decisions.
- **Decision log** with statuses (proposed, accepted) and the documents each decision affects.
- **Frontend implementation:** Angular with Tailwind and DaisyUI, and a progressive migration plan (Angular 19 → 20 → 21 and Tailwind 3 → 4) split into a visual track and a technical one.
- **System module audit:** management of agents and teams (invitation, statuses, direct permissions and permissions inherited through teams) and data configuration (movement type, customer risk thresholds), with prioritized findings and a redesign proposal for desktop, tablet and mobile.

## Current status

The product is in its **pilot phase**: the Alerts flow and the design system are built and being tuned internally, but there are no tests in real environments with analysts yet. What remains was decided and documented in the log: behavior on tablets and ultra-wide screens moves to the next version of Alerts, and cross-browser testing and integrations were deferred.

## System: who can do what

Alerts isn't the only place where clarity matters. I audited **System** (agents and teams) and the data configuration (movement type, customer risk) to the same standard: separating what was observed in the code from what remains to be validated with the business.

The most important finding was about trust, not just layout: an agent can have **direct** permissions and permissions **inherited from their teams**, and the code already distinguishes those two collections, but the interface doesn't always make clear where each permission comes from. I proposed a detail panel that separates both origins instead of showing them mixed, and I left a list of unanswered business questions (for example, what exactly "sync" does in movement type) instead of assuming an answer.

## Design and code on the same team

This case shows the hybrid profile in practice. The same criteria that define how an AI suggestion is presented define how the components are structured and how the frontend is migrated. The blueprint states that implementation is "technical translation, never a redefinition of UX", and that rule keeps design decisions from degrading when they are built.


<!--
PENDIENTE ANTES DE PUBLICAR
- Las capturas del producto contienen datos de prueba (nombres, RUT, montos). No publicarlas sin anonimizar o rehacerlas con datos ficticios.
- Confirmar con Fraudia qué se puede mostrar públicamente (producto, capturas, nombre del cliente).
- Añadir 2 o 3 imágenes: cola de alertas, detalle de alerta y un componente del sistema de diseño.
-->
