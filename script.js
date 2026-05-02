fetch("https://portfolio-backend-npsb.onrender.com/projects")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-list");

    container.innerHTML = ""; // clear old data

    data.forEach(p => {
      container.innerHTML += `
        <div class="project-card">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      `;
    });
  })
  .catch(err => console.log("Error:", err));

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});