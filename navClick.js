const navOverlayHandler = () => {
    document.getElementById('overlay').addEventListener('click', ()=> {
        document.getElementById('navigation').style = 'display : block';
    });
};

window.onload = navOverlayHandler;