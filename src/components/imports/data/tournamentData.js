import {
    ASAC_Map,
    Ace_NA,
    Africa_Map,
    Challenger_NA, Elite_NA,
    Europe_Map,
    NA_Map,
    Rival_NA,
    SA_Map,
    Trainee_NA,
    Boys_Little_League,
    Girls_Little_League,
    Mens_March_Madness,
    Womens_March_Madness,
    Womens_World_Jrs,
    Mens_World_Jrs,
    RegionalLeague,
    Elite_Icon,
    Ace_Icon,
    Challenger_Icon,
    Rival_Icon,
    Trainee_Icon,
    Elite_APAC,
    Ace_APAC,
    Challenger_APAC,
    Rival_APAC,
    Trainee_APAC,
    Elite_SA,
    Ace_SA,
    Challenger_SA,
    Rival_SA,
    Trainee_SA,
    Elite_AF,
    Ace_AF,
    Challenger_AF,
    Rival_AF,
    Trainee_AF,
    Challenger_EU,
    Trainee_EU,
    Elite_EU,
    Ace_EU,
    Rival_EU,
} from "../imgs/Images";

const na_leagues = (mid_link) => [
    {
        name: "Elite",
        link_to: `/tournaments/${mid_link}/elite`,
        icon: Elite_Icon
    },
    {
        name: "Ace",
        link_to: `/tournaments/${mid_link}/ace`,
        icon: Ace_Icon
    },
    {
        name: "Challenger",
        link_to: `/tournaments/${mid_link}/challenger`,
        icon: Challenger_Icon
    },
    {
        name: "Rival",
        link_to: `/tournaments/${mid_link}/rival`,
        icon: Rival_Icon
    },
    {
        name: "Trainee",
        link_to: `/tournaments/${mid_link}/trainee`,
        icon: Trainee_Icon
    }
]

const world_leagues = (mid_link) => [
    {
        name: "N.America",
        icon: NA_Map,
        link_to: `/tournaments/${mid_link}/na`
    },
    {
        name: "APAC",
        icon: ASAC_Map,
        link_to: `/tournaments/${mid_link}/apac`
    },
    {
        name: "S.America",
        icon: SA_Map,
        link_to: `/tournaments/${mid_link}/sa`
    },
    {
        name: "Africa",
        icon: Africa_Map,
        link_to: `/tournaments/${mid_link}/africa`
    },
    {
        name: "Europe",
        icon: Europe_Map,
        link_to: `/tournaments/${mid_link}/europe`
    },

]

