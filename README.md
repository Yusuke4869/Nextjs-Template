# Template of Next.js

This is my Next.js Template.

## with Tailwind CSS

```bash
yarn add -D autoprefixer postcss prettier-plugin-tailwindcss tailwindcss
```

`src/styles/global.scss`

```diff
+ @import "tailwindcss/base";
+ @import "tailwindcss/components";
+ @import "tailwindcss/utilities";
```

`postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

`tailwind.config.js`

```js
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

`.prettierrc`

```diff
+ "plugins": ["prettier-plugin-tailwindcss"],
```

## License

MIT
