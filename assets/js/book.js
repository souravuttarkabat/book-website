/* =====================================================
   PERFECT ANSWERS, PERFECT QUESTIONS
   Central Book Properties & Metadata Hydration Engine
===================================================== */

const BOOK_DATABASE = {
    title: "Perfect Answers, Perfect Questions",
    subtitle: "Revisiting Foundations of Faith",
    edition: "First Edition",
    version: "1.0",
    pages: "214",
    filesize: "2.25 MB",
    releaseDate: "2026-06-26"
};

document.addEventListener("DOMContentLoaded", () => {
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
});