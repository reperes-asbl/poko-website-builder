export default async function (data) {
  const { title, description, image } = data.pagePreview;
  const imageStr = image ? `<img src="${image.src}" alt="${title}" width="200" class="mx-auto" style="border-radius: var(--radius-round);">` : "";
  const titleStr = title ? `<h3 class="p">${title}</h3>` : "";
  const descriptionStr = description ? `<p>${description}</p>` : "";
  const output = [imageStr, titleStr, descriptionStr]
    .filter(Boolean)
    .join("\n");

  // const pagePreviewSc = this.pagePreview
  // const articlePreviewSc = this.articlePreview
  return `<article class="card item-collection text-center flow v--flow-space:0.5em">
${output}
</article>`;
}
