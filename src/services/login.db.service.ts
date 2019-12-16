const dbModel = require('../../models');
class LoginTableService {
    static async CreateLogin(payLoad: any) {
        try {
            return dbModel.admin_login.create(payLoad);
        } catch (error) {
            throw error;
        }
    }
}
export default LoginTableService;