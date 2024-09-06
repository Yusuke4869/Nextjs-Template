# Template of Next.js

My Next.js Template.

## with Tailwind CSS

```bash
pnpm add -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss
```

`src/styles/globals.css`

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

`tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
```

`.prettierrc.json`

```diff
+ "plugins": ["prettier-plugin-tailwindcss"],
```

## License

MIT
