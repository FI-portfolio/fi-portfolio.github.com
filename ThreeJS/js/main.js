'use strict';

(() => {

    let scene;
    let box;
    let plane;
    let text;
    let light;
    let ambient;
    let camera;
    let gridHelper;
    let axisHelper;
    let lightHelper;
    let renderer;
    let controls;
    let shadowHelper;
    let loader;
    let particles;
    
    let width = 700;
    let height = 500;
    let theta = 0;

    let count = 200;
    let i;
    let size;

    //stage
    scene = new THREE.Scene();

    //texture
    // loader = new THREE.TextureLoader();
    // loader.load('img/star.png', function(texture){
    //     createParticles(texture);
    //     render();
    // });

    function createParticles(texture){
        let pGeometry;
        let vartices = [];
        let pMaterial;
        let count = 200;
        let i;

        for(i = 0; i < count; i++){
            vartices.push(
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
                Math.random() * 200 - 100
            )
        }
                
        pGeometry = new THREE.BufferGeometry();

        pGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vartices, 3));
        pMaterial = new THREE.PointsMaterial({
            map: texture,
            size: 32,
            blending: THREE.AdditiveBlending,
            transparent: true,
            depthTest: false
        })

        particles = new THREE.Points(pGeometry, pMaterial);
        scene.add(particles);
    }

    for(i = 0; i < count; i++){
        size = Math.random() * 20 + 10;
        box = new THREE.Mesh(
            new THREE.BoxGeometry(size,size,size),
            new THREE.MeshLambertMaterial({
            color : Math.random() * 0xffffff
            }),
        );
        box.position.set(
            Math.random() * 200 - 100,
            Math.random() * 200 - 100,
            Math.random() * 200 - 100
        );
        scene.add(box);
    }

    // function createBox(texture){
    //     box = new THREE.Mesh(
    //       new THREE.BoxGeometry(20,20,20),
    //       new THREE.MeshLambertMaterial({
    //         color : 0xffffff
    //         }),
    //     );
    //     box.position.set(0,0,0);
    //     scene.add(box);
    // }

    // plane = new THREE.Mesh(
    //   new THREE.PlaneGeometry(20,20,20),
    //   new THREE.MeshLambertMaterial({
    //     color : 0x0000ff
    //     }),
    // );
    // plane.position.set(0,0,0);
    // plane.scale.set(10,10,10);
    // plane.rotation.x = Math.PI / 180 * -90;
    // scene.add(plane);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    //camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 200);
    camera.lookAt(scene.position);

    // gridHelper = new THREE.GridHelper(200, 10);
    // scene.add(gridHelper);
    // axisHelper = new THREE.AxesHelper(1000);
    // scene.add(axisHelper);
    // lightHelper = new THREE.DirectionalLightHelper(light, 20);
    // scene.add(lightHelper);

    
    //render
    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setSize(width,height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    //shadow
    // renderer.shadowMap.enabled = true;
    // light.castShadow = true;
    // light.shadow.camera.left = -200;
    // light.shadow.camera.right = 200;
    // light.shadow.camera.top = 200;
    // light.shadow.camera.bottom = -200;
    // shadowHelper = new THREE.CameraHelper(light.shadow.camera);
    // scene.add(shadowHelper);
    // box.castShadow = true;
    // plane.receiveShadow = true;

    //particle

    //controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    
    function render(){
        requestAnimationFrame(render);

        // theta += 0.1;
        // camera.position.x = Math.cos(THREE.Math.degToRad(theta)) * 300;
        // camera.position.z = Math.sin(THREE.Math.degToRad(theta)) * 300;
        // camera.lookAt(scene.position);
        // box.rotation.y += 0.01;
        // particles.rotation.y += 0.001;
        controls.update();
        renderer.render(scene,camera);
    }

    render();
})();