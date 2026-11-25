---
name: Manan Bhavsar Portfolio
description: A daylight exhibition of engineered objects, v1.02
colors:
  signage-blue: "#2343d0"
  signage-blue-deep: "#16298a"
  signage-blue-tint: "#e8ecfb"
  gallery-wall: "#f3f3f0"
  floor-band: "#e9e9e4"
  plinth-white: "#ffffff"
  ink: "#121417"
  ink-body: "#3b3f46"
  ink-caption: "#5b6068"
  hairline: "#dddcd7"
  hairline-strong: "#c9c8c2"
  on-blue-body: "#dce2fb"
  on-blue-caption: "#c7d0f7"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 1.4rem + 7vw, 6.5rem)"
    fontWeight: 780
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.2vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Geist Variable, Geist, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.5
  measure:
    fontFamily: "Geist Mono Variable, Geist Mono, ui-monospace, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    fontFeature: "'tnum'"
rounded:
  pill: "999px"
  field: "8px"
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "72px"
  xxl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.signage-blue}"
    textColor: "{colors.plinth-white}"
    rounded: "{rounded.pill}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signage-blue-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "15px 24px"
  wall-label:
    backgroundColor: "{colors.plinth-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 18px"
  input:
    backgroundColor: "#fafaf8"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  chip:
    backgroundColor: "{colors.plinth-white}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.pill}"
    padding: "4px 11px"
---

# Design System: Manan Bhavsar Portfolio

## Overview

**Creative North Star: "The Daylight Exhibition"**

The site is a gallery of engineered objects in daylight. Each project is an exhibit: a 3D model stands on a white plinth, a drawing hangs in a white frame, and a small museum wall label carries the facts. The walls are a cool, near-white grey; the only colour with a voice is one signage blue, used the way a museum uses wayfinding: for the action, the current place, and one full-width wall (the co-op work).

It replaced v1.01, which read as dark, off-shade and generic. The rejection is on record: no dark "tech portfolio" theme, no blueprint grid or drafting costume (title blocks, dimension lines, mono labels everywhere), no grey-on-grey.

Motion is slow and settling (expo-out), and there is one authored moment: on the home page, scrolling turns the pump base on its plinth while its wall label steps through three facts. Everything else only arrives (a short rise on scroll) and never performs.

**Key Characteristics:**
- Light gallery walls, white plinths and frames, near-black ink
- One signage blue, rare except on the co-op wall
- Wide grotesk wall titles over a quiet sans for reading
- Objects carry the page; the interface recedes
- One scroll-driven moment; everything else is a quiet rise

## Colors

A near-white neutral world with one saturated wayfinding blue.

### Primary
- **Signage Blue** (signage-blue): calls to action, the current nav item underline, links, the "Turn it in 3D" marker, progress, and the full co-op wall. On the blue wall, text uses on-blue-body and on-blue-caption, never grey.
- **Deep Signage Blue** (signage-blue-deep): hover for every blue control.
- **Blue Tint** (signage-blue-tint): the co-op room on the floor plan and room hover.

### Neutral
- **Gallery Wall** (gallery-wall): the page ground.
- **Floor Band** (floor-band): the contact area and the tools band on the co-op page.
- **Plinth White** (plinth-white): plinths, frames, wall labels, form panels.
- **Ink** (ink): headings and primary text. **Ink Body** for paragraphs; **Ink Caption** for meta lines (6:1 on the wall).
- **Hairline / Hairline Strong**: dividers and borders. Never used as text.

### Named Rules
**The Daylight Rule.** No surface darker than the floor band except the blue wall and ink text. Imagery that reads dim (the window-light scene) is lifted with a pale wash until its shadows sit near #e9e9e4.

**The Signage Rule.** Blue marks where to go or what to do. It is never decoration, never a gradient, and never a tint behind body text.

## Typography

**Display Font:** Archivo Variable at wide widths (wdth 112–125)
**Body Font:** Geist Variable
**Mono Font:** Geist Mono Variable, for measured values only

**Character:** Archivo set wide reads like exhibition wall lettering; Geist is calm and engineered for reading. Mono appears only where a number is a measurement (dates, times, sizes), so it means something when it shows up.

### Hierarchy
- **Display** (780, up to 7.2rem on the home name, 6.5rem on index pages, 0.9–0.98 line-height): one per page, the page title.
- **Headline** (700, clamp 2–2.9rem, 1.08): section titles.
- **Title** (Geist 600, 1.25rem, 1.3): exhibit and tool names.
- **Body** (400, 17px, 1.6): reading text, max 39rem measure.
- **Caption** (400, 0.85rem): exhibit meta lines, notes, form hints.

