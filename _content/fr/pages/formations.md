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

{% wrapper tag="section", class="layout flow squached palette-burnt-umber" %}

_Nos formations reposent sur une pédagogie participative et fondée sur la co‑construction. La présence active et l’engagement de chacun·e sont essentiels pour nourrir les échanges et la qualité du travail collectif. Une participation aux frais de la formation est demandée, aussi comme une preuve de l’engagement du/de la participant-e à l’ensemble du dispositif. Ce prix ne doit pas constituer un frein ; des agencements sont possibles (prix préférentiel, étalement)._

{% link url="/assets/files/conditions-de-participation-final.pdf", type="file", class="button" %}Consultez nos conditions de participation{% endlink %}

{% endwrapper %}

{% sectionCollection  %}

{% collection collection="trainings", type="grid-fluid", columns=3, itemPartial="training" %}{% endcollection %}

{% endsectionCollection %}

{% wrapper tag="section", class="prose box breathe palette-burnt-umber palette-low-contrast text-center font-bold" %}
Nous pouvons vous aider à choisir la formule ou la formation qui vous convient le mieux

{% link url="contact", type="internal", collection="pages", class="button" %}Nous contacter{% endlink %}
{% endwrapper %}
