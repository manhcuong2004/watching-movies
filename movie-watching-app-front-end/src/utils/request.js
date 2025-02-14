const API_DOMAIN = "http://localhost:5000/";

export const postUser = async (path, data) => {
    const response = await fetch(`${API_DOMAIN}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
};


export const postLoginUser = async (path, data) => {
    const response = await fetch(`${API_DOMAIN}${path}`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
};
