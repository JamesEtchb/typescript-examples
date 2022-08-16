export enum bloodType {
    apositive,
    aNegative,
    oNegative,
    oPositive,
    bPositive,
    bNegative,
}

export interface human {
    name: string,
    age: number,
    height: number,
    bloodType?: bloodType,
}