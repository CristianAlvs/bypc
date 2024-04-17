const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const CardsController = require("../controllers/CardsController");

const cardsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const cardsController = new CardsController();

cardsRoutes.get("/", cardsController.index);
cardsRoutes.post("/:user_id", upload.single("image"), cardsController.create);
cardsRoutes.put("/:id", upload.single("image"), cardsController.update);
cardsRoutes.get("/:id", cardsController.show);
cardsRoutes.delete("/:id", cardsController.delete);

module.exports = cardsRoutes;