import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // ajusta o caminho se estiver em outra pasta

export const loginUser = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};
