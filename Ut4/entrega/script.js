// function building(street, number, postal_code){
//     this.street = street;
//     this.number = number;
//     this.postal_code = postal_code;
//     this.floors_doors;

//     this.addFloorandDoor = function(floor_amount,door_amount) {
//         this.floors_doors = new Array()
//         if (this.floors_doors.length == 0) {
//             this.floors_doors = this.floors_doors.from({floor_amount}).map() => 
//         }
//     }

//     this.modifyNumber = function(new_number) {
//         this.number = new_number;
//     }

//     this.modifyStret = function(new_street) {
//         this.street = new_street;
//     }

//     this.modifyPostalCode = function(new_code) {
//         this.postal_code = new_code;
//     }

//     this.printStreet = function() {
//         console.log(this.street);
//     }

//     this.printNumber = function() {
//         console.log(this.number);
//     }

//     this.printPostalCode = function() {
//         console.log(this.postal_code);
//     }
// }

class Building{
    constructor(street, number, postal_code) {
        this.street = street;
        this.number = number;
        this.postal_code = postal_code;
        this.floors = [];
    }
}

class Floor{
    constructor() {
        this.doors = {};
    }

    addDoors(number) {
        let num_doors = keys(this.doors).length;
        console.log(num_doors);
        number = (num_doors == 0) ? number : (num_doors + number);
        let i = (num_doors == 0) ? 0 : num_doors;
        for (i ; i < number; i++) {
            console.log(this.doors)
            this.doors[i] = 'hola';
        }
    }
}