# Monorepo

This is my experiment with monorepo. It should make code reuse between apps easier, and it should make it easier to start new apps. 

## Workspace setup

Current setup is

```
root
  apps/
    tvhelper/
    ...
  packages/
    component/
    ...
```

the apps folder is my apps, and packages are packages that supports the apps. Probably I should merge them into a structure like 🤔

```
root
  src/
    tvhelper/
    component/
```

## Install and run

Clone the repo and do `yarn install`.

Apps can be run from the monorepo root like `yarn workspace @tbergq/tvhelper dev`, or you can navigate to the workspace and do `yarn dev`.

## Testing and linting

The monorepo will by default only lint the files you have changed. Run `yarn lint --all` if you want to lint all files. This is useful when you change an eslint rule, or upgrade eslint it self. 

The tests will by default only test `dirty workspaces`, in other words, only workspaces affected by your changes. If you wish to run all tests, please do `yarn test --all`