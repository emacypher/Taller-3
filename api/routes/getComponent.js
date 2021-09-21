const express = require("express");
const {
  getCpu,
  getCpuAmd,
  getCpuIntel,
  getGpu,
  getMotherboardAmd,
  getMotherboardIntel,
  getSoftware,
} = require("../controllers/pcparts.js");
const router = express.Router();

router.get("/amd", getCpuAmd);

router.get("/intel", getCpuIntel);

router.get("/motherboard/intel", getMotherboardIntel);

router.get("/motherboard/amd", getMotherboardAmd);

router.get("/software", getSoftware);

router.get("/gpu", getGpu);

module.exports = router;
