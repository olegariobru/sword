
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase"; 

//validação do usuario e senha no firebase
export const loginUser = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};

// Função de cadastro no firebase
// Services/Auth.js
export const registerUser = async (email, senha, nome) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      name: nome,
      createAt: serverTimestamp(),
    });

    return { user, error: null }; // ✅ CORREÇÃO IMPORTANTE
  } catch (error) {
    return { user: null, error: error.message }; // ✅ GARANTE CONSISTÊNCIA
  }
};
