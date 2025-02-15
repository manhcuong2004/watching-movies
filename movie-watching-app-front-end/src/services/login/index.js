const fetchLogin = async (email, password) => {
  return fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    // credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((response) => response.json());
};

export { fetchLogin };
