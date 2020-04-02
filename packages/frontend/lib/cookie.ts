import { setCookie, destroyCookie } from "nookies";

const cookieSetter = (key: string, value: string, ctx = null) => {
  setCookie(ctx, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  });
};

const cookieRemover = (key: string) => {
  destroyCookie(null, key);
};

export { cookieSetter, cookieRemover };
