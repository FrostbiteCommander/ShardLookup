function fetchJSONData() {
    return JSON.parse("{\"Blue\": {\"alt06\": 1, \"akashi20160new\": 13, \"cooldude19hell\": 10, \"bob123456ggs_567\": 12, \"punch_kung123\": 2, \"soupythe_sir\": 4, \"rcdronesentrybot\": 5, \"shadowkid09r\": 3, \"thedefender410\": 6, \"ilikemoney99998\": 7, \"noolkhg3\": 2, \"andyw2010\": 2, \"trainerdom23\": 5, \"pizzaeik\": 5, \"cars10gamer\": 6, \"nottidals\": 2, \"joehelpton\": 1, \"dustyisabell123\": 8, \"texvisage\": 1, \"brayden222222277\": 3, \"garrint10\": 7, \"gdiddy7\": 1, \"realwizyt\": 12, \"sucfu355_v2\": 12, \"toph4o\": 9, \"dayidreamingg\": 5, \"tylyn132\": 8, \"derp_mcburps\": 7, \"l_epsy\": 1, \"known4415\": 3, \"uncreativeusernameyt\": 4, \"applenewb34556\": 4, \"blurieys\": 7, \"superrrrey\": 8, \"g_wingzzyt\": 7, \"l4w_s\": 1, \"lenketas\": 16, \"cromoguynlpro\": 5, \"sasakaiiii\": 2, \"beb3be321\": 5, \"ryegala\": 1, \"connorbobonner\": 2, \"mr_unepic\": 11, \"aimka123\": 8, \"matthewisbaconhair\": 2, \"yfgngbub5\": 11, \"hairywolfe\": 12, \"musik14252\": 2, \"nano_banjo\": 9, \"1dfan218\": 2, \"crisgaming6322\": 8, \"thembhv\": 1, \"kaisermartial\": 4, \"thunder_owl\": 1, \"xxtrolllolllortxx\": 5, \"onett_iscool2\": 3, \"rykov22\": 1, \"hammerheadx10\": 9, \"biosecurities\": 1, \"leblockheadvipoo\": 3, \"goooglag\": 2, \"pieability\": 14, \"enlightenedtdm\": 1, \"augustin7777\": 1, \"boioioioioioioioi\": 1, \"arsenthebullmastiff\": 1, \"vlad100\": 3, \"overpoweredman666\": 6, \"nobtttttt\": 4, \"largemn\": 15, \"epiccriminal42\": 2, \"xglitcher2876x\": 2, \"em_iiirr\": 4, \"bendybubbles5\": 2, \"vikivanda\": 2, \"fortlead\": 1, \"akiakisa123\": 1, \"hatchjam\": 5, \"hakadede\": 5, \"ohzzdf\": 1, \"gamer_bro2343\": 3, \"astralllunatic\": 3, \"riydoesstuff\": 7, \"zayan666master\": 4, \"lokerev\": 1, \"pach_inator\": 2, \"kiggles504\": 1, \"crazykid_cray\": 2, \"kra_v\": 1, \"0oliver9\": 1, \"esotovaz01\": 2, \"l0r_3s\": 2, \"king_zombielord\": 5, \"remotecontroltuba\": 1, \"epsilonsandy\": 3, \"kayra16352\": 4, \"embrazed\": 1, \"top_h4o\": 3, \"tyurgen11\": 1, \"4crits\": 2, \"julianhiper\": 1, \"topnitel\": 6, \"jero84xd\": 1, \"peatypeashooter\": 2, \"darkbrooklynninja\": 4, \"rylanmcc\": 2, \"louismsupercool\": 1, \"iliketacos_omg\": 2, \"xxjackxx1672\": 2, \"alh1238\": 1, \"fourantelope123\": 2, \"itzweerr7u7\": 3, \"bloxdabber\": 1, \"sirsouthern\": 1, \"itamar_pro2\": 1, \"thatonerhino57229\": 1, \"17hudson\": 1, \"ag3nt_al3x\": 2, \"iceboarded\": 1, \"eternalumbrage\": 1, \"codeman1131\": 1}, \"Teal\": {\"pho3nix_op\": 1, \"dustyisabell123\": 1, \"bloxdabber\": 1, \"thatonerhino57229\": 1, \"connorbobonner\": 1, \"ag3nt_al3x\": 1}, \"Purple\": {\"sucfu355_v2\": 3, \"nottidals\": 1, \"joehelpton\": 1, \"l_epsy\": 1, \"yfgngbub5\": 2, \"lenketas\": 1, \"epiccriminal42\": 1, \"riydoesstuff\": 1, \"connorbobonner\": 1, \"blurieys\": 1, \"ilikemoney99998\": 2, \"darkbrooklynninja\": 1, \"largemn\": 1, \"nobtttttt\": 1}, \"Magenta\": {\"crisgaming6322\": 2, \"hammerheadx10\": 1, \"brayden222222277\": 1, \"dayidreamingg\": 1, \"akashi20160new\": 1, \"beb3be321\": 1, \"superrrrey\": 2, \"g_wingzzyt\": 1, \"oddsquad108\": 1, \"sucfu355_v2\": 2, \"heroryan294\": 1, \"garrint10\": 1, \"connorbobonner\": 1, \"tylyn132\": 3, \"soupythe_sir\": 2, \"topnitel\": 1, \"trainerdom23\": 1, \"pho3nix_op\": 1, \"applenewb34556\": 1, \"crazykid_cray\": 1, \"xxkingslimexx8\": 1, \"oxeet_1\": 1, \"ag3nt_al3x\": 1, \"xenosical\": 1}}")
}


function input() {
    var json = fetchJSONData();
    var username = document.getElementById("Input2").value;
    if (json['Blue'][username.toLowerCase()] != null) {
        document.getElementById("Output1Text").textContent="Blue: " + json['Blue'][username.toLowerCase()];
    } else {
        document.getElementById("Output1Text").textContent="Blue: 0"
    }
    if (json['Teal'][username.toLowerCase()] != null) {
        document.getElementById("Output2Text").textContent="Teal: " + json['Teal'][username.toLowerCase()];
    } else {
        document.getElementById("Output2Text").textContent="Teal: 0"
    }
    if (json['Purple'][username.toLowerCase()] != null) {
        document.getElementById("Output3Text").textContent="Purple: " + json['Purple'][username.toLowerCase()];
    } else {
        document.getElementById("Output3Text").textContent="Purple: 0"
    }
    if (json['Magenta'][username.toLowerCase()] != null) {
        document.getElementById("Output4Text").textContent="Magenta: " + json['Magenta'][username.toLowerCase()];
    } else {
        document.getElementById("Output4Text").textContent="Magenta: 0"
    }
}
