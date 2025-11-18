import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

// ✅ Articles HTML + miniatures
const articles = {
"site-sans-cms": {
  title: "Pourquoi créer son site sans passer par un CMS",
  description: "Un site sur-mesure offre liberté, performance et évolutivité.",
  image: "/images/crea_site_sans_cms.png",
  content: `
<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Introduction</h2>
<p>Beaucoup d’entrepreneuses débutent avec des CMS comme WordPress, Wix ou Shopify. Ces plateformes séduisent par leur simplicité apparente : quelques clics suffisent pour avoir un site en ligne. Pourtant, derrière cette facilité se cachent des limites techniques et stratégiques qui peuvent freiner la croissance d’un projet à moyen et long terme.</p>
<p>Créer son site sans CMS, c’est choisir la liberté, la performance et l’élégance. C’est aussi s’offrir un outil digital qui reflète pleinement ton identité et qui peut évoluer sans contraintes externes.</p>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Les limites des CMS</h2>
<p>Les CMS sont conçus pour répondre aux besoins génériques d’un maximum d’utilisateurs. Résultat : ils imposent des cadres rigides qui ne correspondent pas toujours aux ambitions d’une entrepreneuse créative ou d’une marque en pleine expansion.</p>
<ul class="list-disc list-inside">
  <li><strong>Design figé et peu personnalisable :</strong> les thèmes proposés sont souvent limités. Même avec des options de personnalisation, il est difficile de sortir des sentiers battus et de créer une identité visuelle vraiment unique.</li>
  <li><strong>Dépendance aux plugins :</strong> pour ajouter des fonctionnalités, il faut installer des extensions. Cela entraîne une dépendance à des outils externes, parfois mal maintenus, qui peuvent ralentir ton site ou créer des failles de sécurité.</li>
  <li><strong>Performances moyennes :</strong> les CMS embarquent beaucoup de code inutile. Ton site peut vite devenir lourd, ce qui impacte la vitesse de chargement et donc l’expérience utilisateur et le référencement.</li>
  <li><strong>Sécurité fragile :</strong> les CMS sont des cibles privilégiées pour les hackers. Les failles connues sont exploitées massivement, et il faut constamment mettre à jour le système et les plugins pour limiter les risques.</li>
</ul>
<p>En résumé, un CMS peut convenir pour un projet simple ou temporaire, mais il montre vite ses limites dès qu’il s’agit de construire une marque solide et durable.</p>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Les avantages d’un site sans CMS</h2>
<p>Opter pour un site développé sur-mesure, sans CMS, c’est reprendre le contrôle total sur ton univers digital. Voici quelques bénéfices concrets :</p>
<ul class="list-disc list-inside">
  <li><strong>Liberté créative :</strong> chaque détail du design est pensé pour toi. Pas de thème imposé, pas de contraintes visuelles : ton site devient une véritable extension de ton identité.</li>
  <li><strong>Performance optimisée :</strong> le code est léger et adapté à tes besoins. Résultat : un site rapide, fluide et agréable à naviguer, même sur mobile.</li>
  <li><strong>Évolutivité :</strong> ton site peut grandir avec ton activité. Tu peux ajouter des fonctionnalités spécifiques sans dépendre d’un plugin externe.</li>
  <li><strong>Sécurité renforcée :</strong> un site sur-mesure est moins exposé aux attaques automatisées. Le code est maîtrisé et les failles potentielles sont limitées.</li>
  <li><strong>Expérience utilisateur personnalisée :</strong> tu peux créer des parcours uniques, adaptés à ta clientèle, pour maximiser l’engagement et la conversion.</li>
</ul>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Exemples concrets</h2>
<p>Imagine une entrepreneuse qui lance une marque de bijoux haut de gamme. Avec un CMS, elle devra se contenter d’un thème e-commerce générique, difficile à adapter à l’univers raffiné de sa marque. Avec un site sur-mesure, elle peut créer une expérience immersive : animations élégantes, storytelling visuel, parcours d’achat fluide et rassurant.</p>
<p>Autre exemple : une coach qui souhaite proposer des programmes personnalisés. Un CMS lui imposera des formulaires standards. Un site sur-mesure lui permettra de concevoir un espace client unique, avec des fonctionnalités adaptées à son approche pédagogique.</p>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Conclusion</h2>
<p>Un site sans CMS est un investissement stratégique. Il devient un outil vivant, capable d’évoluer avec ton activité et de refléter ton identité unique. C’est un choix qui demande plus de réflexion au départ, mais qui offre une liberté incomparable sur le long terme.</p>
<p>En optant pour un site sur-mesure, tu choisis la transparence, la qualité et la pérennité. Tu t’assures que chaque étape est pensée pour toi, avec des tests réalisés ensemble et une approche professionnelle qui inspire confiance. Ton site n’est plus seulement une vitrine : il devient un véritable levier de croissance et un espace où ton univers peut s’exprimer pleinement.</p>
    `,
},

"identite-visuelle": {
  title: "Comment définir ton identité visuelle",
  description: "Ton identité visuelle est ton empreinte digitale.",
  image: "/images/id_visuelle.png",
  content: `
<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Introduction</h2>
<p>Ton identité visuelle est bien plus qu’un logo. C’est une ambiance, une énergie, une signature qui raconte ton histoire. Elle traduit ton univers en couleurs, formes et typographies, et permet à ton audience de ressentir immédiatement qui tu es et ce que tu représentes.</p>
<p>Dans un monde saturé de contenus, une identité visuelle forte est ce qui te distingue, ce qui rend ton projet mémorable et ce qui inspire confiance. Elle agit comme une empreinte digitale : unique, reconnaissable et impossible à copier.</p>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Les piliers d’une identité forte</h2>
<p>Construire une identité visuelle cohérente demande de travailler sur plusieurs éléments fondamentaux :</p>
<ul class="list-disc list-inside">
  <li><strong>Palette de couleurs émotionnelle :</strong> les couleurs ne sont pas neutres. Elles véhiculent des émotions et des valeurs. Par exemple, le doré évoque le prestige et la confiance, le vert la sérénité et la nature, le terracotta la chaleur et l’authenticité. Choisir une palette adaptée, c’est créer une atmosphère qui parle directement à ton audience.</li>
  <li><strong>Typographies cohérentes avec ton ton :</strong> une police élégante et fine ne transmet pas le même message qu’une typographie audacieuse et moderne. Les typographies doivent refléter ta personnalité et rester cohérentes sur tous tes supports.</li>
  <li><strong>Iconographie et visuels alignés :</strong> les icônes, illustrations et photos doivent renforcer ton message. Une identité visuelle forte ne se limite pas au logo : elle englobe tout l’univers graphique qui accompagne ton projet.</li>
  <li><strong>Composition et hiérarchie :</strong> la manière dont tu structures tes éléments visuels (espacements, alignements, proportions) influence la lisibilité et l’impact de ton message.</li>
</ul>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Pourquoi c’est essentiel</h2>
<p>Ton identité visuelle est la première impression que tu donnes. Avant même de lire ton contenu, ton audience perçoit ton univers à travers les couleurs, les formes et le style graphique. Une identité forte :</p>
<ul class="list-disc list-inside">
  <li>Crée une <strong>reconnaissance immédiate</strong> : on associe ton style à ta marque.</li>
  <li>Renforce la <strong>confiance</strong> : une identité cohérente inspire sérieux et professionnalisme.</li>
  <li>Facilite la <strong>différenciation</strong> : tu te démarques dans un marché saturé.</li>
  <li>Augmente la <strong>cohérence marketing</strong> : chaque support (site, réseaux sociaux, documents) raconte la même histoire.</li>
</ul>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Exemples concrets</h2>
<p>Imagine une entrepreneure dans le domaine du bien-être. Si elle utilise une identité visuelle basée sur des tons verts doux et des typographies arrondies, son audience ressentira immédiatement une atmosphère de calme et de sérénité. À l’inverse, une marque de mode audacieuse pourra choisir des contrastes forts et des typographies modernes pour transmettre énergie et créativité.</p>
<p>Ces choix ne sont jamais anodins : ils influencent la perception et l’émotion que ton audience associe à ton projet.</p>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Conclusion</h2>
<p>Ton identité visuelle est bien plus qu’un habillage esthétique. Elle crée de la reconnaissance et de la confiance, et devient un levier puissant pour ton marketing. Elle doit être pensée avec stratégie, testée et validée ensemble pour garantir qu’elle reflète fidèlement ton univers.</p>
<p>En investissant dans une identité visuelle sur-mesure, tu choisis la cohérence, la transparence et la pérennité. Tu offres à ton audience une expérience mémorable et tu poses les bases solides d’une marque qui rayonne.</p>
    `,
},

  "visibilite-au-dela-du-site": {
  title: "Comment se rendre visible au-delà d’un bon site",
  description: "La visibilité vient d’une stratégie globale.",
  image: "/images/visibilite.png",
  content: `
<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Introduction</h2>
<p>Un site bien conçu est une fondation solide. Il reflète ton univers, rassure tes clientes et sert de vitrine professionnelle. Mais pour rayonner, il faut aller plus loin : la visibilité ne se limite pas à ton site. Elle se construit à travers une stratégie globale qui combine contenu, réseaux sociaux, collaborations et présence active dans ton écosystème.</p>
<p>Un site est comme une maison : il doit être beau et accueillant, mais pour que les gens viennent le visiter, il faut aussi leur donner envie de franchir la porte. C’est là que les leviers de visibilité entrent en jeu.</p>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Les leviers de visibilité</h2>
<p>Pour que ton site soit découvert et apprécié, il doit s’inscrire dans une stratégie plus large. Voici les principaux leviers :</p>
<ul class="list-disc list-inside">
  <li><strong>Création de contenu utile et inspirant :</strong> rédiger des articles de blog, partager des conseils pratiques, publier des témoignages ou des études de cas. Le contenu est ce qui attire les visiteurs et leur donne une raison de revenir. Il doit être pensé pour ta cible et répondre à ses besoins.</li>
  <li><strong>Présence régulière sur les réseaux sociaux :</strong> Instagram, LinkedIn, TikTok ou Pinterest selon ton audience. Les réseaux sociaux permettent de créer du lien, de montrer les coulisses de ton activité et de renforcer ton image de marque. La régularité est clé : mieux vaut publier peu mais de façon constante que beaucoup puis disparaître.</li>
  <li><strong>Collaborations stratégiques :</strong> s’associer à d’autres entrepreneures, participer à des podcasts, écrire des articles invités ou organiser des événements en ligne. Les collaborations élargissent ton audience et renforcent ta crédibilité.</li>
  <li><strong>Référencement naturel (SEO) :</strong> optimiser ton contenu pour Google afin d’apparaître dans les résultats de recherche. Un bon SEO est un investissement durable qui attire des visiteurs qualifiés sans dépendre de la publicité.</li>
  <li><strong>Email marketing :</strong> construire une liste de contacts et envoyer des newsletters régulières. L’email reste un canal puissant pour fidéliser et convertir, car il crée une relation directe et personnalisée.</li>
</ul>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Exemples concrets</h2>
<p>Imagine une créatrice de bijoux qui lance son site. Si elle se contente de son site, elle aura peu de visites. Mais si elle partage régulièrement des conseils sur l’entretien des bijoux sur son blog, publie des photos inspirantes sur Instagram, collabore avec une influenceuse mode et optimise ses pages pour Google, elle multiplie ses points de contact et attire une audience qualifiée.</p>
<p>Autre exemple : une coach en développement personnel. Son site présente ses services, mais sa visibilité vient aussi de ses posts LinkedIn, de ses vidéos YouTube où elle partage des conseils pratiques, et de ses newsletters qui entretiennent la relation avec ses clientes. Son site devient alors le centre d’un écosystème riche et vivant.</p>

<h2 class="text-[#d4af37] text-xl font-semibold mt-8 mb-4">Conclusion</h2>
<p>Ton rayonnement vient de ta capacité à créer du lien et à inspirer. Un site est une base solide, mais c’est l’ensemble de ta stratégie qui te rend visible et mémorable. En combinant contenu, réseaux sociaux, collaborations, SEO et email marketing, tu construis une présence cohérente et rassurante.</p>
<p>La visibilité ne se décrète pas, elle se construit pas à pas, avec transparence et constance. C’est ce qui transforme ton site en véritable hub de ton univers digital, capable de rayonner bien au-delà de ses pages.</p>
    `,
},

};

