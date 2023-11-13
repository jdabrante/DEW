class Building{
    constructor(street, number, postal_code) {
        this.street = street;
        this.number = number;
        this.postal_code = postal_code;
        this.floors = [];

        console.log(`Constructed new building in street: ${this.street}, nº: ${this.number}, CP: ${this.postal_code}`)
    }

    addFloor(amount, doorsPerFloor) {
        for (let i = 0; i < amount; i++) {
            let newFloor = new Floor();
            newFloor.addDoors(doorsPerFloor)
            this.floors.push(newFloor);
        }
    }

    assignOwner(floor_num, door_num, owner) {
        if (floor_num >= 0 && floor_num < this.floors.length) {
            this.floors[floor_num].doors[door_num] = owner
            console.log(`${owner} is now the owner of door ${door_num} on floor ${floor_num}`)
        }
    }

    changeNumber(number) {
        this.number = number;
    }

    changeStreet(new_street) {
        this.street = new_street;
    }

    changePostalCode(new_code) {
        this.postal_code = new_code;
    }

    printStreet() {
        return this.street;
    }

    printNumber() {
        return this.number;
    }

    printPostalCode() {
        return this.postal_code;
    }

    printFloors() {
        this.floors.forEach((floor, floor_number) => {
            Object.keys(floor.doors).forEach(door_number => {
                let owner = floor.doors[door_number];
                console.log(`Owner of the apartment number ${door_number} on floor ${floor_number}: ${owner}`);
            });
        });
    }
}

class Floor{
    constructor() {
        this.doors = {};
    }

    addDoors(number) {
        let num_doors = Object.keys(this.doors).length;
        console.log(num_doors);
        number = (num_doors == 0) ? number : (num_doors + number);
        let i = (num_doors == 0) ? 0 : num_doors;
        for (i ; i < number; i++) {
            console.log(this.doors)
            this.doors[i] = null;
        }
    }
}