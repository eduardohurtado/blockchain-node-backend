import { API_LANG } from '../enums/enums';

export interface IAPIVersionModel {
    id: string;
    name: string;
    description: string;
    version: string;
    currentLang: API_LANG.english | API_LANG.spanish;
    basePath: string;
}