// ✅ SEO dynamique
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];
  return {
    title: article?.title || "Article introuvable",
    description: article?.description || "Cet article n'existe pas dans le blog Studio AiméeCréa",
  };
}

// ✅ Pages statiques
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

// ✅ Rendu de l’article avec layout inspiré
export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return <div className="p-10 text-center">Article introuvable.</div>;
  }

  const otherArticles = Object.entries(articles).filter(([key]) => key !== slug);

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 min-h-screen">
 

      {/* Image principale */}
      <div className="w-full h-[300px] md:h-[400px] relative mt-4">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
           {/* Flèche retour */}
      <div className="relative z-20 px-6 pt-6">
        <Link href="/blog" className="text-sm text-[#d4af37] hover:underline ">
          ← Retour au blog
        </Link>
      </div>

      {/* Contenu + autres articles */}
      <div className="flex flex-col md:flex-row gap-12 px-6 py-12 max-w-7xl mx-auto">
        {/* Texte de l’article */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-serif text-[#d4af37] mb-6">
            {article.title}
          </h1>
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
        </div>

        {/* Cartes des autres articles */}
        <aside className="md:w-1/3 space-y-6">
          <h2 className="text-lg font-semibold text-[#d4af37]">À lire aussi</h2>
          {otherArticles.map(([key, art]) => (
            <Link
              key={key}
              href={`/blog/${key}`}
              className="block bg-white dark:bg-[#2a2a2a] rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <div className="h-40 relative">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-[#d4af37] mb-2">{art.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{art.description}</p>
              </div>
            </Link>
          ))}
        </aside>
      </div>
    </section>
  );
}
