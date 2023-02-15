import { useEffect, useRef, useState } from "react";
import useScreenWidth from "../../hooks/device";
import useEventListener from "../../hooks/eventlistener";
import { _ } from "../../res/mijikai";
import { session } from "../../session";
import "./index.sass"

import { RiUserFill, RiSuitcaseFill, RiContactsBook2Fill } from 'react-icons/ri'

const Menu = () => {
    const { active, setActive } = session(s=>s);
    const scrolling = useRef(false), activeRef = useRef(active);
    const isPhone = useScreenWidth();
    useEffect(()=>{
        isPhone && window.removeEventListener("wheel", toggler);
        !isPhone && window.addEventListener("wheel", toggler);
        return () => window.removeEventListener("wheel", toggler);
    }, [isPhone])
    // useEventListener(window, "wheel", toggler);
    function toggler (e) {
        if (e.target.classList.contains('description')) return;
        const pages = ["hero", "work", "contact"], i = pages.indexOf(activeRef.current);
        let up = e.deltaY < 0, next = up ? pages[i - 1] : pages[i + 1];
        if (!scrolling.current) {
            scrolling.current = true;
            next && setActive(next);
            if (next) activeRef.current = next;
            setTimeout(()=> scrolling.current = false, 500)
        }
    } 
    return (
        <div className="Menu">
            <li className={`pointerable menu-option ${active=='hero'?"menu-active":""}`}
            onClick={()=>setActive("hero")}>
                <h4 className="menu-option-title">MEL ALLEN</h4>
                {/* <div className="menu-bullet"><RiUserFill className="pointerable" /></div> */}
            </li>
            <li className={`pointerable menu-option ${active == 'work' ? "menu-active" : ""}`}
            onClick={()=>setActive("work")}>
                <h4 className="menu-option-title">WORK</h4>
                {/* <div className=" menu-bullet"><RiSuitcaseFill className="pointerable" /></div> */}
            </li>
            <li className={`pointerable menu-option ${active == 'contact' ? "menu-active" : ""}`}
            onClick={()=>setActive("contact")}>
                <h4 className="menu-option-title">CONTACT</h4>
                {/* <div className="menu-bullet"><RiContactsBook2Fill className="pointerable" /></div> */}
            </li>
        </div>
    )
};

export default Menu;