import axios from "axios";

const CHECKUPS_API_URL = "http://localhost:8080/api/checkups";
const CLIENT_API_URL = "http://localhost:8080/api/clients";

class CheckupService {
    getCheckups() {
        return axios.get(CHECKUPS_API_URL);
    }

    getCheckupById(checkupId) {
        return axios.get(CHECKUPS_API_URL + "/" + checkupId);
    }

    getAllCheckupsByClientId(clientId) {
        return axios.get(CLIENT_API_URL + "/" + clientId + "/checkups");
    }

    createCheckupWithClientId(checkup, clientId) {
        return axios.post(
            CLIENT_API_URL + "/" + clientId + "/checkups",
            checkup
        );
    }

    updateCheckup(checkup, checkupId) {
        return axios.put(CHECKUPS_API_URL + "/" + checkupId, checkup);
    }

    deleteCheckup(checkupId) {
        return axios.delete(CHECKUPS_API_URL + "/" + checkupId);
    }
}

export default new CheckupService();
