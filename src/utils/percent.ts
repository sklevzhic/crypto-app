export const formatDate = (changeV: string, originalV: string) => {
    const original = parseFloat(originalV)
    const change = parseFloat(changeV)
    return change/100 * original
}