import Dexie from "dexie";

var db = new Dexie("hellodb");
db.version(2).stores({
  tasks: "++id, date, description, done",
});

async function test() {
  var id = await db.tasks.put({
    date: Date.now(),
    description: "Test Dexie",
    done: 0,
  });
  console.log("id:", id);
  await db.tasks.bulkPut([
    { date: Date.now(), description: "Test Dexie bulkPut()", done: 1 },
    {
      date: Date.now(),
      description: "Finish testing Dexie bulkPut()",
      done: 1,
    },
  ]);

  var tasks = await db.tasks.where("done").above(0).toArray();
  console.log("Complete tasks :", tasks);
  console.log("Json.stringify1", JSON.stringify(tasks));
  console.log("Json.stringify1", JSON.stringify(tasks, 0, 5));

  await db.tasks
    .where("description")
    .startsWithIgnoreCase("test dexi")
    .modify({ done: 1 });

  await db.tasks.where("date").below(Date.now()).delete();
}
test().catch((error) => {
  console.error("oh error!!", error.stack);
});
