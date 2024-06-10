const User = require("../model/User");
const bcrypt = require("bcryptjs");

async function addUser(email, password) {
  try {
    // Gerar um salt
    const salt = await bcrypt.genSalt(10);

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, salt);

    User.create({
      email: email,
      password: hashedPassword,
    });

    console.log("Usuário adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
  }
}

// Exemplo de uso
addUser("exemple@email.com", "passwordexemple");
