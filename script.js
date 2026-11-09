const STORAGE_KEY = "haohao-facciamo-shopping-accessori-v1";

const CATEGORY_INFO = {
  Imperativo: {
    label: "Imperativo",
    advice: "Ripassa le forme dell’imperativo e la posizione dei pronomi. Nella frase 10, “Non ti dimenticare” è un’espressione all’imperativo negativo.",
  },
  Concordanza: {
    label: "Concordanza",
    advice: "Controlla prima genere e numero del nome, poi scegli la desinenza corretta dell’aggettivo.",
  },
  Verbi: {
    label: "Verbi",
    advice: "Trova prima il soggetto e poi controlla la coniugazione. Fai attenzione soprattutto a è / sono e piace / piacciono.",
  },
  Dimostrativi: {
    label: "Dimostrativi",
    advice: "Ripassa le forme di questo e quello: questo, questa, questi, queste; quello, quella, quelli, quelle.",
  },
  Articoli: {
    label: "Articoli",
    advice: "Controlla genere, numero e suono iniziale del nome prima di scegliere l’articolo.",
  },
};

const TRY_AGAIN_HINTS = {
  Imperativo: "Controlla la persona dell’imperativo e l’eventuale pronome. Nella frase 10 osserva la struttura dell’imperativo negativo.",
  Concordanza: "Individua genere e numero del nome a cui si riferisce l’aggettivo.",
  Verbi: "Trova il soggetto e controlla persona e numero del verbo.",
  Dimostrativi: "Controlla distanza, genere e numero del nome indicato.",
  Articoli: "Controlla genere, numero e suono iniziale del nome seguente.",
};

