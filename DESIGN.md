---
name: Cabral Inforedes
description: A one-page repair-manual plate for a São Paulo IT technician, built to turn a visit into a WhatsApp conversation.
colors:
  amber: "#e0b045"
  amber-hi: "#ebc260"
  blue: "#39b1e2"
  blue-ink: "#1b6f99"
  red: "#c95246"
  paper: "#eef2f6"
  paper-2: "#e3e9f0"
  sheet: "#f8fafc"
  ink: "#13233a"
  ink-2: "#41546d"
  ink-3: "#556981"
  rule: "#b9c6d4"
  grid: "rgba(19, 35, 58, 0.055)"
  plate: "#13233a"
  plate-2: "#1b2f4b"
  on-plate: "#eaf0f6"
  on-plate-2: "#a9bbd0"
  plate-rule: "rgba(169, 187, 208, 0.28)"
  key-white: "#ffffff"
  face-top: "#fbfcfe"
  face-front: "#d9e2eb"
  face-side: "#c3cfdc"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 4.3vw, 3.9rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 110"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3rem)"
    fontWeight: 820
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 780
    lineHeight: 1.2
    fontVariation: "'wdth' 100"
  numeral:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 8vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
    fontFeature: "'tnum'"
  ui:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 750
    lineHeight: 1.2
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 650
    letterSpacing: "0.09em"
    fontVariation: "'wdth' 75"
  lede:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sheet: "2px"
  control: "3px"
  round: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  grid: "24px"
  section: "clamp(48px, 7vw, 96px)"
  section-plate: "clamp(56px, 8vw, 112px)"
  max: "1240px"
components:
  button-whatsapp:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "0.7em 1.25em"
    height: "48px"
  button-whatsapp-hover:
    backgroundColor: "{colors.amber-hi}"
  button-whatsapp-lg:
    padding: "0.85em 1.5em"
    height: "58px"
  button-whatsapp-sm:
    padding: "0.5em 0.95em"
    height: "42px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-plate}"
    typography: "{typography.ui}"
    rounded: "{rounded.control}"
    padding: "0.7em 1.25em"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.plate-2}"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  figure-sheet:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.sheet}"
    padding: "clamp(12px, 2vw, 24px)"
  callout-number:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.key-white}"
    rounded: "{rounded.round}"
    size: "28px"
  callout-number-active:
    backgroundColor: "{colors.blue-ink}"
  parts-row:
    textColor: "{colors.ink}"
    padding: "22px 0"
  coupon:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "clamp(24px, 4vw, 44px)"
  faq-summary:
    textColor: "{colors.ink}"
    padding: "14px 0"
    height: "60px"
  faq-summary-hover:
    textColor: "{colors.blue-ink}"
  whatsapp-bar:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "4px"
    padding: "0 18px"
    height: "54px"
  title-block-cell:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.on-plate}"
    padding: "14px 16px"
---

# Design System: Cabral Inforedes

## Overview

**Creative North Star: "The Repair-Manual Plate"**

The page is a plate from a repair manual. Light blue-grey drafting paper, navy linework, an isometric notebook drawn in exploded view, numbered callouts that lead to the service that fixes each part, figures captioned "Fig. 1" through "Fig. 4c", and a technical title block for a footer. The visitor should feel that this technician knows the machine from the inside, explained plainly, with WhatsApp always one tap away.

Density is calm and generous: large type, wide rows, long hairline rules, big tap targets (42 to 60px) for older and non-technical visitors on phones. Color is cool and quiet everywhere except where it carries meaning. The three logo arrows (red, amber, blue) are the only chroma, and they are read as the three ways to get a repair done; amber in particular is the hand that points to WhatsApp. Everything is drawn, not photographed, until real work photos arrive; empty photo slots are honest dashed placeholders.

The world rejects the generic small-business template it replaces: hero plus stock photo, a row of icon cards, three numbered steps. Services are a parts list keyed to a drawing; the service modes are a navy route diagram.

