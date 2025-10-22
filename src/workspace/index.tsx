import {Link, Outlet} from "react-router";
import {useUser} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button.tsx";

function Workspace() {
    const {user} = useUser()
    if (!user) {
        return (
            <div>
                Please sign in to access workspace
                <Link to='/'>
                    <Button>Go back</Button>
                </Link>
            </div>
        )
    }
    return (
        <div>
            Workspace
            <Outlet/>
        </div>
    );
}

export default Workspace;