document.addEventListener("DOMContentLoaded", () => {
    
    // 作ったものボタンの処理
    const btnProjects = document.getElementById("btn-projects");
    if (btnProjects) {
        btnProjects.addEventListener("click", () => {
            // ここにジャンプさせたいサイトのURLを書く（例としてScratchの本垢）
            window.open("https://mit.edu", "_blank");
        });
    }

    // ブログボタンの処理
    const btnBlog = document.getElementById("btn-blog");
    if (btnBlog) {
        btnBlog.addEventListener("click", () => {
            alert("ブログは現在準備中です！お楽しみに！");
        });
    }

    // Go Topボタンの処理
    const goTopBtn = document.getElementById("goTopBtn");
    if (goTopBtn) {
        goTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
