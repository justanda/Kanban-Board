import { UserLogin } from "../interfaces/UserLogin";

// TODO: make a POST request to the login route
const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(`Failed to login: ${data.message}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject("Failed to login");
  }
};

export { login };
