import UsersRepository from './users.repository';
import GetUserDto from './dto/get-user.dto';

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
      ...exerciseCreated,
      username: userUpdated.username,
      _id: userUpdated.id,
    };
  },
  async findUser(id: string, query: GetUserDto) {
    const user = await UsersRepository.findUser(id);
    const q = GetUserDto.buildQuery(query);
    let log = user.log ? user.log : [];
    if (q.log.date) {
      log = log.filter((item) => {
        const date = new Date(item.date);
        return date <= q.log.date.$lte && date >= q.log.date.$lte;
      });
    }
    if (q.$slice) {
      log = log.slice(0, q.$slice);
    }
    return { ...user, log, count: log.length };
  },
};

export default UsersService;
