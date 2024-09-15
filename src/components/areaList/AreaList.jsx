import React from "react";
import Area from "../area/Area";
import "./areaList.css";

export default function AreaList({areaList, layout}) {
    return (
        <div className={`areaListContainer ${layout}`}>
            {
                areaList.map((area)=> {
                    return <Area name={area.name} image={area.image}/>
                })
            }
        </div>
    )
}