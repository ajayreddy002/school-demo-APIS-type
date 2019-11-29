const dbModel = require('../../models');
class SchoolDbServices {
    static async CreateSchool(payLoad: any) {
        try {
            return dbModel.schools.create(payLoad);
        } catch (error) {
            throw error;
        }
    }
    static async schoolAdminLogin(payLoad: any){
        try{
            return dbModel.schools.findAll({
                where:{
                    email: payLoad.email,
                    password: payLoad.password
                }
            });
        } catch(error){
            throw error;
        }
    }
}
export default SchoolDbServices;