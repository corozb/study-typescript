enum Role {Doctor, Anestesista, Asistente, Administrativo}


// type Staff = { 
    //     name: string,
    //     email: string,
    //     role: Role
    // }
interface Staff { // just objects
    name: string,
    email: string,
    role: Role
}
    
interface Billable {
    total: number,
    currentBill(): string 
}

const medico = {
    name: 'Martin',
    email: 'martin@mail.co',
    role: Role.Doctor,
    total: 25,
    currentBill() {
        return `The bill number is ${this.total}`
    }
}

// const printStaff = (staff: {name: string, email: string, role: Role}) => console.log(staff)
const printStaff = (staff: Staff) => console.log(staff)

const printCurrentBill = (bill: Billable) => console.log(bill.currentBill())

printStaff(medico)
printCurrentBill(medico)
