export function hitungKeliling() {
  const s = document.getElementById("input-keliling").value || 0;
  const spanSisi = document.getElementById("sisi-keliling");
  const spanResult = document.getElementById("result-keliling");
  const divResult = document.querySelector(".result-keliling");

  divResult.classList.remove("hidden");
  spanSisi.innerText = s;
  spanResult.innerText = 4 * parseInt(s);
}
