var timer1, timer2;
var objTag = ['link1', 'link2', 'link3'];
let sphereFlag = 0;
let touchFlag = 0;
var touchCheck = document.getElementById("touch1");
var image = document.getElementById("skyimg");     // 画像の取得
var audio;
audio = new Audio();
audio.load();
audio.play();

const btnPlay = document.getElementById("play");   // 再生ボタンの取得
btnPlay.addEventListener("click", (e) => {         // クリック時イベント
    if (touchFlag == 0) {
        //audio = new Audio();
        audio.src = 'audio/kyoukai_1.m4a';
        audio.load();
        touchFlag = 1;
        touchCheck.remove();
    }
    audio.play();
});
const btnStop = document.getElementById("stop");   // 停止ボタンの取得
btnStop.addEventListener("click", (e) => {         // クリック時イベント
    audio.pause();
});
const btnRepeat = document.getElementById("link"); // ボタンの取得
btnRepeat.addEventListener("click", (e) => {       // クリック時イベント
    image.setAttribute("src", "image/kyoukai.jpg");
    audio.pause();
    if (sphereFlag == 0) {
        setSphere();
    }
});

// 画面遷移用球体の作成
function setSphere() {
    const sceneElement = document.getElementById('scene');
    const sphereElement = document.createElement('a-sphere');
    sphereElement.setAttribute('id', 'link1');
    sphereElement.setAttribute('position', '0 3 -4');
    sphereElement.setAttribute('scale', '1 1 1');
    sphereElement.setAttribute('src', 'image/kusatsu2.jpg');
    sphereElement.setAttribute('linkBox1', '');

    sceneElement.appendChild(sphereElement);
    const sphereElement2 = document.createElement('a-sphere');
    sphereElement2.setAttribute('id', 'link2');
    sphereElement2.setAttribute('position', '7 3 3');
    sphereElement2.setAttribute('scale', '1 1 1');
    sphereElement2.setAttribute('src', 'image/Kvevri.jpg');
    sphereElement2.setAttribute('linkBox2', '');
    sceneElement.appendChild(sphereElement2);

    sceneElement.appendChild(sphereElement);
    const sphereElement3 = document.createElement('a-sphere');
    sphereElement3.setAttribute('id', 'link3');
    sphereElement3.setAttribute('position', '-7 3 3');
    sphereElement3.setAttribute('scale', '1 1 1');
    sphereElement3.setAttribute('src', 'image/budoubatake.jpg');
    sphereElement3.setAttribute('linkBox3', '');
    sceneElement.appendChild(sphereElement3);

    sphereFlag = 1;
};

// 画面遷移用球体の削除
function delSphere() {
    for (let i = 0; i < objTag.length; i++) {
        var objDel = document.getElementById(objTag[i]);
        objDel.remove();
    }
    sphereFlag = 0;
};

function toLink1() {
    delSphere();
    image.setAttribute("src", "image/kusatsu2.jpg"); // 画像の切り替え
    audio.setAttribute("src", "audio/kusatsu2.mp3"); // 音声の切り替え
    audio.play();// 音声の再生
}

//////////////////////////////////////////////////////////////////////////////////
// 画面遷移処理
AFRAME.registerComponent('linkbox1', {
    init: function () {
        console.log(this);
        const element = this.el;
        element.addEventListener('mouseenter', function () { // マウスの代わりに視線でクリック
            element.play();
            console.log('mouseenter');
            element.setAttribute('animation', 'property: rotation; to: 0 360 0; dur: 2000; easing: linear; loop: true');
            timer1 = setTimeout(toLink1, 2000); // toLink関数を実行
        });
        //回転の停止
        element.addEventListener('mouseleave', function () {
            element.pause();
            clearTimeout(timer1);
        });
    }
});

function toLink2() {
    delSphere();
    image.setAttribute("src", "image/Kvevri.jpg"); // 画像の切り替え
    audio.setAttribute("src", "audio/kvevri.m4a"); // 音声の切り替え
    audio.play();// 音声の再生
}

AFRAME.registerComponent('linkbox2', {
    init: function () {
        console.log(this);
        const element = this.el;
        // マウスの代わりに視線でクリック
        element.addEventListener('mouseenter', function () {
            element.play();
            console.log('mouseenter');
            element.setAttribute('animation', 'property: rotation; to: 0 360 0; dur: 2000; easing: linear; loop: true');
            timer1 = setTimeout(toLink2, 2000); // toLink関数を実行
        });
        // 回転の停止
        element.addEventListener('mouseleave', function () {
            element.pause();
            clearTimeout(timer1);
        });
    }
});

function toLink3() {
    delSphere();
    image.setAttribute("src", "image/budoubatake.jpg"); // 画像の切り替え
    audio.setAttribute("src", "audio/budoubatake.m4a"); // 音声の切り替え
    audio.play();// 音声の再生
}

AFRAME.registerComponent('linkbox3', {
    init: function () {
        console.log(this);
        const element = this.el;
        // マウスの代わりに視線でクリック
        element.addEventListener('mouseenter', function () {
            element.play();
            console.log('mouseenter');
            element.setAttribute('animation', 'property: rotation; to: 0 360 0; dur: 2000; easing: linear; loop: true');
            timer1 = setTimeout(toLink3, 2000); //toLink関数を実行
        });
        // 回転の停止
        element.addEventListener('mouseleave', function () {
            element.pause();
            clearTimeout(timer1);
        });
    }
});