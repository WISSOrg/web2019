# web2019

[![Build Status](https://travis-ci.org/WISSOrg/web2019.svg?branch=master)](https://travis-ci.org/WISSOrg/web2019)

Warning: This repository may contain information that is not officially confirmed.

## Prerequisites

- node@10
- yarn
- gatsby-cli

## Clone & Install

```
git clone https://github.com/WISSOrg/web2019.git
cd web2019
yarn install
```

## Develop & Build

```
yarn start
```

```
yarn build
```

## Rebuild Semantic UI

```
cd semantic
gulp
```

## Travis CI

Whenever you push to the `master` branch, Travis CI process runs to build files and deploy (copy) them to the web server.

## Tips for macOS

If you want to install node@10 (not node@11) via Homebrew, follow this:
```
brew install node@10
echo 'export PATH="/usr/local/opt/node@10/bin:$PATH"' >> ~/.bash_profile
```

## Design Competition

This year, the committee released call-for-designs for the proceedings and also the web. As the result, one design was officially selected. This design has the following color palette:

- <span style="color: #59718E; background: rgba(27,31,35,.05);">&nbsp;&hearts;&nbsp;</span>: `#59718E` (background)
- <span style="color: #FFFFFF; background: rgba(27,31,35,.05);">&nbsp;&hearts;&nbsp;</span>: `#FFFFFF` (borders and fonts)
- <span style="color: #3E5B33; background: rgba(27,31,35,.05);">&nbsp;&hearts;&nbsp;</span>: `#3E5B33`
- <span style="color: #D2C14D; background: rgba(27,31,35,.05);">&nbsp;&hearts;&nbsp;</span>: `#D2C14D`
- <span style="color: #6C8760; background: rgba(27,31,35,.05);">&nbsp;&hearts;&nbsp;</span>: `#6C8760`
- <span style="color: #383D4B; background: rgba(27,31,35,.05);">&nbsp;&hearts;&nbsp;</span>: `#383D4B`

and uses `Ten Mincho Regular` for both Japanese and English characters.

## Contributing

(TBA)

Before participating in the development of this project, it would be useful to be familiar with the following frameworks and languages:

- [GatsbyJS](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [Semantic UI](https://semantic-ui.com/)
- [JSX](http://facebook.github.io/jsx/)
- [GraphQL](https://graphql.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

## Maintainers

- Jun Kato
- Yuki Koyama

## License

The javascript and setting files are distributed under the MIT license. All rights are reserved regarding the other contents, including texts, media contents, etc.