const QUESTIONS = [
  [1, "quelle", "Dimostrativi", "“Scarpe” è femminile plurale: serve il dimostrativo femminile plurale “quelle”."],
  [2, "sono", "Verbi", "Il soggetto è “quelle scarpe”, plurale: il verbo essere va al plurale."],
  [3, "comode", "Concordanza", "“Scarpe” è femminile plurale, quindi anche l’aggettivo termina in -e."],
  [4, "comode", "Concordanza", "L’aggettivo concorda con “scarpe”, femminile plurale."],
  [5, "eleganti", "Concordanza", "“Scarpe” è plurale; “elegante” al plurale diventa “eleganti”."],
  [6, "queste", "Dimostrativi", "Il pronome indica le scarpe vicine: femminile plurale “queste”."],
  [7, "provale", "Imperativo", "È l’imperativo di “provare” con il pronome “le”, unito alla fine del verbo."],
  [8, "belle", "Concordanza", "L’aggettivo si riferisce alle scarpe: femminile plurale “belle”."],
  [9, "piacciono", "Verbi", "Ciò che piace sono le scarpe, plurale: “mi piacciono”."],
  [10, "dimenticare", "Imperativo", "“Non ti dimenticare” è un’espressione all’imperativo negativo con l’infinito."],
  [11, "ha", "Verbi", "Con il Lei di cortesia si usa la terza persona singolare: “ha”."],
  [12, "questa", "Dimostrativi", "“Cintura” è femminile singolare: “questa cintura”."],
  [13, "è", "Verbi", "Il soggetto “questa cintura” è singolare: “è”."],
  [14, "perfetta", "Concordanza", "L’aggettivo concorda con “cintura”, femminile singolare."],
  [15, "prendiamola", "Imperativo", "È un invito alla prima persona plurale con il pronome “la” unito al verbo."],
  [16, "sono", "Verbi", "Il prezzo totale è espresso con “sono 250 euro”."],
  [17, "quelle", "Dimostrativi", "Il riferimento è alle scarpe già indicate: femminile plurale “quelle”."],
  [18, "Sbrighiamoci", "Imperativo", "È l’imperativo alla prima persona plurale del verbo riflessivo “sbrigarsi”."],
  [19, "Chiedetemi", "Imperativo", "È l’imperativo plurale di “chiedere” con il pronome “mi” unito al verbo."],
  [20, "degli", "Articoli", "Davanti a “orecchini”, maschile plurale che inizia per vocale, si usa “degli”."],
  [21, "questi", "Dimostrativi", "“Orecchini” è maschile plurale: “questi orecchini”."],
  [22, "piacciono", "Verbi", "Il soggetto logico sono gli orecchini, plurale: “Le piacciono?”."],
  [23, "belli", "Concordanza", "“Orecchini” è maschile plurale, quindi l’aggettivo è “belli”."],
  [24, "adatti", "Concordanza", "L’aggettivo si riferisce agli orecchini: maschile plurale “adatti”."],
  [25, "piacciono", "Verbi", "Il riferimento è agli orecchini, plurale: “non piacciono”."],
  [26, "questi", "Dimostrativi", "Il pronome sostituisce “orecchini”: maschile plurale “questi”."],
  [27, "Questi", "Dimostrativi", "Il pronome indica un primo gruppo di orecchini: maschile plurale “questi”."],
  [28, "semplici", "Concordanza", "“Questi” indica orecchini plurali; l’aggettivo al plurale è “semplici”."],
  [29, "questi", "Dimostrativi", "Il pronome indica un altro gruppo di orecchini: maschile plurale “questi”."],
  [30, "eleganti", "Concordanza", "L’aggettivo si riferisce agli orecchini, maschile plurale."],
  [31, "quelli", "Dimostrativi", "Il pronome sostituisce “orecchini” e indica quelli più lontani: “quelli”."],
  [32, "semplici", "Concordanza", "L’aggettivo concorda con “quelli”, maschile plurale."],
  [33, "questo", "Dimostrativi", "Il pronome indica “braccialetto”, maschile singolare: “questo”."],
  [34, "è", "Verbi", "Il soggetto “questo” è singolare: “è perfetto”."],
  [35, "piace", "Verbi", "Ciò che piace è un braccialetto, singolare: “mi piace”."],
  [36, "Prova", "Imperativo", "È l’imperativo informale singolare del verbo “provare”."],
  [37, "bello", "Concordanza", "L’aggettivo si riferisce a “l’altro” braccialetto, maschile singolare."],
  [38, "è", "Verbi", "Il soggetto è “un abbinamento”, singolare: “è”."],
  [39, "perfetto", "Concordanza", "L’aggettivo concorda con “abbinamento”, maschile singolare."],
  [40, "prendo", "Verbi", "Khalinda parla di sé: prima persona singolare, “prendo”."],
  [41, "è", "Verbi", "Nella domanda sul prezzo si usa “Quant’è?”."],
  [42, "sono", "Verbi", "Con una somma espressa in euro si usa qui il plurale: “sono 88 euro.”"],
].map(([id, answer, category, hint]) => ({ id, answer, category, hint, part: id <= 18 ? 1 : 2 }));

