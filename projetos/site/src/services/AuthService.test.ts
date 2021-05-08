/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken'
import { httpClient } from '../infra/http'
import { AuthService } from './AuthService'
import { logout } from './loginService'

jest.mock('jsonwebtoken')
jest.mock('../infra/http')
jest.mock('./loginService')

const mockedJwtDecode = jwt.decode as jest.MockedFunction<typeof jwt.decode>
const mockedHttpClient = httpClient as jest.MockedFunction<typeof httpClient>
const mockedLogout = logout as jest.MockedFunction<typeof logout>

describe('AuthService', () => {
  beforeEach(() => {
    mockedJwtDecode.mockReset()
    mockedHttpClient.mockReset()
    mockedLogout.mockReset()
  })

  describe('getSession()', () => {
    describe('when session is valid', () => {
      test('return user', async () => {
        mockedJwtDecode.mockReturnValue({ user: { name: 'Test' } })

        const user = await AuthService({} as any).getSession()

        expect(user).toEqual({ name: 'Test' })
      })
    })

    describe('when session is invalid', () => {
      test('throw error', async () => {
        mockedJwtDecode.mockReturnValue('')

        const user = () => AuthService({} as any).getSession()

        expect(user).rejects.toThrowError('Unexpected result')
      })
    })
  })

  describe('hasActiveSession()', () => {
    describe('when request succeeded', () => {
      describe('and user is authenticated', () => {
        test('returns true', async () => {
          mockedHttpClient.mockResolvedValue({ data: { authenticated: true } })

          const result = await AuthService({} as any).hasActiveSession()

          expect(result).toBe(true)
        })
      })

      describe('and user is unauthenticated', () => {
        test('returns false', async () => {
          mockedHttpClient.mockResolvedValue({ data: { authenticated: false } })

          const result = await AuthService({} as any).hasActiveSession()

          expect(result).toBe(false)
          expect(mockedLogout).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe('when request fail', () => {
      test('returns false', async () => {
        mockedHttpClient.mockRejectedValue(new Error('some error'))

        const result = await AuthService({} as any).hasActiveSession()

        expect(result).toBe(false)
        expect(mockedLogout).toHaveBeenCalledTimes(1)
      })
    })
  })
})
