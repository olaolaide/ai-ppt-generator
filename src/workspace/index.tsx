import {Link, Outlet} from "react-router";
import {useUser} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button.tsx";
import {firebaseDb} from "../../config/FirebaseConfig.ts";
import {doc, getDoc, serverTimestamp, setDoc} from "firebase/firestore";
import {useEffect} from "react";

function Workspace() {
    const {user, isLoaded} = useUser()

    useEffect(() => {
        user && createUser()
    }, [user]);

    const createUser = async () => {
        // if user exist in the database
        const docRef = doc(firebaseDb, 'users', user?.primaryEmailAddress?.emailAddress ?? '')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("Document data: ", docSnap.data())
        } else {
            // Insert new user
            await setDoc(doc(firebaseDb, 'users', user?.primaryEmailAddress?.emailAddress ?? ''), {
                fullName: user?.fullName,
                emailAddress: user?.primaryEmailAddress?.emailAddress,
                createdAt: serverTimestamp(),
                credits: 2
            })
        }
    }
    if (!user && isLoaded) {
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