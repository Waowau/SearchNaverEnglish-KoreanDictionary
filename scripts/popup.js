import { searchOnNaverEnDict } from "./searchFunction.js";

document.addEventListener("DOMContentLoaded", () => {
    var naverLink = document.getElementById("naver-link");
    naverLink.onclick = (event) => {
        event.stopPropagation();
        // The imported function isn't used because the links are different
        var URL = "https://en.dict.naver.com/#/main"
        chrome.tabs.create({
            url: URL
        });
    };

    var searchText = document.getElementById("search-text");
    searchText.addEventListener('keypress', handleKeyPress, false);

    var searchButton = document.getElementById("search-button");
    searchButton.onclick = handleSearchButton;
});

function handleKeyPress(event) {
    if (event.key === "Enter") {
        var searchText = event.target.value;
        searchOnNaverEnDict(searchText);
    }
};

function handleSearchButton() {
    var searchText = document.getElementById("search-text").value;
    searchOnNaverEnDict(searchText);
};