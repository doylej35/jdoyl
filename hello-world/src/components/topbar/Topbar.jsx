import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">

                   <a href="#intro" className="logo">doylej.</a>

                   <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+353 87 656 7831</span>
                   </div>

                   <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>doylej35@tcd.ie</span>
                   </div>

                </div>
                
            </div>
        </div>
    )
}
