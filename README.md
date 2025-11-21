# eslint-plugin-amber

Amber's ESLint plugin with flat config support for ESLint v9, inspired by Airbnb's JavaScript style guide.

## Installation

```bash
npm install --save-dev eslint-plugin-amber eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint
```

## Usage

### ESLint v9 Flat Config (Recommended)

Create an `eslint.config.js` file in your project root:

```javascript
const amber = require('eslint-plugin-amber');

module.exports = [
  // For JavaScript/Node.js projects (base rules only)
  amber.configs.base,
  
  // OR for React projects (includes base + React + React Hooks)
  ...amber.configs.recommended,
  
  // Your custom overrides
  {
    rules: {
      // Your rule overrides here
    }
  }
];
```

### Available Configs

- `amber.configs.base` - Base JavaScript/ES6 rules (no React)
- `amber.configs.react` - Base + React rules (array of configs)
- `amber.configs['react-hooks']` - Base + React + React Hooks (array of configs)
- `amber.configs.recommended` - Alias for `react-hooks` (array of configs)

### Individual Config Imports

You can also import individual configs:

```javascript
const amberBase = require('eslint-plugin-amber/base');
const amberHooks = require('eslint-plugin-amber/hooks');

module.exports = [
  amberBase,
  amberHooks,
  // your overrides
];
```

### Legacy ESLint Config (< v9)

For older ESLint versions, create an `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    'plugin:amber/legacy'
  ],
  rules: {
    // Your rule overrides here
  }
};
```

## Features

- ✅ **ESLint v9 Flat Config Support** - Modern flat config format
- ✅ **Backward Compatible** - Legacy config support for ESLint < 9
- ✅ **Comprehensive Rules** - Based on Airbnb's battle-tested style guide
- ✅ **React Support** - Includes React, React Hooks, and JSX A11y rules
- ✅ **Import Management** - Smart import/export linting
- ✅ **Modern JavaScript** - ES6+ and latest ECMAScript features

## Rule Categories

### Base Rules
- **Best Practices** - Error prevention and code quality
- **ES6** - Modern JavaScript features
- **Imports** - Module import/export management
- **Node.js** - Node.js specific rules
- **Strict Mode** - Strict mode enforcement
- **Style** - Code formatting and consistency
- **Variables** - Variable declaration and usage
- **Errors** - Possible syntax and logic errors

### React Rules
- **React** - React component best practices
- **JSX A11y** - Accessibility rules for JSX
- **React Hooks** - Hooks best practices and lint rules

## Whitespace Rules

For projects that only want to enforce whitespace/formatting rules as errors:

```javascript
const whitespace = require('eslint-plugin-amber/whitespace');

module.exports = [whitespace];
```

## Migrating from eslint-config-airbnb

If you're migrating from `eslint-config-airbnb`:

1. Uninstall old dependencies:
   ```bash
   npm uninstall eslint-config-airbnb eslint-config-airbnb-base
   ```

2. Install eslint-plugin-amber:
   ```bash
   npm install --save-dev eslint-plugin-amber
   ```

3. Update your ESLint config:
   - For ESLint v9: Use flat config (see Usage above)
   - For ESLint < 9: Replace `airbnb` with `plugin:amber/legacy`

## Development

```bash
# Install dependencies
npm install

# Run linter
npm run lint
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT

## Credits

This project is inspired by and based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) and their ESLint configurations.

## Changelog

### 1.0.0
- Initial release
- ESLint v9 flat config support
- Modernized package structure
- Updated all dependencies to latest versions
- Maintained compatibility with Airbnb's style guide
