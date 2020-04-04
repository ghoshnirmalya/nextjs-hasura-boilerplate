import { setCookie, destroyCookie, parseCookies } from "nookies";
import { NextPageContext } from "next";

const cookieSetter = (key: string, value: string, ctx?: NextPageContext) => {
  setCookie(ctx, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};

const cookieRemover = (key: string) => {
  destroyCookie(null, key);
};

const cookieParser = (key: string, ctx?: NextPageContext) => {
  return parseCookies(ctx)[key];
};

export { cookieSetter, cookieRemover, cookieParser };
