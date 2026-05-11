{% set palettes = ['delft-blue', 'copper', 'vermilion', 'orange-peel', 'ylnmn-blue', 'burnt-umber'] %}
{% set currentPalette = palettes[index % palettes.length] %}

<article class="training-card card box flow palette-{{ currentPalette }} palette-low-contrast breakout-clickable">
<h4 class="p">{{ name | safe }}</h4>
{% if metadata.image.src %}
<img src="{{ metadata.image.src }}" alt="{{ metadata.image.alt }}" title="{{ metadata.image.title }}" class="">
{% endif %}

<ul role="list" class="">
<li {{tempo | io}}>{{ tempo }}</li>
<li {{duration | io}}>{{ duration }}</li>
<li {{price | io}}>{{ price | safe }}</li>
<li {{place | io}}>{{ place }}</li>
</ul>

{% link url=url, text="En savoir plus...", class="clickable button palette-" ~ currentPalette ~ " palette--contrast" %}{% endlink %}

</article>

{% css %}

.training-card img {
border-top: 2px solid currentColor;
border-radius: 0;
aspect-ratio: 2.5;
}

.training-card p:last-of-type {
flex-grow: 1;
display: flex;
align-items: flex-end;
}

{% endcss %}
