const nama = "m. abimanyu";
let umur = 19;

const biodata = document.getElementById('biodata');
console.log (biodata);

function generateBiodata () {
    let generasi;

    if(umur > 15 && umur < 20) {
        generasi = "generasi remaja";
    }
    else if (umur >19 && umur < 30) {
        generasi = "generasi dewasa";
    }
    else if (umur >29 && umur < 40) {
        generasi = "generasi menuju tua";
    }
    else if (umur>39 && umur < 50) {
        generasi = "generasi lumayan tua";
    }
    else {
        generasi = "generasi tua";
    }
    return biodata.innerHTML=generasi;
}

console.log(nama);
console.log(umur);

generateBiodata()