import axios from "axios";

const RESULT_API_BASE_URL = "http://localhost:8080/api/results";
const RESULT_API_WITH_CHECKUP_URL = "http://localhost:8080/api/checkups/";

class ResultService {
    getResults() {
        return axios.get(RESULT_API_BASE_URL);
    }
    getResultsByCheckUpId(checkupId) {
        return axios.get(RESULT_API_WITH_CHECKUP_URL + checkupId + "/results");
    }

    getResultById(resultId) {
        return axios.get(RESULT_API_BASE_URL + "/" + resultId);
    }

    createResult(result) {
        return axios.post(RESULT_API_BASE_URL, result);
    }

    updateResult(result, resultId) {
        return axios.put(RESULT_API_BASE_URL + "/" + resultId, result);
    }

    deleteResult(resultId) {
        return axios.delete(RESULT_API_BASE_URL + "/" + resultId);
    }
}

export default new ResultService();
