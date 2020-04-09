# `@bence.a.toth/cra-template`

This is a rich template for [Create React App](https://github.com/facebook/create-react-app).


## Quick start

```sh
npx create-react-app my-app --template @bence.a.toth/cra-template

cd my-app

npm start
```

For more info, please check the [Create React App documentation](https://create-react-app.dev/docs/documentation-intro).


## What’s included?

- everything you have in the default template, with a somewhat nicer folder structure

- HTTPS enabled in development mode by default

- handy React utilities like [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) and [ClassNames](https://github.com/JedWatson/classnames#readme)

- [Cypress](https://www.cypress.io/) for integration and functional tests

- [Majestic](https://github.com/Raathigesh/majestic#readme), a beautiful browser-based UI for Jest

- [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/) configured for code consistency and many good practices

- [Alex](https://github.com/get-alex/alex#readme) to catch insensitive, inconsiderate writing in your documentation

- hassle-free interactive updates for dependencies via [npm-check](https://github.com/dylang/npm-check#readme)


## A note on development dependencies

Create React App templates do not support adding development dependencies at the time of writing, so all dependencies are added under the `dependencies` key in the `package.json` file.

It is [not necessary](https://github.com/facebook/create-react-app/issues/4342#issuecomment-383432122), but if you prefer, you can move the following dependencies from `dependences` to `devDependencies` manually:
- `@bence.a.toth/eslint-config`
- `alex`
- `cypress`
- `eslint`
- `majestic`
- `npm-check`
- `stylelint`
- `stylelint-config-standard`


## Contributing

If something doesn’t work, please [file an issue](https://github.com/bence-toth/cra-template/issues).

If you have questions, need help, or would like to contribute, please reach out at [tothab@gmail.com](mailto:tothab@gmail.com).


## License

[MIT](./LICENSE)
