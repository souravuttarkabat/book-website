/* =====================================================
   PERFECT ANSWERS, PERFECT QUESTIONS
   Central Book Properties & Metadata Hydration Engine
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    fetch('book.json')
        .then(response => response.json())
        .then(BOOK_DATABASE => {
            // Inject centralized metadata values wherever target hooks are declared
            document.querySelectorAll("[data-book-title]").forEach(el => {
                if (el.tagName !== "IMG") el.innerText = BOOK_DATABASE.title;
            });

            document.querySelectorAll("[data-book-subtitle]").forEach(el => {
                el.innerText = BOOK_DATABASE.subtitle;
            });

            document.querySelectorAll("[data-book-edition]").forEach(el => {
                el.innerText = BOOK_DATABASE.edition;
            });

            document.querySelectorAll("[data-book-version]").forEach(el => {
                el.innerText = BOOK_DATABASE.version;
            });

            document.querySelectorAll("[data-book-pages]").forEach(el => {
                el.innerText = BOOK_DATABASE.pages;
            });

            document.querySelectorAll("[data-book-filesize]").forEach(el => {
                el.innerText = BOOK_DATABASE.filesize;
            });

            document.querySelectorAll("[data-release-date]").forEach(el => {
                el.innerText = BOOK_DATABASE.releaseDate;
            });
        }).catch(error => console.error("Error loading book data:", error));
});