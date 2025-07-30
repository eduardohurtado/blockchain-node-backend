import { LANG } from '../enums/enums';

export interface IAPIVersionModel {
    id: string;
    name: string;
    description: string;
    version: string;
    currentLang: LANG.english | LANG.spanish;
    basePath: string;
}
