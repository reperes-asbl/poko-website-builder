<section class="grid-fluid v--columns:3 max-inline-size-[--width-max]">
{% for training in collections.trainings %}
<div class="card palette-delft-blue palette-low-contrast">
<h4>{{ training.data.name }}</h4>
{% if training.data.metadata.image.src %}
<img src="{{ training.data.metadata.image.src }}" alt="{{ training.data.metadata.image.alt }}" title="{{ training.data.metadata.image.title }}" class="border-img">
{% endif %}

// TODO: il n'y a pas de description pour la preview

<ul>
<li>{{ training.data.duration }}</li>
<li>{{ training.data.price }}</li>
<li>{{ training.data.place }}</li>
</ul>

{% link url=training.url, text="En savoir plus...", class="button palette-delft-blue-contrast" %}

<!-- // TODO: il n'y a pas d'url vers la pages détails formations -->

</div>
{% endfor %}
</section>

{% css %}




h4 {
margin-top: 0;
}

p, h4, li {
 padding-inline: var(--step--2);
}

.border-img {
border-top: 2px solid var(--Delft-Blue);
}

ul {
margin-left: 0;
padding-left: 0;
list-style-type: none;
}

li {
margin-left: 0;
border-block-start: 1px solid var(--Delft-Blue);
}

li:last-child {
border-block-end: 1px solid var(--Delft-Blue);
}

{% endcss %}
