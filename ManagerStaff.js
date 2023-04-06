"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff_1 = require("./Staff");
var ManagerStaff = /** @class */ (function () {
    function ManagerStaff() {
    }
    ManagerStaff.StaffList = function () {
        return ManagerStaff.staffs;
    };
    ManagerStaff.find = function (firstName) {
        for (var i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].getFirstName() === firstName) {
                return i;
            }
        }
    };
    ManagerStaff.staffs = [];
    return ManagerStaff;
}());
var staff1 = new Staff_1.Staff('Nguyen', 'Van', new Date('3-4-2022'), 'HN', 1);
var staff2 = new Staff_1.Staff('La', 'Tuan', new Date('8-3-2021'), 'HN', 2);
ManagerStaff.staffs.push(staff1, staff2);
// console.table(ManagerStaff.StaffList()) //list
// console.log(ManagerStaff.staffs[ManagerStaff.find("Tuan")]) // 1 staff
// ManagerStaff.staffs.splice(ManagerStaff.find("Tuan"), 1)
// console.log(ManagerStaff.staffs)
ManagerStaff.staffs[ManagerStaff.find("Tuan")].setLastName('Ha');
console.table(ManagerStaff.staffs[ManagerStaff.find("Tuan")]);
