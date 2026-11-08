document.addEventListener("DOMContentLoaded", () => {
    
    // 【トップページ用】作ったものボタンの処理
    const btnProjects = document.getElementById("btn-projects");
    if (btnProjects) {
        btnProjects.addEventListener("click", () => {
            // 新しいタブではなく、同じ画面で「tukuttamono.html」に移動する
            window.location.href = "tukuttamono.html"; 
        });
    }

    // 【トップページ用】ブログボタンの処理
    const btnBlog = document.getElementById("btn-blog");
    if (btnBlog) {
        btnBlog.addEventListener("click", () => {
            alert("ブログは現在準備中です！お楽しみに！");
        });
    }

    // ⬇️【新しく追加】作ったものページから「戻る」ボタンの処理
    const btnTukuttamonoReturn = document.getElementById("btn-tukuttamono-return");
    if (btnTukuttamonoReturn) {
        btnTukuttamonoReturn.addEventListener("click", () => {
            // トップページ（index.html）に戻る
            window.location.href = "index.html";
        });
    }

    // 【トップページ用】Go Topボタンの処理
    const goTopBtn = document.getElementById("goTopBtn");
    if (goTopBtn) {
        goTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
