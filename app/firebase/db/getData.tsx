import {app} from "../../../firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app)
export default async function getDoument(collection: string, id: string) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        const resp  = await getDoc(docRef);
        if (resp.exists()) {
            result = resp.data()
        }
    } catch (e) {
        error = e;
    }

    return { result, error };
}
