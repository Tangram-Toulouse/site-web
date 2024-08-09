import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-zinc-200">

          {/* 1st block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-6 max-sm:order-1 flex flex-col">
            <div className="mb-4">
              {/* Logo */}
              <Link className="flex items-center justify-center bg-white w-8 h-8 rounded shadow-sm shadow-zinc-950/20" href="/">
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>
            <div className="grow text-sm text-zinc-500">&copy; Tangram Toulouse Coworking. Tous droits réservés.</div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-6 lg:col-span-6">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Coordonnées</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="mailto:contact@tangram-toulouse.com">contact@tangram-toulouse.com</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="tel:+335816018  89">Téléphone : +33 (0)5 81 60 18 89</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Adresse : 25 rue Gambetta, 31000 Toulouse</a>
              </li>
            </ul>
          </div>


        </div>

      </div>
    </footer>
  )
}
