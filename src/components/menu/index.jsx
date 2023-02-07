import { useEffect, useRef, useState } from "react";
import { session } from "../../session";
import "./index.sass"

const Menu = () => {
    const { active, setActive } = session(s=>s);
    const [ scrolling, setScrolling ] = useState(false);
    const activeRef = useRef(active);
    useEffect(()=>{
        window.addEventListener("wheel", toggler);
        return () => window.removeEventListener("wheel", toggler);
    },[]);
    function toggler (e) {
        const pages = ["hero", "work", "contact"], i = pages.indexOf(activeRef.current);
        let up = e.deltaY < 0, next = up ? pages[i - 1] : pages[i + 1];
        next && setActive(next);
        if (next) activeRef.current = next;

    } 
    return (
        <div className="Menu">
            <li className={`pointerable menu-option ${active=='hero'?"menu-active":""}`}
            onClick={()=>setActive("hero")}>
                <h4 className="pointerable menu-option-title">MEL ALLEN</h4>
                <div className="menu-bullet"></div>
            </li>
            <li className={`pointerable menu-option ${active == 'work' ? "menu-active" : ""}`}
            onClick={()=>setActive("work")}>
                <h4 className="pointerable menu-option-title">WORK</h4>
                <div className="menu-bullet"></div>
            </li>
            <li className={`pointerable menu-option ${active == 'contact' ? "menu-active" : ""}`}
            onClick={()=>setActive("contact")}>
                <h4 className="pointerable menu-option-title">CONTACT</h4>
                <div className="menu-bullet"></div>
            </li>
        </div>
    )
};

export default Menu;