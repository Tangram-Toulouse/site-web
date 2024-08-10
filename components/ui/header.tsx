import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.svg'

export default function Header() {
  return (
    <header className="absolute top-2 md:top-6 w-full z-30">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between h-14  px-3">

            {/* Site branding */}
            <div className="shrink-0 mr-4 h-14 flex items-center">
              {/* Logo */}
              <Link className="flex items-center justify-center rounded" href="/">
                <Image src={Logo} width={64} height={64} alt="Logo" />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="flex grow">

              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li className="ml-1">
                  <Link className="btn text-zinc-600 bg-zinc-100 hover:text-zinc-900 w-full shadow" href="/contact">Contactez-nous</Link>
                </li>
              </ul>

            </nav>

          </div>
        </div>
      </div>
    </header>
  )
}
