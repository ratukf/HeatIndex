function hitungIndeksSuhu() {
  var suhuBasah = parseInt(document.getElementById("suhuBasah").value);
  var suhuBola = parseInt(document.getElementById("suhuBola").value);
  var suhuKering = parseInt(document.getElementById("suhuKering").value);
  var suhuBolaBasah = (suhuBasah * 0.7 + suhuBola * 0.2 + suhuKering * 0.1).toFixed(2);

  document.getElementById("hitung").textContent = suhuBolaBasah;
}
