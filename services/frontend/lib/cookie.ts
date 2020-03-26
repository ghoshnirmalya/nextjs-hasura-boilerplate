import { setCookie } from 'nookies'

const cookieSetter = (key: string, value: string, ctx = null) => {
  setCookie(ctx, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
}

export { cookieSetter }
