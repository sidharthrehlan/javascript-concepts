//
// Define your database
//
var db = new Dexie("friend_database"); //db name
db.version(1).stores({
  friends: "++id,name, age, *tags", //table and keys
  gameSessions: "id, score",
});

db.version(2)
  .stores({
    friends: "++id, [firstName+lastName], yearOfBirth, *tags",
    gameSessions: null,
  })
  .upgrade((tx) => {
    return tx.table("friends").modify((friend) => {
      friend.firstName = friend.name.split(" ")[0];
      friend.lastName = friend.name.split(" ")[1];
      friend.birthDate = new Date(new Date().getFullYear() - friend.age, 0);
      delete friend.name;
      delete friend.age;
    });
  });
