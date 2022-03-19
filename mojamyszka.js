console.log("Moja myszka działa.");
window.setInterval(function () {
    let ads_module,
        popup_module;
    ads_module = document.querySelector(".video-ads,.ytp-ad-module");
    popup_module = document.querySelector("ytd-popup-container");
    if ((null !== ads_module) && (0 !== ads_module.children.length)) {
        let abs = ads_module.querySelector(".ytp-ad-skip-button,.ytp-button");
        let abc = ads_module.querySelector(".ytp-ad-overlay-close-button");
        if (null !== abs) {
            abs.click();
        } else if (null !== abc) {
            abc.click();
        }
    }
    if ((null !== popup_module) && (0 !== popup_module.children.length)) {
        let paper_dialog = popup_module.querySelector("paper-dialog");
        if ((null !== paper_dialog) && (0 !== paper_dialog.children.length)) {
            let paper_dialog_visibility = window.getComputedStyle(document.querySelector("paper-dialog"), null).getPropertyValue("display");
            if ("none" !== paper_dialog_visibility) {
                let abp = paper_dialog.querySelector("#button");
                if ((null !== abp) && ("Tak" === abp.getAttribute("aria-label"))) {
                    abp.click();
                    console.log("Dialog kliknięty.");
                }
            }
        }

    }
}, 300);

//Obecnie działająca wersja ostatnia poprawka 15.03.2022r.
console.log("Moja myszka działa.");
window.setInterval(function () {
    let ads_module,
        popup_module;
    ads_module = document.querySelector(".video-ads,.ytp-ad-module");
    popup_module = document.querySelector("ytd-popup-container");
    if (null !== ads_module && 0 !== ads_module.children.length) {

        let abs = ads_module.querySelector(".ytp-ad-skip-button,.ytp-button");
        let abc = ads_module.querySelector(".ytp-ad-overlay-close-button");

        if (null !== abs) {
            abs.click();
            console.log("Kliknięty.");
        } else if (null !== abc) {
            abc.click();
            console.log("Baner kliknięty.");
        }

    }
    if (null !== popup_module && 0 !== popup_module.children.length) {

        let paper_dialog = popup_module.querySelector("tp-yt-paper-dialog");

        if ((null !== paper_dialog) && (0 !== paper_dialog.children.length)) {

            let paper_dialog_visibility = window.getComputedStyle(paper_dialog, null).getPropertyValue("display");

            if ("none" !== paper_dialog_visibility) {

                let abp = paper_dialog.querySelector("#button");

                if (null !== abp && (abp.getAttribute("aria-label") === "Tak")) {
                    abp.click();
                    console.log("Stop kliknięty.");
                }
            }
        }

    }
}, 300);