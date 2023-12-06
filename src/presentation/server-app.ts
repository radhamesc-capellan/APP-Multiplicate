import CreateHeader from '../domain/use-cases/create-header.use-case';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use.case';

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {

    static run({ base, limit, showTable, fileName = `Table-${base}`, fileDestination = `outpus/table-${base}` }: RunOptions) {
        console.log('Server Running.........')


        const header = new CreateHeader().execute({base})
        const table = new CreateTable().execute({ base, limit })
        const wasCreated = new SaveFile().execute({ fileContent: table, fileDestination: fileDestination, fileName: fileName })

        console.log(header)
        if (showTable) { console.log(table) }


        (wasCreated) ? console.log('File Created') : console.log('File not Created')
    }
}