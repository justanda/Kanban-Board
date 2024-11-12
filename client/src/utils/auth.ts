import { JwtPayload, jwtDecode } from "jwt-decode";
import type { UserLogin } from "../interfaces/UserLogin";

class AuthService {
  // TODO: return a value that indicates if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return token;
  }
  // TODO: return the token
  getToken(): string {
    const loggedIn = localStorage.getItem("loggedIn") || "";
    return loggedIn;
  }

  // TODO: set the token to localStorage
  // TODO: redirect to the home page
  login(idToken: string) {
    localStorage.setItem("loggedIn", idToken);
    window.location.assign("/");
  }

  // TODO: remove the token from localStorage
  // TODO: redirect to the login page
  logout() {
    localStorage.removeItem("loggedIn");
    window.location.assign("/");
  }
  // TODO: return the decoded token
  getProfile() {
    return jwtDecode<UserLogin>(this.getToken());
  }

  // TODO: return a value that indicates if the token is expired
  isTokenExpired(token: string) {
    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      if (decodedToken?.exp && decodedToken?.exp < Date.now() / 1000) {
        return true;
      }
    } catch (error) {
      return false;
    }
  }
}
export default new AuthService();
