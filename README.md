# Aphro

An unopinionated set of user interface elements for React

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/aphro.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/aphro
[travis-image]: https://img.shields.io/travis/bentatum/aphro.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/aphro
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
yarn install aphro
```

## Setup
Aphro makes use of React's context for configuration. Here's an example of a basic configuration.

### 1. Create a root component

```js
// Theme.js
import config from './config'
import PropTypes from 'prop-types'
import { classNames } from 'aphro'

const Theme = props => props.children

Theme.contextTypes = {
  aphro: PropTypes.shape({
    config: PropTypes.object,
    classNames: PropTypes.object
  })
}

Theme.childContextTypes = {
  aphro: { 
    config,
    classNames: classNames(config)
  }
}

export default Theme
```

### 2. Create a theme

```js
// config.js
export const Button = {
  extraSmall: {
    height: 10
  },
  small: {
    height: 20
  },
  medium: {
    height: 30
  },
  large: {
    height: 40
  }
}
```

### 3. Wrap your application with your theme.

```js
import Theme from './Theme'
import { render } from 'react-dom'

render(
  <Theme>
    <Application />
  </Theme>
  document.getElementById('root')
)
```

### withClassNames

```js
// Application.js
import { withClassNames } from 'aphro'
import { css } from 'aphrodite/no-important'

const enhance = withClassNames

export default enhance(({ classNames: cx }) =>
  <div className={css(cx.flex)}>
    <div className={css(cx.col8)}>
        Sidebar
    </div>
    <div className={css(cx.col4)}>
      Content
    </div>
  </div>
)
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
