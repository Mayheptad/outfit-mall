import { createUserDoc4rmAuth, signInWithGooglePopup } from "../../Utils/Firebase.utils";


export const Signin = () => {

    const logGoogleUser = async _ => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef =  await createUserDoc4rmAuth(user);
    }

    return (
        <div>
        <h1> signin page </h1>
        <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
}