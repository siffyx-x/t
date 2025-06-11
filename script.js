document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirmButton');
    const messageDisplay = document.getElementById('message'); // messageDisplayは使っていませんが、HTMLに存在するので残しておきます

    // 「はい」ボタンがクリックされた時の処理
    confirmButton.addEventListener('click', () => {
        // の紹介ページ (.html) に直接遷移
        const nextPageUrl = ‘thompson.html';
        window.location.href = nextPageUrl;
    });

    // 「いいえ」ボタンがないため、関連する処理は不要です
});