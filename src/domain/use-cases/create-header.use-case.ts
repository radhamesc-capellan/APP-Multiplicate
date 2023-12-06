export interface CreateHeaderUseCase {
    execute: (options: CreateHeaderOptions) => string
}

export interface CreateHeaderOptions {
    base: number;
}

export default class CreateHeader implements CreateHeaderUseCase {

    constructor(
        
    ) { }

    execute({ base }: CreateHeaderOptions) {
        return `
        ===============================================
                        Tabla del ${base}
        ===============================================\n
        `
    }
}