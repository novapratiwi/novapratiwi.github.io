alert("SELAMAT DATANG")
function  Penjumlahan(){
    var a = parseInt(document.forms['inputAngka']['a'].value);
    var b = parseInt(document.forms['inputAngka']['b'].value);
    var result = a + b;

    var hasil = document.getElementById('result');
    var tulisan = document.getElementById('teks');

    tulisan.innerHTML = "HASILNYA ADALAH";
    hasil.innerHTML = result;
    
    document.body.style.backgroundColor = "green"
}