const words = [
    { pronunciation: "バリュー", meaning: "値", spelling: "value" },
    { pronunciation: "プリント", meaning: "印刷,表示する", spelling: "print" },
    { pronunciation: "ストリング", meaning: "文字列", spelling: "string" },
    { pronunciation: "タイプ", meaning: "タイプ,型", spelling: "type" },
    { pronunciation: "クローズ", meaning: "閉じる,終了処理", spelling: "close" },
    { pronunciation: "エンプティ", meaning: "空,何も入ってない", spelling: "empty" },
    { pronunciation: "インテジャー", meaning: "整数", spelling: "integer" },
    { pronunciation: "デリート", meaning: "削除", spelling: "delete" },
    { pronunciation: "リターン", meaning: "戻す,返す:値を返すときなど", spelling: "return" },
    { pronunciation: "チャラ", meaning: "文字,主に1文字", spelling: "char" },
    { pronunciation: "バーチャー", meaning: "可変長文字列:バッキャラとも読むらしい", spelling: "varchar" },
    { pronunciation: "マージ", meaning: "結合", spelling: "merge" },
    { pronunciation: "アレー", meaning: "配列", spelling: "array" },
    { pronunciation: "カルク", meaning: "計算する", spelling: "calc" },
    { pronunciation: "カレント", meaning: "現在", spelling: "current" },
    { pronunciation: "アド", meaning: "追加する", spelling: "add" },
    { pronunciation: "レファ", meaning: "参照する", spelling: "refer" },
    { pronunciation: "スコープ", meaning: "範囲", spelling: "scope" },
    { pronunciation: "ヘッド", meaning: "先頭", spelling: "head" },
    { pronunciation: "テイル", meaning: "末尾", spelling: "tail" },
    { pronunciation: "ルート", meaning: "根", spelling: "root" },
    { pronunciation: "アッパー", meaning: "上の", spelling: "upper" },
    { pronunciation: "ロウアー", meaning: "下の", spelling: "lower" },
    { pronunciation: "レフト", meaning: "左の", spelling: "left" },
    { pronunciation: "ライト", meaning: "右の", spelling: "right" },
    { pronunciation: "テンプ", meaning: "一時的な,テンポラリーの略", spelling: "temp" },
    { pronunciation: "ホワイル", meaning: " 〜の間", spelling: "while" },
    { pronunciation: "ファースト", meaning: "最初の", spelling: "first" },
    { pronunciation: "ラスト", meaning: "最後の", spelling: "last" },
    { pronunciation: "リーサントリ", meaning: "最近,リーセントリー", spelling: "Recently" },
    { pronunciation: "リースト", meaning: "最小,一番少ない", spelling: "Least" }
/*  { pronunciation: "", meaning: "", spelling: "" },
    { pronunciation: "", meaning: "", spelling: "" } */
];

function createWordCards() {
    const container = document.getElementById('wordGrid');
    
    words.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        
        card.innerHTML = `
            <div class="pronunciation">${word.pronunciation}</div>
            <div class="meaning">${word.meaning}</div>
            <div class="input-group">
                <div class="input-wrapper">
                    <span class="correct-mark" id="mark-${index}"></span>
                    <input type="text" id="input-${index}" placeholder="スペルを入力">
                </div>
                <button class="check-btn" onclick="checkSpelling(${index})">確認</button>
                <button class="reset-btn" onclick="resetInput(${index})">R</button>
            </div>
        `;
        
        container.appendChild(card);
    });
    // ボタンのクリックイベントの管理   
    document.querySelectorAll(".check-btn").forEach(button => {
        button.addEventLisstener("click", event => {
            checkSpelling(event.target.dataset.index);
        });
    });

    document.querySelectorAll(".reset-btn").forEach(button => {
        button.addEventLisstener("click", event => {
            resetInput(event.target.dataset.index);
        });
    });
}

function checkSpelling(index) {
    const input = document.getElementById(`input-${index}`);
    const mark = document.getElementById(`mark-${index}`);
    const userAnswer = input.value.toLowerCase().trim();
    const correctAnswer = words[index].spelling;

    if (userAnswer === correctAnswer) {
        // 正解の場合、入力値の後ろにスペースと〇を追加
        input.value = userAnswer + " 〇";
        input.style.color = "black";
        mark.textContent = "";
    } else {
        mark.textContent = "";
        input.value = correctAnswer;
        input.style.color = "red";
    }
    
    input.disabled = true;
}

function resetInput(index) {
    const input = document.getElementById(`input-${index}`);
    const mark = document.getElementById(`mark-${index}`);
    
    // 入力欄をリセット
    input.value = "";
    input.style.color = "black";
    input.disabled = false;
    mark.textContent = "";
}

document.addEventListener("DOMContentLoaded", createWordCards);