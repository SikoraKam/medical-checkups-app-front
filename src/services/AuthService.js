import axios from "axios";

const API_AUTH_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_AUTH_URL + "signin", {
                email,
                password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem(
                        "client",
                        JSON.stringify(response.data)
                    );
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("client");
    }

    register(name, lastname, email, password) {
        return axios.post(API_AUTH_URL + "signup", {
            name,
            lastname,
            email,
            password,
        });
    }

    getActualClient() {
        return JSON.parse(localStorage.getItem("client"));
    }
}

export default new AuthService();
