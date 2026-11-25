# Webify AI MSME Pivot — Prototype Notes

## New positioning
Webify is presented as an AI-assisted MSME needs assessment and technology-matching platform. Its intended journey is: business profile → needs assessment → gap classification → preliminary technology pathway → human validation → intervention monitoring.

## What was added
- Repositioned the home-page headline and navigation toward technology needs assessment.
- Replaced the previous digital-readiness questionnaire with a five-step MSME needs assessment covering sector, challenge, current setup, resource readiness and desired outcome.
- Added preliminary recommendations for production, equipment, quality/testing, packaging/product development, digitalization, resource efficiency and technical skills.
- Added the Wibz companion using the supplied mascot artwork, with quick actions and a local predefined response set.
- Added a printable assessment summary and local browser saving of the most recent assessment.
- Preserved the existing templates, creators, advice, messaging and project-tracking modules as supporting resources rather than deleting them.

## Important prototype limitations
- Wibz is a scripted demonstration assistant, not a connected generative AI model.
- The assessment uses transparent predefined rules. It does not train or run a predictive model and does not calculate statistically validated risk probabilities.
- Recommendations are preliminary and must be reviewed by qualified technical personnel. They are not official DOST endorsements, eligibility decisions, funding approvals or confirmed referrals.
- Assessment data is stored in the visitor's browser using localStorage. There is no central database, secure account service, administrator review workflow, or government-system integration in this static prototype.
- The DOST website link is a general official entry point. Specific program availability, requirements and eligibility must be confirmed with the responsible office.

## Suggested next production phases
1. Validate the assessment framework with MSME stakeholders and DOST technical personnel.
2. Build a curated, source-cited technology/intervention directory with verified owners, requirements and update dates.
3. Add a secure backend, authentication, role-based access, audit logs and consent/privacy controls.
4. Add a retrieval-grounded AI service behind the backend; never expose model API keys in browser code.
5. Add an authorized reviewer workflow for validating recommendations and referrals.
6. Pilot with a small group of MSMEs and evaluate recommendation relevance, fairness, usability and outcomes.
