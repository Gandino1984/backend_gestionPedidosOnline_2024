import { Router } from "express";

import clientApiRouter from "./client_api_router.js";
import productApiRouter from "./product_api_router.js";
import shopApiRouter from "./shop_api_router.js";
import producerApiRouter from "./producer_api_router.js";


const router = Router();

router.use("/client", clientApiRouter);

router.use("/product", productApiRouter);

router.use("/shop", shopApiRouter);

router.use("/producer", producerApiRouter);


export default router;