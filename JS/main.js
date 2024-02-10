const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;
camera.position.y = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

//Lighting
const al = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(al);
const dl = new THREE.DirectionalLight(0xffffff, 0.8);
dl.position.set(20,50,60);
dl.castShadow = true;
scene.add(dl);

//Floor
const floorGeometry = new THREE.BoxGeometry( 30, 1, 20 ); 
const floorMaterial = new THREE.MeshLambertMaterial( {color: 0xf3dfc1} ); 
const floor = new THREE.Mesh( floorGeometry, floorMaterial ); 
scene.add( floor );

//Floor adjustments
floor.position.z = 5;
floor.position.y = -5;

//Roof
const roofGeometry = new THREE.BoxGeometry( 30, 1, 20 ); 
const roofMaterial = new THREE.MeshBasicMaterial( {color: 0xe8b887} ); 
const roof = new THREE.Mesh( roofGeometry, roofMaterial ); 
scene.add( roof );

//Roof adjustments
roof.position.z = 5;
roof.position.y = 15;

//Left Wall
const lWallGeometry = new THREE.BoxGeometry( 1, 30, 20 );
const lWallMaterial = new THREE.MeshBasicMaterial( {color: 0x7A82AB} ); 
const lWall = new THREE.Mesh( lWallGeometry, lWallMaterial ); 
scene.add( lWall );

//Left Wall adjustments
lWall.position.x = -15;
lWall.position.z = 2;

//Right Wall
const rWallGeometry = new THREE.BoxGeometry( 1, 30, 20 );
const rWallMaterial = new THREE.MeshBasicMaterial( {color: 0x808bbf} ); 
const rWall = new THREE.Mesh( rWallGeometry, rWallMaterial ); 
scene.add( rWall );

//Right Wall adjustments
rWall.position.x = 15;
rWall.position.z = 2;

//Front wall
const wallGeometry = new THREE.BoxGeometry( 30, 30, 1 );
const wallMaterial = new THREE.MeshBasicMaterial( {color: 0x8b95c7} ); 
const wall = new THREE.Mesh( wallGeometry, wallMaterial ); 
scene.add( wall );

//Front wall adjustments
wall.position.z = -5;

//Bed Foundation
const bedGeometry = new THREE.BoxGeometry( 7, 1, 9 );
const bedGeometry2 = new THREE.BoxGeometry( 7.6, .5, 9 ); 
const bedMaterial = new THREE.MeshLambertMaterial( {color: 0xfffaf7} ); 
const bedMaterial2 = new THREE.MeshLambertMaterial( {color: 0xab917e} ); 
const bed = new THREE.Mesh( bedGeometry, bedMaterial ); 
const bed2 = new THREE.Mesh( bedGeometry2, bedMaterial2 );
scene.add( bed );
scene.add( bed2 );

//Bed Foundation adjustments
bed.position.y= -3;
bed.position.x = -11;
bed2.position.y= -3.3;
bed2.position.x = -11;

//Bed frames
const frameGeometry = new THREE.CapsuleGeometry( .5, 3, 4, 15 );
const frameGeometry2 = new THREE.CapsuleGeometry( .4, 3, 4, 15 ); 
const frameMaterial = new THREE.MeshLambertMaterial( {color: 0xccaf9b} ); 
const frame1 = new THREE.Mesh( frameGeometry, frameMaterial );
const frame2 = new THREE.Mesh( frameGeometry2, frameMaterial );
const frame3 = new THREE.Mesh( frameGeometry, frameMaterial );
const frame4 = new THREE.Mesh( frameGeometry, frameMaterial );
scene.add( frame1 );
scene.add( frame2 );
scene.add( frame3 );
scene.add( frame4 );

//bed frame adjustments
frame1.position.x = -7.1;
frame1.position.y = -3;
frame1.position.z = 4.5;
frame2.position.x = -14.3;
frame2.position.y = -3;
frame2.position.z = 4.3;
frame3.position.x = -7.5;
frame3.position.y = -3;
frame3.position.z = -4.3;
frame4.position.x = -14.3;
frame4.position.y = -3;
frame4.position.z = -4.3;

