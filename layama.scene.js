// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "ren0000", a: "CoronaCamera001", p: new BABYLON.Vector3(612.684, 152.4, -371.221), l: new BABYLON.Vector3(612.684, 152.4, -371.121)});
   layamaCameras.push({n: "ren0001", a: "CoronaCamera002", p: new BABYLON.Vector3(772.763, 152.4, -266.351), l: new BABYLON.Vector3(772.762, 152.4, -266.251)});
   layamaCameras.push({n: "ren0002", a: "CoronaCamera003", p: new BABYLON.Vector3(602.106, 152.4, -123.642), l: new BABYLON.Vector3(602.106, 152.4, -123.542)});
   layamaCameras.push({n: "ren0003", a: "CoronaCamera004", p: new BABYLON.Vector3(447.077, 152.4, -246.975), l: new BABYLON.Vector3(447.077, 152.4, -246.875)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1024");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

