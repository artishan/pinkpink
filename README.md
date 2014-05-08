pinkpink
========

Picture service for node.js


## Express

Launch your express server in development mode.
```bash
grunt serve
```

Launch your express server in `debug-brk` mode with a node-inspector tab.
```bash
grunt serve:debug
```

Launch your express server in production mode, uses the minified/optimized production folder.
```bash
grunt serve:dist
```

### Livereload

`grunt serve` will watch client files in `app/`, and server files inside `lib/`, restarting the Express server when a change is detected.

## Deployment

To generate a dist folder that can easily be deployed use:

```bash
grunt
```

This will run unit tests, jshint, concatenate and minify scripts/css, compress images, add css vendor prefixes, and finally copy all files to a tidy dist folder.

Alternatively to skip tests and jshint, use:

```bash
grunt build
```

## Generators

All of the **generator-angular** client side generators are available, but aliased with `angular-fullstack` to correctly generate with the fullstack folder structure.

Angular sub-generators:

* [angular-fullstack:controller](https://github.com/yeoman/generator-angular#controller)
* [angular-fullstack:directive](https://github.com/yeoman/generator-angular#directive)
* [angular-fullstack:filter](https://github.com/yeoman/generator-angular#filter)
* [angular-fullstack:route](https://github.com/yeoman/generator-angular#route)
* [angular-fullstack:service](https://github.com/yeoman/generator-angular#service)
* [angular-fullstack:provider](https://github.com/yeoman/generator-angular#service)
* [angular-fullstack:factory](https://github.com/yeoman/generator-angular#service)
* [angular-fullstack:value](https://github.com/yeoman/generator-angular#service)
* [angular-fullstack:constant](https://github.com/yeoman/generator-angular#service)
* [angular-fullstack:decorator](https://github.com/yeoman/generator-angular#decorator)
* [angular-fullstack:view](https://github.com/yeoman/generator-angular#view)