const PARTS = {
  1: {
    title: "Nel negozio di scarpe",
    range: "Domande 1–18",
    lines: [
      ["Commessa", "Buongiorno, posso aiutarvi?"],
      ["Tommaso", "Vorrei provare {{1}} scarpe che {{2}} in vetrina."],
      ["Commessa", "Certo, che numero ha?"],
      ["Tommaso", "Il 43. <em>(Prova le scarpe)</em> Sono davvero molto {{3}}."],
      ["Khalinda", "<em>(a bassa voce)</em> Certo che sono {{4}}, sono scarpe da ginnastica! Hai bisogno di un paio di scarpe {{5}} come {{6}}, {{7}}!"],
      ["Tommaso", "Sono davvero molto {{8}}!"],
      ["Khalinda", "Come ti stanno?"],
      ["Tommaso", "Bene, mi {{9}}!"],
      ["Khalinda", "Anche a me, sei così elegante! Non ti {{10}} che ti serve anche una cintura."],
      ["Tommaso", "Già! Scusi, {{11}} una cintura che si abbina con queste scarpe?"],
      ["Commessa", "Certo, {{12}} cintura {{13}} dello stesso tipo di pelle. Va bene?"],
      ["Khalinda", "È {{14}}, Tommy, {{15}}!"],
      ["Commessa", "Allora in totale {{16}} 250 euro."],
      ["Tommaso", "Ecco a Lei, arrivederci. <em>(Escono)</em><br><br>Khalinda, volevo essere elegante e invece sono solo più povero! <em>(Ridono)</em>"],
      ["Khalinda", "Ma dai che stai benissimo con {{17}} scarpe! Ecco il negozio di accessori che ti dicevo.<br><br>Oh no, chiude fra 20 minuti! {{18}} che voglio prendere tutto prima di pranzo."],
    ],
  },
  2: {
    title: "Nel negozio di accessori",
    range: "Domande 19–42",
    lines: [
      ["Khalinda e Tommaso", "Buongiorno."],
      ["Commessa", "Buongiorno! {{19}} pure, se avete bisogno."],
      ["Khalinda", "Sto cercando {{20}} orecchini e un braccialetto da abbinare a un abito verde scuro."],
      ["Commessa", "Abbiamo {{21}} orecchini d'argento. Le {{22}}?"],
      ["Khalinda", "Sono molto {{23}}, ma forse non sono {{24}} perché ho già comprato delle scarpe con il tacco color oro… che dici Tommy?"],
      ["Tommaso", "Hai ragione, non {{25}} neanche a me."],
      ["Commessa", "Forse allora preferisce {{26}} color oro. {{27}} sono molto {{28}}, invece {{29}} sono più {{30}}."],
      ["Khalinda", "Preferisco {{31}} {{32}}, grazie. Ha anche un braccialetto?"],
      ["Commessa", "Certo, secondo me {{33}} {{34}} perfetto."],
      ["Khalinda", "Bello!! Mi {{35}}!"],
      ["Tommaso", "A me, no. {{36}} l'altro, mi sembra più {{37}}!"],
      ["Khalinda", "Hai ragione, Tommy. Con il mio vestito verde {{38}} un abbinamento {{39}}!"],
      ["Commessa", "Se prende anche una borsa, c'è uno sconto del 20%."],
      ["Khalinda", "Che affare! Allora {{40}} tutto. Quant'{{41}}?"],
      ["Commessa", "Con lo sconto {{42}} 88 euro."],
    ],
  },
};

const emptyState = () => ({ answers: Array(42).fill(""), checks: {}, firstByPart: {}, showAnswers: false, history: null });
let state = loadState();

function normalizeAnswer(value) {
  return value.normalize("NFKC").toLocaleLowerCase("it-IT").replace(/[.,!?;:，。！？；：]+/g, " ").replace(/\s+/g, " ").trim();
}

function isCorrect(question, value) { return normalizeAnswer(value) === normalizeAnswer(question.answer); }

function inputMarkup(id) {
  return `<span class="blank"><span class="blank-number" aria-hidden="true">${id}</span><label class="sr-only" for="answer-${id}">Risposta ${id}</label><input id="answer-${id}" data-id="${id}" type="text" value="${escapeHtml(state.answers[id - 1] || "")}" autocomplete="off" autocapitalize="none" spellcheck="false" inputmode="text"></span>`;
}

function renderPart(partNumber) {
  const part = PARTS[partNumber];
  const section = document.querySelector(`#part-${partNumber}`);
  const lines = part.lines.map(([speaker, text]) => {
    const content = text.replace(/{{(\d+)}}/g, (_, id) => inputMarkup(Number(id)));
    return `<p><strong>${speaker}:</strong> ${content}</p>`;
  }).join("");
  section.innerHTML = `
    <div class="part-heading"><div><p class="part-kicker">Parte ${partNumber} di 2</p><h2 id="part-${partNumber}-title">${part.title}</h2></div><span>${part.range}</span></div>
    <div class="dialogue">${lines}</div>
    <div id="part-${partNumber}-feedback" class="part-feedback" aria-live="polite"></div>
    <div class="actions"><button type="button" class="primary-button check-button" data-part="${partNumber}">Controlla</button><button type="button" class="text-button show-button" data-part="${partNumber}">Mostra le risposte</button></div>`;
  applyFieldStates(partNumber);
}

