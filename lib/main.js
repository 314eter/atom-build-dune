'use babel'
/* global atom */

import fs from 'fs'

const errorMatch = '(?s)"(?<file>[\\/0-9a-zA-Z\\._\\-]+)", line (?<line>\\d+), characters (?<col>\\d+)-(?<col_end>\\d+):\\s*(?<message>.+?)\\n\\S'

export function provideBuilder () {
  return class OasisBuildProvider {
    constructor (cwd) {
      this.cwd = cwd
    }

    getNiceName () {
      return 'jbuilder'
    }

    isEligible () {
      return fs.readdirSync(this.cwd).some(file => file.endsWith('.opam'))
    }

    settings () {
      const jbuilder = atom.config.get('build-jbuilder.jbuilderPath')
      return [
        {
          exec: jbuilder,
          name: 'build',
          args: ['build'],
          atomCommandName: 'build-jbuilder:build',
          errorMatch
        },
        {
          exec: jbuilder,
          name: 'clean',
          args: ['clean'],
          atomCommandName: 'build-jbuilder:clean',
          errorMatch
        },
        {
          exec: jbuilder,
          name: 'runtest',
          args: ['clean'],
          atomCommandName: 'build-jbuilder:runtest',
          errorMatch
        },
        {
          exec: jbuilder,
          name: 'install',
          args: ['install'],
          atomCommandName: 'build-jbuilder:install',
          errorMatch
        },
        {
          exec: jbuilder,
          name: 'uninstall',
          args: ['uninstall'],
          atomCommandName: 'build-jbuilder:uninstall',
          errorMatch
        }
      ]
    }
  }
}
