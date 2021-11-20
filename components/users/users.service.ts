import UsersRepository from './users.repository';

const UsersService = {
  create(data: any) {
    return UsersRepository.createUser(data);
  },
  findAll() {
    return UsersRepository.findAllUsers();
  },
  async addExercise(id: string, exercise: any) {
    const docObj = exercise;
    if (exercise.date) {
      docObj.date = new Date(exercise.date);
    }
    const userUpdated = await UsersRepository.addExercise(id, docObj);
    const exerciseCreated = userUpdated.log ? userUpdated.log[userUpdated.log.length - 1] : null;
    return {
      username: userUpdated.username,
      ...exerciseCreated,
    };
  },
  async findUser(id: string) {
    const user = await UsersRepository.findUser(id);
    return { ...user, count: user.log?.length };
  },
};

export default UsersService;
