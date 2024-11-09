import { Router } from "express";

import clientApiController from "../controllers/client/client_api_controller.js";

const router = Router();

router.get("/", clientApiController.getAll);
router.get("/create", clientApiController.create);
// router.post("/", clientApiController.create);
router.get("/:id", clientApiController.getById);
// router.put("/", clientApiController.update);
router.get("/:id/update", clientApiController.update);
// router.delete("/:id", clientApiController.removeById);
router.get("/:id/remove", clientApiController.removeById);

export default router;