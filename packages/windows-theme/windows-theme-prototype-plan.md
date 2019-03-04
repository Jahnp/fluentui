# Windows theme prototype checklist
## Homework
[ ] Check existing WinUI controls
[ ] Try loading web view/making PWA that uses windows theme

## Design Language
[ ] Verify colors
[ ] Verify colors

# Observations
- Possible concern: There may be concepts in the Windows controls that don't exist in Fabric (e.g. accent colors, "brushes" to distinguish between light & dark themes, etc)
  - It does seem like these can be handled by new semantic color slots, though. Maybe?
    - If  need to update the default theme, that can be done/referenced in these files:
    - packages/styling/theme.ts
      - createTheme
    - ITheme.ts
    - Resource references: https://github.com/Microsoft/microsoft-ui-xaml/tree/d883cf3593912ded1a1fcc73f38768fda8ee3a45/dev/CommonStyles
  - Full list: (from https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.colorpaletteresources)
    - Accent
    - AltHigh
    - AltLow
    - AltMedium
    - AltMediumHigh
    - AltMediumLow
    - BaseHigh
    - BaseLow
    - BaseMedium
    - BaseMediumHigh
    - BaseMediumLow
    - ChromeAltLow
    - ChromeBlackHigh
    - ChromeBlackLow
    - ChromeBlackMedium
    - ChromeBlackMediumLow
    - ChromeDisabledHigh
    - ChromeDisabledLow
    - ChromeGray
    - ChromeHigh
    - ChromeLow
    - ChromeMedium
    - ChromeMediumLow
    - ChromeWhite
    - ErrorText
    - ListLow
    - ListMedium