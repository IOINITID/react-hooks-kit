Project name: **React Hooks Kit**

[![npm version](https://badge.fury.io/js/react-hooks-kit.svg)](https://badge.fury.io/js/react-hooks-kit)
![npm](https://img.shields.io/npm/dw/react-hooks-kit)
![license](https://badgen.net/github/license/IOINITID/react-hooks-kit)

## What is it? 🐱

A set of useful functions for working with the React application.

## How to use it?

Install the package from npm:

```
npm install --save react-hooks-kit
```

Or install from yarn:

```
yarn add react-hooks-kit
```

After that, you need to import the package into your project:

```
import { useRenderCount } from 'react-hooks-kit';
```

How to use it:

```
const {renderCount} = useRenderCount(); // 1.

const {renderCount} = useRenderCount('App'); // (App) component renders: 1;
```

## Thanks for using this library.

If you have any suggestions or improvements, we are always open to the Pull Requests.

If you liked it, you can put a star on the GitHub, thanks!
