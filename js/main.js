function fetchJSONData() {
    return JSON.parse("{\"Blue\":{\"Username\":5,\"Username2\":5},\"Teal\":{\"Username\":5,\"Username2\":5},\"Purple\":{\"Username\":5,\"Username2\":5},\"Magenta\":{\"Username\":5,\"Username2\":5}}")
}


function input() {
    var json = fetchJSONData();
    var username = document.getElementById("Input2").value;
    if (json['Blue'][username] != null) {
        document.getElementById("Output1Text").textContent="Blue: " + json['Blue'][username];
    } else {
        document.getElementById("Output1Text").textContent="Blue: 0"
    }
    if (json['Teal'][username] != null) {
        document.getElementById("Output2Text").textContent="Teal: " + json['Teal'][username];
    } else {
        document.getElementById("Output2Text").textContent="Teal: 0"
    }
    if (json['Purple'][username] != null) {
        document.getElementById("Output3Text").textContent="Purple: " + json['Purple'][username];
    } else {
        document.getElementById("Output3Text").textContent="Purple: 0"
    }
    if (json['Magenta'][username] != null) {
        document.getElementById("Output4Text").textContent="Magenta: " + json['Magenta'][username];
    } else {
        document.getElementById("Output4Text").textContent="Magenta: 0"
    }
}
