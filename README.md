# Major NextAuth/Auth.js Migration

- Category: Migrate
- Topic: Version Migration
- Difficulty: Hard

## Overview
This sample repository is set up for a hard migrate exercise in the version migration track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to move the implementation to the target framework or version while preserving behavior.

## Exercise Summary
The app is moving to a newer auth stack with breaking NextAuth/Auth.js changes. Migrate configuration, callbacks, session access, and route protection while preserving current login behavior.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `app/api/auth/[...auth]/route.ts`
- `lib/auth.ts`
- `lib/session.ts`
- `middleware.ts`
- `package.json`

## Likely Change Areas
- `app/api/auth/[...auth]`
- `lib`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
