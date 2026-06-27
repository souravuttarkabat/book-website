/* =====================================================
   INTERACTIONS & UI LOGIC
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Hash Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Table of Contents Toggle (Download Page)
    const tocToggle = document.getElementById("tocToggle");
    const tocContent = document.getElementById("tocContent");
    
    if (tocToggle && tocContent) {
        tocToggle.addEventListener("click", () => {
            tocContent.classList.toggle("open");
            tocToggle.classList.toggle("active");
            
            const isExpanded = tocContent.classList.contains("open");
            tocToggle.setAttribute("aria-expanded", isExpanded);
        });
    }

    // Agreement Checkbox Logic (Download Page)
    const agreementCheckbox = document.getElementById("downloadAgreement");
    const downloadButton = document.getElementById("downloadButton");
    
    if (agreementCheckbox && downloadButton) {
        agreementCheckbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                downloadButton.classList.remove("disabled");
            } else {
                downloadButton.classList.add("disabled");
            }
        });

        downloadButton.addEventListener("click", (e) => {
            if (downloadButton.classList.contains("disabled")) {
                e.preventDefault();
            }
        });
    }
});