**Key Characteristics:**
- Cool drafting paper with a faint 24px grid on figure sheets, navy ink, hairline rules.
- Archivo's width axis carries hierarchy: wide caps for headings, condensed caps for annotations.
- Atkinson Hyperlegible for every sentence a visitor reads.
- Square-cornered (2 to 3px) everything; circles only for numbered callouts.
- Depth is drawn as isometric faces, never shadowed onto surfaces.
- Amber is action: every WhatsApp entry point and the discount coupon.
- One authored motion: the notebook comes apart on load.

## Colors

A cool, near-monochrome drafting palette (paper, navy, slate) with the three logo arrow hues as the only saturated colors, each holding a job.

### Primary
- **Arrow Amber** (#e0b045): The action color. Fills every WhatsApp button, the floating WhatsApp bar on phones, the 10% coupon, the big phone number on the navy close, the 3px underline of each parts-list quote link, and text selection. Text on amber is always Draftsman Navy (7.87:1).
- **Amber Highlight** (#ebc260): Hover fill for amber buttons only.

### Secondary
- **Arrow Blue** (#39b1e2): The third arrow and the remote-access route; the dashed camera fields of view in Fig. 3; the focus ring on navy grounds. On navy it reads at 6.44:1; on light paper only 2.18:1, so it is a graphic color on light grounds, never text.
- **Deep Signal Blue** (#1b6f99): The interactive highlight on light grounds: active and hovered numbered callouts, FAQ question hover. 4.94:1 on paper.

### Tertiary
- **Arrow Red** (#c95246): The first arrow and the "Você traz" route. Outside the arrow set it appears once more as a fault mark (the crack drawn in the screen-repair photo slot). Never a fill, never text.

### Neutral
- **Blueprint Paper** (#eef2f6): The page ground and the header bar (at 92% with a backdrop blur).
- **Drafting Shade** (#e3e9f0): Nav-link and toggle hover fills, furniture in the floor plan, scrollbar track.
- **Figure Sheet** (#f8fafc): The ground of every figure sheet and photo slot, a step lighter than the page so figures read as pinned sheets.
- **Grid Ruling** (rgba(19, 35, 58, 0.055)): The 24px square grid ruled on figure sheets.
- **Draftsman Navy** (#13233a): All headings, body text, linework, the 2px rule that opens each list, callout circles.
- **Annotation Slate** (#41546d): Secondary text: ledes, section intros, symptoms, captions, nav links. 6.88:1 on paper.
- **Faint Graphite** (#556981): Dimension lines, dashed placeholder borders, scrollbar thumb. 5.0:1 on paper, so it also carries small condensed labels (QUANDO, SERVIÇO, figure references).
- **Hairline Rule** (#b9c6d4): Every 1px divider: section tops, row bottoms, header bottom, figure-sheet borders.
- **Navy Plate** (#13233a) and **Plate Lift** (#1b2f4b): The full-bleed dark plates (service routes, close, footer) and the hover fill of navy buttons.
- **On-Plate Paper** (#eaf0f6), **On-Plate Slate** (#a9bbd0), **Plate Rule** (rgba(169, 187, 208, 0.28)): Headings, secondary text (8.05:1), and dividers on navy plates.
- **Key White** (#ffffff): Numerals inside navy callout circles and the keycaps in Fig. 1.
- **Isometric faces** (#fbfcfe top, #d9e2eb front, #c3cfdc side): The three-tone shading of every solid in Fig. 1. Light comes from above; top is brightest, side darkest. The motherboard uses a bluer variant of the same three steps.

### Named Rules
**The Amber Is Action Rule.** Amber fills only the things that lead to WhatsApp, plus the discount coupon. On an amber ground the button inverts to navy so the action still stands out.

**The Three Arrows Rule.** Red, amber and blue appear together as a set (the logo, the screen of Fig. 1, the three routes in Fig. 2). Used alone, red is a fault mark and blue is a highlight; neither becomes decoration.

**The Navy Plate Rule.** Dark surfaces are full-bleed navy plates that span the viewport, never dark cards on paper. Everything on a plate uses the on-plate tokens.

## Typography

**Display Font:** Archivo variable, width 62 to 125% (with Arial Narrow, sans-serif)
**Body Font:** Atkinson Hyperlegible 400 and 700 (with system-ui, sans-serif)

**Character:** Archivo is the drafting hand. Stretched wide and set in caps, it echoes the CABRAL wordmark; pulled to 75% width, it becomes the figure-annotation lettering of a manual. Atkinson Hyperlegible was designed for low-vision readers, and it carries every sentence.

### Hierarchy
- **Display** (850, clamp(2.5rem, 4.3vw, 3.9rem), 0.98, width 110%, uppercase): The hero headline only. On phones width drops to 108% and size to clamp(2.2rem, 10.4vw, 3rem).
- **Headline** (820, clamp(1.9rem, 3.6vw, 3rem), 1.04, width 112%, uppercase): Section headings. The cameras and close headings use the same recipe at slightly different clamps; the coupon heading is a smaller sibling (800, width 108%). On phones all headlines go to width 100%, clamp(1.75rem, 8vw, 2.2rem).
- **Title** (780, 1.3rem, 1.2, width 100%, sentence case): Service names in the parts list; route names on the plate (1.25rem, width 105%); FAQ questions (700, 1.12rem).
- **Numeral** (850 to 900, width 118 to 125%, tabular): The two oversized figures, "10%" on the coupon and the phone number "(11) 97677-8693" on the close, which scales to clamp(1.55rem, 7.6vw, 5.6rem).
- **UI** (750, 1rem, 1.2): Buttons, the floating bar, the bold link voice (nav at 600, legend and checklist at 600 to 650, quote links at 700).
- **Label** (650, 0.66 to 0.8rem, width 75%, 0.09em tracking, uppercase): Figure numbers ("Fig. 1"), field labels ("Quando", "Serviço"), title-block keys, the toggle "Montar", the "Inforedes" line of the wordmark (0.28em tracking).
- **Lede** (400, clamp(1.1rem, 1.5vw, 1.25rem), 1.6, max 34em): The hero paragraph. Section intros sit at 1.1rem, max 38em.
- **Body** (400, 1.0625rem, 1.6): All running text; 17px is the floor for readable copy. FAQ answers cap at 40em.

### Named Rules
**The Width Axis Rule.** Hierarchy moves along Archivo's width axis as much as its weight: wide (108 to 125%) for headings, numerals and the wordmark, normal (100%) for controls and titles, condensed (75%) for annotations. Never set a heading condensed or a label wide.

**The Caps Belong to Headings Rule.** Display, headline and label are uppercase; titles, buttons and body are sentence case.

**The Sentences in Atkinson Rule.** Anything a visitor reads as a sentence is Atkinson Hyperlegible; Archivo carries names, numbers, labels and controls.

## Layout

A centered 1240px column with a fluid gutter of clamp(16px, 4vw, 48px). Major two-part sections (hero, cameras, FAQ) sit on a 12-column grid with a 24px column gap: the hero splits 6/6 copy and Fig. 1; cameras puts Fig. 3 in columns 1 to 6 and copy in 8 to 12; the FAQ puts the heading in 1 to 4 and the list in 6 to 12. The 24px column gap matches the 24px ruling on figure sheets.

Sections stack vertically separated by a full-width hairline at the top, with vertical padding of clamp(48px, 7vw, 96px) on paper and clamp(56px, 8vw, 112px) on navy plates (the close goes to clamp(64px, 9vw, 120px)). Headings are followed by 18px to the intro and 40 to 56px to the content block.

The parts list is a five-column table on desktop (number and figure ref 88px, name, symptom, service, quote link 12.5rem) that reflows at 1080px to three columns and at 640px to a 48px number rail plus one stacked column. The header is sticky at 68px (60px on phones); anchor scrolling is padded to clear it.

Breakpoints: 1080px (parts list and title block reflow), 900px (single column, nav hidden, cameras copy moves above its figure, floating WhatsApp bar appears), 640px (phone type sizes, full-width primary buttons, single-column legend and gallery).

## Elevation & Depth

The system is flat. Surfaces are separated by hairline rules, the step from Blueprint Paper to Figure Sheet, and full-bleed navy plates, never by shadow. Depth lives inside the drawings: every solid in Fig. 1 is three isometric faces in the face-top, face-front and face-side tones, and the exploded view itself is the depth story. The only shadows in the build belong to the amber WhatsApp controls, lifting the one action off the page. The sticky header uses translucency (92% paper, 10px blur) rather than a shadow.

### Shadow Vocabulary
- **Action lift** (`box-shadow: 0 2px 0 rgba(19, 35, 58, 0.12), 0 8px 18px -10px rgba(19, 35, 58, 0.5)`): Amber WhatsApp buttons at rest; deepens to `0 2px 0 rgba(19, 35, 58, 0.12), 0 14px 26px -12px rgba(19, 35, 58, 0.55)` on hover.
- **Floating bar** (`box-shadow: 0 14px 30px -12px rgba(19, 35, 58, 0.55)`): The fixed WhatsApp bar on phones.

### Named Rules
**The Drawn Depth Rule.** Depth is drawn with isometric face tones, not cast with shadows. Sheets, rows, cards and plates stay flat.

**The Only Lift Is Action Rule.** A shadow means "tap here for WhatsApp". When an amber button sits on the amber coupon it inverts to navy and loses its shadow.

## Shapes

Corners are nearly square: 2px for sheets (figure sheets, photo slots, the coupon, checklist boxes) and 3px for controls (buttons, nav links, the figure toggle, route nodes). The floating bar is the softest shape at 4px. Circles are reserved for numbered callouts (36px radius in the drawing, 28px in the legend, 34px in the parts list) and the FAQ plus-sign toggle, which rotates 45 degrees into an x when open.

Borders are drawn like linework: 1px Hairline Rule for dividers, 1.5px navy for sheets that need to stand forward (coupon, toggle, title block), 2px navy for buttons and for the rule that opens each list. Figure sheets and the coupon carry two crop marks, 14px L-shaped corner ticks offset outside the top-left and bottom-right corners. Placeholders use a 1.5px dashed Faint Graphite border; arrows and leader lines in the drawings use square or round caps, never soft blobs.

### Named Rules
**The Square Corner Rule.** Nothing rounder than 4px except a true circle, and circles mean "a numbered reference".

**The Crop Mark Rule.** A surface that represents a sheet of the manual (a figure, the coupon) gets crop marks at two opposite corners, 14px, 1.5px navy.

## Components

### Buttons
Solid, confident, a little heavy: drafting-weight borders and wide letterforms.
- **Shape:** Near-square (3px), 2px navy border, icon plus label with a 0.6em gap, minimum height 48px.
- **WhatsApp (primary):** Arrow Amber fill, navy text, action-lift shadow. Large (58px, used once per section where it is the main act, full width on phones) and small (42px, header) sizes.
- **Hover / Focus:** Fill lightens to Amber Highlight and the lift deepens over 0.2 to 0.25s on the house ease; press nudges 1px down. Focus is a 3px outline offset 3px.
- **Ink (secondary):** Navy fill, On-Plate Paper text, no shadow; hover to Plate Lift. Used where amber would compete (the cameras block) and inverted on the coupon.
- **Text links:** "Ver todos os serviços" is an underlined Archivo link with a drawn chevron; parts-list quote links ("Orçar troca de tela") carry a 3px amber underline that turns navy on hover.

### Navigation
- **Header bar:** Sticky, 68px, translucent Blueprint Paper with a hairline bottom. Wordmark left, section links, small WhatsApp button right.
- **Links:** Archivo 600 at 0.95rem in Annotation Slate, 8px 12px padding; hover fills Drafting Shade and darkens to navy. Hidden below 900px, where the header keeps only the wordmark and the WhatsApp button.
- **Floating WhatsApp bar:** Below 900px, a fixed amber bar (54px, 12px from the edges) slides up once the hero button scrolls away and slides out when the close section arrives.

### Figure Sheet (signature)
The unit of the world. A Figure Sheet ground ruled with the 24px grid, a hairline border, 2px corners, two crop marks, and a caption beneath: condensed "Fig. N" label in navy followed by an Annotation Slate sentence. Every illustration on the page lives in one, and figure numbers are cross-referenced from the parts list.

### Exploded View with Numbered Callouts (signature)
Fig. 1 draws the notebook as four isometric layers (case, board, keyboard, lid and screen) with navy 1.3px strokes. Navy callout circles with white numerals sit at the end of thin leader lines. Hovering or focusing a callout, a legend item or a parts-list row lights that layer and dims the others to 22%; the circle turns Deep Signal Blue and grows. A "Montar / Desmontar" toggle (condensed caps, 1.5px navy border) collapses and re-explodes the drawing. On load the layers rise apart once over about 1.3s on cubic-bezier(0.16, 1, 0.3, 1); reduced-motion users get the finished drawing.

### Parts List
A numbered table keyed to the figures, opened by a 2px navy rule and divided by hairlines. Each row: a 34px navy number circle with its figure reference, the service name as a title, condensed field labels ("Quando", "Serviço") over symptom and service text, and an amber-underlined quote link that opens WhatsApp with a prefilled message. A targeted row gets a soft left-to-right Arrow Blue wash.

### Route Diagram (navy plate)
Fig. 2 on a navy plate: two bordered nodes ("Você" with a drawn house, "Cabral" with the logo) bracket three routes, each a title, a sentence, and a 4px line in its arrow color with an arrowhead. Solid for "Você traz", a dashed pair going and returning for "Retiramos e devolvemos", dotted with signal arcs for "Acesso remoto". On phones the nodes become horizontal bars above and below the routes.

### Coupon
An amber sheet with a 1.5px navy border and crop marks, split by a vertical navy rule into a main area (the oversized "10%" numeral beside the headline and terms) and a stub holding the inverted navy WhatsApp button. Stacks with a horizontal rule below 900px.

### Checklist and FAQ
- **Checklist:** Hairline-ruled rows in Archivo 650, each led by an 18px square checkbox with a filled 8px navy center.
- **FAQ:** Native details elements in a hairline-ruled list opened by a 2px navy rule. Questions are 60px-tall Archivo 700 rows with a circular plus toggle that rotates to an x; hover turns the question Deep Signal Blue. Answers are Annotation Slate body text, max 40em.

### Photo Slot
A 4:3 Figure Sheet with a 1.5px dashed Faint Graphite border, a simple line drawing of the job, and the condensed label "Foto em breve", captioned "Fig. 4a" and so on. It is replaced one-for-one by a real photo with the same 4:3 crop, hairline border and 2px corners.

### Title Block (footer)
The footer is drawn as a technical drawing's title block on the navy plate: a bordered grid of cells (wordmark, then Serviços, WhatsApp, Instagram, Região, Folha), each with a condensed label key over a bold value. Six columns on desktop, three at 1080px, two on phones.

## Do's and Don'ts

### Do:
- **Do** put every illustration in a Figure Sheet with a "Fig. N" caption, and cross-reference it by number from the content it explains.
- **Do** use Arrow Amber (#e0b045) with navy text for every WhatsApp entry point, and keep one visible at all times on phones (header button, then the floating bar).
- **Do** move hierarchy along Archivo's width axis: wide caps for headings, 100% for controls, 75% condensed caps for labels.
- **Do** set every readable sentence in Atkinson Hyperlegible at 1.0625rem or larger, in Draftsman Navy or Annotation Slate.
- **Do** keep tap targets at 42px or taller; primary actions 48 to 58px.
- **Do** show depth by drawing it (isometric faces in the three face tones), and keep surfaces flat with hairline rules.
- **Do** use Deep Signal Blue (#1b6f99) for highlights and focus indication on light grounds; Arrow Blue is for navy grounds and graphics.
- **Do** keep authored motion to the one exploded-view entrance and short state transitions on cubic-bezier(0.16, 1, 0.3, 1), and honor prefers-reduced-motion.

### Don't:
- **Don't** add shadows to sheets, rows, plates or the coupon; a shadow means the WhatsApp action.
- **Don't** round corners past 4px or use pill shapes; circles are only for numbered references.
- **Don't** go lighter than Faint Graphite (#556981, 5.0:1 on paper) for any text, however small.
- **Don't** use Arrow Red or Arrow Blue as text or as a large fill on light grounds.
- **Don't** fill photo slots with stock or generated imagery; a slot stays a dashed placeholder until a real work photo replaces it.
- **Don't** present services as a grid of icon cards; services are numbered rows keyed to a drawing.
- **Don't** put eyebrow labels (a small uppercase kicker) above headings, on the coupon or anywhere else; condensed labels annotate figures, fields and title-block cells only.
