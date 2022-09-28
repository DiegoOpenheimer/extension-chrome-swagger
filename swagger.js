document.getElementById('swagger').addEventListener('click', open)

function open() {
    const port = chrome.runtime.connect();
    port.postMessage({
        type: 'open_menu_swagger'
    });
    setTimeout(window.close, 100)
}