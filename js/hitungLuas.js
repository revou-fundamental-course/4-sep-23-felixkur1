export function hitungLuas() {
  const s = document.getElementById("input-luas").value || 0;
  const spanSisi = document.getElementById("sisi-luas");
  const spanResult = document.getElementById("result-luas");
  const divResult = document.querySelector(".result-luas");

  divResult.classList.remove("hidden");
  spanSisi.innerText = `${s} x ${s}`;
  spanResult.innerText = Math.pow(parseInt(s), 2);
}
