import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: { username: string; password: string; } | undefined;
  private allUsers: {username: string , password: string, firstname: string, lastname: string }[] = [];
  loggedIn = false;

  isAuthenticated() {
    console.log('loggedIn', this.loggedIn);
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 100);
      }
    );
  }

  signUp(userData: {username: string , password: string, firstname: string, lastname: string }) {
    // this.loggedIn = true;
    this.allUsers.push(userData);
  }

  login(userData: {username: string , password: string }) {
    this.loggedIn = true;
    this.user = userData;
  }

  logout() {
    this.loggedIn = false;
  }
}
