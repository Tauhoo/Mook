export const LOGOUT = {
  type: 'LOGOUT'
}

export const LOGIN = (payload) => ({
  type: 'LOGIN',
  payload,
})

export const INPUT = (inputType,data) => ({
  type: 'INPUT',
  inputType,
  data,
})
