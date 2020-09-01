import axios from 'axios';

const CHECKUPS_API_URL = "http://localhost:8080/api/checkups";

class CheckupService {

    getCheckups() {
        return axios.get(CHECKUPS_API_URL);
    }

    getCheckupById(checkupId){
        return axios.get(CHECKUPS_API_URL + '/' + checkupId);
    }

    createCheckup(checkup){
        return axios.post(CHECKUPS_API_URL, checkup);
    }

    updateCheckup(checkup, checkupId) {
        return axios.put(CHECKUPS_API_URL + '/' + checkupId, checkup);
    }

    deleteCheckup(checkupId){
        return axios.delete(CHECKUPS_API_URL + '/' + checkupId);
    }
}
