# build-dune

_Use [dune] and [build] to compile your OCaml projects in Atom._


## Usage

If your project contains a `<package>.opam` file, this package provides the
following build targets with corresponding commands.

| Target    | Atom Command               |
| --------- | -------------------------- |
| build     | `build-dune:build`     |
| clean     | `build-dune:clean`     |
| runtest   | `build-dune:runtest`   |
| install   | `build-dune:install`   |
| uninstall | `build-dune:uninstall` |


## Installation

This package requires [build] and [dune].

```sh
apm install build build-dune
opam install dune
```


[dune]: https://github.com/ocaml/dune
[build]: https://atom.io/packages/build
