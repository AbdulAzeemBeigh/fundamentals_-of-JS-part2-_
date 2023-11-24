const _names_ = {
    firstName: 'Abdul',
    middleName : 'Azeem',
    lastName : "Beigh",
    age: 2037-1995,
    job: "engineer",
    friends: ["jons","paul",'lewis']
};

console.log(_names_);
console.log(_names_.age,_names_.firstName,_names_.friends,_names_.job,_names_.lastName,_names_.middleName);

const nameKey = "Name";
console.log(_names_['first'+ nameKey]);
console.log(_names_['last'+ nameKey]);

const interestedIn = prompt("Anything you want to know about _names_ object? Choose between firstName,lastName,age,job and friends");

if(_names_[interestedIn]){
    console.log(_names_[interestedIn]);

}else{
    console.log("Wrong choice,Choose between firstName,lastName,age,job and friends");
}

// Adding values to the object, key-value pair

_names_.location = "India";
_names_["email"] = "abdul.azeem@iquasar.com"

console.log(_names_);

const challange = `${_names_.firstName} has ${_names_.friends.length} friends, and his best friend is called ${_names_.friends[2]}`;
console.log(challange);