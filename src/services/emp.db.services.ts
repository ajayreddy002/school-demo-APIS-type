const dbModel = require('../../models');
class EmployeeDbServices {
    static async CreateEMP(payLoad: any) {
        try {
            return dbModel.employees.create(payLoad);
        } catch (error) {
            throw error;
        }
    }
    static async schoolEmpDetails(payLoad: any) {
        try {
            return dbModel.employees.findAll({
                where: {
                    email: payLoad.email,
                    password: payLoad.password
                }
            });
        } catch (error) {
            throw error;
        }
    }
    static async listEmployees(payLoad: any) {
        try {
            return dbModel.employees.findAll({
                where: {
                    school_id: payLoad
                },
                attributes: ['id', 'employee_name', 'email', 'phone_number', 'subject'],
            })
        } catch (error) {
            throw error;
        }
    }
    static async updateEmpDetails(payLoad: any) {
        try {
            return dbModel.employees.update(payLoad, {
                where: {
                    id: payLoad.id,
                    school_id: payLoad.school_id
                }
            });
        } catch (error) {
            throw error;
        }
    }
    static async deleteEmpDetails(payLoad: any) {
        try {
            return dbModel.employees.destroy({
                where: {
                    id: payLoad.id,
                    school_id: payLoad.school_id
                }
            });
        } catch (error) {
            throw error;
        }
    }
}
export default EmployeeDbServices;