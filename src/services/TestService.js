import axios from "axios";

const TEST_API_BASE_URL = "http://localhost:8080/api/tests";

class TestService {
    getTests() {
        return axios.get(TEST_API_BASE_URL);
    }
    getTestById(testId) {
        return axios.get(TEST_API_BASE_URL + "/" + testId);
    }

    createTest(test) {
        return axios.post(TEST_API_BASE_URL, test);
    }

    updateTest(test, testId) {
        return axios.put(TEST_API_BASE_URL + "/" + testId, test);
    }

    deleteTest(testId) {
        return axios.delete(TEST_API_BASE_URL + "/" + testId);
    }
}

export default new TestService();
