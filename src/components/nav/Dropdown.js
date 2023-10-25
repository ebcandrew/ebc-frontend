import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} ${depthLevel > 1 && depthLevel % 2 == 0 ? "depth" : ''}`}>
      {submenus.map((submenu, index) => (
        <MenuItems
          items={submenu} key={index}
          depthLevel={depthLevel}

        />
      ))}
    </ul>
  );
};

export default Dropdown;

const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Login',
    url: '/login',
  },
  {
    title: 'Store',
    url: '/store',
  },
  {
    title: 'Blog',
    url: '/blog',
  },
  {
    title: 'Tournaments',
    url: '/alltournaments',
    submenu: [
      {
        title: 'Girls Little League',
        url: '/tournaments/girls-little-tournaments',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/girls-little-league/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/girls-little-league/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/girls-little-league/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/girls-little-league/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/girls-little-league/trainee',
          },
        ],
      },
      {
        title: 'Boys Little League',
        url: '/tournaments/boys-little-tournaments',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/boys-little-league/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/boys-little-league/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/boys-little-league/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/boys-little-league/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/boys-little-league/trainee',
          },
        ],
      },
      {
        title: 'Mens World Jrs',
        url: '/tournaments/mens-world-jrs',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/mens-world-jrs/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/mens-world-jrs/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/mens-world-jrs/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/mens-world-jrs/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/mens-world-jrs/trainee',
          },
        ],
      },
      {
        title: 'Womens World Jrs',
        url: '/tournaments/womens-world-jrs',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/womens-world-jrs/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/womens-world-jrs/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/womens-world-jrs/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/womens-world-jrs/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/womens-world-jrs/trainee',
          },
        ],
      },
      {
        title: 'Mens World Cup',
        url: '/tournaments/mens-world-cup',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/mens-world-cup/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/mens-world-cup/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/mens-world-cup/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/mens-world-cup/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/mens-world-cup/trainee',
          },
        ],
      },
      {
        title: 'Womens World Cup',
        url: '/tournaments/womens-world-cup',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/womens-world-cup/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/womens-world-cup/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/womens-world-cup/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/womens-world-cup/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/womens-world-cup/trainee',
          },
        ],
      },
      {
        title: 'Mens March Madness',
        url: '/tournaments/mens-march-madness',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/mens-march-madness/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/mens-march-madness/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/mens-march-madness/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/mens-march-madness/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/mens-march-madness/trainee',
          },
        ],
      },
      {
        title: 'Womens March Madness',
        url: '/tournaments/womens-march-madness',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/womens-march-madness/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/womens-march-madness/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/womens-march-madness/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/womens-march-madness/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/womens-march-madness/trainee',
          },
        ],
      },
      {
        title: 'Mens Continental Cups',
        url: '/tournaments/mens-continental-cups',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/mens-continental-cups/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/mens-continental-cups/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/mens-continental-cups/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/mens-continental-cups/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/mens-continental-cups/trainee',
          },
        ],
      },
      {
        title: 'Womens Continental Cups',
        url: '/tournaments/womens-continental-cups',
        submenu: [
          {
            title: 'Elite',
            url: '/tournaments/womens-continental-cups/elite',
          },
          {
            title: 'Ace',
            url: '/tournaments/womens-continental-cups/ace',
          },
          {
            title: 'Challenger',
            url: '/tournaments/womens-continental-cups/challenger',
          },
          {
            title: 'Rival',
            url: '/tournaments/womens-continental-cups/rival',
          },
          {
            title: 'Trainee',
            url: '/tournaments/womens-continental-cups/trainee',
          },
        ],
      },
      // Add other submenu items similarly
    ],
  },
  {
    title: 'Leagues',
    url: '/league',
    submenu: [
      {
        title: "Women's Leagues",
        url: '/league/womens',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/womens/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/womens/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/womens/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/womens/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/womens/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/womens/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/womens/draft-league',
          },
        ],
      },
      {
        title: "Men's Leagues",
        url: '/league/mens',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/mens/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/mens/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/mens/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/mens/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/mens/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/mens/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/mens/draft-league',
          },
        ],
      },
      {
        title: 'Battle Series',
        url: '/league/battle-series',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/battle-series/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/battle-series/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/battle-series/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/battle-series/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/battle-series/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/battle-series/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/battle-series/draft-league',
          },
        ],
      },
      {
        title: 'Squad Series 4v4',
        url: '/league/squad-series-4v4',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/squad-series-4v4/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/squad-series-4v4/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/squad-series-4v4/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/squad-series-4v4/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/squad-series-4v4/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/squad-series-4v4/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/squad-series-4v4/draft-league',
          },
        ],
      },
      {
        title: "35+ Men's",
        url: '/league/35plus-mens',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/35plus-mens/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/35plus-mens/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/35plus-mens/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/35plus-mens/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/35plus-mens/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/35plus-mens/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/35plus-mens/draft-league',
          },
        ],
      },
      {
        title: "45+ Men's",
        url: '/league/45plus-mens',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/45plus-mens/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/45plus-mens/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/45plus-mens/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/45plus-mens/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/45plus-mens/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/45plus-mens/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/45plus-mens/draft-league',
          },
        ],
      },
      {
        title: "55+ Men's",
        url: '/league/55plus-mens',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/55plus-mens/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/55plus-mens/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/55plus-mens/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/55plus-mens/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/55plus-mens/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/55plus-mens/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/55plus-mens/draft-league',
          },
        ],
      },
      {
        title: 'Girls Little Leagues',
        url: '/tournaments/girls-little-tournaments',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/girls-little-leagues/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/girls-little-leagues/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/girls-little-leagues/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/girls-little-leagues/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/girls-little-leagues/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/girls-little-leagues/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/girls-little-leagues/draft-league',
          },
        ],
      },
      {
        title: 'Boys Little Leagues',
        url: '/tournaments/boys-little-tournaments',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/boys-little-leagues/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/boys-little-leagues/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/boys-little-leagues/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/boys-little-leagues/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/boys-little-leagues/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/boys-little-leagues/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/boys-little-leagues/draft-league',
          },
        ],
      },
      {
        title: "Women's Jr. Leagues",
        url: '/league/womens-jr-leagues',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/womens-jr-leagues/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/womens-jr-leagues/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/womens-jr-leagues/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/womens-jr-leagues/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/womens-jr-leagues/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/womens-jr-leagues/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/womens-jr-leagues/draft-league',
          },
        ],
      },
      {
        title: "Men's Jr. Leagues",
        url: '/league/mens-jr-leagues',
        submenu: [
          {
            title: 'Great 1500',
            url: '/league/mens-jr-leagues/great-1500',
          },
          {
            title: 'Ultra 2500',
            url: '/league/mens-jr-leagues/ultra-2500',
          },
          {
            title: 'Masters 2500+',
            url: '/league/mens-jr-leagues/masters-2500-plus',
          },
          {
            title: 'Round Robin',
            url: '/league/mens-jr-leagues/round-robin',
          },
          {
            title: 'Single Elimination',
            url: '/league/mens-jr-leagues/single-elimination',
          },
          {
            title: 'Double Elimination',
            url: '/league/mens-jr-leagues/double-elimination',
          },
          {
            title: 'Draft League',
            url: '/league/mens-jr-leagues/draft-league',
          },
        ],
      },
    ],
  },
];