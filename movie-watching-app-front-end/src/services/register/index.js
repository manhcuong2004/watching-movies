const fetchRegister = (
  firstname,
  lastname,
  displayname,
  password,
  email
) => {
  return fetch("https://api.example.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstname,
      lastname,
      displayname,
      password,
      email,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((errorData) => {
          throw new Error(errorData.message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};
export { fetchRegister };
