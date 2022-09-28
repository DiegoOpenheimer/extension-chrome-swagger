chrome.runtime.onConnect.addListener(port => {
    port.onMessage.addListener(message => {
        chrome.tabs.query({ active: true }, tabs => {
            const [tab] = tabs;
            if (message.type === 'open_menu_swagger') {
                chrome.scripting.executeScript({
                    function: runnable,
                    target: { tabId: tab.id }
                });
            }
        });
    });
});

function runnable() {
    const values = Array.from(document.querySelectorAll('.opblock-tag'))
    values.forEach(v=>v.click())
}