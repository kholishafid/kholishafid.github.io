interface Portoflio {
  title: string
  description: string
  link: string
}


export const PortfolioList: Portoflio[] = [
  {
    title: "HN Client",
    description: 'Hacker news simple client',
    link: 'https://hackerns.vercel.app/',
  },
  {
    title: "MealPad",
    description: "Kumpulan resep makanan dari seluruh dunia.",
    link: "https://mealpad.netlify.app/",
  },
  {
    title: "Pokemon Index",
    description: "Pokedex app.",
    link: "https://pokemon-index-rho.vercel.app/",
  },
  {
    title: "Noted",
    description: 'A simple note taking app.',
    link: 'https://note-take.vercel.app/',
  },
]
