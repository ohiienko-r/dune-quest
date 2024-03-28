import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./init";

const db = getFirestore(app);

export const getAnswer = async (id: number) => {
  const docRef = doc(db, "answers", `question_${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return await docSnap.data();
  } else {
    console.error("No such document!");
  }
};
