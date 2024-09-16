import React from "react";
import Area from "../area/Area";
import "./areaList.css";

export default function AreaList({areaList, layout, onAreaClick}) {
    return (
        <div className={`areaListContainer ${layout}`}>
            {
                areaList.map((area) => (
                    <div key={area.name} onClick={() => onAreaClick(area.name)}>
                        <Area name={area.name} image={area.image}/>
                    </div>
                ))
            }
        </div>
    )
}
