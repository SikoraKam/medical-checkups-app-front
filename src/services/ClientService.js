import axios from "axios";
import authHeader from "./auth_header.js";

const CLIENT_API_BASE_URL = "http://localhost:8080/api/clients";
const TEST_API_URL = "http://localhost:8080/api/testSecController/";

class ClientService {
    getPublicContent() {
        return axios.get(TEST_API_URL + "all");
    }

    getClientBoard() {
        return axios.get(TEST_API_URL + "client", { headers: authHeader() });
    }

    getManagerBoard() {
        return axios.get(TEST_API_URL + "manager", { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(TEST_API_URL + "admin", { headers: authHeader() });
    }

    getClients() {
        return axios.get(CLIENT_API_BASE_URL);
    }

    createClient(client) {
        return axios.post(CLIENT_API_BASE_URL, client);
    }

    getClientById(clientId) {
        return axios.get(CLIENT_API_BASE_URL + "/" + clientId);
    }

    updateClient(client, clientId) {
        return axios.put(CLIENT_API_BASE_URL + "/" + clientId, client);
    }

    deleteClient(clientId) {
        return axios.delete(CLIENT_API_BASE_URL + "/" + clientId);
    }
}

export default new ClientService();
