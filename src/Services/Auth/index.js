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
    return { user: userCredential.user, error: null };
  } catch (error) {
    let message;

    switch (error.code) {
      case 'auth/user-not-found':
        message = 'Usuário não encontrado';
        break;
      case 'auth/wrong-password':
        message = 'Senha incorreta';
        break;
      case 'auth/invalid-email':
        message = 'E-mail inválido';
        break;
      case 'auth/too-many-requests':
        message = 'Muitas tentativas. Tente novamente mais tarde';
        break;
      default:
        message = 'Erro ao fazer login';
    }

    return { user: null, error: message };
  }
};

// Função de registro
export const registerUser = async (email, senha, nome) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

    await updateProfile(userCredential.user, {
      displayName: nome,
    });

    return { user: userCredential.user, error: null };
  } catch (error) {
    let errorMessage;

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Este e-mail já está em uso';
        break;
      case 'auth/invalid-email':
        errorMessage = 'E-mail inválido';
        break;
      case 'auth/weak-password':
        errorMessage = 'Senha fraca (mínimo 6 caracteres)';
        break;
      default:
        errorMessage = 'Erro ao cadastrar';
    }

    return { user: null, error: errorMessage };
  }
};