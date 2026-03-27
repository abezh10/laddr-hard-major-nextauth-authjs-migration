# Major NextAuth/Auth.js Migration

- Category: Migrate / Version Migration
- Difficulty: Hard

## Contains
- `app/api/auth/[...auth]/route.ts`
- `lib/auth.ts`
- `lib/session.ts`
- `middleware.ts`
- `package.json`

## Prompt
The app is moving to a newer auth stack with breaking NextAuth/Auth.js changes. Migrate configuration, callbacks, session access, and route protection while preserving current login behavior.

## Likely Change Dirs
- `app/api/auth`
- `lib`
- `middleware.ts`
