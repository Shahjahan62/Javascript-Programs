const obj = {
    Name: 'Abubakar',
    rollNo: 28,
    skill: "Back-End Dev",
    Hobby: "Gardening",
    University: "UOG"
}

console.log(obj["Hobby"]);

console.log(obj["Name"]);

const person = {
    firstName: "Rana",
    lastName: "Abubakar",
    id: 545,
    fullName: function () {
        return this.firstName + " "+this.lastName;
    }
}

console.log(person.fullName());