### Named Rules
**The No-Kicker Rule.** Nothing sits above a heading: no eyebrow, no section number, no category label. Meta goes under the title.

**The Measured Mono Rule.** Mono is for numbers that were measured. "By hand · 15–20 min" sets only "15–20 min" in mono.

## Layout

A 1360px max container with a fluid gutter (clamp 1.25–2.5rem). Sections breathe with large vertical spacing (72–112px). Layouts are asymmetric 7/5 or 5/7 and 4/8 splits, collapsing to one column at 900px. The home hero is a full viewport: name and statement on the left two-fifths, the exhibit on the right three-fifths. On wide screens the hero holds in place for about 1.4 viewports of scroll while the model turns; under 900px it never holds and the label simply stacks below the model.

Exhibit rows end-align on the plinth line so objects of different heights stand on one floor.

## Elevation & Depth

Depth is physical: plinths and frames cast long soft shadows from an upper-left window, and nothing else floats.

### Shadow Vocabulary
- **Plinth** (`-30px 28px 60px rgba(30,34,45,0.08)`): under every plinth.
- **Frame** (`0 24px 50px rgba(20,24,40,0.10)`): framed drawings, the resume sheet.
- **Lift** (`drop-shadow 0 26px 22px rgba(20,24,40,0.13)` on hover): an exhibit lifts off its plinth when pointed at.
- **Label** (`0 10px 30px rgba(20,24,40,0.07)`): wall labels.

### Named Rules
**The Window Rule.** Shadows always carry an offset and a soft blur, as if lit from one window. No zero-offset glows, no hard offset blocks.

## Shapes

Gallery objects are square-cornered: plinths, frames, wall labels and the contact panel have no radius. Controls are the only round things: buttons, nav contact and chips are full pills (999px); text fields have a gentle 8px radius. Dividers are 1px hairlines; a 2px ink rule marks the start of a list or aside.

## Components

### Buttons
- **Shape:** full pill.
- **Primary:** signage blue with white text, 15×24px padding.
- **Hover / Focus:** deep blue at 0.25s expo-out; 2px blue focus ring offset 3px.
- **Ghost:** transparent with a strong hairline; hover fills plinth white with an ink border.
- **Text link:** ink text with a 1px underline that turns blue on hover.

### Exhibit (signature)
- **On a plinth** for anything with a 3D model: transparent render standing on a white block; lifts 8px with a soft shadow on hover.
- **In a frame** for drawings and diagrams: white mat, hairline border, frame shadow; the frame lifts on hover.
- **Wall label beneath:** title (Geist 600), one-line summary, caption meta with discipline, term, software and a blue "Turn it in 3D" marker.

### Wall Label
White card, hairline border, label shadow, square corners. Used for the hero exhibit, project facts (key/value rows split by hairlines), and the co-op terms.

### Before/After Bars
Two bars per measure, drawn to scale: the "by hand" bar in hairline-strong (white at 35% on blue), the "with the tool" bar in blue (white on blue). They grow from the left when scrolled into view.

### Inputs / Fields
- **Style:** #fafaf8 fill, strong hairline, 8px radius.
- **Focus:** blue 2px ring and blue border, fill turns plinth white.
- **Error:** red border (#b4231a) and a status line naming the fix.

### Navigation
Wordmark in wide Archivo caps. Links in ink-body; hover and current page draw a 1.5px underline from the left. Contact is a blue pill. Under 900px the links fold into a full-width sheet.

### Floor Plan
The home page's navigation map: a drawn plan with six linked rooms. Walls draw themselves on scroll; rooms tint blue on hover; the co-op room is pre-tinted.

## Do's and Don'ts

### Do:
- **Do** put every project on a plinth (models) or in a frame (drawings), with its wall label under it.
- **Do** keep the page light: gallery wall ground, plinth white surfaces, shadows near #e9e9e4.
- **Do** use expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`) for arrivals and keep one authored scroll moment per page at most.
- **Do** respect reduced motion: no pinning, no turning, no drawing; content is simply present.

### Don't:
- **Don't** bring back the dark theme, a blueprint grid, title-block costume or mono labels on everything.
- **Don't** put a label, number or kicker above a heading.
- **Don't** use blue as decoration or as a gradient.
- **Don't** use big-number stat tiles; show a measured change as bars drawn to scale.

## Provenance

- `public/hero/wall-light.webp` is a still capture of the Unicorn Studio scene "Gallery wall hero" (project 6e3E1DVqTYg0fE9pzmHN), shown until the live scene loads and in its place when motion is reduced.
- `public/posters/*.webp` are renders of Manan's own Inventor and Revit models (transparent, with a baked ground shadow) and crops of his own drawing sets.
