import { db } from "@launchpad/config/config";
import { doc, getDoc } from "firebase/firestore";

export const getSelectedRocket = async (id: string) => {
    console.log("🚀 ~ file: getSelectedRocket.ts:5 ~ getSelectedRocket ~ id:", id);
    const docRef = doc(db, "rockets", `${id}`);
    console.log("🚀 ~ file: getSelectedRocket.ts:6 ~ getSelectedRocket ~ id):", `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log(docSnap.data());
        console.log("🚀 ~ file: getSelectedRocket.ts:13 ~ getSelectedRocket ~ docSnap.id:", `${docSnap.id}`);
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }
};
