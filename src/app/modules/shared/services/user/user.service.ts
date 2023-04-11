import { Injectable } from '@angular/core';
import { USER_MOCK } from "../../mocks/user.mock";
import { UserInterface } from "../../interfaces/user/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: UserInterface = USER_MOCK[0]
  public contactUser: UserInterface = USER_MOCK[1]
}
