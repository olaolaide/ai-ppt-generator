import {createBrowserRouter} from "react-router";
import App from "@/App";
import Workspace from "@/workspace";
import Project from "@/workspace/project";

const router = createBrowserRouter([
    {
        path: '',
        element: <App/>
    },
    {
        path: '/workspace',
        element: <Workspace/>,
        children: [
            {
                path: 'project/:projectId',
                element: <Project/>
            },
        ]
    },

])


export default router