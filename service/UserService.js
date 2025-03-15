const UserRepo=require('../repository/UserRepo');
class UserService {
    async generateTextStream(prompt) {
        try {
            const stream = await UserRepo.generateTextStream(prompt); // Call repository
            return stream;
        } catch (error) {
            throw new Error("Error in ContentService: " + error.message);
        }
    }
}
module.exports = new UserService();