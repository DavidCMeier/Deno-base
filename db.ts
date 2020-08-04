import { Database } from "./repo.ts";

const db = new Database('mongo', {
  uri: 'mongodb://127.0.0.1:27017',
  database: 'fanhunter',
});
