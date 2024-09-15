import React from "react"
import "./regulatorHome.css"
import Topbar from "../../components/topbar/Topbar"
import {useState} from "react"
import AreaList from "../../components/areaList/AreaList"
import SearchBox from "../../components/searchBox/SearchBox"

export default function RegulatorHome() {
    const [areas, setAreas] = useState([
        { name: "Arizona", image: "https://www.travelandleisure.com/thmb/UGWR8DL_Dm8zqVaS7m2Kc6XSfqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-mcdowell-mountains-arizona-AZTG0324-f70f2e62c4af4889b8da2d466478d0b3.jpg" },
        { name: "Chile", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Summer-sunset-in-Torres-del-Paine-Patagonia-Chile.jpg" },
        { name: "Nevada", image: "https://www.redfin.com/blog/wp-content/uploads/2023/02/Reno-Nevada.jpg" },
        {name: "Russia", image: "https://ioppublishing.org/wp-content/uploads/2019/06/siberia-CC0.jpg.webp"},
        {name: "Germany", image: "https://carrotsandtigers.com/wp-content/uploads/2019/10/rheingau-town-hills-castle.jpg?w=800"},
        {name: "Botswana", image: "https://media.architecturaldigest.com/photos/60381835bcb000842b894d8b/16:9/w_2560%2Cc_limit/AD0321_SAFARI_3-.jpg"},
        {name: "Congo", image: "https://borgenproject.org/wp-content/uploads/Congo-2.jpg"}
    ])
    const [searchField, setSearch] = useState('')

    const onSearchChange = (event) => {
        setSearch(event.target.value)
    }
    const filterAreas = areas.filter(areas => {
        return areas.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
        <>
            <Topbar />
            <div className="homePage">
                <div className="section section1">
                    <div className="miningBox">
                        Current Mining Areas:
                    </div>
                    <SearchBox searchField={searchField} onSearchChange = {onSearchChange} />
                </div>
                <div className="section section2">
                    <div className="pictureBox">
                        <AreaList areaList = {filterAreas}/>
                    </div>
                </div>
            </div>
        </>
    )
}