const _names_ = {
    firstName: 'Abdul',
    middleName : 'Azeem',
    lastName : "Beigh",
    birthYear: 1995,
    job: "engineer",
    friends: ["jons","paul",'lewis'],
    calAge: function(birthYear){
        return 2040-birthYear;
    }
};

console.log(_names_.calAge(1991));
console.log(_names_.calAge(1995));

const myDetails = {
    firstName: 'Abdul',
    middleName : 'Azeem',
    lastName : "Beigh",
    birthYear: 1995,
    job: "engineer",
    friends: ["jons","paul",'lewis'],
    calAge: function(){
        console.log(this);
        return 2040 - this.birthYear;
    }
};

console.log(myDetails.calAge());

const _details = {
    firstName: 'Abdul',
    middleName : 'Azeem',
    lastName : "Beigh",
    birthYear: 1995,
    job: "engineer",
    friends: ["jons","paul",'lewis'],
    driversLicense: true,
    calAge: function(){
        this.age = 2040-this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return`${this.firstName} is a ${this.calAge()} year's old ${this.job} and  he has ${this.driversLicense? 'a' :'no'} driver's license`
    }
};
console.log(_details);
console.log(_details.getSummary());