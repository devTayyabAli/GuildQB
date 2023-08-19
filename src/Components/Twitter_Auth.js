


import { TwitterAuthProvider, signInWithPopup } from "@firebase/auth";
import { authentication } from "../firebase-config";
function Twitter_Auth() {
    const signInWithTwitter = () => {
        const provider = new TwitterAuthProvider();
        signInWithPopup(authentication, provider).then((re) => {
            console.log(re)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <button onClick={signInWithTwitter} > Sign in with Twitter</button>

    );
}

export default Twitter_Auth;
