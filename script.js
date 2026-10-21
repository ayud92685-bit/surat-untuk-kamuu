const messages = [
  {
    title: "hai, kamu...",
    text: "kalau kamu lagi baca ini, berarti kamu udah sampai di surat kecil yang aku siapin khusus buat kamu. mungkin ini sederhana, tapi aku pengen kamu tahu kalau ada seseorang yang senang banget karena kamu ada di dunia ini. ♡"
  },
  {
    title: "aku sayang kamu, ya",
    text: "aku mungkin nggak selalu pandai merangkai kata atau nunjukin semuanya dengan sempurna. tapi aku harap kamu bisa ngerasain kalau kamu berharga, kamu berarti, dan kamu punya tempat spesial di hati aku. makasih udah jadi diri kamu sendiri."
  },
  {
    title: "buat kamu yang lagi berjuang",
    text: "kalau hari-hari kamu lagi berat, nggak apa-apa istirahat sebentar. kamu nggak harus selalu kuat, nggak harus menyelesaikan semuanya dalam satu hari. satu langkah kecil pun tetap sebuah kemajuan. aku percaya kamu bisa melewati ini, pelan-pelan aja, ya. jangan lupa makan, minum air, dan kasih diri kamu waktu buat bernapas. ♡"
  },
  {
    title: "please remember this",
    text: "kamu pantas disayang dengan baik, pantas merasa tenang, dan pantas punya hari-hari yang membahagiakan. kalau hari ini belum baik, semoga besok sedikit lebih ringan. aku bangga sama kamu, bukan cuma karena hal-hal yang berhasil kamu capai, tapi juga karena kamu tetap berusaha sampai hari ini."
  }
];

const envelopeWrap = document.getElementById("envelopeWrap");
const messagePanel = document.getElementById("messagePanel");
const endingPanel = document.getElementById("endingPanel");
const title = document.getElementById("messageTitle");
const text = document.getElementById("messageText");
const stepLabel = document.getElementById("stepLabel");
const progressBar = document.getElementById("progressBar");
const nextButton = document.getElementById("nextButton");
let current = 0;

function showMessage(index) {
  current = index;
  title.textContent = messages[index].title;
  text.textContent = messages[index].text;
  stepLabel.textContent = `surat kecil untuk kamu · ${index + 1}/${messages.length}`;
  progressBar.style.width = `${((index + 1) / messages.length) * 100}%`;
  nextButton.textContent = index === messages.length - 1 ? "Lihat kejutan terakhir 🌷" : "Baca selanjutnya →";
  messagePanel.classList.remove("hidden");
  endingPanel.classList.add("hidden");
}

document.getElementById("startButton").addEventListener("click", () => {
  envelopeWrap.classList.add("hidden");
  showMessage(0);
});

nextButton.addEventListener("click", () => {
  if (current < messages.length - 1) {
    showMessage(current + 1);
  } else {
    messagePanel.classList.add("hidden");
    endingPanel.classList.remove("hidden");
  }
});

document.getElementById("openLetter").addEventListener("click", () => {
  document.getElementById("startButton").click();
});

document.getElementById("restartButton").addEventListener("click", () => {
  endingPanel.classList.add("hidden");
  messagePanel.classList.add("hidden");
  envelopeWrap.classList.remove("hidden");
  current = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
});
