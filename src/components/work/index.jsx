import "./index.sass"
import { useEffect, useState } from "react";
import { $, _ } from "../../res/mijikai";
import useScreenWidth from "../../hooks/device";
import anime from "animejs";
import Project from "./project";
import Panel from "./panel";
import { BsArrowRightCircle } from "react-icons/bs"
import projectdata from "./data";
import { RiSuitcaseFill } from 'react-icons/ri'



const Work = () => {
    const [active, setActive] = useState(0), isPhone = useScreenWidth();
    const [firstLoad, setFirstLoad] = useState(true);
    useEffect(()=>setFirstLoad(false), []);
    useEffect(()=> {
        let pos = $(".Projects").scrollTop, tar = $(".Project.active").offsetTop-48;
        isPhone && anime({
            targets: ".Projects",
            scrollTop: [pos, tar],
            easing: "easeOutQuad",
        })
    }, [active, isPhone]);

    const Display = () => (<div className="display">
        {projectdata[active].img && <Panel re={active} fl={firstLoad} img={projectdata[active].img} />}
        <div className="display_bottom">
            {projectdata[active].description && <div className="description">{projectdata[active].description}</div>}
            <button className="openSite pointerable" onClick={() => window.open(projectdata[active].link)}>
                <span>Open</span>
                <BsArrowRightCircle />
            </button>
            
        </div>
    </div>)

    return (
        <div className="Work">
            <div className="Projects">
                {/* <h1>WORK</h1> */}
                <div className="projects_top">
                    <RiSuitcaseFill />
                    <h1>PROJECTS</h1>
                </div>
                <div className="projects_list">
                    {projectdata.map((i, n) => (<>
                        <Project key={i.title} {...i} active={n==active} callback={()=>setActive(n)}/ >
                        {isPhone && n == active && <Display />}
                    </>))}
                
                </div>
            </div>
            {!isPhone && <Display />}
        </div>
    )
};

export default Work;