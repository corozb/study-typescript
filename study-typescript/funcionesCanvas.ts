function print ( a:number, b:number, show: (value: number) => void) : void {
    let result = a + b
    show(result)
}

print(3,2, (x) => console.log(x))