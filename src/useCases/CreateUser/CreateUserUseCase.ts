import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

/**
 * Single Responsability Principle:
 * This class has only one method
 * This class has only one responsability: only to create a new user with use cases (rules)
 * This class doesn't know where data will de saved
 * This class will be used every time we need to create a new user, independing where the request is coming from
 *
 * Liskov Substitution Principle:
 * This class receives a typed repository from an Interface
 * Doesn't matter what is our database, we only need to have all methods created on IUsersRepository
 * Doesn't matter what is our SMTP, we only need to have all methods created on IMailProvider
 *
 * Dependency Inversion Principle:
 * This class isn't saving our data on database directly, it's using a method .save() from IUsersRepository
 */

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository // Automatically creates attribute if it is private
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)

    await this.usersRepository.save(user)
  }
}
