'use babel'

import fs from 'fs'

const errorMatch = '(?s)"(?<file>[\\/0-9a-zA-Z\\._\\-]+)", line (?<line>\\d+), characters (?<col>\\d+)-(?<col_end>\\d+):\\s*(?<message>.+?)\\n\\S'

export function provideBuilder () {
  return class DuneBuildProvider {
    constructor (cwd) {
      this.cwd = cwd
    }

    getNiceName () {
      return 'dune'
    }

    isEligible () {
      return fs.readdirSync(this.cwd).some(file => file.endsWith('.opam'))
    }

    settings () {
      const dune = atom.config.get('build-dune.jbuilderPath')
      return [
        {
          exec: dune,
          name: 'build',
          args: ['build'],
          atomCommandName: 'build-dune:build',
          errorMatch
        },
        {
          exec: dune,
          name: 'clean',
          args: ['clean'],
          atomCommandName: 'build-dune:clean',
          errorMatch
        },
        {
          exec: dune,
          name: 'runtest',
          args: ['runtest'],
          atomCommandName: 'build-dune:runtest',
          errorMatch
        },
        {
          exec: dune,
          name: 'install',
          args: ['install'],
          atomCommandName: 'build-dune:install',
          errorMatch
        },
        {
          exec: dune,
          name: 'uninstall',
          args: ['uninstall'],
          atomCommandName: 'build-dune:uninstall',
          errorMatch
        }
      ]
    }
  }
}
