enum JobPosition {
    boss = 1,
    staff = 2,
}

export class Staff {
    private lastName: string;
    private firstName: string;
    private birthDay: Date;
    private address: string;
    jobPosition: JobPosition;

    constructor(lastName: string, firstName: string, birthDay: Date, address: string, jobPosition: JobPosition) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDay = birthDay;
        this.address = address;
        this.jobPosition = jobPosition;
    }
    getLastName(): string{
        return this.lastName
    }
    getFirstName(): string{
        return this.firstName
    }
    getBirthDay(): Date{
        return this.birthDay
    }
    getAddress():string{
        return this.address
    }
    setLastName(lastName: string):void{
        this.lastName = lastName
    }
    setFirstName(firstName: string):void{
        this.firstName = firstName
    }
    setBirthDay(birthDay: Date):void{
        this.birthDay = birthDay
    }
    setAddress(address:string):void{
        this.address = address
    }


}