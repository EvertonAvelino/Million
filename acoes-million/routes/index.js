var express = require('express');
var router = express.Router();
const HomeController = require("../app/controllers/home_controller");
const AcoesController = require("../app/controllers/acoes_controller");

router.get("/", HomeController.index);
router.get("/acoes.json", AcoesController.index);
router.post("/acoes.json", AcoesController.create);
router.put("/acoes/:acoes_id.json", AcoesController.change);
router.delete("/acoes/:acoes_id.json", AcoesController.delete);

module.exports = router;

