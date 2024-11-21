interface Portoflio {
  title: string;
  description: string;
  link: string;
}

export const PortfolioList: Portoflio[] = [
  {
    title: "Jadwal Sepur Komuter",
    description: "Indonesia's commuter line schedule.",
    link: "https://jadwal-sepur-komuter.vercel.app/",
  },
  {
    title: "HN Client",
    description: "Hacker news client",
    link: "https://hackerns.vercel.app/",
  },
  {
    title: "MealPad",
    description: "Recipe collection.",
    link: "https://mealpad.netlify.app/",
  },
  {
    title: "Pokemon Index",
    description: "Pokedex app.",
    link: "https://pokemon-index-rho.vercel.app/",
  },
];
