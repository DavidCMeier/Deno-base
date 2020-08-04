import { Router } from "../../repo.ts";
import { hCC } from "../../helpers/express.helper.ts";
import { userController } from "../../controllers/user.ts";

const router = new Router()

// Home page route
router.get("/", hCC(userController.getUser));

// About page route
router.post("/", function(req, res) {
  res.send("post user");
});

export default router;
