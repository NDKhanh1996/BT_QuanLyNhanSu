import {Staff} from "./Staff";

class ManagerStaff {
    static staffs: Staff[] = []
    constructor() {
    }
    static StaffList(){
        return ManagerStaff.staffs
    }
    static find(firstName: string){

        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getFirstName() === firstName){
                return i
            }
        }
    }
}
let staff1 = new Staff('Nguyen','Van',new Date('3-4-2022'),'HN',1)
let staff2 = new Staff('La','Tuan',new Date('8-3-2021'),'HN',2)

ManagerStaff.staffs.push(staff1,staff2)

// console.table(ManagerStaff.StaffList()) //list
// console.log(ManagerStaff.staffs[ManagerStaff.find("Tuan")]) // 1 staff
// ManagerStaff.staffs.splice(ManagerStaff.find("Tuan"), 1)
// console.log(ManagerStaff.staffs)
ManagerStaff.staffs[ManagerStaff.find("Tuan")].setLastName('Ha')// doi ten
console.table(ManagerStaff.staffs[ManagerStaff.find("Tuan")])// log ra ten

