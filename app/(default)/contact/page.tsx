export const metadata = {
  title: 'Contact',
  description: 'Page description',
}

export default function Home() {
  return (
    <>
      {/* Demo form */}
      <section className="relative before:absolute before:inset-0 before:h-80 before:pointer-events-none before:bg-gradient-to-b before:from-zinc-100 before:-z-10">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="px-4 sm:px-6">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-900 pb-4">Offrez-vous un bel espace</h1>
              <p className="text-lg text-zinc-500">Un truc pas clair ? Un besoin spécifique ? Besoin d'être rassuré ? Contactez-nous à ces coordonnées, et nous nous ferons un plaisir de vous répondre rapidement.</p>
            </div>

            {/* Form */}
            <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/.7 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
              <div className="space-y-4">
                <div className="mb-6">
                  <span className="block text-sm text-zinc-800 font-medium mb-2">Notre téléphone</span>
                  <span className="block text-sm text-zinc-800 font-medium mb-2 w-full">
                    <a className="text-zinc-500 hover:text-zinc-900 transition" href="tel:+335816018  89">Téléphone : +33 (0)5 81 60 18 89</a>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="mb-6">
                  <span className="block text-sm text-zinc-800 font-medium mb-2">Notre e-mail</span>
                  <span className="block text-sm text-zinc-800 font-medium mb-2 w-full">
                    <a className="text-zinc-500 hover:text-zinc-900 transition" href="mailto:contact@tangram-toulouse.com">contact@tangram-toulouse.com</a>
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="mb-6">
                  <span className="block text-sm text-zinc-800 font-medium mb-2">Notre Adresse</span>
                  <span className="block text-sm text-zinc-800 font-medium mb-2 w-full">
                  <a className="text-zinc-500 hover:text-zinc-900 transition" href="https://maps.app.goo.gl/9VjnExBYHSzU3Muy9">25 rue Léon Gambetta, 31000 Toulouse</a>
                  </span>
                </div>
              </div>

              <div className="text-center mt-6">
                {/* <div className="text-xs text-zinc-500">
                  By submitting you agree with our <a className="underline hover:no-underline" href="#0">Terms</a>
                </div> */}
              </div>

          </div>

        </div>
        </div>
      </section>

    </>
  )
}
