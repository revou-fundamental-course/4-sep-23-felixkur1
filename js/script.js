import { hitungKeliling } from "./hitungKeliling.js";
import { hitungLuas } from "./hitungLuas.js";

const hitungKelilingBtn = document.getElementById("hitung-keliling");
const hitungLuasBtn = document.getElementById("hitung-luas");

hitungKelilingBtn.addEventListener("click", hitungKeliling);
hitungLuasBtn.addEventListener("click", hitungLuas);
