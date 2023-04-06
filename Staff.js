"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var JobPosition;
(function (JobPosition) {
    JobPosition[JobPosition["boss"] = 1] = "boss";
    JobPosition[JobPosition["staff"] = 2] = "staff";
})(JobPosition || (JobPosition = {}));
var Staff = /** @class */ (function () {
    function Staff(lastName, firstName, birthDay, address, jobPosition) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDay = birthDay;
        this.address = address;
        this.jobPosition = jobPosition;
    }
    Staff.prototype.getLastName = function () {
        return this.lastName;
    };
    Staff.prototype.getFirstName = function () {
        return this.firstName;
    };
    Staff.prototype.getBirthDay = function () {
        return this.birthDay;
    };
    Staff.prototype.getAddress = function () {
        return this.address;
    };
    Staff.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Staff.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Staff.prototype.setBirthDay = function (birthDay) {
        this.birthDay = birthDay;
    };
    Staff.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Staff;
}());
exports.Staff = Staff;
