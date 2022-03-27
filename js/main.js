


let scene, camera, renderer, controls, ctx;
init()
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(105, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer();
    camera.position.y = 600
    camera.position.z = 600
    camera.rotation.set(-45,0,0)
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    renderer.setSize( window.innerWidth, window.innerHeight );
    ctx = document.getElementById("ctx")
    document.body.appendChild(renderer.domElement)
    const geometryplane = new  THREE.PlaneGeometry(10000,100000)
    const materialplane = new THREE.MeshBasicMaterial({color: 0x1303fc})
    const plane = new THREE.Mesh(geometryplane, materialplane)
    scene.add(plane)
    plane.position.set(0,150,-100)
}

let loader = new THREE.ColladaLoader()
var loadobjet = loader.load('./objects/boat.dae', (collada) =>{
    var dae = collada.scene;
    dae.scale.x = dae.scale.y = dae.scale.z = 20.0
    dae.position.set(0,0,5)
    dae.updateMatrix();
    scene.add(dae)
})

console.info(loadobjet)
const animate = function (dae) {
    requestAnimationFrame(animate);
    document.addEventListener('keydown', (e) =>{
        console.info(e.code)
        if(e.code == "KeyW"){
            dae.translateY(0.005)
        }else if(e.code == "KeyS"){
            dae.translateY(-0.0005)
        }else if(e.code == "KeyD"){
            dae.translateX(0.0005)
        }else if(e.code == "KeyA"){
            dae.translateX(-0.0005)
        }
    })
    renderer.render(scene, camera);
}
animate()

