import { login, LoginContext, logout } from './loginService'

describe('loginService', () => {
  describe('login()', () => {
    describe('when user try to login', () => {
      describe('and succeed', () => {
        test('store its token', async () => {
          const loginResponse = {
            data: { token: 'fake-token' },
          }

          const ctx: LoginContext = {
            setCookieModule: jest.fn(),
            async httpClientModule<ResponseData = unknown>() {
              return (loginResponse as unknown) as ResponseData
            },
          }

          await login(
            { username: 'someusername', password: 'somepassword' },
            ctx,
          )

          expect(ctx.setCookieModule).toHaveBeenCalledWith(
            null,
            'APP_TOKEN',
            loginResponse.data.token,
            { path: '/', maxAge: 604800 },
          )
        })
      })

      describe('and it fails', () => {
        test('throws an error', async () => {
          const ctx = {
            setCookieModule: jest.fn(),
            async httpClientModule() {
              throw new Error('Failed to login')
            },
          }

          await expect(
            login({ username: 'someusername', password: 'somepassword' }, ctx),
          ).rejects.toThrow('Failed to login')
        })
      })
    })
  })

  describe('logout()', () => {
    describe('when user try to logout and succeed', () => {
      test('remove its token', async () => {
        const destroyCookie = jest.fn()

        await logout({ destroyCookieModule: destroyCookie })

        expect(destroyCookie).toHaveBeenCalledWith(null, 'APP_TOKEN')
      })
    })
  })
})
