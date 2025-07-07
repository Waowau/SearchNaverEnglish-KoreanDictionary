export function searchOnNaverEnDict(text) {
    var URL = "https://en.dict.naver.com/#/search?query=" + text.trim() + "&range=all";
    chrome.tabs.create({
        url: URL
    });
};