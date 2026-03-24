export default function ({
  content,
  type,
  gap,
  class: className,
  // Switcher options
  widthWrap,
  // Fixed-fluid options
  fixedSide,
  widthFixed,
  widthFluidMin,
}) {
  // Default: switcher (Symmetrical)
  const layoutClass = type === "fixedFluid" ? "fixed-fluid" : "switcher";
  // small="fixedLeft" → no extra class (left is default)
  // small="fixedRight" → add "fixed-right" class
  const modifierClass = fixedSide === "fixedRight" ? "fixed-right" : "";
  const styles = {
    "--width-fixed": widthFixed,
    "--width-fluid-min": widthFluidMin,
    "--gap-fixed-fluid": gap,
    "--width-wrap": widthWrap,
    "--gap-switcher": gap,
  };

  let styleStr = Object.entries(styles)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
  styleStr = styleStr ? `style="${styleStr}"` : "";

  const classes = [
    "layout section-main two-columns",
    layoutClass,
    modifierClass,
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  //   const defaultCss =
  //     type === "fixedFluid"
  //       ? `{% css %}
  // .fixed-fluid {
  //   --width-fixed: calc(var(--width-max) - var(--width-prose) - var(--gap-fixed-fluid, 1em));
  // }
  // {% endcss %}
  // `
  //       : "";

  return `<div class="${classes}" ${styleStr}>
${content}
</div>
`;
  // ${defaultCss}
}
