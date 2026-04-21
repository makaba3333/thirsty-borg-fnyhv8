import { useState } from "react";

const messages = [
  "差し出されたギフトに気づけば受け取れる",
  "流れは来ているのだから丁寧にね♪",
  "今感じていることと、ちゃんと向き合おうね",
  "答えは外ではなく、内側にすでにあるよね",
  "手放すことで、新しい循環が始まるよ",
  "あなた自身が本当に喜ぶものを選ぼう",
  "思い込みをほどくと、違う景色になるよ",
  "動くことと同じくらい大切な静かな時間",
  "今、すでに持っているもの忘れてない？",
  "違和感は否定せずに対話するのだよ",
  "すでに十分にやってきてるよね〜",
  "比較を手放すと、本来のリズムに戻る",
  "迷いは拡張の途中にある",
  "怖さの先に、本音がある",
  "お〜い、今ここの現実をみてるか〜い",
  "外側の現実は、あなたの内側の反映",
  "小さな一歩が大きく流れを変えるよ",
  "深呼吸。力を抜くことでうまくいく",
  "正解なんてそもそもないよ",
  "そのままのあなたで何一つ間違いない",
  "エネルギーは常に循環している",
  "意図が現実をつくる",
  "楽しさを基準にしていいのよ〜",
  "止まることも、ひとつの大切な選択肢",
  "感じたことを信頼してみてね",
  "静けさの中で色々が見えてくる",
  "必然のプロセスを楽しもう",
  "今やってることが、未来を作って行くよ",
  "コントロールを手放すと軽くなるよね",
  "心地よく自然にいられる場所を探そう",
  "答えは急がなくてもいいよね。",
  "自分の本音をちゃんと聞いてね",
  "相変わらずいつも導かれているよね〜♪"
];

const styles = {
  outer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #e0f7ff, #c8f1ff)",
    padding: "16px",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    background: "white",
    borderRadius: 20,
    padding: "28px 24px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    marginBottom: 24,
    color: "#555",
    letterSpacing: "0.05em",
  },
  msgArea: {
    minHeight: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  msgText: {
    fontSize: 26,
    fontWeight: 700,
    color: "#00aadd",
    lineHeight: 1.6,
    letterSpacing: "0.04em",
    animation: "doon 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
  },
  initialText: {
    fontSize: 15,
    fontWeight: 400,
    color: "#aaa",
  },
  loading: {
    fontSize: 14,
    color: "#aaa",
  },
  btn: {
    width: "100%",
    padding: "13px",
    marginTop: 24,
    borderRadius: 12,
    border: "none",
    background: "#00c8ff",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: "0.05em",
  },
};

export default function App() {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(0);

  const drawMessage = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
      setKey(k => k + 1);
      setIsLoading(false);
    }, 1800 + Math.random() * 600);
  };

  return (
    <>
      <style>{`
        @keyframes doon {
          0%   { opacity: 0; transform: scale(0.5); }
          60%  { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div style={styles.outer}>
        <div style={styles.card}>
          <h1 style={styles.title}>宇宙思考3EYESリーディング</h1>
          <div style={styles.msgArea}>
            {isLoading ? (
              <div style={styles.loading}>受信中...</div>
            ) : message ? (
              <div key={key} style={styles.msgText}>{message}</div>
            ) : (
              <div style={styles.initialText}>ボタンを押してメッセージを受け取ってください</div>
            )}
          </div>
          <button
            onClick={drawMessage}
            disabled={isLoading}
            style={styles.btn}
          >
            メッセージを受け取る
          </button>
        </div>
      </div>
    </>
  );
}

