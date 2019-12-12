```
 __      __                     _____ _ __          __        _                      
 \ \    / /                    / ____| |\ \        / /       (_)                     
  \ \  / /   _  ___   ______  | (___ | |_\ \  /\  / /   _ ___ ___      ___   _  __ _ 
   \ \/ / | | |/ _ \ |______|  \___ \| '_ \ \/  \/ / | | / __| \ \ /\ / / | | |/ _` |
    \  /| |_| |  __/           ____) | | | \  /\  /| |_| \__ \ |\ V  V /| |_| | (_| |
     \/  \__,_|\___|          |_____/|_| |_|\/  \/  \__, |___/_| \_/\_/  \__, |\__, |
                                                     __/ |                __/ | __/ |
                                                    |___/                |___/ |___/
```
# @ddosdor/vue-sh-wysiwyg
## What is this?

This is my very basic and very simple HTML wysiwyg editor.

## Why I made this?

Because I need some very basic and very simple HTML wysiwyg editor for my project. Need is the mother of invention. :)

## Where to get it from?

It's simple:

```
npm install @ddosdor/vue-sh-wysiwyg
```

or

```
yarn add @ddosdor/vue-sh-wysiwyg
```

## How to use this?

### First import it and let Vue know to use it.

In your `main.js` file:

```js
import Vue from 'vue';
import ShWysiwyg from '@ddosdor/vue-sh-wysiwyg';

Vue.use(ShWysiwyg)
```

Remember to add a stylesheet:

In `main.js` (I prefer this solution):

```js
import "@ddosdor/vue-sh-wysiwyg/lib/ShWysiwyg.css";
```

or in some css file:

```css
@import "~@ddosdor/vue-sh-wysiwyg/lib/ShWysiwyg.css";
```

### Use this in components

To use `ShWysiwyg` in components:

```html
<ShWysiwyg v-model="someHtml" />
```

Value passed on to the v-model is 'two-way binding' (Vue docs).

You can also use the emitted events:

```html
<ShWysiwyg v-model="someHtml" 
           @change="handleChange"
           @focus="handleFocus"
           @blur="handleBlur"
/>
```
- `@change` is emitted on every content change
- `@focus` is emitted when content is focused
- `@blur` is emitted when content is blur

### Possible commands and customization

So far, there are only a few possible commands (Did I mentioned that it's a simple editor?)

- **Heading** (heading)
- **Bold** (bold)
- **Italic** (italic)
- **Strikethrough** (strikeThrough)
- **Underlin** (Underline)
- **Align left** (justifyLeft)
- **Align center** (justifyCenter)
- **Align right** (justifyRight)
- **Align justify** (justifyFull)
- **Hyperlink** (createLink)
- **Undo** (undo)
- **Remove format** (removeFormat)

By default, all the above options are available. However, they can be customized with `props`:

```html
<ShWysiwyg v-model="someHtml" 
           :toolbar="['bold', 'underline', '|', 'createLink', 'removeFormat']"
/>
```

Mysterious `'|'` is divider.

## Can I use it for production?

I don't know, I use it. :) 

## What's next?

I still have some ideas that I would like to implement for this tool. So far, this is a beta version, that's why every feedback is welcome.