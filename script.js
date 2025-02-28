document.addEventListener("DOMContentLoaded", () => {
    // 앱 실행 시 로딩 화면
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
        }, 500);
    }, 1500);

    // Pull-to-Refresh 구현
    let startY = 0;
    let refreshTriggered = false;
    const pullToRefresh = document.getElementById("pull-to-refresh");
    const spinner = document.querySelector(".refresh-spinner");

    document.addEventListener("touchstart", (e) => {
        if (window.scrollY === 0) {
            startY = e.touches[0].pageY;
            refreshTriggered = false;
        }
    });

    document.addEventListener("touchmove", (e) => {
        let moveY = e.touches[0].pageY - startY;
        if (moveY > 50 && window.scrollY === 0) {
            pullToRefresh.style.top = "20px";
            spinner.style.display = "block";
            refreshTriggered = true;
        }
    });

    document.addEventListener("touchend", () => {
        if (refreshTriggered) {
            setTimeout(() => {
                location.reload();
            }, 500);
        } else {
            pullToRefresh.style.top = "-60px";
            spinner.style.display = "none";
        }
    });
});
