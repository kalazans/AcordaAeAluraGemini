let locaisParaAcordar=[];

const x = document.getElementById("demo");
let casaLA;
let casaLO;
/*let trampoLA = -22.805182217311767;
let trampoLO= -43.00169750334847;*/
 


function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
    
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    console.log("lat dispositivo "+position.coords.latitude);
    console.log("lot dispositivo " +position.coords.longitude);
  casaLA = position.coords.latitude;
  casaLO = position.coords.longitude;
}
getLocation();





function distance(casaLO1, casaLA1, trampoLO1, trampoLA2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (trampoLA2-casaLA1).toRad();  // Javascript functions in radians
    var dLon = (trampoLO1-casaLO1).toRad(); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(casaLA1.toRad()) * Math.cos(trampoLA2.toRad()) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    console.log((d)+" distancia");
    return d;
  }
  
  //acade loc;-22.805405680974026, -43.00162554479608//
 
  function move(destinolot,destinolat){
    latAgora=-22.805190986829018;
    lotAgora=-43.00109914236204;
    navigator.geolocation.getCurrentPosition = function(success, failure) { 
        success({ coords: { 
            latitude: -22.805190986829018, 
            longitude: -43.00109914236204,
    
        }, timestamp: Date.now() }); 
    }

    /** Converts numeric degrees to radians */
    if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
        }
    }
    let distanciDoDestino = distance(lotAgora,latAgora,destinolot,destinolat);
    distanciDoDestino = converKMtoM(distanciDoDestino);
    
    if(distanciDoDestino <100){
        console.log("voce esta a "+distanciDoDestino.toFixed(0)+" metros de distancia");
        Swal.fire({
            title: "CHEGOU O PONTO!",
            text: "ACORDA AE MANOO!",
            icon: "success"
          });
        document.getElementById("audio").play();
    } else{
        console.log("dorme porra")
    }
  }

  

function simular(){

    
    let latDestino = parseFloat(document.getElementById("latitude-destino").value);
    let lotDestino = parseFloat(document.getElementById("longitude-destino").value);
    console.log(latDestino);
    
    
    move(lotDestino,latDestino);
    
}
  function adicionarDB(){
    let nome =document.getElementById("nomeLocal").value;
    let latdb = document.getElementById("latdb").value;
    let lotdb = document.getElementById("lotdb").value;
    let escolhaGif = document.getElementById("gifs").value;
    let tipoDeSono = ""
    if(escolhaGif=="ibernar"){
        tipoDeSono ="ibernar.gif";
    }else{
        tipoDeSono = "naodormir.gif";
    }

    let acordaPoint={
        sono:tipoDeSono,
        nome:nome,
        lat:latdb,
        lot:lotdb
    }

    locaisParaAcordar.push(acordaPoint);
    console.log(locaisParaAcordar);
  }

  function listaDosLocais(){
    let card="";
    for(let i=0;i<locaisParaAcordar.length;i++){
        card+= `
        <div class="card-local">
        <img src=${locaisParaAcordar[i].sono}>
        <p>${locaisParaAcordar[i].nome}</p>
        <p>latitude: ${locaisParaAcordar[i].lat}</p>
        <p>longitude: ${locaisParaAcordar[i].lot}</p>
        </div>
        `
    }
    document.getElementById("locaisDB").innerHTML = card;
    document.getElementById("locaisDB").style="border: 2px solid #EE3C08;"
  }

function converKMtoM(kms){
    return kms*1000;

}
/************************************************************* */
function trackin(){
    let usuarioslat;
    let usuariolot;
    const watchId = navigator.geolocation.watchPosition(position => {
        usuariolot = position.coords.longitude;
        usuarioslat = position.coords.latitude;
        // Show a map centered at latitude / longitude.
      });
     
      /** Converts numeric degrees to radians */
    if (typeof(Number.prototype.toRad) === "undefined") {
        Number.prototype.toRad = function() {
          return this * Math.PI / 180;
            }
        }
      
        let distanciaDoDestino = distance(usuarioslot,usuariolat,destinolot,destinolat);
        if(converKMtoM(distanciaDoDestino)>1000){
        trackin();
        }  else{
            console.log("ACORDA AE");
        }

}



