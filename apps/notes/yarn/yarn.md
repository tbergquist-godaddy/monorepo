# Yarn

### Yarn policies set-version

When people are using different versions of yarn across your project, some weird bugs might appear. You can solve this by doing `yarn policies set-version`.
This downloads the latest version of yarn and stores it in your repository, then everyone will use that version.

- https://yarnpkg.com/lang/en/docs/cli/policies/

### Upgrading dependencies

Do `yarn upgrade-dependencies --latest`, this will give you a cli where you can see all available upgrades. You can choose which dependencies you want to upgrade.

