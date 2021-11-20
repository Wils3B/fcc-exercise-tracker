import UsersRepository from './users.repository';

const UsersService = {
  create(data: any) {
    return UsersRepository.createUser(data);
  },
  findAll() {
    return UsersRepository.findAllUsers();
  },
};

export default UsersService;
