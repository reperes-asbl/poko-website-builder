<section class="trainings-list grid-fluid v--columns:3 max-inline-size-[--width-max]">

{% set palettes = ['delft-blue', 'copper', 'vermilion', 'orange-peel', 'ylnmn-blue', 'burnt-umber'] %}

{% for training in collections.trainings %}
{% set currentPalette = palettes[loop.index0 % palettes.length] %}

<div class="card box flow palette-{{ currentPalette }} palette-low-contrast breakout-clickable">
<h4 class="p">{{ training.data.name | safe }}</h4>
{% if training.data.metadata.image.src %}
<img src="{{ training.data.metadata.image.src }}" alt="{{ training.data.metadata.image.alt }}" title="{{ training.data.metadata.image.title }}" class="">
{% endif %}

<ul role="list" class="">
<li {{training.data.tempo | io}}>{{ training.data.tempo }}</li>
<li {{training.data.duration | io}}>{{ training.data.duration }}</li>
<li {{training.data.price | io}}>{{ training.data.price | safe }}</li>
<li {{training.data.place | io}}>{{ training.data.place }}</li>
</ul>

{% link url=training.url, text="En savoir plus...", class="clickable button palette-" ~ currentPalette ~ " palette--contrast" %}{% endlink %}

</div>
{% endfor %}
</section>

{% css %}

.trainings-list img {
border-top: 2px solid currentColor;
border-radius: 0;
aspect-ratio: 2.5;
}

.trainings-list .card p:last-of-type {
flex-grow: 1;
display: flex;
align-items: flex-end;
}

.trainings-list li {
padding-block: 0.4em;
border-block-start: solid 1px currentColor;
&:last-of-type {
border-block-end: solid 1px currentColor;
}
}

{#

.card p, .card h4, .card li {
padding-inline: var(--step--2);
}

ul {
margin-left: 0;
padding-left: 0;
list-style-type: none;
}

.card li {
margin-left: 0;
border-block-start: 1px solid currentColor;
}

.card li:last-child {
border-block-end: 1px solid currentColor;
}

#}
{% endcss %}
