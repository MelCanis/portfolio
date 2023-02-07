import "./index.sass"
import Project from "./project";
import projectdata from "./data";

const Work = () => {

    return (
        <div className="Work">
            {projectdata.map(i=> (<Project key={i.title} {...i}/ >))}
        </div>
    )
};

export default Work;