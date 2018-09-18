window.onload = function(){
// シーン
var scene = new THREE.Scene();

// レンダラー
var renderer = new THREE.WebGLRenderer({
    alpha:true,
    antialias: true
});
document.body.appendChild(renderer.domElement);

// renderer.setClearColor(0xffffff,1);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);

// カメラ
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(0, 0, 10);

// ライト
var light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

// 画像を読み込む
var texture = new THREE.TextureLoader().load('assets/imgs/logo.png',
(tex) => { // 読み込み完了時
    // 縦横比を保って適当にリサイズ
    const w = 5;
    const h = tex.image.height/(tex.image.width/w);

    // 平面
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial( { map:texture } );
    const plane = new THREE.Mesh( geometry, material );
    plane.scale.set(w, h, 1);
    scene.add( plane );


    window.addEventListener('mousemove', function(e){
        var mouse3D = new THREE.Vector3(
            ( event.clientX / window.innerWidth ) * 2 - 1,
            - ( event.clientY / window.innerHeight ) * 2 + 1,
            0.5 );

        plane.lookAt(mouse3D);
    })
});

// レンダリング
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();
}