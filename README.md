# eslint-plugin-airbnb

[Given the apparent abandonment of eslint-config-airbnb](https://github.com/airbnb/javascript/issues/2961), this repository exists with the sole purpose of allowing developers to migrate to ESLint v9 whilst still preserving the rules from Airbnb's JavaScript style guide.

No updates will be made to this repository unless there is a significant reason to do so (i.e. support for future versions of ESLint).

## Installation

```bash
npm install --save-dev @amberelectric/eslint-plugin-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint
```

## Usage

Create an `eslint.config.[mjs|js]` file in your project root:

```javascript
const airbnbPlugin = require("@amberelectric/eslint-plugin-airbnb");

module.exports = [
  // For JavaScript/Node.js projects (base rules only)
  airbnbPlugin.configs.base,

  // OR for React projects (includes base + React + React Hooks)
  ...airbnbPlugin.configs.recommended,

  // Your custom overrides
  {
    rules: {
      // Your rule overrides here
    },
  },
];
```

### Available Configs

- `airbnbPlugin.configs.base` - Base JavaScript/ES6 rules (no React)
- `airbnbPlugin.configs.react` - Base + React rules (array of configs)
- `airbnbPlugin.configs['react-hooks']` - Base + React + React Hooks (array of configs)
- `airbnbPlugin.configs.recommended` - Alias for `react-hooks` (array of configs)

### Individual Config Imports

You can also import individual configs:

```javascript
const airbnbBase = require("@amberelectric/eslint-plugin-airbnb/base");
const airbnbHooks = require("@amberelectric/eslint-plugin-airbnb/hooks");

module.exports = [
  airbnbBase,
  airbnbHooks,
  // your overrides
];
```

## Features

- ✅ **ESLint v9 Flat Config Support** - Modern flat config format
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
const whitespace = require("@amberelectric/eslint-plugin-airbnb/whitespace");

module.exports = [whitespace];
```

## Migrating from eslint-config-airbnb

If you're migrating from `eslint-config-airbnb`:

1. Uninstall old dependencies:

   ```bash
   npm uninstall eslint-config-airbnb eslint-config-airbnb-base
   ```

2. Install @amberelectric/eslint-plugin-airbnb:

   ```bash
   npm install --save-dev @amberelectric/eslint-plugin-airbnb
   ```

3. Update your ESLint config to use the flat config (see Usage above)

## Development

```bash
# Install dependencies
npm install

# Run linter
npm run lint
```

## License

MIT

## Credits

This project is inspired by and based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) and their ESLint configurations.
