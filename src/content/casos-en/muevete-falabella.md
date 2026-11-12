---
titulo: "Muévete (Falabella) — from React to Next.js without slowing the content"
resumen: "UX and frontend for an internal Falabella talent-attraction site, connected to a headless CMS and migrating from React to Next.js."
etiquetas: ["Internal product", "Next.js", "Strapi", "Headless CMS", "Refactor"]
orden: 5
problema: "Falabella needed a talent-attraction site (Muévete) whose content —articles, categories, authors, landing sections— the HR team could update without depending on a code deployment for every text or image change."
rol: "UX designer and Front End developer, at Base Dos for Falabella, between March and August 2025."
proceso: "I designed the UX and implemented the frontend in React, connected it to Strapi as a headless CMS so the content would be editable, and started migrating that base to Next.js."
resultado: "The site with Strapi integration went live: home, navbar, footer, landing sections and editorial content (articles, categories, authors) served from the CMS. The migration I started was later completed in Next.js 14."
---

## In one sentence

I designed and built an internal Falabella site where the HR team publishes and updates content without touching code, and I started moving that base from React to Next.js to improve its performance and its frontend layer.

## Context

Muévete is an internal talent-attraction product at Falabella: a landing page with editorial content (articles, interest categories, authors) designed so the HR team can keep it alive without depending on development for every change.

## The design problem

A content site that depends on development for every update goes stale. The challenge was twofold: designing a clear experience for the people who visit the site, and a content architecture the business team could operate on their own.

## Key decisions

1. **Strapi as the source of content, not just images.** I modeled the content types (article, category, author, "about", global settings) and connected the home page, navbar, footer and landing sections directly to the CMS.
2. **Real rich text, not loose HTML.** I added a *rich text* component so editorial content keeps its formatting without the content team having to write markup.
3. **Migrating without rewriting everything at once.** The React base with Strapi was already running in production; I started the migration to Next.js as an incremental evolution of that same integration, not as a complete rewrite from scratch.

## What I delivered

- **UX design** of the site and its content architecture.
- **React frontend** connected to Strapi: home, navbar, holding, footer, image and video gallery, and editable landing sections.
- **Content modeling in Strapi:** article, category, author, "about" and global settings.
- **Start of the migration to Next.js**, with TypeScript, as the next step in the frontend architecture.

## Current status

The Strapi integration is in use: the React site served real content for several months, with landing iterations through October. The Next.js migration, which I left started at an early stage, was completed afterwards: the site ended up running on **Next.js 14** on top of the same Strapi integration.
