// 初始化滚动间隔的变量
let scrollInterval = null;

// 监听来自弹出页面或背景脚本的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === "startScrolling") {
        // 从请求中获取滚动速度和大小，将字符串转换为整数
        const scrollAmount = parseInt(request.size, 10);  // 滚动大小（像素）
        const scrollDelay = parseInt(request.speed, 10);  // 滚动速度（毫秒）

        // 如果已经有滚动间隔在运行，则先清除它
        if (scrollInterval !== null) clearInterval(scrollInterval);

        // 设置新的滚动间隔，根据给定的速度和大小滚动页面
        scrollInterval = setInterval(function() {
            window.scrollBy(0, scrollAmount);
        }, scrollDelay);

    } else if (request.command === "stopScrolling") {
        // 如果接收到停止滚动的消息，清除滚动间隔
        if (scrollInterval !== null) clearInterval(scrollInterval);
        scrollInterval = null; // 重置滚动间隔变量
    }
});
