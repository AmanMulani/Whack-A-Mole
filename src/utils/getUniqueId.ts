import { uniqueId } from "lodash";


export const getUniqueID = (): string => {
    return uniqueId();
}