import "./topbar.css"

export default function Topbar() {
    return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="topbarLink">About us</span>
        </div>
        <div className="topbarCenter">
            <span className="logo">MineSync</span>
        </div>
        <div className="topbarRight">
            <div className="topbarIcons">
                <div className="topbarLink">Log In</div>
                <div className="topbarLink">Sign Out</div>
            </div>
        </div>
    </div>
    )
}