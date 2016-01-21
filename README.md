This is a response to [rollup/rollup-plugin-commonjs#29](https://github.com/rollup/rollup-plugin-commonjs/issues/29). Using rollup-plugin-commonjs to create ES6 modules out of CommonJS modules that were created *from* ES6 modules turns out to be rather tricky.

Happily, it's also completely unnecessary. In this repo, we're creating our own build of Redux (using Rollup, rather than Webpack), which keeps it as an ES6 module and avoids all the unfortunate cruft that we get by using the Babelified CommonJS modules.

```bash
git clone https://github.com/Rich-Harris/rollup-redux-debug
cd rollup-redux-debug

npm install
npm test
```

This will create our custom build of Redux (in `tmp/redux.js` – notice how much smaller it is than the official build!), then use that in our app, which gets built to `dist/bundle.js`. Notice that we're using different Babel configs, because Redux uses stage 0 features that our app doesn't need.

And because it stays as an ES6 module, we can tree-shake off the unused Redux functions.
