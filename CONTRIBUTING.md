# Contributing to Style Shelf

You can add a style, a UI element or an icon pack. Each entry is one folder
under `catalog/`. A pull request adds that folder.

## The quickest way: a style from the app

1. Open Style Shelf and press **Adapt** on the style closest to yours.
2. Change the tokens in the atelier and give the style a name. Write your
   GitHub username with an `@` as author, such as `@octocat`. The tile then
   shows your GitHub picture and links to your profile.
3. Press **Propose**. GitHub opens with the file already written. Commit it to
   a new branch and open the pull request.

## By hand

```
catalog/
  styles/<id>/style.json        a style
  buttons/<id>/entry.json       an element: its card
  buttons/<id>/element.css      its CSS
  buttons/<id>/demo.html        the markup of its preview
  icons/<id>/entry.json         an icon pack, named by its npm packages
  engines/<id>/entry.json       an animation engine, named by its npm packages
```

An engine entry also carries `homepage` and `use`: what the engine is for, in
English, French and Spanish.

The element folders are `buttons`, `cards`, `inputs`, `badges`, `alerts`,
`tooltips`, `menus`, `tables`, `placeholders`, `motion` and `backgrounds`.
Copy an existing entry of the same kind and change it.

The `id` uses lowercase words joined by dashes. It matches the folder name and
is unique across the whole catalogue.

`entry.json` and `style.json` carry a title in English, French and Spanish, a
licence, an author and `"tier": "free"`. Add `"github": "<your username>"` to
be credited on the tile with your GitHub picture and a link to your profile.

## The rules the checks enforce

Run `npm test` before you push. The same checks run on every pull request.

- An element's CSS uses only the variables of the style, such as
  `var(--accent)`. It holds no colour of its own: no hex value and no `rgb()`.
- Its classes and keyframes start with `ss-<id>`, so two elements never
  collide in a kit.
- Anything that animates stops under `prefers-reduced-motion: reduce`.
- The preview markup holds no script and no event handler. Previews run in a
  sandboxed frame.
- A style defines all 30 tokens. Its text colours read at 4.5:1 on the page,
  the surface and the card.
- An icon pack ships the licence of the icons it copies.

## Licence

By opening a pull request you agree that your entry is published under the
licence it declares. Use a licence that allows anyone to reuse it, such as MIT,
ISC or Apache-2.0.
