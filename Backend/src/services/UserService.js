const { UserBuilder } = require('../models/User');
const { UserRepo, UserProjectRepo } = require('../repositories');


class UserService {
    constructor() {

    }
    
    static async createNewUser(id, pw, name, contact) {
        const new_user = new UserBuilder(id, name, contact).setPw(pw).build();
        await UserRepo.create(new_user);
    }

    static async getUserById(id) {
        const user = await UserRepo.findById(id);
        return user;
    }

    static async getProjectsOfUser(id) {
        const user = await UserRepo.findByIdWithProjects(id);
        return user.getProjects();
    }

    static async participateProject(user_id, project_id) {
        await UserProjectRepo.create({user_id, project_id});
    }
}

module.exports = UserService;