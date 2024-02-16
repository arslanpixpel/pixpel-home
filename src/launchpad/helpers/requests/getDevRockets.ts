/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "@launchpad/config/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getDevRockets = async (account: string) => {
    const queryRef = query(collection(db, `rockets`));

    console.log("🚀 ~ file: getDevRockets.ts:8 ~ getDevRockets ~ t queryRef:", queryRef);
    const q = query(queryRef, where("owner", "==", account));
    const querySnapshot = await getDocs(q);
    const devRockets: any[] = [];
    querySnapshot.forEach((doc: any) => {
        devRockets.push({ ...doc.data(), doc_id: doc.id });
        console.log("🚀 ~ file: getDevRockets.ts:14 ~ querySnapshot.forEach ~ doc_id:", doc.id);
    });

    return devRockets;
};
