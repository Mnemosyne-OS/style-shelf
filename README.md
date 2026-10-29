<div align="center">

<img src="https://raw.githubusercontent.com/Mnemosyne-OS/Mnemosyne-Neural-OS/main/assets/banner-mnemosyne-os.png" width="100%" alt="Mnemosyne OS — Your memory. Your machine. Your rules." />

🌐 [**mnemosyne-os.io**](https://mnemosyne-os.io) — the product&ensp;·&ensp;[**mnemosyne-os.com**](https://mnemosyne-os.com) — for organizations&ensp;·&ensp;📖 [**docs.mnemosyne-os.io**](https://docs.mnemosyne-os.io) — the documentation

</div>

# Style Shelf

Style Shelf is a catalogue of styles and UI elements for your next app.
You pick a style, add buttons, cards, fields, menus and animations to a cart,
and take away a kit. Your coding agent reads the kit and adapts the style to
your project.

Open it in your browser: <https://mnemosyne-os.github.io/style-shelf/>

## What is in the catalogue

- 55 styles. 4 are the themes of Mnemosyne OS itself: Dark, Light, Tokyo
  Night and Glass. 6 more are made for Style Shelf. 35 come from the daisyUI
  themes and 10 from the Skeleton themes, converted to the same 30 design
  tokens.
- 36 UI elements: buttons, cards, fields, badges, alerts, tooltips, menus,
  tables, loading skeletons, animations and backgrounds.
- 4 icon packs: Lucide, Tabler, Phosphor and Heroicons, shown with 8 sample
  icons each.

Every element is written on the tokens of the style. Choose another style and
the whole catalogue redraws in it.

## How to use it

1. Choose a style. The star keeps your favourites at hand.
2. Add elements to the cart.
3. Open the eye in the top bar to see a whole page drawn in your selection.
4. In the cart, save the selection as a named theme if you want it back later.
5. Take the kit away:
   - **Download the kit** saves `kit.json`.
   - **Copy the brief** shows the brief, then copies it. Paste it into Claude
     Code, Cursor or any coding agent.
   - Inside Mnemosyne OS, **Write into the project** creates a `style-shelf/`
     folder in the project you pick, with four files.

The **Adapt** button on a style opens the atelier. There you change its
colours, radii, shadows and fonts, and keep the result as your own style.

## The kit

| File | What it holds |
|---|---|
| `kit.json` | The style and the elements, with their code and licences |
| `tokens.css` | The variables of the style, under `:root` |
| `elements.css` | The CSS of each element, one commented block each |
| `BRIEF.md` | The instructions for your coding agent |

## Propose a style or an element

Anyone can add to the catalogue with a pull request. Read
[CONTRIBUTING.md](CONTRIBUTING.md). The **Propose** button in the atelier opens
GitHub with your style already written in the right file.

## Run it locally

```bash
npm ci
npm run dev
```

The app runs on <http://127.0.0.1:5245>. `npm test` runs the checks every pull
request goes through.

## Inside Mnemosyne OS

Style Shelf is also a Mnemosyne OS cartridge. Inside Mnemosyne OS it writes
the kit into your project folder, and your coding agent reads the cart through
the `cart` action.

## Building an app for Mnemosyne OS

A kit fits a Mnemosyne OS cartridge as it is. Call `onHostConfig()` from
`@mnemosyne_os/cartridge-sdk` in the entry file of your app. Mnemosyne OS then
sends the user's theme as CSS variables. `tokens.css` reads those variables
first and keeps the style's colours as a fallback. Your app takes the theme
the user picked inside Mnemosyne OS, and the style you picked everywhere else.

Border variables hold a colour, as in Mnemosyne OS. Write the border around
it: `1px solid var(--border-subtle)`.

## Licences

The app and the elements made for it are under the MIT licence. The daisyUI
and Skeleton themes are under their own MIT licences, reproduced in
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Each entry in the catalogue
carries its licence and its author, and the kit lists them.

## Where Mnemosyne OS lives

This cartridge runs inside **Mnemosyne OS**, the sovereign, local-first memory operating system published by XPACEGEMS LLC. Its official addresses:

- Product site: <https://mnemosyne-os.io>
- Organizations: <https://mnemosyne-os.com>
- Documentation: <https://docs.mnemosyne-os.io>
- Host source: <https://github.com/Mnemosyne-OS/Mnemosyne-Neural-OS>
- Packages: the npm scope `@mnemosyne_os`

---

<sub>**[Mnemosyne OS](https://mnemosyne-os.io)** — the sovereign, local-first memory OS this cartridge runs in.
Get it at [mnemosyne-os.io/download](https://mnemosyne-os.io/download), install cartridges from the built-in MnemoHub store, or [build your own](https://mnemosyne-os.io/dev).</sub>
