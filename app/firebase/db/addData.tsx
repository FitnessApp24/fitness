import {app} from "../../../firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


const db = getFirestore(app)
const storage = getStorage(app);

export default async function addData(colllection: string, id: string, data: any) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}



export async function retrieveDownloadUrl(collection: string, id: string, file: File | null) {
    try {
        let downloadURL = ""; 

        if (file) {
            const storageRef = ref(storage, `${collection}/${id}/${file.name}`);
            await uploadBytes(storageRef, file);
            downloadURL = await getDownloadURL(storageRef); 
        }
        console.log('>>>',downloadURL)
        return { success: true, downloadURL };
    } catch (error) {
        return { success: false, error };
    }
}
