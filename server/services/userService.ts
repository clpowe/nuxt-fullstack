import { RegistationRequest } from './../../types/IRegistration';
import { validate } from '~~/server/services/validator';
import { IUser } from './../../types/IUser';
import {getUserByEmail, getUserByUserName} from '~~/server/database/repositories/userRepository'

type ExistsCheck = {
  value: boolean,
  message?: string
}

type RegistationErrors = {
  emailError?: string,
  usernameError?: string
}

export async function validateUser(data: RegistationRequest): Promise<FormValidation> {
  const errors = await validate(data)
  if (errors.size > 0) {
    return {hasErrors: true, errors}
  }
  return {hasErrors: false}
}

export function sanitizeUserForFrontend(user: IUser | undefined): IUser {
  if (!user) {
    return user
  }

  delete user.password
  delete user.loginType
  delete user.stripeCustomerId

  return user
}