export enum API_LANG {
    english = 'en',
    spanish = 'es'
}

export enum API_VERSION {
    id = 'v1',
    name = 'Blockchain Node API',
    description = 'API for interacting with a blockchain node',
    version = '1.0.0',
    currentLang = API_LANG.english,
    basePath = '/api/v1'
}

export enum BLOCK_TYPE {
    genesys = 'Genesys Block',
    regular = 'Regular Block'
}

export enum BLOCK_DIFFICULTY {
    value = 4
}
