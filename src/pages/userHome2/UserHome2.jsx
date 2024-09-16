import React from "react"
import Topbar from "../../components/topbar/Topbar"
import "./userHome2.css"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"


export default function UserHome2() {
    const {name} = useParams()
    const imageMap = {
        "Arizona": "https://www.travelandleisure.com/thmb/UGWR8DL_Dm8zqVaS7m2Kc6XSfqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-mcdowell-mountains-arizona-AZTG0324-f70f2e62c4af4889b8da2d466478d0b3.jpg",
        "Chile": "https://www.andbeyond.com/wp-content/uploads/sites/5/Summer-sunset-in-Torres-del-Paine-Patagonia-Chile.jpg",
        "Nevada": "https://www.redfin.com/blog/wp-content/uploads/2023/02/Reno-Nevada.jpg",
        "Russia": "https://ioppublishing.org/wp-content/uploads/2019/06/siberia-CC0.jpg.webp",
        "Germany": "https://carrotsandtigers.com/wp-content/uploads/2019/10/rheingau-town-hills-castle.jpg?w=800",
        "Botswana": "https://media.architecturaldigest.com/photos/60381835bcb000842b894d8b/16:9/w_2560%2Cc_limit/AD0321_SAFARI_3-.jpg",
        "Congo": "https://borgenproject.org/wp-content/uploads/Congo-2.jpg"
    };
    const companiesMap = {
        "Arizona": ["Mining Co A", "Sustainable Mining LLC"],
        "Chile": ["CopperTech", "Mining Corp Chile"],
        "Nevada": ["SilverDiggers Inc.", "GoldRush Mining"],
        "Russia": ["Siberia Minerals", "Ural Resources"],
        "Germany": ["GermanMining AG", "EcoMining Germany"],
        "Botswana": ["Botswana Extraction Ltd.", "DiamondCorp"],
        "Congo": ["Congo Resources", "CopperFields Mining"]
    };
    const companies = companiesMap[name] || [];
    const image = imageMap[name] || ""
    return (
        <>
            <Topbar />
            <div className="homePage2">
                <div className="areaName">
                    {name}
                </div>
                <div className="areaImage">
                        <img src={image}  className="imageTag"/>
                    
                    
                </div>
                <div className="companies">
                    <h2>Companies currently working in Area:</h2>
                    <ul>
                        {companies.map((company, index) => (
                            <li key={index}>
                                <Link to={`/area/${name}/company/${company}`}>
                                    {company}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}