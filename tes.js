const Database = require("@replit/database");
const db = new Database();

async function setKey(key, value) {
  await db.set(key, value);
}
async function getValue(key) {
  let value = await db.get(key)
  return value;
}





