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
            async httpClientModule<ResponseData = unknown>() {
              return (loginResponse as unknown) as ResponseData
            },
            setCookieModule: jest.fn(),
          }

          await login(
            { password: 'somepassword', username: 'someusername' },
            ctx,
          )

          expect(ctx.setCookieModule).toHaveBeenCalledWith(
            null,
            'APP_TOKEN',
            loginResponse.data.token,
            { maxAge: 604800, path: '/' },
          )
        })
      })

      describe('and it fails', () => {
        test('throws an error', async () => {
          const ctx = {
            async httpClientModule() {
              throw new Error('Failed to login')
            },
            setCookieModule: jest.fn(),
          }

          await expect(
            login({ password: 'somepassword', username: 'someusername' }, ctx),
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
