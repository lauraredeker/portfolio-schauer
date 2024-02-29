Here's a list of my learnings while building this website.

## Svelte / SvelteKit

- Add PostCSS with [svelte-preprocess](https://www.npmjs.com/package/svelte-preprocess)
- Use dynamic + static classes: `class="icon {svg}"`
- how to log a reactive variable each time it changes: `$: foo, console.log('value:', foo);`

## TypeScript

- 🎉 How do I type reactive assignments? / I get an "implicitly has type 'any' error"? [source](https://github.com/sveltejs/language-tools/blob/6ba86d2be3588d3cd374c7e4d1e46860d2218bec/docs/preprocessors/typescript.md#troubleshooting--faq)

```ts
let show: boolean; // <--- added above the reactive assignment
$: show = !!data.someKey; // <-- `show` now has type `boolean`
````

## CSS

- How to prevent CSS transition from happening on 1st render.

## HTML/Accessibility

- add `aria-current` to a link to mark it as [the current page link](https://tink.uk/using-the-aria-current-attribute/).

## VSCode

- 🎉 [Source](https://github.com/sveltejs/language-tools/blob/HEAD/docs/README.md#language-specific-setup): Install the "Svelte for VS Code" extension and add this in your VSCode settings to enable formatting:

```json
"[svelte]": {
  "editor.defaultFormatter": "svelte.svelte-vscode"
   },
```
