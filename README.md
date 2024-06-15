Hello, I've been working on a larger project where tailwind has become too much of a drawback and in search for other solutions I've found a good old CSS-in-JS library developed by Facebook. Below I'm showing how to implement this inside Redwood in a fairly easy manner. [Here is the link to the StyleX documentation](https://stylexjs.com/docs/learn/installation/).

# Setup

First, create a redwood app as usual.
```
yarn create redwood-app redwoodStyleX --typescript
```
Next, add the stylexjs/stylex package
```
yarn workspace web add @stylexjs/stylex
```
Since StyleX uses a babel plugin but Redwood runs vite, we need a plugin to make it work. The [StyleX team has plugins for NextJS](https://stylexjs.com/docs/learn/ecosystem/) but we'll use [this community one](https://www.npmjs.com/package/vite-plugin-stylex-dev).
```
yarn workspace web add -D vite-plugin-stylex-dev
```
Lastly, we need to tell vite to use the stylex plugin inside vite.config.ts
```
import { stylex } from 'vite-plugin-stylex-dev'

const viteConfig: UserConfig = {
  plugins: [stylex(), redwood()],
}
```

# Styling

Then we need somewhere we will create the styles to be imported and used for the UI

* Under web/src create a styles folder
* Create a styles.stylex.tsx file (doesn't really matter what you call it, but the extension matters)

Let's create a style we'll use inside that new file:
```
import * as stylex from '@stylexjs/stylex'

const DARK = '@media (prefers-color-scheme: dark)'

export const tokens = stylex.defineVars({
  primaryTextColor: { default: '#000000', [DARK]: '#FFFFFF' },
  primaryBGColor: { default: '#FFFFFF', [DARK]: '#000000' },
})

export const mainStyle = stylex.create({
  base: {
    color: tokens.primaryTextColor,
    backgroundColor: tokens.primaryBGColor,
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '16px',
  },
})
```
Now when we want to use this mainStyle in our components, we import it like this:
```
import * as stylex from '@stylexjs/stylex'

import { mainStyle } from 'src/styles/styles.stylex'
```
And use it like this (Notice in styleX the last prop wins, so you can give a base style and then use another one after if you want to apply specific css that extends or overwrites values from the base style):
```
<div {...stylex.props(mainStyle.base)}>
  <p>Hello! We are using styleX here.</p>
</div>
```

There is so much more you can do with the css in the styles file. You can create themes, dynamic styles, etc. The styleX documentation is pretty decent so you can start there!

It would be amazing if we could add this as an option in the setp ui command:
```
yarn rw setup ui styleX
```
