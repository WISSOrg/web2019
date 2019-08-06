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

- <img height=30 src="https://via.placeholder.com/180x60/59718E/FFFFFF?text=59718E" /> : `#59718E` = `rgba(89, 113, 142, 1.0)` (background)
- <img height=30 src="https://via.placeholder.com/180x60/FFFFFF/000000?text=FFFFFF" /> : `#FFFFFF` = `rgba(255, 255, 255, 1.0)` (borders and fonts)
- <img height=30 src="https://via.placeholder.com/180x60/3E5B33/FFFFFF?text=3E5B33" /> : `#3E5B33` = `rgba(62, 91, 51, 1.0)`
- <img height=30 src="https://via.placeholder.com/180x60/D2C14D/FFFFFF?text=D2C14D" /> : `#D2C14D` = `rgba(210, 193, 77, 1.0)`
- <img height=30 src="https://via.placeholder.com/180x60/6C8760/FFFFFF?text=6C8760" /> : `#6C8760` = `rgba(108, 135, 96, 1.0)`
- <img height=30 src="https://via.placeholder.com/180x60/383D4B/FFFFFF?text=383D4B" /> : `#383D4B` = `rgba(56, 61, 75, 1.0)`

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
