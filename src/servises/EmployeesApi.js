export default class EmployeesApi {
    async getUsers() {
        const response = await fetch('https://reqres.in/api/users?per_page=12')
        return await response.json();
    }
};
