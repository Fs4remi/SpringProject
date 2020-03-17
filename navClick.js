const navOverlayHandler = () => {
    document.getElementById('overlay').addEventListener('click', ()=> {
        document.getElementById('navigation').style = 'display : block';
    });
};

window.onload = event => {
    console.log("from navClickHandler");
    navOverlayHandler();
};