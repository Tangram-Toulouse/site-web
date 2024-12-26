import './css/style.css'

export const metadata = {
  title: 'Tangram Toulouse',
  description: "Bien plus qu'un espace de co-working, Tangram est un lieu de vie et de partage pour les indépendants et salariés de Toulouse.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Ajouter les liens CDN pour les polices */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter antialiased bg-white text-zinc-900 tracking-tight">
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
