const slogans = [
  { slogan: "I Don't Endorse Piracy But I Don't Condemn It Too", sub: "- zark muckerberg" },
  { slogan: "F*ck EA Sports", sub: "- elu ma" },
  { slogan: "Let's Bring The Old Web Back", sub: "- humankind lover" },
  { slogan: "You're An Autistic If Your Default Browser Is Chrome", sub: "- Nsaac Iewton" },
  { slogan: "HAIL VALVE", sub: "- Gabe Newell Glorifier" },
  { slogan: "Pirate If You Are Unable To Buy", sub: "- ein-stain's 69th law" },
  { slogan: "Never Buy An EA Game", sub: "- your fella" },
  { slogan: "Good Artists Buy, Great Artists Pirate", sub: "- Pablo Picabo" },
  { slogan: "Do Me A Favour, Go Buy A Clemon For Yourself :3", sub: " (not sposored by clemon) pls sponsor me uwu" },
  { slogan: "Go Buy A Copy Of A Way Out", sub: "(oh you don't have friends) {srry}" },
  { slogan: "There's Nothing More Painful Than Pirating A Multiplayer Game", sub: "- your avarage fellow pirate" },
  { slogan: "FREE PALESTINE", sub: "- HUMAN" },
  { slogan: "AYE AYE CAPTAIN", sub: "- SpongeBob SquarePants" },
  { slogan: "You Shouldn't Pirate If You Have A Billion Dollar Lyin' Around", sub: "- fib" },
  { slogan: "Imagine Pirating S*itton Of Books Just To Train AI", sub: "- zark muckerberg" },
  { slogan: "Imagine Visiting This Website With A Mac", sub: "what a grief" },
  { slogan: "I Stand With Potato PC Users", sub: "you're the best! 🖐" },
  { slogan: "ꉂ(˵˃ ᗜ ˂˵)", sub: "- neko chan" },
  { slogan: "≽^•⩊•^≼", sub: "-  ₍^. .^₎⟆" },
  { slogan: "𓊝 HAIL THE HIGH SEAS 𓊝", sub: "ㄨ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 ㄨ" },
  { slogan: "Star This Project On Github", sub: "https://github.com/SaimonIslamPrantik/quackedgg" },
];

const randomPick = slogans[Math.floor(Math.random() * slogans.length)];
document.getElementById('slogan').innerText = randomPick.slogan;
document.getElementById('subtext').innerText = randomPick.sub;

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function performSearch() {
  const query = encodeURIComponent(searchInput.value.trim());
  if (query) {
    window.location.href = `https://cse.google.com/cse?cx=36ac96e5f3aac4939#gsc.tab=0&gsc.q=${query}&gsc.sort=`;
  }
}

searchInput.addEventListener('input', () => {
  searchBtn.disabled = searchInput.value.trim() === "";
});

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('focus', () => {
  searchInput.placeholder = "";
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !searchBtn.disabled) {
    performSearch();
  }
});