function applyFieldStates(partNumber) {
  const checked = state.checks[partNumber];
  if (!checked) return;
  getPartQuestions(partNumber).forEach((q) => {
    const input = document.querySelector(`#answer-${q.id}`);
    const correct = isCorrect(q, state.answers[q.id - 1]);
    input?.classList.toggle("is-correct", correct);
    input?.classList.toggle("is-wrong", !correct);
    if (input) input.setAttribute("aria-invalid", String(!correct));
  });
  renderPartFeedback(partNumber);
}

function getPartQuestions(part) { return QUESTIONS.filter((q) => q.part === part); }

function checkPart(part) {
  syncAnswers();
  const questions = getPartQuestions(part);
  if (!state.firstByPart[part]) {
    state.firstByPart[part] = questions.map((q) => ({ id: q.id, answer: state.answers[q.id - 1], correct: isCorrect(q, state.answers[q.id - 1]) }));
  }
  state.checks[part] = true;
  saveState();
  applyFieldStates(part);
  const allCorrect = questions.every((q) => isCorrect(q, state.answers[q.id - 1]));
  if (allCorrect) {
    if (part === 1) showPart(2);
    else renderReport(true);
  } else {
    document.querySelector(`#part-${part} .is-wrong`)?.focus({ preventScroll: true });
  }
}

function renderPartFeedback(part) {
  const box = document.querySelector(`#part-${part}-feedback`);
  if (!box) return;
  const questions = getPartQuestions(part);
  const wrong = questions.filter((q) => !isCorrect(q, state.answers[q.id - 1]));
  const empty = wrong.filter((q) => !normalizeAnswer(state.answers[q.id - 1])).length;
  const first = state.firstByPart[part] || [];
  const firstCorrect = first.filter((a) => a.correct).length;
  if (!wrong.length) {
    box.className = "part-feedback is-success";
    box.innerHTML = `<strong>Bravissimo/a! Tutto corretto. 🌱</strong><span>Prima prova di questa parte: ${firstCorrect} / ${questions.length}.</span>`;
    return;
  }
  box.className = "part-feedback needs-work";
  const hints = wrong.map((q) => `<li><strong>${q.id} · ${q.category}</strong><span>${TRY_AGAIN_HINTS[q.category]}</span></li>`).join("");
  box.innerHTML = `<strong>Hai ${questions.length - wrong.length} risposte corrette su ${questions.length}.</strong><span>${empty ? `${empty} ${empty === 1 ? "spazio non compilato" : "spazi non compilati"}. ` : ""}Correggi i campi evidenziati e controlla di nuovo. Le soluzioni restano nascoste.</span><details><summary>Guarda i suggerimenti grammaticali</summary><ul>${hints}</ul></details>`;
}

