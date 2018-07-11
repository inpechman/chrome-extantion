let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            (()=>{console.log(tabs);
                return tabs[0].id})(),
            {code: 'document.body.style.backgroundColor = "' + color + '";'
            });
    });
};

console.log(this);

window.onload = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            (()=>{console.log(tabs);
                return tabs[0].id})(),
            {file: 'injection.js'});
    });
};



