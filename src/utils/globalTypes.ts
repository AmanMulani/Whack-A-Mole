import { HTMLProps as ReactHTMLProps, RefObject } from 'react';


type HTMLPropsReact<T> = Omit<ReactHTMLProps<T>, 'ref' | 'as'>;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface HTMLProps<T> extends HTMLPropsReact<T> {
    ref?: ((instance: T) => void) | RefObject<T> | null;
}
