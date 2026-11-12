---
titulo: "Paybest — opening an account and withdrawing money without losing control"
resumen: "Design and frontend for the KYC/KYB onboarding and the funds withdrawal of a USD digital-account platform, guided by a product blueprint with documented decisions."
etiquetas: ["Fintech", "KYC/KYB onboarding", "Funds withdrawal", "Design Systems", "Next.js"]
orden: 2
problema: "An international company that wants to open a USD digital account has to complete a long, regulated, high-risk onboarding (company, representatives, beneficiaries and documents), and then needs to withdraw money while clearly understanding what happens to it."
rol: "Product Designer and Front End developer: UX/UI audit of the KYC, design and implementation of the KYC, onboarding and funds-withdrawal improvements, integration with the business, with APIs and with MongoDB, and the blueprint that governs them."
proceso: "I started from an audit of the existing experience, turned it into a phased plan with a validation protocol and a measurement contract, and took it to code in Next.js with automated tests, with direct integration to MongoDB and the business systems. I worked with the support of coding agents."
resultado: "A KYC reorganized into guided tasks and a withdrawal flow specified end to end, at the launch-campaign stage and in production."
---

## In one sentence

I redesigned Paybest's KYC onboarding and funds withdrawal so that anyone opening an account or moving money always knows **where they are, what is being asked of them and what happens next**, and I documented it in a blueprint that the team and coding agents use as the same source of truth.

## Context

Paybest is a technology and onboarding platform that gives access to financial services provided by regulated third parties. Its audience is international companies, e-commerce sellers and freelancers who need a USD digital account. It doesn't present itself as a bank, and that restriction is also a design rule: the interface can't claim custody or money transmission.

The user's job is concrete: open the account, complete the KYC/KYB, receive payments, hold funds in USD, convert and withdraw to a local bank account.

## The design problem

Two experiences concentrated the risk:

- **Business KYC.** It's long, asks for sensitive data about the company, its representatives and its ultimate beneficial owners, and requires documents. A user who gets lost or doubts either abandons or submits something incomplete.
- **Funds withdrawal.** Moving money demands certainty: how much leaves, where it goes and what the status of the operation is.

## Guiding principle

> Paybest only presents as controls the data the user must make a decision about. Any inferred, calculated or immutable data is shown as context, result or status.

With that rule the interface asks for the minimum number of decisions and makes visible what happens to the money and which action has consequences. The visual direction, *Swiss Operational Fintech*, aims for certainty over spectacle: a rigorous grid, typographic hierarchy, controlled semantic color and progressive disclosure.

## Key decisions

1. **KYC as guided tasks.** The form is organized in four stages (Company, People, Documents and Review) with tasks inside each. On mobile you see the current stage, the overall position and compact markers; on desktop, a side panel with names and statuses. You can go back to any completed stage, but an incomplete future stage isn't unlocked from the indicator.
2. **Statuses that don't overpromise.** Validating on the client isn't the same as the provider accepting it, and having no pending requests doesn't mean approved. That's why the copy distinguishes **Information required** from **Under review**, and the system never calculates an invented approval percentage.
3. **Privacy by design.** Links to beneficiaries use an opaque identity derived with HMAC; neither names nor document numbers travel in the URL.
4. **Accessibility as a requirement.** Focus returns to the heading when the task changes, orientation controls are at least 44 × 44 px and notices carry text in addition to color and icon.
5. **Withdrawal as a specified flow.** Amount, destination, review, confirmation and result, with validation rules, responsive behavior and a QA checklist, plus a continuous form and bank-account registration.
6. **A single source for color and theme.** The blueprint's color roles were centralized so design and code don't drift apart.

## What I delivered

- **KYC audit** and a phased improvement plan, with benchmark, accessibility review, validation protocol and measurement contract.
- **Product blueprint:** foundations, design system, components, patterns, Withdrawal and Dashboard flows, content, implementation and governance, with a log of more than 40 decisions.
- **Transactional email system** specified within the same blueprint.
- **Frontend implementation** of the onboarding, the withdrawal and the dashboard in Next.js and React with Tailwind and DaisyUI.

## Engineering: from the API to deployment

The same design thinking reaches the code and the delivery:

- **API and MongoDB integration.** The onboarding saves drafts through the API, processes the full submission and persists the file in MongoDB, with document upload to external storage. Authentication uses Auth0.
- **Automated quality.** Unit tests with Jest and end-to-end tests with Playwright; static analysis with SonarQube; TypeScript and lint.
- **Delivery.** Pipeline in Bitbucket, Docker image and deployment on Vercel.
- **Gradual rollout.** The guided KYC experience is turned on with a *feature flag*, without removing the previous version.

## What I verified and what I didn't

The final fix to the KYC navigation was checked with 4 suites and 17 focused tests, and with a visual review at 320, 768, 1024 and 1440 px, in light and dark mode. I documented what was **not** measured: how well users understand the pending-items panel hasn't been tested with real users, and there are per-field progress signals that need a joint definition between product and backend before showing counters.


<!--
PENDIENTE ANTES DE PUBLICAR
- Confirmar con Paybest qué se puede mostrar públicamente (producto, capturas, nombre).
- Anonimizar o rehacer las capturas con datos ficticios; hay capturas de dashboard y retiro en las carpetas del proyecto.
- NO usar cifras de marketing del sitio comercial como resultados propios.
-->
