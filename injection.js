console.log(this);

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

function strRotPass(str, key) {
    var keyLen = key.length;
    var result = Array(str.length).fill(null);
    for (var i = 0; i < str.length; i++) {
        var ascii = str.charCodeAt(i) + key.charCodeAt(i % keyLen);
        result[i] = String.fromCharCode(ascii);
    }
    return result.join("");
}

function base64UrlEncode(input) {
    var result = window.btoa(input).split("/").join("_").split("+").join("-");
    var i;
    for (i = result.length - 1; i > 0; i--) {
        if (result.charAt(i) !== "=") {
            break
        }
    }
    return result.slice(0,i+1);
}

function urlEncrypt(url, key) {
    url = strRotPass(url, key);
    return base64UrlEncode(url);
}


var myAddr = "10.240.0.88";
var encKey = "1q2w3e4r";
var proxyUrl = "http://ppp-chanaart.c9users.io/new4/index.php";
var params = {
    url: window.location
};
var q = urlEncrypt(window.location.toString(), encKey);
console.log(q);
window.location = proxyUrl + "?q=" + q;
// post(proxyUrl, params, "POST");

// meWm522UY9WZ0qDYn8pi1aCfm+Ni
// meWm522UY9WZ0qDYn8pi1aCfm-Ni
// http://ppp-chanaart.c9users.io/new4/index.php?q=meWm522UY9WZ0qDYn8pi1aCfm-Ni
// http://ppp-chanaart.c9users.io/new4/index.php?q=meWm522UY9WZ0qDYn8pi1aCfm+Ni