import { User, UserModel } from './schemas/user.schema';

const UsersRepository = {
  createUser(data: any): Promise<User> {
    return new Promise((resolve, reject) => {
      const user = new UserModel(data);
      user.save((err, res) => {
        if (err) reject(err);
        else resolve(res.toJSON() as User);
      });
    });
  },
  findAllUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      UserModel.find({}, 'username', {}, (error, result) => {
        if (error) reject(error);
        else resolve(result.map((doc) => doc.toJSON() as User));
      });
    });
  },
};

export default UsersRepository;
