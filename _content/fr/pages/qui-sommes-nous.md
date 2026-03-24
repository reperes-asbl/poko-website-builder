---
translationKey: qui-sommes-nous
lang: fr
createdAt: 2025-11-14T09:41:00.000Z
uuid: b7c6e1455bf5
localizationKey: 059b45dca2ca
name: Qui sommes-nous?
eleventyNavigation:
  order: 0
vars: null
---

{% partialWrapper "page-header.njk", { image: "/_images/6d5a62235cdb6bd5c0150f8e6d800280.webp", class: "palette-delft-blue" } %}

# Qui sommes-nous?

Repères ASBL, c’est une équipe engagée depuis plus de 25 ans dans la formation et l’accompagnement des professionnel·les du social et de la santé.
Notre démarche? Promouvoir la santé comme un équilibre vivant, où chaque personne, chaque communauté et chaque contexte comptent.
Découvrez ici notre histoire, nos valeurs et la vision qui guide nos actions.

{% endpartialWrapper %}

{% wrapper tag="section", class="layout reset-down-w palette-delft-blue-contrast bleed-bg v--bleed-bottom:25rem v--width-fluid-min:60%" %}
## Un peu d’histoire

{% sectionTwoColumns  %}

{% twoColumns type="fixedFluid", widthFixed="300px", fixedSide="fixedRight" %}
{% twoColumnsItem  %}
### Nos débuts (1998 – 2005)

Repères ASBL voit le jour à la fin des années 1990, dans le prolongement des actions de prévention du VIH/SIDA portées par les centres de planning familial. Dès le départ, une équipe pluridisciplinaire — psychologues, médecins, travailleurs et travailleuses sociaux — conçoit des formations généralistes, centrées sur la santé des personnes et des communautés.
Ces formations s’adressent à des professionnel·les de tous horizons: institutions généralistes, structures spécialisées, milieux éducatifs ou services sociaux et de soin. Les membres fondateurs — Denise Salquin, Paule Dusquenne, Maggy Richard, Pascal Kayaert, Patricia Piron et Pierre Brasseur — posent les bases de l’association, rédigent les statuts et obtiennent un financement de la Communauté française.
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
{% image src="/_images/reperes-asbl-archive.webp", width=300 %}
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

{% sectionTwoColumns  %}

{% twoColumns type="fixedFluid", widthFixed="300px", fixedSide="fixedLeft" %}
{% twoColumnsItem  %}
{% image src="/_images/reperes-asbl-archive.webp", width=300 %}
{% endtwoColumnsItem %}
{% twoColumnsItem  %}
### L’essor à l’époque de la Communauté française (2006 – 2013)

Entre 2006 et 2013, Repères consolide ses pratiques en promotion de la santé, malgré des moyens limités. L’association élargit ses champs d’action et participe à plusieurs projets innovants: théâtre-action à l’école, bien-être scolaire, relecture de projets pour la Fédération Wallonie-Bruxelles.

Cette période marque également la formalisation progressive des références méthodologiques propres à Repères: travail pluridisciplinaire, posture professionnelle réfléchie, et approche participative centrée sur les représentations et pratiques des participant·es.

### De la régionalisation à aujourd’hui (2014 – {{ year }})

La régionalisation de la promotion de la santé à partir de 2014 a transformé le cadre d’action de Repères.
{% endtwoColumnsItem %}
{% endtwoColumns %}

{% endsectionTwoColumns %}

- À Bruxelles, l’association est reconnue comme service support par la COCOF dès 2018 et continue d’accompagner les opérateurs du secteur, tout en proposant des formations ouvertes aux professionnel·les du social et de la santé.
- En Wallonie, Repères participe aux plans et décrets régionaux, et obtient en 2023 un agrément comme opérateur en promotion de la santé.
{% endwrapper %}

{% wrapper tag="section", class="squashed prose box palette-cooper border-5" %}
## Notre cadre de référence

Pour Repères, la promotion de la santé n’est pas seulement un domaine d’intervention: c’est une démarche qui guide toutes nos actions. Il s’agit d’une façon de penser et d’agir fondée sur des principes, des méthodes et des valeurs.

### Nos principes fondateurs

1. Une vision dynamique de la santé
2. Articulation entre l’individuel et le collectif
3. Une approche circulaire et systémique
4. Transversalité et intersectorialité
5. Participation et co-construction
{% endwrapper %}

{% wrapper tag="section", class="palette-ylnMn-blue-contrast bleed-bg v--bleed-top:14rem" %}
## Se former en promotion de la santé à Repères

C’est d’abord s’offrir un espace pour prendre du recul sur ses pratiques, interroger ses repères et découvrir d’autres manières de travailler. Nos formations permettent d’explorer de nouvelles pistes d’action en lien avec les réalités du terrain, tout en s’appropriant les concepts et les méthodologies d’une approche globale de la santé.

Chez Repères, la formation se vit en présentiel et s’anime en binôme, afin de croiser les regards, soutenir la dynamique du groupe et faire émerger une diversité d’expériences. Notre pédagogie est interactive et expérientielle : il ne s’agit pas seulement de transmettre des informations, mais de proposer des exercices, des mises en situation et des processus collectifs qui permettent de comprendre « de l’intérieur » les logiques de la promotion de la santé.

Ces expériences vécues ensemble, dans un cadre sécurisant et impliquant, soutiennent le développement d’une posture professionnelle adaptée à la complexité des enjeux de santé et des contextes de vie.

⚠️ ? Notre charte de promotion de la santé ? ⚠️
{% endwrapper %}

{% image src="/_images/photo-equipe-dos.webp", aspectRatio="2", class="rounded-[--radius-card]" %}

{% sectionCollection  %}
{% sectionHeader class="width-prose" %}
## Notre équipe

L’équipe de Repères rassemble des formateurs et formatrices pluridisciplinaires : travailleurs sociaux, psychologues, pédagogues et spécialistes en santé communautaire, éducation sexuelle et affective, formation d’adultes, supervision d’équipes et accompagnement de projets.

Cette diversité enrichit nos formations grâce à la mise en commun des expériences, une réflexion continue sur nos pratiques et une

écoute attentive des besoins des participant·es.

### Nos formateurs et formatrices
{% endsectionHeader %}
{% collection collection="people", filters=[], sortCriterias=[{"direction":"asc","by":"title"}], class="palette-vermillon" %}{% endcollection %}
{% sectionFooter class="prose" %}
## Notre gouvernance

Repères soutient une organisation en auto-gestion. L’organe d’administration est ainsi composé de membres de l’équipe. L’assemblée générale rassemble des membres actuels et anciens, notamment issus du champ de la promotion de la santé, mais également d’autres secteurs.
{% endsectionFooter %}
{% endsectionCollection %}
