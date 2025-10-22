import {SignInButton, UserButton, useUser} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";

function Header() {
    const {user} = useUser()
    return (
        <header className="flex items-center justify-between px-10 shadow py-2">
            <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                <img src="/logo.svg" alt="Logo" width={40} height={40}/>
            </div>
            {!user ?
                <SignInButton mode='modal'>
                    <Button>Get Started</Button>
                </SignInButton>

                :

                <div className='flex gap-5 items-center'>
                    <UserButton/>
                    <Link to='/workspace'>
                        <Button>Go to workspace</Button>
                    </Link>
                </div>
            }
        </header>
    );
}

export default Header;