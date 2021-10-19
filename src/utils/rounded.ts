export const rounded = (num: string | number) => {
    return (typeof num === "string") ? parseFloat(num).toFixed(2) : num.toFixed(2)
}