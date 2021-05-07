const Router = require("express");
const router = new Router();
const employeeController = require("../controller/employee.contoller");

router.post("/employee", employeeController.createEmployee)
router.get("/employees", employeeController.getEmployees)
router.get("/employees/:dep_id", employeeController.getEmployeesOnDepartment)
router.get("/employee/:id", employeeController.getEmployee)
router.put("/employee", employeeController.updateEmployee)
router.delete("/employee/:id", employeeController.deleteEmployee)

module.exports = router;