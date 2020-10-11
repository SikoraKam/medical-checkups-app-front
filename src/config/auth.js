export const isAllowed = (user) => {
    return !!(user.roles.role === "ADMIN" || user.roles.role === "MANAGER");
};
