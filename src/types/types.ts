export enum DataActionTypes {
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
  REGISTER_USER = "REGISTER_USER",
  EDIT_USER = "EDIT_USER",
  LOG_OUT = "LOG_OUT",
  SHOW_HEADER_MENU="SHOW_HEADER_MENU",
  SIGN_UP="SIGN_UP"
}

export interface LoadedBooks {
  id: string,
  name: string,
  author: string,
  length: string,
  released: string,
  description: string,
  imageUrl: string,
}

export interface UserData {
  userName: string,
  birthDate?: string,
  email?: string,
  password: string
}

export interface DataState {
  booksData: [LoadedBooks] | [],
  loading: boolean,
  error: null | string,
  loaded: boolean,
  isSignedUp: boolean,
  isUserExist: boolean,
  isHeaderMenuVisible: boolean,
  users: UserData[] | [],
  currentUser: UserData | null
}

interface FetchDataAction {
  type: DataActionTypes.FETCH_DATA
}

interface FetchDataSuccessAction {
  type: DataActionTypes.FETCH_DATA_SUCCESS,
  payload: [
    LoadedBooks
  ]
}

interface FetchDataErrorAction {
  type: DataActionTypes.FETCH_DATA_ERROR,
  payload: string
}

interface RegisterUser {
  type: DataActionTypes.REGISTER_USER,
  payload: UserData
}

interface EditUser {
  type: DataActionTypes.EDIT_USER,
  payload: UserData
}

interface LogOutAction {
  type: DataActionTypes.LOG_OUT
}

interface ShowHeaderMenuAction {
  type: DataActionTypes.SHOW_HEADER_MENU
}

interface SignUpAction {
  type: DataActionTypes.SIGN_UP
}

export type DataAction =
                          FetchDataAction |
                          FetchDataSuccessAction |
                          FetchDataErrorAction |
                          RegisterUser |
                          EditUser |
                          LogOutAction | ShowHeaderMenuAction | SignUpAction;
