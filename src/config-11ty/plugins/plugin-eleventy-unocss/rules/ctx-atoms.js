export default [
  // Define CSS variables on the fly with CSS-like syntax
  [
    /^v--([a-zA-Z0-9-]+):(.+)$/,
    ([, varName, value]) => {
      // If value starts with --, it's a CSS variable reference
      const cssValue = value.startsWith("--") ? `var(${value})` : value;
      return { [`--${varName}`]: cssValue };
    },
  ],
  // Aspect ratio utility
  [
    /^aspect-ratio-(\d+(?:\.\d+)?)$/,
    ([, d]) => ({ "aspect-ratio": d, "object-fit": "cover" }),
  ],
  // Width utility
  [
    /^width-prose$/,
    (match, { symbols }) => {
      return {
        [symbols.selector]: () => `:where(.width-prose)`,
        "max-inline-size": "var(--width-prose)",
        "margin-inline": "auto",
      };
    },
  ],
  [
    /^width-max$/,
    (match, { symbols }) => {
      return {
        [symbols.selector]: () => `:where(.width-max)`,
        "max-inline-size": "var(--width-max)",
        "margin-inline": "auto",
      };
    },
  ],
  [
    /^width-body$/,
    (match, { symbols }) => {
      return {
        [symbols.selector]: () => `:where(.width-body)`,
        "max-inline-size": "var(--width-body)",
        "margin-inline": "auto",
      };
    },
  ],
];
