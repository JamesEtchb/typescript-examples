export enum bloodType {
    apositive,
    aNegative,
    oNegative,
    oPositive,
    
}

export interface human {
    name: string,
    age: number,
    height: number,
    bloodType?: bloodType,
}