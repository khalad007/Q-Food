import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app)
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, photoURL, displayName) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                return updateProfile(result.user, { displayName, photoURL }) // Update user profile
                    .then(() => {
                        setUser(result.user); // Update the user state
                        window.location.reload(true) //reload page for show name and pro pic
                        setLoading(false);
                    });
            });
    }

    //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.........................................................
    // for login 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }


    // for logout 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    //for update


    // spy baba 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state', currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {

                axios.post('https://eleven-assignment-server-pink.vercel.app/jwt', loggedUser, { withCreadential: true })
                    .then(res => {
                        console.log('token', res.data)
                    })
            }
            else {
                axios.post('https://eleven-assignment-server-pink.vercel.app/jwt', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;