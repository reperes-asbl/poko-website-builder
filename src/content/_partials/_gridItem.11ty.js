export default function ({ content, class: className }) {
  return `<div class="card item-grid ${className || ""}">
${content}
</div>`;
}
