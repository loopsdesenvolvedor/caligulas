import prisma from "../../lib/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AuthRequest } from "../../@types/User";

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("User/password incorrect");
    }

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    //token
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user.id,
        expiresIn: "24h",
      }
    );

    return {
      id: user.id,
      name: user.email,
      username: user.username,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
