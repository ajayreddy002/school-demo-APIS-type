const dbModel = require('../../models');
class StudentDbService {
    static async addStudent(payLoad: any) {
        try {
            return dbModel.student.create(payLoad);
        } catch (error) {
            throw error;
        }
    }
}
export default StudentDbService;