//Bed head
const headGeometry = new THREE.CircleGeometry( 3.4, 32, 0, 3.1 ); 
const headMaterial = new THREE.MeshLambertMaterial( { color: 0xf5d2ba } ); 
const head = new THREE.Mesh( headGeometry, headMaterial ); 
scene.add( head );

//bed head adjustments
head.position.x = -10.9;
head.position.y = -3;
head.position.z = -4.3;

//Table top
const tableGeometry = new THREE.BoxGeometry( 5, .5, 6 ); 
const tableMaterial = new THREE.MeshLambertMaterial( {color: 0xDDBEA8} ); 
const table = new THREE.Mesh( tableGeometry, tableMaterial ); 
scene.add( table );

//table top adjustments
table.position.y= -.5;
table.position.x = 12.5;

//Table Stand
const standGeometry = new THREE.BoxGeometry( 5, .5, .5 );
const standGeometry2 = new THREE.BoxGeometry( .5, 5, .5 );  
const standMaterial = new THREE.MeshLambertMaterial( {color: 0x353535} ); 
const stand = new THREE.Mesh( standGeometry, standMaterial ); 
const stand2 = new THREE.Mesh( standGeometry, standMaterial );
const stand3 = new THREE.Mesh( standGeometry2, standMaterial );  
const stand4 = new THREE.Mesh( standGeometry2, standMaterial );
const stand5 = new THREE.Mesh( standGeometry2, standMaterial );
const stand6 = new THREE.Mesh( standGeometry2, standMaterial );
scene.add( stand );
scene.add( stand2 );
scene.add( stand3 );
scene.add( stand4 );
scene.add( stand5 );
scene.add( stand6 );

//Stand adjustments
stand.position.y= -.7;
stand.position.x = 12.5;
stand.position.z= 3;
stand2.position.y= -.5;
stand2.position.x = 12.5;
stand2.position.z= -3;
stand3.position.y= -3;
stand3.position.x = 14.5;
stand3.position.z= 3;
stand4.position.y= -3;
stand4.position.x = 14.5;
stand4.position.z= -2.5;
stand5.position.y= -3;
stand5.position.x = 10.1;
stand5.position.z= 3;
stand6.position.y= -3;
stand6.position.x = 10.25;
stand6.position.z= -3;

//Monitor
const monitorGeometry = new THREE.BoxGeometry( .2, 3.5, 3 ); 
const monitorGeometry2 = new THREE.BoxGeometry( .2, 3.2, 2.5 ); 
const monitorMaterial = new THREE.MeshLambertMaterial( {color: 0x4a4e69} );
const monitorMaterial2 = new THREE.MeshLambertMaterial( {color: 0xd7e3fc} );
const monitor = new THREE.Mesh( monitorGeometry, monitorMaterial );
const monitor2 = new THREE.Mesh( monitorGeometry2, monitorMaterial2 );
scene.add( monitor );
scene.add( monitor2 );

//Monitor adjustments
monitor.position.y= 2.5;
monitor.position.x = 12.5;
monitor2.position.y= 2.5;
monitor2.position.x = 12.5;

//Monitor Stand
const monStandGeometry = new THREE.BoxGeometry( .2, 2, .5 );  
const monStandGeometry2 = new THREE.ConeGeometry( 1, .5, 22, 1, false, 0, 7 );
const monStandMaterial = new THREE.MeshLambertMaterial( {color: 0xe6eced} ); 
const monStand = new THREE.Mesh( monStandGeometry, monStandMaterial );
const monStand2 = new THREE.Mesh( monStandGeometry2, monStandMaterial );  
scene.add( monStand );
scene.add( monStand2 );

//Stand adjustments
monStand.position.y= .5;
monStand.position.x = 13;
monStand2.position.y= 0;
monStand2.position.x = 13;

//Chair base
const chairGeometry = new THREE.CylinderGeometry( 1.5, 1.5, .5, 32 ); 
const chairMaterial = new THREE.MeshLambertMaterial( {color: 0xDDBEA8} ); 
const chair = new THREE.Mesh( chairGeometry, chairMaterial ); 
scene.add( chair );

//base adjustments
chair.position.y= -2.3;
chair.position.x = 5;

