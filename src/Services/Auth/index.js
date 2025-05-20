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

export const registerUser = async (email, senha, nome) => {
  try{
    const userCredential = await createUserWithEmailAndPassword (auth, email, senha);
    const user = userCredential.user;

    //grava as informações dentro do firestore

    await setDoc(doc(db, "users", user.uid),{
      uid: user.uid,
      email: user.email,
      name: nome, 
      createAt: serverTimestamp(),
    });
    return{ user };
  } catch(error){
    return{ error: error.message };
  }
};
