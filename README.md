# Webify

## Project Title
**Webify: An AI-Assisted MSME Needs Assessment and Technology Matching Platform**

## Positioning
Webify helps Filipino micro, small and medium enterprises describe their operational challenges, identify possible technology and capability gaps, and explore preliminary pathways toward appropriate solutions and technical assistance.

## Core Prototype Features
- **MSME Needs Assessment:** a guided assessment covering business sector, operational challenge, current setup, resource readiness and desired outcome.
- **Preliminary Technology Matching:** explainable, rule-based recommendations for production, equipment, quality/testing, packaging/product development, digitalization, resource efficiency and workforce skills.
- **Wibz Business Companion:** a floating assistant with guided prompts and predefined prototype responses.
- **Supporting Business Resources:** retains the original templates, creator directory, advice, messaging and project-tracking modules.
- **Assessment Summary:** stores the latest assessment in the visitor's browser and provides a printable summary.

## Technology
HTML5, CSS3, Vanilla JavaScript, JSON, Fetch API, Web Storage API and GitHub Pages.

## Run locally
On Windows PowerShell, run `powershell -ExecutionPolicy Bypass -File .\tools\serve.ps1` from the project folder, then open `http://localhost:5173`. Alternatively, use VS Code Live Server. The JSON data files are loaded with Fetch, so do not open `index.html` directly using a `file://` URL.

## Prototype limitations
Wibz currently uses predefined responses and the assessment uses predefined rules; neither is a live generative-AI service or validated predictive model. Data is stored locally in the browser. There is no production backend, secure role-based access, centralized database, government integration or official DOST approval workflow. All recommendations are preliminary and require validation by the responsible technical personnel. See [AI_PIVOT_NOTES.md](AI_PIVOT_NOTES.md).

## Original project
This repository evolves the original Webify digital marketing and collaboration platform. Existing modules are retained as supporting resources for MSMEs.


## Administrator dashboard (prototype)

The sign-in screen now lets a visitor choose **Business Owner / MSME** or **Government / Webify Administrator** for both sign-in and account creation. Choosing the administrator role opens the separate administrator workspace at `#/admin`.

Administrator areas include:
- Overview KPIs for assessed, validated, pending, and support-matched businesses.
- MSME validation queue with sample case review actions and status filtering.
- AI Insights workbench that creates explainable, rule-based sample briefs for digital adoption, financial management, and market access.
- Suggested programs and support pathways.

**Important prototype limitation:** dashboard statistics, business cases, regional patterns, and AI briefs are illustrative sample data. The AI workbench is a deterministic demonstration, not a live connected generative-AI service. Sign-in is also a frontend demonstration; it does not authenticate government identities or enforce real administrator permissions. A production deployment needs a secure backend, role-based access control, verified agency accounts, an audit trail, privacy safeguards, and a validated data source/model.

## Webify Learning Hub (client feature)

The client portal includes the **Webify Learning Hub** at `#/coach`, powered by the official WIBZ mascot. It offers six learning paths and 30 practical lessons covering financial management, marketing and sales, product development, digital transformation, operations, and business growth.

- Lesson explanations, Filipino MSME examples, practical tips, and action steps.
- WIBZ lesson companion with explain, example, tips, quizzes, and rule-based question responses.
- Multiple-choice knowledge checks with feedback and scores.
- Browser-local progress, saved lessons, and continue-learning support.
- A document-preparation checklist and a link to the existing needs assessment/support discovery.

**Prototype disclosure:** WIBZ uses prepared lesson content and rule-based demonstration responses; no live generative-AI API is connected. Lessons are general educational guidance inspired by public DTI and DOST resources, not official agency instructions, endorsement, eligibility decisions, or compliance advice. Confirm current requirements with the relevant agency. Learning progress is stored in local browser storage.
