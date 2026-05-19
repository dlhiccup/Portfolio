# Change accent color theme

## Summary

Replace the current gold accent (`#e4b45a` dark / `#a06b10` light) with a new color across both dark and light themes.

## Current state

The accent color (`--gold` / `--gold-dim`) is used throughout the site:

- Gradient text (`.text-gradient`) in the hero and section headings
- Section label decorations (`.section-label::before` gradient)
- Text selection highlight (`::selection`)
- Tech tags, hover states, and active indicators
- Scroll progress bar

**Dark mode**
```css
--gold:     #e4b45a;
--gold-dim: rgba(228, 180, 90, 0.15);
```

**Light mode**
```css
--gold:     #a06b10;
--gold-dim: rgba(160, 107, 16, 0.12);
```

All values live in `app/globals.css` (lines 27–28, 40–41) and the `.text-gradient` utility (lines 90–101).

## Requested change

Replace the gold palette with a new accent color. The new values should:

1. Provide sufficient contrast against `--canvas` and `--surface` in both modes (WCAG AA minimum)
2. Have a matching `*-dim` variant (low-opacity tint) for backgrounds and hover states
3. Update `.text-gradient` in both `:root` and `html.light` blocks
4. Update the `.section-label::before` gradient in both modes

## Files to touch

| File | What changes |
|---|---|
| [app/globals.css](app/globals.css) | `--gold`, `--gold-dim`, `.text-gradient`, `.section-label::before` |
| [components/TechTag.tsx](components/TechTag.tsx) | Any hardcoded gold hex values (verify) |
| [components/ScrollProgress.tsx](components/ScrollProgress.tsx) | Accent color on the progress bar (verify) |

## Acceptance criteria

- [ ] Dark mode accent updated and visually consistent
- [ ] Light mode accent updated and visually consistent
- [ ] No hardcoded `#e4b45a` / `#a06b10` / `#f5d48e` / `#c8880e` / `#8a5a0c` remaining
- [ ] Text selection and `.text-gradient` use the new color
- [ ] Passes a quick visual check in both themes
