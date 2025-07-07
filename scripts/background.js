import { searchOnNaverEnDict } from "./searchFunction.js";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "search-NaverEn-Dict",
        title: "Search en.dict.naver.com for \"%s\"",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "search-NaverEn-Dict") {
        searchOnNaverEnDict(info.selectionText);
    }
});