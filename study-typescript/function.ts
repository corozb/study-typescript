const sumar = (a:number, b:number): number  => a + b

function print(): void {
    console.log(sumar(8,3))
}

let sum2: (a:number, b:number) => number
sum2 = sumar

console.log(sum2(4,5))