'use client'


import Tooltip from '@/components/tooltip'
import Accordion from '@/components/accordion'
import Link from 'next/link'

export default function PricingTabs() {

  const faqs = [
    {
      title: 'Est-ce que le prix est Hors Taxe ou TTC ?',
      text: "On fonctionne en association, c'est elle qui paye les locaux et qui facture le loyer à chacun de ses membres. En tant qu'association elle n'est pas assujeti à la TVA",
      active: false,
    },
    {
      title: "Comment ça se passe pour s'inscrire ?",
      text: "Vous nous contactez, on se rencontre, vous venez visiter les locaux et on essaye d'être tous là lors de votre visite. Ainsi vous pourrez rencontrer tous les membres et passer le 'test de la colloc'. Pas de panique on essaie juste de s'assurer que le courant passera entre vous et nous. Ensuite on se laisse chacun un délai de réflexion, on vous envoie les papiers de l'association : status, déroulement, cautions etc... Une fois signés vous démarrez une période d'essaie d'un mois au poste choisi. Et si au bout d'un mois cela on se plait toujours autant, jackpot !",
      active: false,
    },
    {
      title: "Est-ce que je peux venir essayer d'abord ?",
      text: "Oui bien sûr ! On démarre toujours par une période d'essaie d'un mois. C'est important pour vous et ça l'est aussi pour nous.",
      active: false,
    },
    {
      title: "Y-a-t-il des frais annexes ?",
      text: "Oui. Le prix affiché plus haut est le prix payé par mois pour le bureau que vous avez choisi. A cela s'ajoute la caution pour les bureaux de 140€ qu'on vous rend si vous quittez les locaux (au cas où des gens nous casse tout), et la cotisation à l'association de 45€ par an, qui, conrêtement paye le resto de l'AG en fin d'année.",
      active: false,
    },
    {
      title: "Ça veut dire quoi le fonctionnement en association ?",
      text: "Cela veut dire qu'on mutualise nos efforts, on réfléchis ensemble à nos dépenses communes, et on essaie de trouver des solutions pour limiter les coûts au maximum. Idem",
      active: false,
    },
    {
      title: "Est-ce que vous avez vraiment un chien ?",
      text: "Non on a pas de chien. La photo en haut de cette page faisait partie du template, et j'ai pas trouver de truc chouette à mettre à la place.",
      active: false,
    },
  ]

  return (
    <section>
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Venez <strong><em>coworker</em></strong> avec nous</h2>
            <p className="text-lg text-zinc-500">
              Arrêtez de squatter les cafés du centre ville.
            </p>
          </div>

          {/* Pricing tabs component */}
          <div className="pb-12 md:pb-20">


            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-4 items-start lg:max-w-none">

              {/* Pricing tab 1 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">Mi-temps</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-900 font-bold text-2xl">A partir de € 120/mois</span>
                    </div>
                    <div className="text-zinc-500">Un temps complet c'est encore trop cher ? On peut aussi faire du mi-temps. Contactez-nous pour connaitre les disponibilités.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-900 font-medium mb-4">Inclut : </div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="01" content="On vous donne votre jeu de clef rien qu'à vous">
                          Accès 24/7 avec les clefs
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="02" content="Vous participez aux décisions collégiales impliquant Tangram">
                          Membre de l'association
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="03" content="Cuisine, salle de réunion et aussi bien sûr l'entrée et le couloir mais bon...">
                          Accès à toutes les parties communes
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="04" content="Et les pauses cafés légendaires.">
                          Les sourires de tes coworkers
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="05" content="Une autre personne utilisera votre bureau. Pas de panique vous pourrez prendre le temps de la rencontrer et de la connaitre avant de décider !">
                          Un grands bureaux à partager avec un autre mi-temps
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="06" content="box internet, chaffage, fonctionnement général">
                          Inclu 38.5€ de charges communes
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow" href="/contact">Contactez-nous</Link>
                  </div>
                </div>
              </div>

              {/* Pricing tab 2 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg bg-zinc-800">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-200 font-semibold mb-1">Bureau 1</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-200 font-bold text-2xl">€</span>
                      <span className="text-zinc-200 font-bold text-3xl">227</span>
                      <span className="text-zinc-500 font-medium">/mois</span>
                    </div>
                    <div className="text-zinc-500">A partager avec deux autres personnes. Vue sur cour.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-200 font-medium mb-4">Inclut : </div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="07" content="On vous donne votre jeu de clef rien qu'à vous" dark>
                          Accès 24/7 avec les clefs
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="08" content="Vous participez aux décisions collégiales impliquant Tangram" dark>
                          Membre de l'association
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="09" content="Cuisine, salle de réunion et bien sûr l'entrée et le couloir mais bon..." dark>
                          Accès à toutes les parties communes
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="10" content="Et les pauses cafés légendaires." dark>
                          Les sourires de tes coworkers
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="11" content="Posez vos affaires, vos plantes, vos meubles, votre doudou... tout ce que vous voulez. C'est chez vous." dark>
                          Un grands bureaux
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="12" content="box internet, chaffage, fonctionnement général" dark>
                          Inclu 67€ de charges communes (box, et fonctionnement général)
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="/contact">Contactez-nous</Link>
                  </div>
                </div>
              </div>

              {/* Pricing tab 3 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">Bureau 2</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-900 font-bold text-2xl">€</span>
                      <span className="text-zinc-900 font-bold text-3xl">246</span>
                      <span className="text-zinc-500 font-medium">/mois</span>
                    </div>
                    <div className="text-zinc-500">Idéal pour deux personnes. Vue sur cour</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-900 font-medium mb-4">Inclut : </div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="13" content="On vous donne votre jeu de clef rien qu'à vous">
                          Accès 24/7 avec les clefs
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="14" content="Vous participez aux décisions collégiales impliquant Tangram">
                          Membre de l'association
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="15" content="Cuisine, salle de réunion et bien sûr l'entrée et le couloir mais bon...">
                          Accès à toutes les parties communes
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="16" content="Et les pauses cafés légendaires.">
                          Les sourires de tes coworkers
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="17" content="Posez vos affaires, vos plantes, vos meubles, votre doudou... tout ce que vous voulez. C'est chez vous.">
                          Un grands bureaux
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="18" content="box internet, chaffage, fonctionnement général">
                          Inclu 67€ de charges communes (box, et fonctionnement général)
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow" href="/contact">Contactez-nous</Link>
                  </div>
                </div>
              </div>

              {/* Pricing tab 4 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg bg-zinc-800">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-200 font-semibold mb-1">Bureau dit "du fond"</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-200 font-bold text-2xl">€</span>
                      <span className="text-zinc-200 font-bold text-3xl">211</span>
                      <span className="text-zinc-500 font-medium">/mois</span>
                    </div>
                    <div className="text-zinc-500">A partager avec deux autres personnes. Vue sur le couvent.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-200 font-medium mb-4">Inclut : </div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="19" content="On vous donne votre jeu de clef rien qu'à vous">
                          Accès 24/7 avec les clefs
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="20" content="Vous participez aux décisions collégiales impliquant Tangram">
                          Membre de l'association
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="21" content="Cuisine, salle de réunion et bien sûr l'entrée et le couloir mais bon..." dark>
                          Accès à toutes les parties communes
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="22" content="Et les pauses cafés légendaires." dark>
                          Les sourires de tes coworkers
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="23" content="Posez vos affaires, vos plantes, vos meubles, votre doudou... tout ce que vous voulez. C'est chez vous." dark>
                          Un grands bureaux
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="24" content="box internet, chaffage, fonctionnement général" dark>
                          Inclu 67€ de charges communes (box, et fonctionnement général)
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="/contact">Contactez-nous</Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* FAQs */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-center font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">F.A.Q</h3>
            <div className="mt-8 items-center flex flex-col">
              <span className='my-2'>
                Vous ne trouvez pas votre réponse ?
              </span>
              <Link className="mb-6 btn-sm text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-40 shadow" href="/contact">Contactez-nous</Link>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                  {faq.text}
                </Accordion>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}