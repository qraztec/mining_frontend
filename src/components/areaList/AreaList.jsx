import React from "react";
import Area from "../area/Area";
import "./areaList.css";

export default function AreaList({ areaList, layout, onAreaClick }) { // Add onAreaClick as a prop
    return (
        <div className={`areaListContainer ${layout}`}>
            {areaList.map((area) => (
                <Area 
                    key={area.name} 
                    name={area.name} 
                    image={area.image}
                    onAreaClick={onAreaClick}  // Pass onAreaClick to the Area component
                />
            ))}
        </div>
    );
}
