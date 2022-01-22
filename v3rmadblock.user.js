// ==UserScript==
// @name         V3rm Adblock
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ads are cringe :yawn:
// @author       Spencer-0003
// @match        https://v3rmillion.net/*
// @icon         https://v3rmillion.net/favicon.ico
// @grant        none
// ==/UserScript==

(() => document.getElementById('sharingPlace').remove())();
