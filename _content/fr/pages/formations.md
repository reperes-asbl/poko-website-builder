---
translationKey: formations
order: 8
lang: fr
createdAt: 2025-11-14T09:43:00.000Z
name: Formations
eleventyNavigation:
  add: Nav
---

{% partialWrapper "page-header.njk", { image: "", class: "palette-burnt-umber" } %}

# Formations

Des espaces pour apprendre, réfléchir et agir ensemble.
Repères conçoit des formations qui soutiennent les professionnel·les du social et de la santé dans l’évolution de leurs pratiques et la construction d’environnements favorables à la santé.

Découvrez ci-dessous nos modules de formation: des temps pour penser, expérimenter et faire évoluer les pratiques, au croisement du social et de la santé.
{% endpartialWrapper %}

{% partial "trainings.md" %}

{% wrapper tag="section", class="prose box breathe palette-burnt-umber palette-low-contrast text-center font-bold" %}
Nous pouvons vous aider à choisir la formule ou la formation qui vous convient le mieux

{% link url="contact", type="internal", collection="pages", class="button" %}Nous contacter{% endlink %}
{% endwrapper %}
