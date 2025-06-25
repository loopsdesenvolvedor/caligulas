type Types = {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
};

class CreateUserService {
  async execute({ name, username, email, password, avatar }: Types) {}
}

export { CreateUserService };