const mens_continental_path = "/tournaments/mens-world-cup/"
const mens_continental = [
    {
        name: "N.America Men's Cup",
        icon: NA_Map,
        link_to: mens_continental_path + "na",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: mens_continental_path + "elite_na",
                icon: Elite_NA
            },
            {
                name: "Ace_NA",
                link_to: mens_continental_path + "ace_na",
                icon: Ace_NA
            },
            {
                name: "Challenger_NA",
                link_to: mens_continental_path + "challenger_na",
                icon: Challenger_NA
            },
            {
                name: "Rival_NA",
                link_to: mens_continental_path + "rival_na",
                icon: Rival_NA
            },
            {
                name: "Trainee_NA",
                link_to: mens_continental_path + "trainee_na",
                icon: Trainee_NA
            }
        ]
    },
    {
        name: "APAC Men's Cup",
        icon: ASAC_Map,
        link_to: mens_continental_path + "apac",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: mens_continental_path + "elite_apac",
                icon: Elite_APAC
            },
            {
                name: "Ace_NA",
                link_to: mens_continental_path + "ace_apac",
                icon: Ace_APAC
            },
            {
                name: "Challenger_NA",
                link_to: mens_continental_path + "challenger_apac",
                icon: Challenger_APAC
            },
            {
                name: "Rival_NA",
                link_to: mens_continental_path + "rival_apac",
                icon: Rival_APAC
            },
            {
                name: "Trainee_NA",
                link_to: mens_continental_path + "trainee_apac",
                icon: Trainee_APAC
            }
        ]
    },
    {
        name: "S.America Men's Cup",
        icon: SA_Map,
        link_to: mens_continental_path + "sa",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: mens_continental_path + "elite_sa",
                icon: Elite_SA
            },
            {
                name: "Ace_NA",
                link_to: mens_continental_path + "ace_sa",
                icon: Ace_SA
            },
            {
                name: "Challenger_NA",
                link_to: mens_continental_path + "challenger_sa",
                icon: Challenger_SA
            },
            {
                name: "Rival_NA",
                link_to: mens_continental_path + "rival_sa",
                icon: Rival_SA
            },
            {
                name: "Trainee_NA",
                link_to: mens_continental_path + "trainee_sa",
                icon: Trainee_SA
            }
        ]
    },
    {
        name: "Africa Men's Cup",
        icon: Africa_Map,
        link_to: mens_continental_path + "africa",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: mens_continental_path + "elite_africa",
                icon: Elite_AF
            },
            {
                name: "Ace_NA",
                link_to: mens_continental_path + "ace_africa",
                icon: Ace_AF
            },
            {
                name: "Challenger_NA",
                link_to: mens_continental_path + "challenger_africa",
                icon: Challenger_AF
            },
            {
                name: "Rival_NA",
                link_to: mens_continental_path + "rival_africa",
                icon: Rival_AF
            },
            {
                name: "Trainee_NA",
                link_to: mens_continental_path + "trainee_africa",
                icon: Trainee_AF
            }
        ]
    },
    {
        name: "Europe Men's Cup",
        icon: Europe_Map,
        link_to: mens_continental_path + "europe",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: mens_continental_path + "elite_eu",
                icon: Elite_EU
            },
            {
                name: "Ace_NA",
                link_to: mens_continental_path + "ace_eu",
                icon: Ace_EU
            },
            {
                name: "Challenger_NA",
                link_to: mens_continental_path + "challenger_eu",
                icon: Challenger_EU
            },
            {
                name: "Rival_NA",
                link_to: mens_continental_path + "rival_eu",
                icon: Rival_EU
            },
            {
                name: "Trainee_NA",
                link_to: mens_continental_path + "trainee_eu",
                icon: Trainee_EU
            }
        ]
    }
]

