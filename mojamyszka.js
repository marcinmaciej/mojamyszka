/**
 * @author  Created by Marcin Guziołek on 25.08.2020 r.
 *
 * @brief Obecnie działająca wersja ostatnia poprawka 19.03.2022r.
 *
 * @details Obsługuje wszystkie trzy uciążliwe przypadki:
 * przycisk 'Pomiń reklamę', baner reklamowy oraz komunikat wstrzymujący oglądanie video.
 * Każde obsłużenie jest logowane w konsoli przeglądarki.
 *
 */
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
            console.log("Przycisk liknięty.");
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

                let abp = paper_dialog.querySelector('#confirm-button').querySelector("#button");

                if (null !== abp && (abp.getAttribute("aria-label") === "Tak")) {
                    abp.click();
                    console.log("Stop kliknięty.");
                }
            }
        }

    }
}, 300);