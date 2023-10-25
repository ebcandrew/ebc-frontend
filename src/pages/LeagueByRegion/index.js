

import { Link, useNavigate } from "react-router-dom";
import { ASAC_Map, Africa_Map, Europe_Map, LeagueBanner, NA_Map, RegionalLeague, SA_Map } from "../../components/imports/imgs/Images";
import "./index.css";



function LeagueByRegion(params) {
    let navigate = useNavigate();
    const regionalData = params?.regionalData || [
        {
            name: "N.America",
            icon: NA_Map,
            link_to: "na"
        },
        {
            name: "APAC",
            icon: ASAC_Map,
            link_to: "apac"
        },
        {
            name: "S.America",
            icon: SA_Map,
            link_to: "sa"
        },
        {
            name: "Africa",
            icon: Africa_Map,
            link_to: "africa"
        },
        {
            name: "Europe",
            icon: Europe_Map,
            link_to: "europe"
        },

    ]

    return <div className="containered">
        <div className="banner">
            <div className="bannerChildren">
                <h1 className="bannerHeading">{params?.name || "Regional Leagues"}</h1>
                <p className="bannerText">Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
                </p>
            </div>
            <div className="bannerChildren">
                <img className="image bannerImage" src={LeagueBanner} />
            </div>
        </div>
        <div>
            <div className="regionIconContainer">
                <div className="regionSubIcons mainImageContainer">
                    <div className="mainIcon">
                        {/* <img className="image" src={} /> */}
                        <img src={params?.mainIcon || RegionalLeague} />

                    </div>
                </div>

                {regionalData[0]?.name ? regionalData.map((e, i) => {
                    return <div className="regionSubIcons flex-column" onClick={() => navigate(e.link_to)}>
                        <div className="regionImageDiv" >
                            <img className="regIcon" src={e?.icon} />
                        </div>
                        <h2 className="iconTitle">{e?.name}</h2>
                    </div>
                }) :
                    regionalData.map((e, i) => {
                        return <div className="regionSubIcons flex-column" onClick={() => navigate(e.link_to)}>
                            <img className="regIcon" src={e.icon || e} />
                        </div>
                    })}

            </div >
        </div>
    </div>
}

export default LeagueByRegion