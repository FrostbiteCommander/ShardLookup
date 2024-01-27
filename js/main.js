function fetchJSONData() {
    return JSON.parse("{\"Blue\": {\"86110144\": 3, \"1885960498\": 9, \"732194662\": 20, \"5002442110\": 6, \"3403920137\": 16, \"985993475\": 8, \"1105661071\": 9, \"98394585\": 10, \"81620609\": 19, \"1517790219\": 5, \"72418666\": 3, \"118458599\": 4, \"1084186487\": 3, \"166298902\": 2, \"338470203\": 2, \"1659215639\": 2, \"4880785440\": 15, \"202147796\": 5, \"138563027\": 8, \"1203407012\": 9, \"3648389051\": 4, \"176924383\": 10, \"4947499903\": 8, \"127234452\": 9, \"230514521\": 12, \"183712662\": 2, \"3806835060\": 16, \"1028387369\": 15, \"125448076\": 8, \"2002263785\": 1, \"82418794\": 2, \"49641327\": 1, \"1312317287\": 2, \"104559350\": 4, \"1829456384\": 5, \"121100668\": 3, \"192671173\": 6, \"1081516175\": 2, \"148211867\": 2, \"474470723\": 5, \"464608695\": 5, \"414785411\": 6, \"4365591907\": 2, \"3193454851\": 1, \"130806641\": 1, \"119969760\": 3, \"38419065\": 1, \"1670081513\": 12, \"2293596794\": 12, \"537496418\": 5, \"61352632\": 8, \"1609356862\": 1, \"2727359430\": 4, \"265212479\": 4, \"4108306508\": 7, \"449846906\": 1, \"390875229\": 5, \"1140606595\": 2, \"929376425\": 5, \"102422260\": 1, \"128882597\": 2, \"4220891922\": 11, \"513740974\": 2, \"1855666553\": 11, \"260119749\": 12, \"1439623819\": 2, \"1507662273\": 9, \"563117206\": 2, \"537032547\": 1, \"518104991\": 5, \"3963165438\": 3, \"947261602\": 1, \"2572051468\": 9, \"145742994\": 1, \"527216372\": 3, \"255584766\": 2, \"3957057864\": 1, \"121739964\": 1, \"200539875\": 1, \"948807136\": 1, \"1313390\": 3, \"2620951235\": 2, \"2470044978\": 2, \"367356076\": 2, \"408506513\": 2, \"2428694615\": 1, \"1417742749\": 1, \"908781234\": 5, \"129660081\": 5, \"325090613\": 1, \"1043717099\": 3, \"1121183679\": 3, \"1170251475\": 4, \"966687974\": 1, \"179699417\": 2, \"1076586547\": 2, \"1956547608\": 5, \"1328775889\": 1, \"368306368\": 3, \"540975429\": 4, \"412814263\": 1, \"454671825\": 2, \"510560508\": 1, \"1706505276\": 1, \"258963979\": 2, \"694332445\": 4, \"381495652\": 2, \"855959512\": 2, \"1538422760\": 2, \"1215515350\": 1, \"230029751\": 2, \"2240007278\": 3, \"187150788\": 1, \"3153199077\": 1, \"337343594\": 1, \"3381814266\": 1, \"481765512\": 1, \"839571197\": 2, \"3247456863\": 1, \"170755668\": 1, \"860299765\": 1}, \"Teal\": {\"849593560\": 1, \"176924383\": 1, \"187150788\": 1, \"3381814266\": 1, \"128882597\": 1, \"839571197\": 1}, \"Purple\": {\"230514521\": 3, \"1517790219\": 2, \"2293596794\": 3, \"4365591907\": 1, \"3193454851\": 1, \"1609356862\": 1, \"1855666553\": 2, \"81620609\": 1, \"2620951235\": 1, \"125448076\": 1, \"128882597\": 1, \"4108306508\": 1, \"4947499903\": 2, \"694332445\": 1, \"3806835060\": 1}, \"Magenta\": {\"1203407012\": 3, \"5002442110\": 1, \"2572051468\": 1, \"119969760\": 1, \"537496418\": 1, \"3403920137\": 1, \"929376425\": 1, \"1885960498\": 2, \"127234452\": 1, \"440712854\": 1, \"2293596794\": 2, \"272992049\": 1, \"985993475\": 1, \"128882597\": 1, \"61352632\": 3, \"104559350\": 2, \"732194662\": 1, \"474470723\": 1, \"849593560\": 1, \"265212479\": 1, \"72418666\": 1, \"543616409\": 1, \"1424647570\": 1, \"839571197\": 1, \"632073719\": 1}}")
}

function input() {
    var json = fetchJSONData();
    var username2 = document.getElementById("Input2").value;

    var data = {
        usernames: [
          username2
        ],
        excludeBannedUsers: true
    };

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://users.roblox.com/v1/usernames/users");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Origin", "https://roblox.com");
    xhr.send(json);
    var json_data;
    if (xhr.readyState == 4)
        if (xhr.status == 200)
            json_data = JSON.parse(xhr.responseText);
    var username = toString(json_data['data'][0]['id'])
    if (json['Blue'][username.toLowerCase()] != null) {
        document.getElementById("Output1Text").textContent = "Blue: " + json['Blue'][username.toLowerCase()];
    } else {
        document.getElementById("Output1Text").textContent = "Blue: 0"
    }
    if (json['Teal'][username.toLowerCase()] != null) {
        document.getElementById("Output2Text").textContent = "Teal: " + json['Teal'][username.toLowerCase()];
    } else {
        document.getElementById("Output2Text").textContent = "Teal: 0"
    }
    if (json['Purple'][username.toLowerCase()] != null) {
        document.getElementById("Output3Text").textContent = "Purple: " + json['Purple'][username.toLowerCase()];
    } else {
        document.getElementById("Output3Text").textContent = "Purple: 0"
    }
    if (json['Magenta'][username.toLowerCase()] != null) {
        document.getElementById("Output4Text").textContent = "Magenta: " + json['Magenta'][username.toLowerCase()];
    } else {
        document.getElementById("Output4Text").textContent = "Magenta: 0"
    }
}
