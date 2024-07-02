# @noahyu/conventional-changelog-base

## Usage

```bash
pnpm add @noahyu/conventional-changelog-base -D

# Or yarn add -D / npm install -D
```

## Quick start

```js
// changelog.config.mjs
import createPreset from '@noahyu/conventional-changelog-base'

export default createPreset
```

```json
// package.json
{
  // ···
  "scripts": {
    // ···
    "changelog": "conventional-changelog -n './changelog.config.js' -i CHANGELOG.md -s -r 0 -k ./package.json --commit-path ./"
  }
  // ···
}
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2024-present, Noah Yu
