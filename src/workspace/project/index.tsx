import {useParams} from "react-router";

function Projects() {
    const {projectId} = useParams()
    return (
        <div>Projects {projectId}</div>
    );
}

export default Projects;