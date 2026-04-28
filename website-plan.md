---
title: Brain Repair Foundation - Website Plan
updated_at: 2026-04-28
status: draft
owner: Jake Heller and Miki Heller
---

# Brain Repair Foundation Website Plan

A build-ready specification for the public-facing Brain Repair Foundation website. This document is intended to be handed to a developer and a designer; every page below has its purpose, components, and full draft copy. Placeholders are explicitly marked with `[BRACKETS LIKE THIS]`.

---

## 1. Project Overview

**Organization:** Brain Repair Foundation
**Acronym:** REPAIR — Restoring Expression, Plasticity, Attention, Intelligence, and Regulation
**Purpose of this site:** A serious, credible, public-facing presence for the Brain Repair Foundation that supports the family's outreach to researchers, clinicians, and the rare-disease community.

**Distinct from:** The Levi AI Research Lab (the family's internal research workspace, which contains medical records, normalized clinical data, ranked theories, and synthesis notes). The Brain Repair Foundation site references the Lab and offers a request-access path, but the Lab itself remains gated.

### Goals the site serves

1. Establish the Foundation as a credible organization (not a personal project) so the family can engage with researchers, clinicians, conferences, device manufacturers, and prospective advisory board members.
2. Communicate honestly that the Foundation's optimization target is restoring function in Levi Heller specifically, while making clear that the methodology and findings are published generously and may serve other families.
3. Provide a triaged contact path for researchers, families with similar cases, and supporters.
4. Offer a gated request-access flow for the Levi AI Research Lab.
5. Survive the acute phase of Levi's case. The site should remain meaningful in year five and year ten, after the seizures have resolved one way or another.

### Tone and posture

- Serious, factual, restrained. Closer to a small biotech or a focused research org than a typical patient-advocacy site.
- Levi-first as framing, not Levi-first as front-and-center personal narrative. The home page should signal "this is real work for a specific reason."
- Honest about what's known, what's unknown, and what is being tried. No hype, no euphemism.
- Reads well to a clinician, a researcher, and a parent of an affected child — in that order of priority.

### Things the site is explicitly not

- A general patient-advocacy organization for pediatric brain injury.
- A medical-advice resource.
- A fundraising vehicle (at v1; this may change once legal structure supports it).
- A blog or content-marketing site.

---

## 2. Three Goals Framing

The Foundation has three goals for Levi, in sequence:

1. **Stop the seizures.** Currently active. Levi has been diagnosed with DEE-SWAS (Developmental and/or Epileptic Encephalopathy with Spike-Wave Activation in Sleep, formerly CSWS/ESES). Two IV methylprednisolone pulses have been delivered (March 23-25, 2026 and April 23-25, 2026) with substantial reduction in spike-wave index. This goal is largely binary: success looks like sustained electrographic suppression with intact sleep architecture and no recurrence.
2. **Identify the root cause.** Currently active. Multiple negative germline genetic workups (Stanford trio exome 2025, GeneDx trio WGS 2026, GeneDx reanalysis 2026, Invitae Overgrowth Panel 2026, Invitae Epilepsy Panel 2026). Working hypotheses span mosaic mTOR pathway activation (PROS), chromatinopathy, seronegative cell-mediated neuroinflammation, hypothalamic-HPA contribution, and others — see the Levi AI Research Lab differential workspace.
3. **Restore expression, plasticity, attention, intelligence, and regulation.** The durable mission. This is what the Foundation exists for past the acute phase. It is not binary. It is many small things, over years.

Goals 1 and 2 are acute. Goal 3 is the long horizon. The site is explicitly oriented around goal 3 — that is what "Brain Repair" means and that is what the org name commits to — but goals 1 and 2 are named honestly because they are the prerequisites and the current daily work.

This framing should appear in the About page and should structure the "What we're working on" page.

---

## 3. Sitemap

```
/                       Home
/approach               Our Approach (methodology + Levi AI Research Lab + request-access)
/work                   What We're Working On (active workstreams)
/research               Research (durable writeups, methodology pieces)
/people                 People (Jake, Miki, advisory board)
/levi                   Levi's Story
/about                  About / FAQ
/contact                Get Involved / Contact (three triaged paths)
/lab/request-access     Request Access to the Levi AI Research Lab (form)
```

Footer on every page links to: Contact, About, Approach, Lab Access. Legal/privacy notice in footer.

---

## 4. Page-by-Page Specification

### 4.1 Home (`/`)

**Purpose.** In 15 seconds, make a serious reader understand what this is and want to keep reading.

**Components, in order down the page:**

1. **Hero block.** Centered, generous whitespace. Foundation name, acronym expansion as subheader, one-line mission, primary CTA.
2. **One-paragraph thesis.** Two or three sentences expanding what the Foundation does and why it exists.
3. **Three entry-point cards.** Visual, equal weight: Approach / What We're Working On / Levi AI Research Lab.
4. **Secondary entry points.** Smaller links: People, Levi's Story, Get Involved.
5. **Footer.**

**No.** Hero photo of Levi. No donation button. No newsletter signup. No "our story" CTA above the fold. No mission-statement banner that takes up the full viewport.

**Draft copy:**

> ### Brain Repair Foundation
>
> *Restoring Expression, Plasticity, Attention, Intelligence, and Regulation in Levi Heller.*
>
> The Brain Repair Foundation exists to restore function in our son Levi, who at age 2.5 began regressing from a typical developmental trajectory and was diagnosed in March 2026 with a severe form of epileptic encephalopathy that disrupts sleep, learning, and language. We are conducting integrative research on his case — combining clinical data, genetics, multi-omics, and the published literature — and we are publishing what we learn.
>
> Our optimization target is Levi. Our publishing posture is generous. If this work eventually helps other children with rare pediatric brain injuries, that is a welcome second-order outcome.

**Three entry-point cards:**

- **Our Approach** — How we conduct integrative case synthesis, and what the Levi AI Research Lab looks like.
- **What We're Working On** — Active workstreams across stopping the seizures, finding root cause, and restoring function.
- **Request Lab Access** — For clinicians, researchers, and families with similar cases.

**Visual notes for designer:** A single subtle visual element (an abstract brain-network diagram, or a plain typographic mark) is fine. Avoid stock medical imagery, avoid family photos on the home page. Keep the page short — the entire home page should fit in one to one-and-a-half scrolls on a desktop and two to three on mobile.

---

### 4.2 Our Approach (`/approach`)

**Purpose.** Convince a researcher or clinician that the methodology is real, distinctive, and worth engaging with. This is the page that does the heaviest credibility lifting.

**Components:**

1. Page header.
2. Section: "The problem we're addressing" — short, framed as a methodology gap, not a personal problem.
3. Section: "Our methodology" — integrative case synthesis, with the four-layer framing (extracted facts, normalized facts, interpretation, synthesis).
4. Section: "The Levi AI Research Lab" — what it is, with two or three real screenshots.
5. Section: "Request access" — explanation of the gate and a CTA to the request form.
6. Section: "What we publish, and what we don't" — explicit posture.

**Draft copy:**

> ## Our Approach
>
> ### The problem we're addressing
>
> Rare pediatric brain injuries — including epileptic encephalopathies, mosaic developmental disorders, and post-injury cognitive regression — sit in a methodological gap. The relevant evidence is fragmented across pediatric neurology, genetics, immunology, sleep medicine, endocrinology, and developmental psychology. No single specialist sees the whole picture. The published literature is large but uncoordinated. Each subspecialist works from the slice of the case they are responsible for.
>
> The result, in many cases, is that no one is doing the integrative synthesis work. Hypotheses do not get systematically tracked. Negative results do not get propagated across specialties. What was tried, what didn't work, and why are not durably recorded. Two years in, the family is often the only entity with the full picture — and the family rarely has the tools or the time to act on it.
>
> ### Our methodology
>
> The Brain Repair Foundation conducts integrative case synthesis on Levi Heller's case. The methodology has four layers, kept explicitly distinct:
>
> 1. **Extracted facts.** Every clinical artifact (lab report, imaging study, EEG, genetic panel, clinical note) is extracted into a structured record with full provenance back to the source document.
> 2. **Normalized facts.** Extracted records are normalized into structured indexes — a clinical timeline, a test-results index, a medications index — so that any fact in the case can be located, cited, and cross-referenced.
> 3. **Interpretation.** Higher-order interpretation (differential diagnoses, ranked diagnostics, ranked treatments, candidate root causes) is maintained as a separate layer. Each interpretation is linked back to the facts that support it. When new evidence arrives, every existing interpretation is reassessed item by item.
> 4. **Synthesis.** Research notes, literature reviews, and synthesis memos integrate the case-specific picture with the published literature.
>
> We treat this methodology as a research artifact in its own right. We publish it. We expect it to generalize.
>
> ### The Levi AI Research Lab
>
> The four-layer methodology lives in a working software system we built called the Levi AI Research Lab. It contains:
>
> - A vault of extracted clinical records with provenance to source PDFs.
> - Normalized indexes of every test, medication, provider, and clinical event.
> - A ranked differential of candidate root causes, with each theory's supporting and contradicting evidence tracked over time.
> - A ranked diagnostics workspace identifying what would be most informative to do next.
> - A ranked treatments workspace, separated into ESES burden control and post-suppression recovery.
> - A research corpus of papers, notes, and synthesis memos.
> - An orchestrator that re-evaluates the entire system whenever new evidence arrives.
>
> *[SCREENSHOT 1: Timeline view of the clinical vault]*
>
> *[SCREENSHOT 2: Differential / Root Cause Theories workspace showing ranked candidates with evidence]*
>
> *[SCREENSHOT 3: A research synthesis note connecting clinical facts to published literature]*
>
> ### Request access
>
> The Lab is gated. We grant access on request to clinicians, researchers, and families with similar cases. Access requires a short request, identification of your role, and agreement to a basic data-use note.
>
> [**Request access to the Levi AI Research Lab →**](/lab/request-access)
>
> ### What we publish, and what we don't
>
> - **Published openly:** the methodology, the synthesis memos, the differential, the diagnostics workspace, the treatments workspace, our running questions, and our negative results.
> - **Behind request-access:** the extracted clinical records, the raw artifacts (PDFs of labs and imaging), and identifying details about the clinical team.
> - **Not published:** anything that identifies clinicians or institutions in a way they have not consented to, and personal medical details about Levi beyond what is needed to make the work useful.
>
> We publish negative results. Most of what we have learned is what is *not* the answer. We name those findings explicitly and keep them visible.

**Visual notes:** Three real screenshots of the Lab. Each screenshot should be a faithful depiction, not a marketing render. Captions one line each.

**Build notes for developer:**

- Screenshots are PNG, max width 1600px, lazy-loaded.
- Each screenshot should have an accessible alt text describing what is shown.
- The "Request access" CTA is a button, not a plain link, and visually distinct from the rest of the page.

---

### 4.3 What We're Working On (`/work`)

**Purpose.** Make the site feel alive. Give a returning reader something new. Demonstrate ongoing real work.

**Structure.** Three sections corresponding to the three goals:

1. Stopping the seizures (current acute phase)
2. Identifying root cause (current acute phase)
3. Restoring function (the long-horizon work)

Each section contains a small number of workstreams. Each workstream has: a one-line title, a one-paragraph description, a status (Active / On Hold / Closed), and a last-updated date.

**Draft copy and example workstreams:**

> ## What We're Working On
>
> *Last updated: [DATE]*
>
> The Brain Repair Foundation has three goals for Levi: stop the seizures he is currently experiencing, identify the root cause of his brain injury, and restore the expression, plasticity, attention, intelligence, and regulation that the injury has affected. We are currently in the acute phase. Most of our day-to-day work is on the first two goals. The Foundation exists to ensure that the third goal — the longer, harder, less well-defined one — receives the same rigor, and continues past the acute phase regardless of how it resolves.
>
> ### Stopping the seizures
>
> *Goal: sustained electrographic suppression with intact sleep architecture and no recurrence.*
>
> **Tracking the durability of the steroid response.** *Active. Last updated [DATE].* Levi received two IV methylprednisolone pulses (March 23-25 and April 23-25, 2026). Spike-wave index trajectory across four EEGs is 95-100% (pre-pulse) → 71% (post-pulse-1) → qualitatively "occasional" (UCSF) → 46% (post-pulse-2). Each subsequent EEG and the off-steroid trajectory will determine whether further pulses, an alternative immunomodulator, or a different approach is needed.
>
> **Off-steroid cytokine and HPA-axis trajectory.** *Active. Last updated [DATE].* A peripheral Th1/Th17 cytokine signal seen on residual steroid effect needs to be reassessed off-steroid to disambiguate real cytokine elevation from glucocorticoid floor effect. Paired AM cortisol + ACTH series will track HPA recovery.
>
> **[ADDITIONAL WORKSTREAM PLACEHOLDER]**
>
> ### Identifying root cause
>
> *Goal: a defensible mechanistic explanation for the regression, the EEG findings, the growth pattern, and the immunological signal — or a confident statement that no current technology can identify it.*
>
> **Mosaic-sensitive deep sequencing.** *Active. Last updated [DATE].* Five negative germline workups have ruled out high-VAF coding variants in most candidate genes. The leading remaining hypothesis — mosaic mTOR pathway activation (PROS spectrum) — has not been functionally tested because no panel on file uses ≥500x deep sequencing on a mosaic-sensitive tissue with PIK3CA / AKT1 / AKT3 / PIK3R2 coverage. We are pursuing this through the Stanford Snyder fPOP study and outside-lab options.
>
> **Methylation and imprinting workup.** *Active. Last updated [DATE].* EpiSign whole-methylome classifier (covers 60+ NDD episignatures including Sotos / Weaver / TBRS / ATR-X / Kabuki) is in progress. Targeted MS-MLPA at 11p15 (Beckwith-Wiedemann) and 5q35 (Sotos) is planned to cover what EpiSign does not.
>
> **Seronegative cell-mediated neuroinflammation workup.** *Active. Last updated [DATE].* A repeat off-steroid serum cytokine panel with sIL-2R, IL-6, TNF, IL-1-beta is the highest-priority discriminator. Whether to pursue intrathecal evaluation depends on the off-steroid cytokine result.
>
> **[ADDITIONAL WORKSTREAM PLACEHOLDER]**
>
> ### Restoring function
>
> *Goal: recovery of the expression, plasticity, attention, intelligence, and regulation that have been affected — over years, in many small steps.*
>
> **Post-suppression recovery framework.** *Active. Last updated [DATE].* Building a structured framework for what to track and what to try once electrographic suppression is durable. This includes language emergence, AAC use, executive function, sleep architecture, behavioral regulation, social engagement, and motor coordination.
>
> **Therapy and intervention coordination.** *Active. Last updated [DATE].* Coordinating the post-suppression therapy stack — speech, ABA, OT, AAC, and adjunctive interventions — so that what is being tried, what is improving, and what is not are tracked alongside the rest of the case.
>
> **[ADDITIONAL WORKSTREAM PLACEHOLDER]**
>
> ### Closed and on-hold workstreams
>
> *We keep these visible because what didn't work is part of the record.*
>
> **[CLOSED WORKSTREAM PLACEHOLDER — example: "Leucovorin trial — Closed [DATE]. Tried [DATES]. Discontinued because [REASON]."]**

**Build notes:**

- Each workstream is a card with: title, status badge (Active/On Hold/Closed), last-updated date, body text.
- Status badge color: Active = neutral dark, On Hold = neutral mid-gray, Closed = neutral light.
- Closed workstreams are below the active ones, separated by a section heading.
- Page-level "last updated" date at top.

---

### 4.4 Research (`/research`)

**Purpose.** Be a useful destination on its own. The page someone bookmarks. The page that, when populated, makes the Foundation feel like a real research org.

**Components:**

1. Page header.
2. Curated list of durable writeups: research notes, synthesis memos, methodology pieces.
3. "How to cite this work" footer.

**Draft copy:**

> ## Research
>
> Durable writeups from the Brain Repair Foundation. We publish synthesis memos, methodology pieces, and literature reviews that we believe are useful beyond Levi's specific case. We do not blog. Each piece below is meant to stay relevant.
>
> ---
>
> *[ENTRY PLACEHOLDER]*
> **[Title of synthesis memo or methodology piece]**
> *Published [DATE] · Updated [DATE]*
> [One-paragraph abstract.]
> [Read →]
>
> ---
>
> ### How to cite this work
>
> If you reference work from the Brain Repair Foundation in your own writing or research, please cite as:
>
> > Heller, J. and Heller, M. *[Title of piece]*. Brain Repair Foundation. [URL]. Accessed [DATE].

**Build notes:**

- Each entry is a list item, not a blog card. Plain typographic treatment.
- Sort by most-recently-updated.
- Empty state at v1: "Writeups will be published here as they are completed. Subscribe by [SUBSCRIBE PATH PLACEHOLDER — likely just contact email] for notification of new pieces." Or omit the subscribe line and have a clean "Coming soon" empty state.

---

### 4.5 People (`/people`)

**Purpose.** Cash the credibility check. Make clear who is behind this and what they bring.

**Components:**

1. Founders section: Jake and Miki, with bios and photos.
2. Advisory board section: "In formation" at v1, with description of what the Foundation is recruiting for.
3. Acknowledgments / collaborators (optional, lightweight).

**Draft copy:**

> ## People
>
> ### Founders
>
> **Jake Heller** *— Co-Founder*
>
> *[PHOTO PLACEHOLDER]*
>
> Jake co-founded Casetext in 2013, the legal AI company that built one of the first widely-deployed AI assistants for lawyers. Casetext was acquired by Thomson Reuters in 2023 for $650M. Jake led the company as CEO for over a decade and is now Head of Product for CoCounsel at Thomson Reuters. He clerked on the U.S. Court of Appeals for the First Circuit and worked as a litigation associate at Ropes & Gray before founding Casetext. He earned his JD at Stanford Law School, where he served as President of the Stanford Law Review, and his BA in Economics & Politics at Pitzer College.
>
> Jake brings to the Foundation a decade of experience building production AI systems, an attorney's training in evidence and argument, and the engineering work behind the Levi AI Research Lab — which he designed and built.
>
> [REPLACE WITH ACTUAL VOICE: a short personal sentence about why this work matters to him and what he hopes the Foundation accomplishes.]
>
> ---
>
> **Miki Heller** *— Co-Founder*
>
> *[PHOTO PLACEHOLDER]*
>
> Miki is VP of Business Operations and Strategy at Astranis, the satellite communications company, where she has led strategy and operations since 2018. Before Astranis, she was a Design Lead at IDEO from 2014 to 2018, applying human-centered design to organizational and systems-level problems. Earlier in her career, she was Director of Strategy at Teach For America, founded an education-technology company called AppSuccess, taught middle-school math through Teach For America, and worked as a performance analyst in the City of San Francisco's Controller's Office. She holds an MBA from Harvard Business School and an MPP from the Harvard Kennedy School (joint program), and a BS in Aerospace Engineering from California Polytechnic State University, San Luis Obispo.
>
> Miki brings to the Foundation systems engineering rigor, design thinking, and operational discipline. She is Levi's primary advocate inside the medical system and the architect of the family's day-to-day care coordination.
>
> [REPLACE WITH ACTUAL VOICE: a short personal sentence about why this work matters to her and what she hopes the Foundation accomplishes.]
>
> ---
>
> ### Advisory Board
>
> *In formation.*
>
> The Brain Repair Foundation is recruiting a medical and scientific advisory board. We are seeking clinicians and researchers with deep expertise in pediatric epileptic encephalopathies, mosaic developmental disorders, neuroinflammation, and post-injury cognitive recovery — and a willingness to engage seriously with a single complex case as a research vehicle.
>
> If you are interested, please [**contact us**](/contact).

**Build notes:**

- Photos are square, 400x400 minimum, centered crops, professional headshots.
- Bios are left-aligned, plain prose. No bullet lists for credentials.
- "In formation" is honest. Do not list advisors who have not committed.

---

### 4.6 Levi's Story (`/levi`)

**Purpose.** Give the personal and emotional context for anyone who wants it. This is the page where Levi's name, photos, and the narrative of what happened are appropriate.

**Important:** Linked from the home page (as a secondary link, not a primary CTA), from the People page, and from the About page. Not the front door.

**Components:**

1. Page header.
2. Photos (chosen by Jake and Miki).
3. Narrative: who Levi is, what happened, where things stand.
4. A note inviting families with similar cases to reach out.

**Draft copy (for Jake and Miki to edit heavily — voice matters here):**

> ## Levi's Story
>
> *[PHOTO PLACEHOLDER — recent photo of Levi]*
>
> Levi was born on July 2, 2020. His head circumference at birth was at the 45th percentile, and within his first year he grew to the 99th percentile in head circumference, height, and weight, where he has remained. Otherwise he was developing normally — meeting milestones, using words, making eye contact, playing.
>
> Around age 2.5, something changed. He began using words less often. He responded to his name less often. His play became more restrictive and more repetitive. He made less eye contact. By age 3 years and 10 months, he was diagnosed with autism. The regression continued. By age 4, he had only a few words. Around the time he turned 5, he stopped using words altogether. He began engaging in more self-stimulatory behavior. He stopped playing with toys.
>
> *[PHOTO PLACEHOLDER — earlier photo, optional]*
>
> On March 10, 2026, a five-hour video EEG at Stanford revealed that Levi's brain was firing abnormal electrical activity through 95-100% of his sleep — a condition called DEE-SWAS (Developmental and/or Epileptic Encephalopathy with Spike-Wave Activation in Sleep), formerly known as CSWS or ESES. The diagnosis was a turning point. It explained the regression, named the mechanism, and pointed toward treatments.
>
> Levi has now received two intravenous methylprednisolone pulses (March and April 2026). His most recent EEG shows the spike-wave activity has dropped from 95-100% to 46% of sleep — below the diagnostic threshold for DEE-SWAS — with normal posterior dominant rhythm and intact sleep architecture for the first time across all his EEGs. His epileptologist described his response as the best she has seen.
>
> We do not know what caused the original injury. Five negative germline genetic workups have ruled out most coding-variant explanations. We are pursuing mosaic mTOR pathway activation, methylation/imprinting disorders, and seronegative cell-mediated neuroinflammation as the leading remaining hypotheses.
>
> Levi is currently five years old. He uses an AAC device. He has begun making eye contact again. He has started imitating his younger brothers. He used a fork for the first time recently. He has also begun showing new challenging behaviors — elopement, mild aggression, toileting regression — which the literature on post-suppression recovery suggests are part of developmental re-awakening rather than relapse.
>
> The Brain Repair Foundation exists for what comes next.
>
> ---
>
> *If your child has a similar condition and you would like to compare notes or request access to our research workspace, please [**contact us**](/contact).*

**Build notes:**

- Photos are tasteful. Do not over-use them. Two or three photos across the whole page is plenty.
- The narrative voice should be Jake's and Miki's. The draft above is a starting point; rewrite freely.
- This page is the longest page on the site and that is appropriate. Reading time ~ four to six minutes.

---

### 4.7 About / FAQ (`/about`)

**Purpose.** Answer the questions a serious reader will have. Set the honest framing of the Foundation.

**Components:**

1. The Foundation's purpose and posture.
2. The three goals.
3. What the Foundation is, and is not.
4. Privacy and publishing posture.
5. FAQ.

**Draft copy:**

> ## About the Brain Repair Foundation
>
> ### Purpose and posture
>
> The Brain Repair Foundation has three goals for Levi Heller, in sequence: stop the seizures he is currently experiencing, identify the root cause of his brain injury, and restore the expression, plasticity, attention, intelligence, and regulation that the injury has affected.
>
> The first two goals are acute and finite. The third — restoring function — is the durable mission of this organization. We are currently in the acute phase, and the bulk of our day-to-day work is on goals one and two. The Foundation exists to ensure that the work on goal three — which is longer, harder, and less well-defined — happens with the same rigor as the acute work, and continues past the acute phase regardless of how it resolves.
>
> Our optimization target is Levi. Every decision about what to research, what to try, and who to engage is filtered through whether it helps him. We do not pretend to be a general-purpose research organization, and we do not pretend to optimize for goals beyond Levi's recovery.
>
> Our publishing posture is generous. The marginal cost of sharing what we learn is low and the potential value to other families is high. If our work eventually helps other children with rare pediatric brain injuries, that is a welcome second-order outcome, not the mission.
>
> ### What the Foundation is
>
> - A focused research organization conducting integrative case synthesis on a single case.
> - The home of the Levi AI Research Lab, a working software system that operationalizes our methodology.
> - A platform for honest publishing of methodology, synthesis, and negative results.
> - A vehicle for engaging clinicians, researchers, and other families in serious work on a serious case.
>
> ### What the Foundation is not
>
> - A medical-advice resource. Nothing on this site is medical advice. Decisions about your child's care should be made with your clinical team.
> - A general patient-advocacy organization for pediatric brain injury or epilepsy.
> - A clinical service. We do not see patients, render diagnoses, or recommend treatments outside Levi's case.
> - A fundraising vehicle at this time.
>
> ### Privacy and publishing posture
>
> - **Published openly:** the methodology, synthesis memos, the ranked differential of root-cause theories, the diagnostics workspace, the treatments workspace, our running questions, and our negative results.
> - **Behind request-access:** the extracted clinical records, raw artifacts (PDFs of labs and imaging), and identifying details about the clinical team. The Levi AI Research Lab is gated; we grant access on request to clinicians, researchers, and families with similar cases.
> - **Not published:** information that identifies clinicians or institutions in ways they have not consented to, and personal medical details about Levi beyond what is needed to make the work useful.
>
> ### FAQ
>
> **Why is this organization for Levi specifically and not for other children?**
> Because we are honest about what we are doing. We started this work for Levi and our optimization target is Levi. Conducting this work under the pretense that we are equally focused on every affected child would be misleading. We publish what we learn so that other families can benefit, but the work is being done because it matters for our son.
>
> **Will the methodology generalize to other cases?**
> We believe so, but we are not the right people to claim that. The methodology is published; researchers and clinicians can evaluate it on its own merits.
>
> **Can I get access to the Levi AI Research Lab?**
> If you are a clinician, researcher, or family with a similar case — yes, on request. [Submit a request here.](/lab/request-access)
>
> **How can I support the work?**
> The most useful forms of support right now are introductions to clinicians, researchers, and families with relevant expertise or cases. See [Get Involved](/contact). Financial-support paths will be added once the appropriate legal structure is in place.
>
> **Are you affiliated with any university, hospital, or company?**
> No. The Brain Repair Foundation is independent. We collaborate with researchers and clinicians at multiple institutions but the Foundation itself has no institutional affiliation.

**Build notes:**

- This page is dense but should remain scannable. Use the section headings as anchor links.
- The FAQ is short on purpose. Add questions only when readers actually ask them.

---

### 4.8 Get Involved / Contact (`/contact`)

**Purpose.** Triage incoming inquiries into three paths so the family can prioritize correctly.

**Components:**

1. Page header.
2. Three contact cards.
3. General contact line at the bottom.

**Draft copy:**

> ## Get Involved
>
> The Brain Repair Foundation engages with three audiences. Please choose the path that fits.
>
> ---
>
> ### I am a clinician or researcher
>
> If you have expertise relevant to pediatric epileptic encephalopathies, mosaic developmental disorders, neuroinflammation, post-injury cognitive recovery, or adjacent fields — and you are interested in engaging with our work — we would like to hear from you.
>
> Please email [research@brainrepairfoundation.org](mailto:research@brainrepairfoundation.org) with a short note about your background and your area of interest.
>
> ---
>
> ### I am a family with a similar case
>
> If your child has been diagnosed with DEE-SWAS, CSWS, ESES, a related epileptic encephalopathy, or a rare developmental regression syndrome — and you would like to compare notes or request access to our research workspace — please reach out.
>
> Please email [families@brainrepairfoundation.org](mailto:families@brainrepairfoundation.org) with a short description of your child's situation. We are not a clinical service and we cannot provide medical advice, but we are happy to share what we have learned.
>
> ---
>
> ### I want to support the work
>
> The most valuable support right now is introductions — to clinicians, researchers, and families with relevant expertise or cases. If you can help with that, or with anything else specific to the work, please reach out.
>
> Please email [hello@brainrepairfoundation.org](mailto:hello@brainrepairfoundation.org).
>
> ---
>
> ### General contact
>
> [hello@brainrepairfoundation.org](mailto:hello@brainrepairfoundation.org)
>
> Jake Heller — [jake@brainrepairfoundation.org](mailto:jake@brainrepairfoundation.org)
> Miki Heller — [miki@brainrepairfoundation.org](mailto:miki@brainrepairfoundation.org)

**Build notes:**

- Each contact card is visually equal. Do not give the donation/support path more visual weight than the others.
- Email addresses are mailto links. No web forms at v1 — keep it simple.
- If web forms are added later, each form should route to the corresponding role address and prepopulate the subject line.

**Email addresses to provision:**

- `hello@brainrepairfoundation.org` (general)
- `jake@brainrepairfoundation.org`
- `miki@brainrepairfoundation.org`
- `research@brainrepairfoundation.org` (recommended; routes to Jake and Miki)
- `families@brainrepairfoundation.org` (recommended; routes to Jake and Miki)

---

### 4.9 Request Access to the Levi AI Research Lab (`/lab/request-access`)

**Purpose.** Gate access to the Levi AI Research Lab, capture enough information to triage requests, and signal that the Lab is a serious research artifact rather than a public website.

**Components:**

1. Page header explaining what the Lab is and why access is gated.
2. Request form.
3. What happens after submission.

**Draft copy:**

> ## Request Access to the Levi AI Research Lab
>
> The Levi AI Research Lab is the working software system behind the Brain Repair Foundation's methodology. It contains:
>
> - The clinical vault — extracted records of every lab, imaging study, EEG, genetic panel, and clinical note in Levi's case.
> - Normalized indexes — clinical timeline, test-results index, medications index, providers directory.
> - The ranked differential of candidate root causes, with each theory's evidence tracked.
> - The ranked diagnostics and treatments workspaces.
> - The research corpus and synthesis memos.
>
> Access is gated because the Lab contains personal medical records and identifying details about Levi's clinical team. We grant access on request to:
>
> - Clinicians and researchers with relevant expertise.
> - Families with a child in a similar clinical situation.
> - Engineers, designers, and methodologists interested in the system itself.
>
> ### Request form
>
> *[FORM — fields below]*
>
> 1. **Your full name** (required)
> 2. **Email address** (required)
> 3. **Affiliation** (required) — e.g. institution, hospital, lab, or "independent / family"
> 4. **Role** (required, single-select):
>    - Clinician
>    - Researcher
>    - Family member with similar case
>    - Engineer / designer / methodologist
>    - Other (please specify)
> 5. **Why are you requesting access?** (required, free text, ~200 words) — what specifically you hope to find or contribute, and how you came across the Foundation.
> 6. **Will you keep what you see in confidence?** (required, checkbox) — *I agree not to share, redistribute, or republish content from the Lab without explicit written permission. I understand this material includes personal medical information.*
> 7. **Submit**
>
> ### What happens next
>
> Requests are reviewed by Jake and Miki personally. We aim to respond within one week. If approved, you will receive a personal access link. Access can be revoked at any time.

**Build notes — engineering work this implies:**

- A submission backend that delivers requests to `hello@brainrepairfoundation.org` (or to a dedicated address).
- An access-grant mechanism on the Levi AI Research Lab side. The simplest v1 implementation is a per-user token in a query string; a better v1.5 is email-based magic-link auth. Decide between these as a separate engineering task.
- A privacy/data-use note that the requester explicitly agrees to.
- A revocation path so access can be withdrawn.

This is the most engineering-heavy page on the site. Plan accordingly. If full request-access infrastructure cannot ship at v1, an interim acceptable form is: this page describes the Lab, captures requests via a form to `hello@brainrepairfoundation.org`, and Jake or Miki manually issues access. That is a fine v1.

---

## 5. Visual and Design Notes

### Type and color

- Serif body font (e.g. Source Serif, Lora, Charter, or Iowan). Sans-serif headings (e.g. Inter, Source Sans, or Söhne) optional but a single-family serif treatment is also acceptable.
- High-contrast text on a near-white background. No dark-mode requirement at v1; if implementing, use a calm dark gray rather than pure black.
- A single muted accent color (a mid-blue, a desaturated teal, or a warm gray-green). Use sparingly: links, primary CTA, status-active badges.
- No gradients, no glassmorphism, no animated illustrations.

### Layout

- Single-column primary text, max-width approximately 720-760px.
- Generous vertical whitespace. The site should feel calm and readable.
- Mobile-first. Every page should be readable on a phone with no horizontal scrolling.
- Footer is plain: Foundation name, contact email, year, and three links (About, Approach, Contact).

### Imagery

- Minimal. The Approach page screenshots are the most important imagery on the site. The People and Levi's Story pages have photos. The other pages should have no imagery.
- No stock photos. No illustrations of the brain.
- All photos credited if not original.

### Reference points for the designer

These sites are good reference points for tone and treatment:

- Small-biotech and focused-research-lab sites that feel serious and substantive (rather than marketing-heavy).
- Personal essay sites with strong typographic treatment (Stratechery, Marginalia, Construction Physics).
- Foundation and research-org sites that prioritize clarity over flash.

---

## 6. Forms and Flows

### Lab access request flow

1. Visitor lands on `/lab/request-access`.
2. Fills out form, agrees to confidentiality note, submits.
3. Form submission sent via email to `hello@brainrepairfoundation.org` with all fields.
4. Visitor sees a confirmation page: "Thank you. Jake or Miki will respond within one week."
5. Jake or Miki reviews. If approved, sends personal email with access link to the Lab.
6. If declined, sends a short polite email explaining why.

### Contact flow

No web forms at v1. All paths are mailto links. Each link goes to the appropriate role address.

---

## 7. Build Checklist for the Developer

- [ ] Static site framework (Next.js, Astro, or 11ty all fine). Static-site generation with no runtime database is sufficient.
- [ ] Domain configured: `brainrepairfoundation.org` (primary) plus redirects from `.com` and any short variants registered.
- [ ] HTTPS, www-to-apex (or apex-to-www) redirect, decided one way or the other.
- [ ] All pages from sitemap implemented.
- [ ] All copy from this document placed on the corresponding pages.
- [ ] Placeholders (`[BRACKETS LIKE THIS]`) called out in the developer handoff for the family to fill before launch.
- [ ] Lab access request form: backend that emails submissions; confirmation page; basic anti-spam (honeypot, optional Turnstile).
- [ ] Email addresses provisioned: `hello@`, `jake@`, `miki@`, optionally `research@` and `families@`.
- [ ] Footer with copyright, contact, and key links.
- [ ] Open Graph tags on every page (title, description, single representative image).
- [ ] Privacy notice page (basic, covering: what's published, what's gated, no tracking beyond minimal analytics).
- [ ] Analytics: minimal and privacy-respecting (Plausible, Fathom, or none). No Google Analytics. No tracking pixels.
- [ ] Lighthouse score: aim for 95+ on performance, accessibility, best practices, SEO.
- [ ] Mobile QA on iOS Safari, Android Chrome.
- [ ] Accessibility QA: keyboard navigation, screen-reader compatibility on every page, color contrast meeting WCAG AA.

---

## 8. Open Questions and Decisions Still Needed

These are decisions or content items still required from Jake and Miki before the site can fully launch.

1. **Final domain.** `brainrepairfoundation.org`? Confirm. Register variants (`.com`, `.org`, common typos) regardless.
2. **Photos for Levi's Story page.** Two or three photos that Jake and Miki are comfortable having on a public page.
3. **Founder photos for People page.** Professional-grade headshots (or competent informal ones) for Jake and Miki.
4. **Voice edits on bios.** Both bios in this document are drafted from LinkedIn data; Jake and Miki should rewrite or edit freely. Each bio should end with a personal sentence (placeholder noted in the draft).
5. **Voice edits on Levi's Story.** The narrative is drafted from the case overview; rewrite freely. Voice matters here.
6. **Initial workstreams.** The "What we're working on" page has placeholder workstreams drawn from the Lab's current diagnostics workspace. Jake and Miki should choose three to five active workstreams per goal section that they actually want to expose publicly.
7. **Initial research writeups.** Are there one or two synthesis memos already in the Lab that should be published on the Research page at launch? Or does the page launch with an empty state?
8. **Lab access — engineering scope.** Decide whether v1 is "form to email + manual access grant" or "form to email + automated magic-link access." The first is faster; the second is better.
9. **Confidentiality note wording on the Lab access form.** The draft above is plain English. If a lawyer should review it, that's a separate task.
10. **Advisory board recruiting.** How public to be about the recruitment posture. Current draft says "in formation" — confirm or adjust.

---

## 9. Audit / Future Considerations

Items deliberately deferred from v1 but worth revisiting later:

- **Donation infrastructure.** Will require legal structure (nonprofit or fiscal sponsor). Plan separately.
- **Newsletter.** Skip until there is a real cadence of publishing to support it.
- **Press / talks page.** Add when there is content to put on it.
- **Public subset of the differential.** Could be exposed at `/differential` or similar — would meaningfully strengthen the site's "real research" signal but raises questions about how much of the case to expose without gating.
- **Internationalization.** English only at v1. If meaningful international interest emerges, revisit.
- **RSS feed.** Add when the Research page has a regular publication cadence.
