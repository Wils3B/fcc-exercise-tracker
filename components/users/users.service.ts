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
    console.log(userUpdated);
    return {
      id: userUpdated.id,
      _id: userUpdated.id,
      username: userUpdated.username,
      exercise: userUpdated.log ? userUpdated.log[userUpdated.log.length - 1] : null,
    };
  },
};

export default UsersService;
