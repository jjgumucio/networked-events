import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import Storage from "./apis/Storage"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}

function Firebase() {
    return (
        <div>

        </div>
    )
}

export default Firebase
