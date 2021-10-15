const express = require("express");
const {
  getCpuAmd,
  getCpuIntel,
  getGpu,
  getMotherboardAmd,
  getMotherboardIntel,
  getSoftware,
  getPcArmadas,
} = require("../controllers/pcparts.js");
const router = express.Router();

router.get("/amd", getCpuAmd);

router.get("/intel", getCpuIntel);

router.get("/motherboard/intel", getMotherboardIntel);

router.get("/motherboard/amd", getMotherboardAmd);

router.get("/software", getSoftware);

router.get("/gpu", getGpu);

router.get("/pc_armadas", getPcArmadas);
module.exports = router;
