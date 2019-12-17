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
                    email: payLoad.email
                },
                attributes: ['id', 'school_name', 'user_name', 'email', 'school_address', 'phone_number', 'password']
            });
        } catch(error){
            throw error;
        }
    }
}
export default SchoolDbServices;