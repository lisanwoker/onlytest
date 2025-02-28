document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("content").classList.remove("hidden");
        }, 500);
    }, 1500);
});

function refreshPage() {
    document.getElementById("loading-screen").style.display = "flex";
    setTimeout(() => {
        location.reload();
    }, 500);
}