function showPart(part) {
  document.querySelector("#part-1").hidden = part !== 1;
  document.querySelector("#part-2").hidden = part !== 2;
  document.querySelector("#report").hidden = true;
  updateSteps(part);
  if (part === 2) renderPart(2);
  document.querySelector(`#part-${part}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showAnswers(part) {
  syncAnswers();
  if (!window.confirm("Vuoi vedere le risposte di questa parte? Le soluzioni e le spiegazioni saranno mostrate.")) return;
  const questions = getPartQuestions(part);
  if (!state.firstByPart[part]) state.firstByPart[part] = questions.map((q) => ({ id: q.id, answer: state.answers[q.id - 1], correct: isCorrect(q, state.answers[q.id - 1]) }));
  questions.forEach((q) => { state.answers[q.id - 1] = q.answer; });
  state.checks[part] = true;
  state.showAnswers = true;
  saveState();
  renderPart(part);
  if (part === 1) showPart(2); else renderReport(true);
}

function getFirstAttempts() {
  return QUESTIONS.map((q) => (state.firstByPart[q.part] || []).find((a) => a.id === q.id)).filter(Boolean);
}

function categoryStats(attempts) {
  return Object.keys(CATEGORY_INFO).map((category) => {
    const ids = QUESTIONS.filter((q) => q.category === category).map((q) => q.id);
    const relevant = attempts.filter((a) => ids.includes(a.id));
    const correct = relevant.filter((a) => a.correct).length;
    return { category, correct, total: relevant.length, percent: relevant.length ? Math.round(correct / relevant.length * 100) : 0 };
  }).filter((item) => item.total);
}

function renderReport(scroll = false) {
  syncAnswers();
  const report = document.querySelector("#report");
  const first = getFirstAttempts();
  if (!first.length) return;
  document.querySelector("#part-1").hidden = true;
  document.querySelector("#part-2").hidden = true;
  report.hidden = false;
  updateSteps(3);
  const complete = first.length === QUESTIONS.length;
  const firstCorrect = first.filter((a) => a.correct).length;
  const latestQs = complete ? QUESTIONS : QUESTIONS.filter((q) => state.firstByPart[q.part]);
  const latestCorrect = latestQs.filter((q) => isCorrect(q, state.answers[q.id - 1])).length;
  const unanswered = first.filter((a) => !normalizeAnswer(a.answer)).length;
  const stats = categoryStats(first);
  const weak = stats.filter((s) => s.correct < s.total && s.total >= 3).sort((a, b) => (a.correct / a.total) - (b.correct / b.total) || b.total - a.total).slice(0, 2);
  const firstWrong = first.filter((a) => !a.correct).map((a) => QUESTIONS[a.id - 1]);
  const review = firstWrong.map((q) => `<article class="review-item"><div class="review-number">${q.id}</div><div><p><span>Risposta corretta</span><strong>${q.answer}</strong></p><p class="review-hint">💡 ${q.hint}</p></div></article>`).join("");
  const bars = stats.map((s) => `<div class="mastery-row"><div><strong>${s.category}</strong><span>${s.correct} / ${s.total} · ${s.percent}%</span></div><div class="bar" role="progressbar" aria-label="${s.category}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${s.percent}"><i style="width:${s.percent}%"></i></div></div>`).join("");
  const advice = weak.length ? weak.map((s) => `<article class="advice-card"><h3>${s.category}</h3><p>${CATEGORY_INFO[s.category].advice}</p></article>`).join("") : `<article class="advice-card"><h3>Ottimo equilibrio!</h3><p>Nelle categorie con un campione sufficiente non emerge un punto debole. Continua a riascoltare e ripetere le forme corrette.</p></article>`;
  report.innerHTML = `
    <div class="report-heading"><p class="part-kicker">${complete ? "Rapporto completo" : "Risultato parziale"}</p><h2 id="report-title">Il tuo rapporto di apprendimento</h2><p>${complete ? "Hai completato entrambe le parti." : "Completa anche l’altra parte per ottenere il rapporto su tutte le 42 domande."}</p></div>
    <div class="score-grid"><article><span>Prima prova</span><strong>${firstCorrect} / ${first.length}</strong><small>${Math.round(firstCorrect / first.length * 100)}% · ${unanswered} non ${unanswered === 1 ? "compilata" : "compilate"}</small></article><article><span>Risultato più recente</span><strong>${latestCorrect} / ${latestQs.length}</strong><small>${Math.round(latestCorrect / latestQs.length * 100)}% dopo le correzioni</small></article></div>
    <section class="report-section"><h3>Padronanza per categoria</h3><div class="mastery-list">${bars}</div></section>
    <section class="report-section"><h3>Da rafforzare</h3><div class="advice-grid">${advice}</div>${stats.some((s) => s.total < 3 && s.correct < s.total) ? `<p class="sample-note">Una categoria con pochissime domande non viene indicata come punto debole, ma resta visibile nei progressi.</p>` : ""}</section>
    <section class="report-section"><h3>Errori della prima prova</h3>${review || `<p class="all-correct">Tutto corretto al primo tentativo! 🎉</p>`}<p class="read-aloud">🔊 Leggi le forme corrette ad alta voce almeno 5 volte.</p></section>
    <div class="report-footer"><strong>Ricorda: anche i piccoli errori contano! 🌱</strong><span>注意：小小的词尾，也会影响表达的准确性。</span><button type="button" class="secondary-button" id="restart">Ricomincia</button></div>`;
  document.querySelector("#restart").addEventListener("click", restart);
  saveState();
  if (scroll) report.scrollIntoView({ behavior: "smooth", block: "start" });
}

function restart() {
  if (!window.confirm("Vuoi iniziare un nuovo tentativo? Il rapporto della prima prova precedente resterà conservato su questo dispositivo.")) return;
  const archived = getFirstAttempts();
  const history = archived.length ? { savedAt: new Date().toISOString(), attempts: archived } : state.history;
  state = { ...emptyState(), history };
  saveState();
  document.querySelector("#part-2").innerHTML = "";
  renderPart(1);
  renderPreviousRecord();
  showPart(1);
  document.querySelector("#dialogue-audio").pause();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncAnswers() {
  document.querySelectorAll("input[data-id]").forEach((input) => { state.answers[Number(input.dataset.id) - 1] = input.value; });
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.answers) && saved.answers.length === 42) return { ...emptyState(), ...saved };
  } catch {}
  return emptyState();
}

function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {} }
function escapeHtml(value) { return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]); }

function updateSteps(active) {
  document.querySelectorAll(".step").forEach((step) => {
    const n = Number(step.dataset.step);
    step.classList.toggle("is-active", n === active);
    step.classList.toggle("is-done", n < active);
  });
}

function renderPreviousRecord() {
  const box = document.querySelector("#previous-record");
  const attempts = state.history?.attempts;
  if (!Array.isArray(attempts) || !attempts.length) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  const correct = attempts.filter((item) => item.correct).length;
  box.hidden = false;
  box.innerHTML = `<span>Registro precedente conservato</span><strong>Prima prova: ${correct} / ${attempts.length}</strong><small>Questo risultato resta salvato su questo dispositivo mentre inizi un nuovo tentativo.</small>`;
}

document.querySelector("#exercise-form").addEventListener("submit", (e) => e.preventDefault());
document.querySelector("#exercise-form").addEventListener("keydown", (e) => { if (e.key === "Enter") e.preventDefault(); });
document.querySelector("#exercise-form").addEventListener("input", (e) => {
  if (!e.target.matches("input[data-id]")) return;
  const id = Number(e.target.dataset.id);
  state.answers[id - 1] = e.target.value;
  e.target.classList.remove("is-correct", "is-wrong");
  e.target.removeAttribute("aria-invalid");
  saveState();
});
document.querySelector("#exercise-form").addEventListener("click", (e) => {
  const check = e.target.closest(".check-button");
  const show = e.target.closest(".show-button");
  if (check) checkPart(Number(check.dataset.part));
  if (show) showAnswers(Number(show.dataset.part));
});

const audio = document.querySelector("#dialogue-audio");
const audioStatus = document.querySelector("#audio-status");
audio.addEventListener("error", () => { audioStatus.hidden = false; });
audio.addEventListener("loadedmetadata", () => { audioStatus.hidden = true; });

renderPart(1);
renderPreviousRecord();
if (state.firstByPart[2]) { renderPart(2); renderReport(false); }
else if (state.firstByPart[1] && getPartQuestions(1).every((q) => isCorrect(q, state.answers[q.id - 1]))) showPart(2);
else showPart(1);
