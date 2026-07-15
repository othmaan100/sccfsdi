# Design DNA & Style Guide

This document outlines the design system, color palette, typography, and visual rules for the Sahel Ecosystem Restoration & Community Empowerment organization's website.

## 1. Color Palette

The colors are inspired by the Sahel landscape, soil, vegetation, and solar warmth.

| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| **Primary** | Earthy Green | `#4A7C59` | Dominant brand color, navigation accents, primary headers, icons, success indicators. |
| **Secondary** | Warm Brown | `#6B4F3A` | Supporting brand color, text elements, card backgrounds, footer background. |
| **Accent** | Warm Gold / Amber | `#E3A53C` | Call-To-Action (CTA) buttons, highlights, badges, important warnings. |
| **Neutral Dark** | Charcoal/Dark Soil | `#2C2520` | Primary text, titles, deep background elements. |
| **Neutral Light** | Off-white / Sand | `#F7F5F0` | Main site background, light cards, text backgrounds. |
| **Border/Divider** | Light Sand | `#E6E2D8` | Section borders, lines, inactive tabs. |

## 2. Typography

We use clean, professional sans-serif typefaces to convey credibility and modernism to donors, government, and NGO partners.

- **Primary Font**: **Inter** (fallback: system sans-serif)
  - Loaded via Google Fonts.
- **Headings Font**: **Outfit** or **Inter** (Outfit adds a premium, structured geometric touch that feels modern and credible).

### Hierarchy:
- **H1 (Hero Titles)**: 3rem (48px) to 4rem (64px) | Bold (700) | Line-height: 1.1
- **H2 (Section Headings)**: 2.25rem (36px) to 2.5rem (40px) | Semi-Bold (600) | Line-height: 1.2
- **H3 (Sub-sections)**: 1.5rem (24px) | Medium (500) | Line-height: 1.3
- **Body Text**: 1rem (16px) | Regular (400) | Line-height: 1.6
- **Captions / Small Text**: 0.875rem (14px) | Line-height: 1.5

## 3. Visual Language & Components

- **Borders & Corners**: Soft rounded corners (`border-radius: 12px` / `rounded-xl`) to feel modern, friendly yet professional.
- **Buttons**:
  - **Primary CTA**: Warm Gold background (`#E3A53C`), dark text (`#2C2520`), bold weight, subtle hover lift animation.
  - **Secondary CTA**: Transparent with Earthy Green border (`#4A7C59`) or solid Earthy Green background with white text.
- **Glassmorphism**: Subtle glassmorphism (`backdrop-filter: blur(10px)`) for the navigation bar and hero text cards to give a premium feel.
- **Hover Transitions**: Smooth transitions on all interactive elements (`transition-all duration-300 ease-in-out`).

## 4. Imagery Guidelines

- **Authenticity Over Stock**: Prioritize authentic field photos showing reforestation sites, farmer training sessions, and community engagement in Yobe State.
- **Tone**: Warm, optimistic, high-contrast daylight, showcasing active human participation.
- **Treatments**: Subtle green or brown overlays on hero images for text legibility.
