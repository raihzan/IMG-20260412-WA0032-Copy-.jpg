const nama = ("raihzan");
let usia = 17;

console.log('halo nama saya ' + nama + ' dan usia saya ' + usia + ' tahun')


function generateBiodate () {
  let generasi
  
  if (usia > 10 && usia < 20) {
  generasi = "generasi remaja";
  } else if (usia >19 && usia < 30){
  generasi = "generasi dewasa";
  }
    else if(usia > 29) {
  generasi = "generasi tua";
    }
    else {
  generasi = "anda masi terlalu kecl";
    }
    
    console.log("generasi saya adalah "+generasi );
    
  document.getElementById("biodata"). innerText = 'halo nama saya ' + nama + ' dan usia saya ' + usia + ' tahun'
}

generateBiodate();
