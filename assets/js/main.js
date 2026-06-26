/* =====================================================
   PERFECT ANSWERS, PERFECT QUESTIONS
   Interactive Feature Controllers
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // -------------------------------------------------
    // 1. Table of Contents Slide Toggle
    // -------------------------------------------------
    const tocToggle = document.getElementById("tocToggle");
    const tocContent = document.getElementById("tocContent");

    if (tocToggle && tocContent) {
        tocToggle.addEventListener("click", () => {
            const isOpened = tocContent.classList.contains("open");
            
            if (isOpened) {
                // Close interaction
                tocContent.classList.remove("open");
                tocToggle.classList.remove("active");
                tocToggle.setAttribute("aria-expanded", "false");
            } else {
                // Open interaction
                tocContent.classList.add("open");
                tocToggle.classList.add("active");
                tocToggle.setAttribute("aria-expanded", "true");
            }
        });
    }

    // -------------------------------------------------
    // 2. Download Gateway Gatekeeper Validation
    // -------------------------------------------------
    const agreementCheckbox = document.getElementById("downloadAgreement");
    const downloadButton = document.getElementById("downloadButton");

    if (agreementCheckbox && downloadButton) {
        agreementCheckbox.addEventListener("change", (event) => {
            if (event.target.checked) {
                // Activate the download engine link
                downloadButton.classList.remove("disabled");
                downloadButton.removeAttribute("tabindex");
            } else {
                // Restrict interactions if agreement is unchecked
                downloadButton.classList.add("disabled");
                downloadButton.setAttribute("tabindex", "-1");
            }
        });

        // Intercept click sequences if users bypass CSS states via keyboard mapping
        downloadButton.addEventListener("click", (event) => {
            if (downloadButton.classList.contains("disabled")) {
                event.preventDefault();
            }
        });
    }
});