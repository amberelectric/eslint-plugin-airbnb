# Contribution Guide

## Development

### Setup

This project uses [pnpm](https://pnpm.io) v11 (pinned via `packageManager` in `package.json`).

```bash
pnpm install
```

### Testing

To test the plugin locally:

```bash
pnpm run lint
```

### Structure

```
eslint-plugin-airbnb/
├── configs/          # Flat config exports
│   ├── base.js      # Base JavaScript/ES6 config
│   ├── react.js     # React rules config
│   └── react-hooks.js # React Hooks config
├── rules/           # Rule definitions
│   ├── best-practices.js
│   ├── errors.js
│   ├── es6.js
│   ├── imports.js
│   ├── node.js
│   ├── strict.js
│   ├── style.js
│   ├── variables.js
│   ├── react.js
│   ├── react-a11y.js
│   └── react-hooks.js
├── index.js         # Main entry point (plugin export)
├── base.js          # Convenience export for base config
├── hooks.js         # Convenience export for hooks config
├── legacy.js        # Legacy ESLint config support
└── whitespace.js    # Whitespace-only rules
```

### Making Changes

1. **Modifying Rules**: Edit files in the `rules/` directory
2. **Updating Configs**: Edit files in the `configs/` directory
3. **Testing**: Use `pnpm run lint` to test changes

### Versioning

This project follows semantic versioning (SemVer):

- **Major**: Breaking changes to rule configurations
- **Minor**: New rules or non-breaking changes
- **Patch**: Bug fixes

### Publishing

The package is published to Amber's AWS CodeArtifact registry by the [Publish workflow](.github/workflows/publish.yml), which runs when a GitHub Release is published.

1. Bump the version in `package.json` (the GitHub Release creates the tag, so skip the git tag here):

   ```bash
   pnpm version [major|minor|patch] --no-git-tag-version
   ```

2. Open a PR with the bump and merge it to `main`.
3. [Draft a new GitHub Release](https://github.com/amberelectric/eslint-plugin-airbnb/releases/new) from `main`, tagged with the new version (e.g. `v1.2.3`), and publish it.

> ℹ️ Publishing fails if that version already exists in CodeArtifact, so always bump `package.json` before cutting a release.

#### Publishing manually

If you need to publish from your machine, log in to CodeArtifact first (this writes a short-lived token to your `~/.npmrc`, which pnpm reads). This is documented in our **Using AWS CodeArtifact Repositories** document in Notion.

```bash
aws codeartifact login --tool npm \
  --domain amber --domain-owner 630888660911 \
  --repository npm --region ap-southeast-2
pnpm publish
```
