function toggleKwaliteit() {
    var toggleButton = $("#kwaliteit-btn");
    var element = document.getElementById("kwaliteit-arrow");
    element.classList.toggle("rotated");

    //double click prevention
    setTimeout(function(){ 
        $(toggleButton).prop('disabled', true);
    }, 50);

setTimeout(function(){ 
    $(toggleButton).prop('disabled', false);
}, 250);
}

function toggleBestellen() {
        let bestelButton = $("#bestel-button");
        let element = document.getElementById("bestellen-arrow");
        element.classList.toggle("rotated");

//double click prevention
    setTimeout(function(){ 
            $(bestelButton).prop('disabled', true);
        }, 50);

    setTimeout(function(){ 
        $(bestelButton).prop('disabled', false);
    }, 250);
    }

function toggleKlantenservice() {
    let klantenserviceButton = $("#klantenservice-button")
    let element = document.getElementById("klantenservice-arrow");
    element.classList.toggle("rotated");

    //double click prevention
    //http://hyland.hypernode.io:8888/hlbeheer/admin/index/index/key/4890fbd63d6ced7fe391515edc2ad653a883c2b16e0ce1e0c135eedc49af65ba/
    setTimeout(function(){ 
        $(klantenserviceButton).prop('disabled', true);
    }, 50);

setTimeout(function(){ 
    $(klantenserviceButton).prop('disabled', false);
}, 250);
}
