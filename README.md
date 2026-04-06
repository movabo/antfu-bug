This is for [a bug report](https://github.com/antfu/eslint-config/issues/841) from [antfu/eslint-config](https://github.com/antfu/eslint-config).

# Reproduction

* Install with `npm i`
  * The current state of this repo is working, `npm run typecheck` only shows one error included to demonstrate
that typechecking works.
* To make the bug appear, run eslint with the current configuration: `npm run eslint -- --fix`
Now, `npm run typecheck` produces two errors.

# Workaround

Set the `semi`-rule to `always` (as in `eslint.working.config.js`):
* Revert to a working state (e.g. by running `npm run openapi-ts`).
* Run with working config: `npm run eslint -- --fix --config eslint.working.config.js`
* Check: `npm run typecheck`
