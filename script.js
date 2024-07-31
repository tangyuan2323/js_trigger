// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-31
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==
// 获取按钮元素
// 获取按钮元素
// 获取按钮元素
// 获取按钮元素
// 获取按钮元素
const button = document.getElementById('clickable');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// 定义按钮的初始颜色和变色颜色
const initialColor = 'blue';
const activeColor = 'red';

// 定义颜色恢复时间（毫秒）
const recoveryTime = 2000;

// 定义自动点击间隔时间（毫秒）
const autoClickInterval = 3000; // 3秒

// 跟踪按钮的恢复定时器
let recoveryTimer = null;

// 跟踪自动点击定时器
let autoClickTimer = null;

// 定义点击函数
function clickButton() {
    // 将按钮的背景颜色设为红色
    button.style.backgroundColor = activeColor;

    // 设置一个新的定时器来恢复颜色
    recoveryTimer = setTimeout(() => {
        button.style.backgroundColor = initialColor;
    }, recoveryTime);
}

// 定义开始自动点击函数
function startAutoClick() {
    if (!autoClickTimer) {
        autoClickTimer = setInterval(clickButton, autoClickInterval);
    }
}

// 定义停止自动点击函数
function stopAutoClick() {
    if (autoClickTimer) {
        clearInterval(autoClickTimer);
        autoClickTimer = null;
    }
}

// 添加开始按钮事件监听器
startButton.addEventListener('click', startAutoClick);

// 添加停止按钮事件监听器
stopButton.addEventListener('click', stopAutoClick);





