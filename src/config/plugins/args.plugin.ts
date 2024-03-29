
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication Table Base'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplication Table limit'
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show Multiplication Table'
})
.option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'File Name'
})
.option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'File Destination'
})
.check((argv, options) => {

   if (argv.b < 1) {
    throw 'Error: base must be greater that 0'
   }

    return true
})
.parseSync()