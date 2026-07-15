let nama = prompt("masukan nama:");
let gender = prompt("masukan jenis kelamin:")
let umur = prompt("masukan umur:");

document.getElementById("biodata").innerHTML = `
<p>nama : ${nama}</p>
<p>gender : ${gender}</p>
<p>agama : ${agama}</p>
`;
