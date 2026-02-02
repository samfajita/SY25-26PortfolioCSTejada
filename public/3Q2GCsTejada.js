

const form = document.getElementById("dForm");
if (form)
{
form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop redirect

  if (confirm("Sure You Want To Save Your Work?")) {
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());

    // Load existing accounts (array of objects)
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Add new account
    accounts.push(obj);

    // Save back to localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));

    console.log("Saved accounts:", accounts); // check in console
    alert("Account saved!");
    form.reset();
  }
});


// event handler for the reset button instead of onreset on the button itself
form.addEventListener("reset", function(e) { // 
  // Ask for confirmation before clearing
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); // cancel the reset if user clicks "Cancel"
  }
});

const inputs = form.querySelectorAll("input, textarea, select");

inputs.forEach(input => {
  input.addEventListener("blur", function(e) {
    if (input.name === "about") {
        return; } // Text area is not required
    // Check if the field is empty
    if (input.value.trim() === "") {
      // Look for an existing span with class "required" next to the input
      let span = input.parentElement.querySelector(".required");

      // If none exists, create one
      if (!span) {
        span = document.createElement("span");
        span.className = "required";
        input.parentElement.appendChild(span);
      }

      // Show the asterisk
      span.textContent = " *";
      span.style.color = "red";
      span.style.fontWeight = "bold";
    } else {
      // If the field is filled, remove the asterisk
      const span = input.parentElement.querySelector(".required");
      if (span) {
        span.textContent = "";
      }
    }
  });
});
}


//for viewing page

const clubFilter = document.getElementById("clubFilter");
const accountsTable = document.getElementById("accountsTable");

function renderAccounts(filterClub = "") {
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  if (!accountsTable) return;

  const tbody = accountsTable.querySelector("tbody");
  tbody.innerHTML = "";

  const filtered = filterClub
    ? accounts.filter(acc => acc.club === filterClub)
    : accounts;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8">No accounts found.</td></tr>`;
    return;
  }

  filtered.forEach(acc => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${escapeHTML(acc.StudentID)}</td>
  <td>${escapeHTML(acc.fullName)}</td>
  <td>${escapeHTML(acc.emailAddress)}</td>
  <td>${escapeHTML(acc.phoneNumber)}</td>
  <td>${escapeHTML(acc.gradeLevel)}</td>
  <td>${escapeHTML(acc.status)}</td>
  <td>${escapeHTML(acc.club)}</td>
  <td>${escapeHTML(acc.about)}</td>
`;
    tbody.appendChild(row);
  });
}

// Run viewer logic only if dropdown exists
if (clubFilter) {
  renderAccounts(); // initial load
  clubFilter.addEventListener("change", function() {
    renderAccounts(this.value);
  });
}

function escapeHTML(str) {  // prevent special characters interpretation 
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
