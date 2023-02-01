import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export const LoginAction = async (email, password) => {

        const auth = getAuth()

        return signInWithEmailAndPassword(auth, email, password);

}