const womens_continental_path = '/tournaments/womens-world-cup'
const womens_continental = [
    {
        name: "N.America women's Cup",
        icon: NA_Map,
        link_to: womens_continental_path + "/na",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: womens_continental_path + "/elite_na",
                icon: Elite_NA
            },
            {
                name: "Ace_NA",
                link_to: womens_continental_path + "/ace_na",
                icon: Ace_NA
            },
            {
                name: "Challenger_NA",
                link_to: womens_continental_path + "/challenger_na",
                icon: Challenger_NA
            },
            {
                name: "Rival_NA",
                link_to: womens_continental_path + "/rival_na",
                icon: Rival_NA
            },
            {
                name: "Trainee_NA",
                link_to: womens_continental_path + "/trainee_na",
                icon: Trainee_NA
            }
        ]
    },
    {
        name: "APAC Women's Cup",
        icon: ASAC_Map,
        link_to: womens_continental_path + "/apac",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: womens_continental_path + "/elite_apac",
                icon: Elite_APAC
            },
            {
                name: "Ace_NA",
                link_to: womens_continental_path + "/ace_apac",
                icon: Ace_APAC
            },
            {
                name: "Challenger_NA",
                link_to: womens_continental_path + "/challenger_apac",
                icon: Challenger_APAC
            },
            {
                name: "Rival_NA",
                link_to: womens_continental_path + "/rival_apac",
                icon: Rival_APAC
            },
            {
                name: "Trainee_NA",
                link_to: womens_continental_path + "/trainee_apac",
                icon: Trainee_APAC
            }
        ]
    },
    {
        name: "S.America Women's Cup",
        icon: SA_Map,
        link_to: womens_continental_path + "/sa",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: womens_continental_path + "/elite_sa",
                icon: Elite_SA
            },
            {
                name: "Ace_NA",
                link_to: womens_continental_path + "/ace_sa",
                icon: Ace_SA
            },
            {
                name: "Challenger_NA",
                link_to: womens_continental_path + "/challenger_sa",
                icon: Challenger_SA
            },
            {
                name: "Rival_NA",
                link_to: womens_continental_path + "/rival_sa",
                icon: Rival_SA
            },
            {
                name: "Trainee_NA",
                link_to: womens_continental_path + "/trainee_sa",
                icon: Trainee_SA
            }
        ]
    },
    {
        name: "Africa Women's Cup",
        icon: Africa_Map,
        link_to: womens_continental_path + "/africa",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: womens_continental_path + "/elite_africa",
                icon: Elite_AF
            },
            {
                name: "Ace_NA",
                link_to: womens_continental_path + "/ace_africa",
                icon: Ace_AF
            },
            {
                name: "Challenger_NA",
                link_to: womens_continental_path + "/challenger_africa",
                icon: Challenger_AF
            },
            {
                name: "Rival_NA",
                link_to: womens_continental_path + "/rival_africa",
                icon: Rival_AF
            },
            {
                name: "Trainee_NA",
                link_to: womens_continental_path + "/trainee_africa",
                icon: Trainee_AF
            }
        ]
    },
    {
        name: "Europe Women's Cup",
        icon: Europe_Map,
        link_to: womens_continental_path + "/europe",
        leagues: [
            {
                // name: "Elite_NA",
                link_to: womens_continental_path + "/elite_eu",
                icon: Elite_EU
            },
            {
                name: "Ace_NA",
                link_to: womens_continental_path + "/ace_eu",
                icon: Ace_EU
            },
            {
                name: "Challenger_NA",
                link_to: womens_continental_path + "/challenger_eu",
                icon: Challenger_EU
            },
            {
                name: "Rival_NA",
                link_to: womens_continental_path + "/rival_eu",
                icon: Rival_EU
            },
            {
                name: "Trainee_NA",
                link_to: womens_continental_path + "/trainee_eu",
                icon: Trainee_EU
            }
        ]
    }
]


export const tournamentsData = {
    tournaments: [
        {
            name: "Boys Little League",
            icon: Boys_Little_League,
            link_to: "/tournaments/boys-little-tournaments",
            leagues: na_leagues('boys-little-tournaments')
        },
        {
            name: "Girls Little League",
            icon: Girls_Little_League,
            link_to: "/tournaments/girls-little-tournaments",
            leagues: na_leagues('girls-little-tournaments')
        },
        {
            name: "Men's March Madness",
            icon: Mens_March_Madness,
            link_to: "/tournaments/mens-March-Madness",
            leagues: na_leagues('mens-March-Madness')
        },
        {
            name: "Women's March Madness",
            icon: Womens_March_Madness,
            link_to: "/tournaments/womens-March-Madness",
            leagues: na_leagues('womens-March-Madness')
        },
        {
            name: "Women's World Jrs",
            icon: Womens_World_Jrs,
            link_to: "/tournaments/womens-world-jrs",
            leagues: na_leagues('womens-world-jrs')
        },
        {
            name: "Men's World Jrs",
            icon: Mens_World_Jrs,
            link_to: "/tournaments/mens-world-jrs",
            leagues: na_leagues('mens-world-jrs')
        },
        {
            name: "Women World Cup",
            icon: RegionalLeague,
            link_to: womens_continental_path + "",
            leagues: world_leagues('womens-world-cup')
        },
        {
            name: "Men World Cup",
            icon: RegionalLeague,
            link_to: "/tournaments/mens-world-cup",
            leagues: world_leagues('mens-world-cup')

        },
        ...mens_continental,
        ...womens_continental,

    ]
}
