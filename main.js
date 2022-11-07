function creatGame(player1, player2, horario) {
  return `
  <li>
     <img src="./assetes/${player1}-icon.svg" alt="Bandeira do ${player1}" />
     <strong>${horario}</strong>
     <img src="./assetes/${player2}-icon.svg" alt="Bandeira do ${player2}" />
   </li>
  `
}
function creatCard(date, day, games) {
  return `
   <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}
document.querySelector("#cards").innerHTML =
  creatCard(
    "24/11",
    "Quinta-Feira",
    creatGame("Brazil", "Camaroes", "18:00") +
      creatGame("Brazil", "Suica", "13:00") +
      creatGame("Brazil", "Suica", "13:00")
  ) +
  creatCard(
    "25-11",
    "Sexta-Feira",
    creatGame("Brazil", "Suica", "13:00") +
      creatGame("Brazil", "Suica", "13:00") +
      creatGame("Brazil", "Suica", "13:00")
  ) +
  creatCard(
    "25-11",
    "Sexta-Feira",
    creatGame("Brazil", "Suica", "13:00") +
      creatGame("Brazil", "Suica", "13:00") +
      creatGame("Brazil", "Suica", "13:00")
  )
