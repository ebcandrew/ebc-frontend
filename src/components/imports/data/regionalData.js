import {
    ASAC_Map,
    Ace_AF,
    Ace_APAC,
    Ace_NA,
    Ace_SA,
    Africa_Map,
    Challenger_AF,
    Challenger_APAC,
    Challenger_NA,
    Challenger_SA,
    Elite_AF,
    Elite_APAC, Elite_NA,
    Elite_SA,
    Europe_Map,
    NA_Map,
    Rival_AF,
    Rival_APAC,
    Rival_NA,
    Rival_SA,
    SA_Map,
    Trainee_AF,
    Trainee_APAC,
    Trainee_NA,
    Trainee_SA,
    Elite_EU,
    Ace_EU,
    Challenger_EU,
    Rival_EU,
    Trainee_EU,
} from "../imgs/Images";

export const regionalData = {
    regions: [
        {
            name: "N.America",
            icon: NA_Map,
            link_to: "league/na",
            leagues: [
                {
                    // name: "Elite_NA",
                    link_to: "/league/elite_na",
                    icon: Elite_NA
                },
                {
                    name: "Ace_NA",
                    link_to: "/league/ace_na",
                    icon: Ace_NA
                },
                {
                    name: "Challenger_NA",
                    link_to: "/league/challenger_na",
                    icon: Challenger_NA
                },
                {
                    name: "Rival_NA",
                    link_to: "/league/rival_na",
                    icon: Rival_NA
                },
                {
                    name: "Trainee_NA",
                    link_to: "/league/trainee_na",
                    icon: Trainee_NA
                }
            ]
        },
        {
            name: "APAC",
            icon: ASAC_Map,
            link_to: "league/apac",
            leagues: [
                {
                    // name: "Elite_NA",
                    link_to: "/league/elite_apac",
                    icon: Elite_APAC
                },
                {
                    name: "Ace_NA",
                    link_to: "/league/ace_apac",
                    icon: Ace_APAC
                },
                {
                    name: "Challenger_NA",
                    link_to: "/league/challenger_apac",
                    icon: Challenger_APAC
                },
                {
                    name: "Rival_NA",
                    link_to: "/league/rival_apac",
                    icon: Rival_APAC
                },
                {
                    name: "Trainee_NA",
                    link_to: "/league/trainee_apac",
                    icon: Trainee_APAC
                }
            ]
        },
        {
            name: "S.America",
            icon: SA_Map,
            link_to: "league/sa",
            leagues: [
                {
                    // name: "Elite_NA",
                    link_to: "/league/elite_sa",
                    icon: Elite_SA
                },
                {
                    name: "Ace_NA",
                    link_to: "/league/ace_sa",
                    icon: Ace_SA
                },
                {
                    name: "Challenger_NA",
                    link_to: "/league/challenger_sa",
                    icon: Challenger_SA
                },
                {
                    name: "Rival_NA",
                    link_to: "/league/rival_sa",
                    icon: Rival_SA
                },
                {
                    name: "Trainee_NA",
                    link_to: "/league/trainee_sa",
                    icon: Trainee_SA
                }
            ]
        },
        {
            name: "Africa",
            icon: Africa_Map,
            link_to: "league/africa",
            leagues: [
                {
                    // name: "Elite_NA",
                    link_to: "/league/elite_africa",
                    icon: Elite_AF
                },
                {
                    name: "Ace_NA",
                    link_to: "/league/ace_africa",
                    icon: Ace_AF
                },
                {
                    name: "Challenger_NA",
                    link_to: "/league/challenger_africa",
                    icon: Challenger_AF
                },
                {
                    name: "Rival_NA",
                    link_to: "/league/rival_africa",
                    icon: Rival_AF
                },
                {
                    name: "Trainee_NA",
                    link_to: "/league/trainee_africa",
                    icon: Trainee_AF
                }
            ]
        },
        {
            name: "Europe",
            icon: Europe_Map,
            link_to: "league/europe",
            leagues: [
                {
                    // name: "Elite_NA",
                    link_to: "/league/elite_eu",
                    icon: Elite_EU
                },
                {
                    name: "Ace_NA",
                    link_to: "/league/ace_eu",
                    icon: Ace_EU
                },
                {
                    name: "Challenger_NA",
                    link_to: "/league/challenger_eu",
                    icon: Challenger_EU
                },
                {
                    name: "Rival_NA",
                    link_to: "/league/rival_eu",
                    icon: Rival_EU
                },
                {
                    name: "Trainee_NA",
                    link_to: "/league/trainee_eu",
                    icon: Trainee_EU
                }
            ]
        },
    ]
}