//Chair Leg
const legGeometry = new THREE.CylinderGeometry( .2, .2, 3, 32 ); 
const legGeometry2 = new THREE.BoxGeometry( 2, .2, .2 ); 
const legGeometry3 = new THREE.BoxGeometry( .2, .2, 2.2 ); 
const legMaterial = new THREE.MeshLambertMaterial( {color: 0x353535} ); 
const leg = new THREE.Mesh( legGeometry, legMaterial );
const leg2 = new THREE.Mesh( legGeometry2, legMaterial );
const leg3 = new THREE.Mesh( legGeometry3, legMaterial );
scene.add( leg );
scene.add( leg2 );
scene.add( leg3 );

//Leg adjustments
leg.position.y= -3.6;
leg.position.x = 5;
leg2.position.y= -4.4;
leg2.position.x = 5;
leg3.position.y= -4.4;
leg3.position.x = 5;

//Window Frame
const windowGeometry = new THREE.BoxGeometry( 12, 8, 2 );
const windowGeometry2 = new THREE.BoxGeometry( 13.5, .5, 2 );
const windowMaterial = new THREE.MeshLambertMaterial( {color: 0xccaf9b} ); 
const windowFrame = new THREE.Mesh( windowGeometry, windowMaterial ); 
const windowFrame2 = new THREE.Mesh( windowGeometry2, windowMaterial ); 
scene.add( windowFrame);
scene.add( windowFrame2);

//Frame adjustments
windowFrame.position.y = 5;
windowFrame.position.z = -5;
windowFrame2.position.y = 1;
windowFrame2.position.z = -5;

//Outside Background
const bgGeometry = new THREE.BoxGeometry( 11.5, 7.5, 2 );
const bgMaterial = new THREE.MeshBasicMaterial( {color: 0x90e0ef, transparent: true, opacity: 0.5} ); 
const bg = new THREE.Mesh( bgGeometry, bgMaterial ); 
scene.add( bg);

//outside adjustments
bg.position.y = 5;
bg.position.z = -5;

//Nightstand
const nsGeometry = new THREE.BoxGeometry( 5, 5, 6 ); 
const nsGeometry2 = new THREE.BoxGeometry( 4, 2, 6 );
const nsGeometry3 = new THREE.SphereGeometry( .3, 32, 16 ); 
const nsMaterial = new THREE.MeshLambertMaterial( {color: 0x806443} ); 
const nsMaterial2 = new THREE.MeshLambertMaterial( {color: 0xa9927d} ); 
const nsMaterial3 = new THREE.MeshLambertMaterial( {color: 0x22333b} ); 
const ns = new THREE.Mesh( nsGeometry, nsMaterial ); 
const ns2 = new THREE.Mesh( nsGeometry2, nsMaterial2 ); 
const ns3 = new THREE.Mesh( nsGeometry3, nsMaterial3 ); 
scene.add( ns );
scene.add( ns2 );
scene.add( ns3 );

//Nightstand adjustments
ns.position.y = -3.5;
ns.position.z = -4.6;
ns.position.x = -3.5;
ns2.position.y = -2.5;
ns2.position.z = -4;
ns2.position.x = -3.5;
ns3.position.y = -2.2;
ns3.position.z = -1;
ns3.position.x = -3.5;

//Ceiling Light
const ceilingGeometry = new THREE.ConeGeometry( 2.5, 2, 32, 1 ); 
const ceilingMaterial = new THREE.MeshLambertMaterial( {color: 0xd8e2dc} );
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial ); 
scene.add( ceiling );

//Ceiling adjustments
ceiling.position.y = 13.5;

