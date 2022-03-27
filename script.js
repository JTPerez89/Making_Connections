const editProf = document.querySelector("#editProf");
const acceptPhi = document.querySelector('.removeAccPhi');
const acceptTod = document.querySelector('.removeAccTod');
const declinePhi = document.querySelector('.removeCloPhi');
const declineTod = document.querySelector('.removeCloTod');
const mainName = document.querySelector('#mainChange');
const phil = document.querySelector('.reqPhil');
const todd = document.querySelector('.reqTodd');
const conReq = document.querySelector('#connReq');
const yourConn = document.querySelector('#ConnCou');

let conCount = 2;
let yourCount = 500;

function changeMain() {
    mainName.innerText = 'Billy Bob';
    console.log(mainName);
    return mainName;
}

function declineBtnPhi() {
    phil.remove();
    conCount--;
    conReq.innerText = conCount;
    return conReq;
}

function declineBtnTod() {
    todd.remove();
    conCount--;
    conReq.innerText = conCount;
    return conReq;
}

function acceptBtnPhi() {
    phil.remove();
    yourCount++;
    yourConn.innerText = yourCount;
    conCount--;
    conReq.innerText = conCount;
    return yourConn;
}

function acceptBtnTod() {
    todd.remove();
    yourCount++;
    yourConn.innerText = yourCount;
    conCount--;
    conReq.innerText = conCount;
    return yourConn;
}

editProf.addEventListener('click', changeMain);
acceptPhi.addEventListener('click', acceptBtnPhi);
acceptTod.addEventListener('click', acceptBtnTod);
declinePhi.addEventListener('click', declineBtnPhi);
declineTod.addEventListener('click', declineBtnTod);