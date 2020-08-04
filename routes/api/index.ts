import { Router } from "../../repo.ts";
import users from './users.ts';

const router = new Router()

// Home page route
router.get("/", (req, res) => res.send('api is allright!'));
router.use("/user", users);


export default router;
