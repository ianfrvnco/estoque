import { db, app, auth } from "./firebaseConfig.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const btnCadastro = document.getElementById("btnCadastro");
const mensagemCadastro = document.getElementById("mensagemCadastro");

async function cadastrarUsuario(email, senha) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      senha
    );
    return userCredential.user;
  } catch (error) {
    console.error("Erro ao cadastrar:", error.code, error.message);
    let mensagemErro = "Ocorreu um erro ao cadastrar. Tente novamente.";
    switch (error.code) {
      case "auth/email-already-in-use":
        mensagemErro = "O email informado já esta em uso.";
        break;
      case "auth/invalid-email":
        mensagemErro = "O email informado é inválido.";
        break;
      case "auth/weak-password":
        mensagemErro = "A senha informada deve ter pelo menos 6 caracteres.";
        break;
    }
    throw { message: mensagemErro };
  }
}

if (btnCadastro) {
  btnCadastro.addEventListener("click", async function () {
    const email = emailInput.value;
    const senha = senhaInput.value;
    mensagemCadastro.textContent = "";

    if (!email || !senha) {
      mensagemCadastro.textContent = "Por favor, preencha todos os campos.";
      return;
    }

    try {
      const user = await cadastrarUsuario(email, senha);
      console.log("Usuário cadastrado: ", user);
      mensagemCadastro.textContent;
      setTimeout(function () {
        window.location.href = "./login.html";
      }, 2000);
    } catch (error) {
      mensagemCadastro.textContent = "Erro no cadastro: ${error.message}";
    }
  });
}
