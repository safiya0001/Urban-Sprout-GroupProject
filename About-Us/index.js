import { teamData } from "./team-data.js";

const teamContainer = document.getElementById("team-container");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalRole = document.getElementById("modal-role");
const modalHobbies = document.getElementById("modal-hobbies");
const modalInterest = document.getElementById("modal-interest");
const modalDesc = document.getElementById("modal-desc");
const modalPortfolio = document.getElementById("modal-portfolio");

// Function to generate HTML for team members
function getTeamMembers() {

    let teamMembers = ``;

    // Loop through the team data and create HTML for each member
    teamData.forEach(member => {
        teamMembers += `<div class="card">
                        <div class="banner"></div>
                        <img src="${member.image}" alt="Team Member ${member.name}" class="team-member-pic">
                        <h3>${member.name}</h3>
                        <p>${member.role}</p>
                        <button class="btn know-more" data-id="${member.id}">Know More</button>
                    </div>`
    })

    return teamMembers;
}

// Function to render team members on the page
function renderTeamMembers() {
    const teamContainer = document.getElementById("team-container");
    teamContainer.innerHTML = getTeamMembers();
}

// Call the function to render team members when the page loads
renderTeamMembers();


// Function to show the bio of a team member in the modal
function openModal(memberId) {
  const member = teamData.find(item => item.id === memberId);

  if (!member) return;

  modalImg.src = member.image;
  modalImg.alt = member.name;
  modalName.textContent = member.name;
  modalRole.textContent = member.role;
  modalHobbies.textContent = member.hobbies;
  modalInterest.textContent = member.interest;
  modalDesc.textContent = member.desc;
  modalPortfolio.href = member.portfolio;
  modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});



// Event delegation to handle "Know More" button clicks
teamContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("know-more")) {
    const memberId = Number(event.target.dataset.id);
    openModal(memberId);
  }
});
