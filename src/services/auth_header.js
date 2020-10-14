export default function authHeader() {
    const client = JSON.parse(localStorage.getItem("client"));
    if (client && client.accessToken) {
        return { Authorization: "Bearer" + client.accessToken };
    } else {
        return {};
    }
}
