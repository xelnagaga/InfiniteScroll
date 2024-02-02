// 监听开始按钮的点击事件
document.getElementById('start').addEventListener('click', function() {
    // 读取用户输入的滚动速度和大小
    const speed = document.getElementById('scrollSpeed').value;
    const size = document.getElementById('scrollSize').value;

    // 查询当前激活的标签页并发送开始滚动的消息，附带速度和大小参数
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "startScrolling", speed: speed, size: size});
    });
});

// 监听暂停按钮的点击事件
document.getElementById('pause').addEventListener('click', function() {
    // 查询当前激活的标签页并发送停止滚动的消息
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "stopScrolling"});
    });
});
