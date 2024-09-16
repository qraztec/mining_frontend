import Topbar from "../../components/topbar/Topbar";
import "./companyhome.css";
import { useState, useEffect } from "react";
import AreaList from "../../components/areaList/AreaList";
import SearchBox from "../../components/searchBox/SearchBox";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

export default function CompanyHome() {
    const location = useLocation();
    const navigate = useNavigate();
    const { companyID } = location.state; // Access the companyID from login

    // Image map of available areas
    const imageMap = {
        "Arizona": "https://www.travelandleisure.com/thmb/UGWR8DL_Dm8zqVaS7m2Kc6XSfqE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-mcdowell-mountains-arizona-AZTG0324-f70f2e62c4af4889b8da2d466478d0b3.jpg",
        "Chile": "https://www.andbeyond.com/wp-content/uploads/sites/5/Summer-sunset-in-Torres-del-Paine-Patagonia-Chile.jpg",
        "Nevada": "https://www.redfin.com/blog/wp-content/uploads/2023/02/Reno-Nevada.jpg",
        "Russia": "https://ioppublishing.org/wp-content/uploads/2019/06/siberia-CC0.jpg.webp",
        "Germany": "https://carrotsandtigers.com/wp-content/uploads/2019/10/rheingau-town-hills-castle.jpg?w=800",
        "Botswana": "https://media.architecturaldigest.com/photos/60381835bcb000842b894d8b/16:9/w_2560%2Cc_limit/AD0321_SAFARI_3-.jpg",
        "Congo": "https://borgenproject.org/wp-content/uploads/Congo-2.jpg"
    };

    const [currentAreas, setCurrentAreas] = useState([]); // Areas with current operations
    const [newAreas, setNewAreas] = useState([]); // Areas without operations
    const [searchField1, setSearch1] = useState('');
    const [searchField2, setSearch2] = useState('');

    // Fetch operations for the current company on mount
    useEffect(() => {
        const fetchOperations = async () => {
            try {
                // Fetch all operations for the company
                console.log(companyID)
                const response = await axios.get(`http://localhost:6565/operations/company/${companyID}`);
                const operations = response.data;
                console.log(operations)
                const operationAreas = operations.map(op => op.area);

                // Separate current and new operations based on whether they are in operationAreas
                const current = Object.keys(imageMap).filter(area => operationAreas.includes(area));
                const newOp = Object.keys(imageMap).filter(area => !operationAreas.includes(area));

                // Prepare the areas with their corresponding images
                const currentAreaData = current.map(area => ({ name: area, image: imageMap[area] }));
                const newAreaData = newOp.map(area => ({ name: area, image: imageMap[area] }));

                setCurrentAreas(currentAreaData);
                setNewAreas(newAreaData);
            } catch (error) {
                console.error('Error fetching operations:', error);
            }
        };

        fetchOperations();
    }, [companyID]);

    const handleCardClick = (areaName) => {
        navigate('/mining-form', { state: { company: companyID, area: areaName } });
    };

    const onSearchChange1 = (event) => {
        setSearch1(event.target.value);
    };

    const onSearchChange2 = (event) => {
        setSearch2(event.target.value);
    };

    // Filter new areas (for new operations) based on search
    const filterNewAreas = newAreas.filter(area => {
        return area.name.toLowerCase().includes(searchField1.toLowerCase());
    });

    // Filter current areas (for current operations) based on search
    const filterCurrentAreas = currentAreas.filter(area => {
        return area.name.toLowerCase().includes(searchField2.toLowerCase());
    });

    return (
        <>
            <Topbar />
            <div className="homePage">
                {/* New Operations Section */}
                <div className="section1_2">
                    <div className="section section1">
                        <div className="operationBox">
                            New Operation
                        </div>
                        <SearchBox searchField={searchField1} onSearchChange={onSearchChange1} />
                    </div>
                    <div className="section section2">
                        <div className="pictureBox">
                            <AreaList areaList={filterNewAreas} layout="row" onAreaClick={handleCardClick} />
                        </div>
                    </div>
                </div>

                {/* Current Operations Section */}
                <div className="section1_2">
                    <div className="section section1">
                        <div className="operationBox">
                            Current Operation(s)
                        </div>
                        <SearchBox searchField={searchField2} onSearchChange={onSearchChange2} />
                    </div>
                    <div className="section section2">
                        <div className="pictureBox">
                            <AreaList areaList={filterCurrentAreas} layout="row" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

