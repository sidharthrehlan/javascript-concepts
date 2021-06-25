let Person = function (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  this.getFullName = () => {
    return `${this.firstname} ${this.lastname}`;
  };
};

Person.prototype.setEmployId = function (empId) {
  this.employId = empId;
};

Person.prototype.getPersonDetail = function () {
  return {
    firstname: this.firstname,
    lastname: this.lastname,
    employId: this.employId,
  };
};

let sidharth = new Person("sidharth", "rehlan");
sidharth.getPersonDetail();

let ram = new Person("ram", "khan");
ram.getPersonDetail();
