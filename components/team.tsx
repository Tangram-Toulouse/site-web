import Image from 'next/image'

import TeamImage01 from '@/public/images/tangram/team-member-nico.jpg'
import TeamImage012 from '@/public/images/team-member-01.jpg'
import TeamImage02 from '@/public/images/team-member-02.jpg'
import TeamImage03 from '@/public/images/team-member-03.jpg'
import TeamImage04 from '@/public/images/tangram/team-member-karim.jpg'
import TeamImage042 from '@/public/images/team-member-04.jpg'
import TeamImage05 from '@/public/images/team-member-05.jpg'
import TeamImage06 from '@/public/images/team-member-06.jpg'
import TeamImage07 from '@/public/images/team-member-07.jpg'
import TeamImage08 from '@/public/images/team-member-08.jpg'
import TeamImage09 from '@/public/images/tangram/team-member-corentin.jpg'
import TeamImage10 from '@/public/images/tangram/team-member-unknown.png'
import Link from 'next/link'

export default function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Nos membres actuels</h2>
            <p className="text-xl text-gray-400">Et donc vos futurs co-workers...</p>
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage01} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Nicolas Hermet</h4>
                <div className="text-gray-500 mb-1">Développeur Fullstack</div>
                <div className='flex flex-row space-x-2 '>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.fulltrack.dev" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/nicolas-hermet/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  {/* <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.675 0h-21.35c-.731 0-1.325.594-1.325 1.325v21.351c0 .73.594 1.324 1.325 1.324h11.494v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.594 1.324-1.324v-21.351c0-.731-.594-1.325-1.324-1.325z"/>
                    </svg>
                  </a>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.242 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.242-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.242-1.243 3.608-1.305 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.412.065-2.738.364-3.766 1.392-1.028 1.028-1.327 2.354-1.392 3.766-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.065 1.412.364 2.738 1.392 3.766 1.028 1.028 2.354 1.327 3.766 1.392 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.412-.065 2.738-.364 3.766-1.392 1.028-1.028 1.327-2.354 1.392-3.766.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.065-1.412-.364-2.738-1.392-3.766-1.028-1.028-2.354-1.327-3.766-1.392-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.405 0-6.163 2.758-6.163 6.163s2.758 6.163 6.163 6.163 6.163-2.758 6.163-6.163-2.758-6.163-6.163-6.163zm0 10.163c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z"/>
                    </svg>
                  </a>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                        <path d="m7.063 3 3.495 4.475L14.601 3h2.454l-5.359 5.931L18 17h-4.938l-3.866-4.893L4.771 17H2.316l5.735-6.342L2 3h5.063Zm-.74 1.347H4.866l8.875 11.232h1.36L6.323 4.347Z"></path>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage02} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Agnès Vidal Saint-André</h4>
                <div className="text-gray-500 mb-1">Designer graphique</div>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage03} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Alphonse Chartier</h4>
                <div className="text-gray-500 mb-1">Traducteur technique</div>
                <div className='flex flex-row space-x-2 '>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/alphonse-chartier-84382bb/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage04} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Karim Lahiani</h4>
                <div className="text-gray-500 mb-1">Paysagiste Urbaniste</div>
                <div className='flex flex-row space-x-2 '>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.leventseleve-atelier.com" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/karim-lahiani-902562b2/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 5th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage05} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Jérôme Leroy</h4>
                <div className="text-gray-500 mb-1">Concepteur-rédacteur web & print</div>
                <div className='flex flex-row space-x-2 '>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://x.com/Motismo" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                        <path d="m7.063 3 3.495 4.475L14.601 3h2.454l-5.359 5.931L18 17h-4.938l-3.866-4.893L4.771 17H2.316l5.735-6.342L2 3h5.063Zm-.74 1.347H4.866l8.875 11.232h1.36L6.323 4.347Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 6th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage06} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Caroline Buys</h4>
                <div className="text-gray-500 mb-1">Designer démarches participatives</div>
                <div className='flex flex-row space-x-2 '>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="http://www.la-capitainerie.com/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.instagram.com/lacapitainerie_/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.242 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.242-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608.975-.975 2.242-1.243 3.608-1.305 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.412.065-2.738.364-3.766 1.392-1.028 1.028-1.327 2.354-1.392 3.766-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.065 1.412.364 2.738 1.392 3.766 1.028 1.028 2.354 1.327 3.766 1.392 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.412-.065 2.738-.364 3.766-1.392 1.028-1.028 1.327-2.354 1.392-3.766.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.065-1.412-.364-2.738-1.392-3.766-1.028-1.028-2.354-1.327-3.766-1.392-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.405 0-6.163 2.758-6.163 6.163s2.758 6.163 6.163 6.163 6.163-2.758 6.163-6.163-2.758-6.163-6.163-6.163zm0 10.163c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 7th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage07} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Jérôme Drouet</h4>
                <div className="text-gray-500 mb-1">Administrateur Système et réseau</div>
                <div className='flex flex-row space-x-2 '>
                </div>
              </div>
            </div>

            {/* 8th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage042} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Laurent Jargot</h4>
                <div className="text-gray-500 mb-1">Designer graphique web/print</div>
                <div className='flex flex-row space-x-2 '>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="http://laurentjargot.com/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 9th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage09} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Corentin Lapeyre</h4>
                <div className="text-gray-500 mb-1">Strategic Researcher Engagement</div>
                <div className='flex flex-row space-x-2 '>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://clapeyre.github.io/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/corentinlapeyre/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://x.com/c_lapeyre" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
                        <path d="m7.063 3 3.495 4.475L14.601 3h2.454l-5.359 5.931L18 17h-4.938l-3.866-4.893L4.771 17H2.316l5.735-6.342L2 3h5.063Zm-.74 1.347H4.866l8.875 11.232h1.36L6.323 4.347Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 10th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage10} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Bientôt vous</h4>
                <div className="text-gray-500 mb-1">votre métier</div>
                <div className='flex flex-row space-x-2 '>
                </div>
              </div>
            </div>

            {/* 11th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <Image className="rounded-full mb-4" src={TeamImage10} width={120} height={120} alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Bientôt vous</h4>
                <div className="text-gray-500 mb-1">votre métier</div>
                <div className='flex flex-row space-x-2 '>
                </div>
              </div>
            </div>

          </div>


        </div>
        <div className='flex items-center justify-center'>
          <Link className="text-center mb-6 btn-sm text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-40 shadow" href="/contact">Contactez-nous</Link>
        </div>
      </div>
    </section>
  )
}
