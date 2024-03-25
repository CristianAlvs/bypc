const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const CardsController = require("../controllers/CardsController");

const cardsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const cardsController = new CardsController();

cardsRoutes.post("/:user_id", upload.single("image"), cardsController.create);

module.exports = cardsRoutes;