//Dresser
const dressGeometry = new THREE.BoxGeometry( 3.5, 6, 5.5 );
const dressGeometry2 = new THREE.BoxGeometry( 6, 1.5, 2 );
const dressMaterial = new THREE.MeshLambertMaterial( {color: 0x806443} ); 
const dressMaterial2 = new THREE.MeshLambertMaterial( {color: 0xa9927d} ); 
const dress = new THREE.Mesh( dressGeometry, dressMaterial ); 
const dress2 = new THREE.Mesh( dressGeometry2, dressMaterial2 ); 
const dress3 = new THREE.Mesh( dressGeometry2, dressMaterial2 );
const dress4 = new THREE.Mesh( dressGeometry2, dressMaterial2 );
const dress5 = new THREE.Mesh( dressGeometry2, dressMaterial2 );
const dress6 = new THREE.Mesh( dressGeometry2, dressMaterial2 );
const dress7 = new THREE.Mesh( dressGeometry2, dressMaterial2 );
scene.add(dress);
scene.add(dress2);
scene.add(dress3);
scene.add(dress4);
scene.add(dress5);
scene.add(dress6);
scene.add(dress7);


//Dresser adjustments
dress.position.x = 13.5;
dress.position.y = -1;
dress.position.z = 9.5;
dress2.position.x = 14.3;
dress2.position.y = 1;
dress2.position.z = 8.5;
dress3.position.x = 14.3;
dress3.position.y = -1;
dress3.position.z = 8.5;
dress4.position.x = 14.3;
dress4.position.y = -3;
dress4.position.z = 8.5;
dress5.position.x = 14.3;
dress5.position.y = -3;
dress5.position.z = 11;
dress6.position.x = 14.3;
dress6.position.y = 1;
dress6.position.z = 11;
dress7.position.x = 14.3;
dress7.position.y = -1;
dress7.position.z = 11;

//Dresser knob
const knobGeometry = new THREE.SphereGeometry( .2, 32, 16 ); 
const knobMaterial = new THREE.MeshLambertMaterial( {color: 0x22333b} ); 
const knob = new THREE.Mesh( knobGeometry, knobMaterial ); 
const knob2 = new THREE.Mesh( knobGeometry, knobMaterial ); 
const knob3 = new THREE.Mesh( knobGeometry, knobMaterial ); 
const knob4 = new THREE.Mesh( knobGeometry, knobMaterial ); 
const knob5 = new THREE.Mesh( knobGeometry, knobMaterial ); 
const knob6 = new THREE.Mesh( knobGeometry, knobMaterial ); 
scene.add( knob );
scene.add( knob2 );
scene.add( knob3 );
scene.add( knob4 );
scene.add( knob5 );
scene.add( knob6 );

//knob adjustments
knob.position.x = 11.3;
knob.position.y = 1.2;
knob.position.z = 8.5;
knob2.position.x = 11.3;
knob2.position.y = -.8;
knob2.position.z = 8.5;
knob3.position.x = 11.3;
knob3.position.y = -2.8;
knob3.position.z = 8.5;
knob4.position.x = 11.3;
knob4.position.y = 1.2;
knob4.position.z = 11;
knob5.position.x = 11.3;
knob5.position.y = -.8;
knob5.position.z = 11;
knob6.position.x = 11.3;
knob6.position.y = -2.8;
knob6.position.z = 11;

//Lamp
const lampGeometry = new THREE.CylinderGeometry( .4, 1, 1, 32 ); 
const lampGeometry2 = new THREE.SphereGeometry( .7, 32, 16 ); 
const lampGeometry3 = new THREE.CapsuleGeometry( .2, 1, 4, 8 );  
const lampMaterial = new THREE.MeshLambertMaterial( {color: 0xfdf0d5} ); 
const lampMaterial2 = new THREE.MeshLambertMaterial( {color: 0x546a7b} ); 
const lamp = new THREE.Mesh( lampGeometry, lampMaterial ); 
const lamp2 = new THREE.Mesh( lampGeometry2, lampMaterial2 );
const lamp3 = new THREE.Mesh( lampGeometry3, lampMaterial2 );  
scene.add( lamp );
scene.add( lamp2 );
scene.add( lamp3 );

//Lamp adjustments
lamp.position.y = 1;
lamp.position.z = -2.5;
lamp.position.x = -3.5;
lamp2.position.y = -1;
lamp2.position.z = -2.5;
lamp2.position.x = -3.5;
lamp3.position.y = 0;
lamp3.position.z = -2.5;
lamp3.position.x = -3.5;

function animate() {
    requestAnimationFrame(animate);
   
    renderer.render(scene, camera);
}

animate();