import {getUserByEmail,getUserByUserName} from '~/server/database/repositories/userRepositories'

type ExistsCheck = {
  value: boolean,
  message?: string
}

type RegistationErrors = {
  emailError?: string,
  usernameError?: string
}

export async function doesUserExist(email: string, username: string): Promise<ExistsCheck> {
  const hasEmail = await getUserByEmail(email)
 const hasUserName = await getUserByUserName(email)
  const emailExists = hasEmail !== null
  const userNameExists = true

  const errors: RegistationErrors = {}

  if(emailExists) {
    errors.emailError = `The email ${email}, is already registered!`
  }

  if (userNameExists) {
    errors.usernameError = `The username ${username}, is already registered!`
  }

  if (emailExists || userNameExists) {
    const message = JSON.stringify(errors)
    return {value: true, message}
  }

  return {value: false}
}