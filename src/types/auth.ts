export interface ObjectKeysStringErrors {
    [key: string]: string | undefined;
}

export type StateError = { [key: string]: string };

export type StateSuccess = { success: boolean };