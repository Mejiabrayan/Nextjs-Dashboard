import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
//   initializing NextAuth.js with the authConfig object and exporting the auth property
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};