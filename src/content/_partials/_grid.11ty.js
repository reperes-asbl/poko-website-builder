export default function ({
  content,
  type,
  gap,
  class: className,
  widthWrap,
  columns,
  widthColumnMin,
  widthColumnMax,
}) {
  const gridItemRegex = /class=["'][^"']*\bitem-grid\b[^"']*["']/g;
  const childrenNb = (content?.match(gridItemRegex) || []).length;
  const layoutClass = childrenNb > 3 ? "grid-fluid" : "switcher";
  const styles = {
    "--columns": columns,
    "--gap": gap,
    "--width-column-min": widthColumnMin,
    "--width-column-max": widthColumnMax,
    "--width-wrap": widthWrap,
  };
  let styleStr = Object.entries(styles)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
  styleStr = styleStr ? `style="${styleStr}"` : "";

  return `<div class="layout section-main list-grid ${type || layoutClass} ${className || ""}" ${styleStr}>
${content}
</div>`;
}
