import { IBaseInteractionRequestData } from "../common/request/IBaseInteractionRequestData";
export interface IInventoryBaseActionRequestData extends IBaseInteractionRequestData {
}
export interface To {
    id: string;
    container: string;
    location?: ToLocation | number;
}
export interface ToLocation {
    x: number;
    y: number;
    r: string;
    rotation?: string;
    isSearched: boolean;
}
export interface Container {
    id: string;
    container: string;
    location?: Location | number;
}
export interface Location {
    x: number;
    y: number;
    r: string;
    rotation?: string;
    isSearched: boolean;
}
