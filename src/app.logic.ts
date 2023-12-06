import fs from 'fs'
import { yarg } from './config/plugins/args.plugin'


// interface Input {
//     base: number,
//     limit: number,
//     show: string
// }

const { b: base, l: limit, s: show } = yarg



const numberBase = base
let outputMessage = ''
let showTable = show

const header = `
===============================================
                Tabla del ${numberBase}
===============================================\n
`

for (let i = 1; i <= limit; i++){
    outputMessage += `${numberBase} x ${i} = ${numberBase * i }\n`
}

outputMessage = header + outputMessage

if (showTable) {
    console.log(outputMessage)
}


const outputPath = `outputs`

fs.mkdirSync(outputPath, {recursive: true})

fs.writeFileSync(`${outputPath}/tabla-${numberBase}.txt`, outputMessage)

console.log('File Created');
