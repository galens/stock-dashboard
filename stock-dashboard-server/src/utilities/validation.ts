export function isAlphaNumeric(str: string) {
    return /^[A-Za-z0-9]+$/.test(str);
}