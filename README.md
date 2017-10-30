# open-new-page

[![NPM downloads](http://img.shields.io/npm/dm/open-new-page.svg)](https://npmjs.org/package/open-new-page)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/open-new-page/index.js?compression=gzip&label=gzip%20size:%20JS)
[![Npm package](https://img.shields.io/npm/v/open-new-page.svg)](https://www.npmjs.org/package/open-new-page)
![Language](https://img.shields.io/badge/language-javascript-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-000000.svg)

> As you know, if you want to open a new tab in browser or in the `iframe` by
`window.open()`, browser will prevent jump action, and you can use this to
solve the problem. Besides, it's also useful when you want to download files
with js.

## Install

```shell
npm install open-new-page --save
// Or: yarn add open-new-page
```

## Start

#### simple open page in new tab

```js
import OpenNewPage from 'open-new-page'
// var OpenNewPage = require('open-new-Page')

OpenNewPage('https://www.baidu.com')
```

#### set method and params

```js
import OpenNewPage from 'open-new-page'
// var OpenNewPage = require('open-new-Page')

openNewPage({
  url: 'http://www.baidu.com',
  method: 'GET',
  params: {
    a: 1,
    b: true,
    c: [1, 2, 3],
    d: { d1: 1 },
    e: '123',
    f: null,
    g: undefined
  }
})
```

#### download files

```js
openNewPage('https://dn-quietcoder.qbox.me/table.xlsx')
```

#### download images

```js
openNewPage({
  url: 'https://dn-quietcoder.qbox.me/avatar-1.jpg',
  params: {
    a: 1,
    b: true,
    c: [1, 2, 3],
    d: { d1: 1 },
    e: '123',
    f: null,
    g: undefined
  },
  useATag: true
  // fileName: 'xxx.jpg'
})
```

#### just use in html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://unpkg.com/open-new-page/index.global.js"></script>
</head>
<body>
  <button id="btn">open new page with params</button>
  <script>
    var btn = document.getElementById('btn')
    btn.addEventListener('click', function () {
      openNewPage('http://www.baidu.com', 'GET', {
        a: 1,
        b: true,
        c: [1, 2, 3],
        d: { d1: 1 },
        e: '123',
        f: null,
        g: undefined
      })
    })
  </script>
</body>
</html>
```
