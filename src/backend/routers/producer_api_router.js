import { Router } from "express";

import producerApiController from "../controllers/producer/producer_api_controller.js";

const router = Router();

router.get("/", producerApiController.getAll);
router.get("/create", producerApiController.create);
// router.post("/", producerApiController.create);
router.get("/:id", producerApiController.getById);
// router.put("/", producerApiController.update);
router.get("/:id/update", producerApiController.update);
// router.delete("/:id", producerApiController.removeById);
router.get("/:id/remove", producerApiController.removeById);

export default router;