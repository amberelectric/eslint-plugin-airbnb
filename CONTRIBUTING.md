# Contribution Guide

## Development

### Setup

```bash
npm install
```

### Testing

To test the plugin locally:

```bash
npm run lint
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
3. **Testing**: Use `npm run lint` to test changes

### Versioning

This project follows semantic versioning (SemVer):

- **Major**: Breaking changes to rule configurations
- **Minor**: New rules or non-breaking changes
- **Patch**: Bug fixes

### Publishing

Make sure you have a GitHub Personal Access Token with the `write:packages` scope set as an environment variable called `GITHUB_PAT_AMBER_ELECTRIC`.

Then run:

```bash
npm version [major|minor|patch]
npm publish
```
