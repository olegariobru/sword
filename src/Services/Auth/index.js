import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../firebase"; 




// Função de login
export const loginUser = async (email, senha) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    return { user: userCredential.user };
  } catch (error) {
    return { error: error.message };
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKYhDwHAEgZrS0pbtdfUH-qRQnaOZYMBo`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro detalhado:", error);
    throw error;
  }
};