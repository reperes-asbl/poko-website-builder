export default function ({ content, class: className }) {
  return `<div class="card item-two-columns ${className || ""}">
${content}
</div>`;
}
