# build-jbuilder

_Use [jbuilder] and [build] to compile your OCaml projects in Atom._


## Usage

If your project contains a `<package>.opam` file, this package provides the
following build targets with corresponding commands.

| Target    | Atom Command               |
| --------- | -------------------------- |
| build     | `build-jbuilder:build`     |
| clean     | `build-jbuilder:clean`     |
| runtest   | `build-jbuilder:runtest`   |
| install   | `build-jbuilder:install`   |
| uninstall | `build-jbuilder:uninstall` |


## Installation

This package requires [build] and [jbuilder].

```sh
apm install build build-jbuilder
opam install jbuilder
```


[jbuilder]: https://github.com/janestreet/jbuilder
[build]: https://atom.io/packages/build
