import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
          init(textRef.current,{
              backDelay:1500,
              backSpeed:60,
              showCursor: true,
              strings: ["Computer Engineer", "Software Developer"],
          });      
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/portrait.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hi There, I'm Josh</h1>
                    <h3>Student <span ref={textRef}></span></h3>
                    <h2>Aspiring Mastercard Intern</h2>
                </div>
            </div>
        </div>
    )
}
