const fetchLogin = async (username, password) => {
    return fetch("https://api.example.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then((response) => response.json()); 
  };
  
  export { fetchLogin };
  