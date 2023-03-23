// Create form element
const form = document.createElement('form');

// Add name input field
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameLabel.appendChild(nameInput);
form.appendChild(nameLabel);

//Spacing
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);

// Add email input field
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailLabel.appendChild(emailInput);
form.appendChild(emailLabel);
//Spacing
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);

// Add radio button payment type
const paymentLabel = document.createElement('label');
paymentLabel.textContent = 'Payment type:';
const CashRadio = document.createElement('input');
CashRadio.setAttribute('type', 'radio');
CashRadio.setAttribute('name', 'payment');
CashRadio.setAttribute('value', 'Cash');
const CashLabel = document.createElement('label');
CashLabel.textContent = 'Cash';
CashLabel.appendChild(CashRadio);
paymentLabel.appendChild(CashLabel);


const creditRadio = document.createElement('input');
creditRadio.setAttribute('type', 'radio');
creditRadio.setAttribute('name', 'payment');
creditRadio.setAttribute('value', 'credit');
const creditLabel = document.createElement('label');
creditLabel.textContent = 'Credit card';
creditLabel.appendChild(creditRadio);
paymentLabel.appendChild(creditLabel);


const googleRadio = document.createElement('input');
googleRadio.setAttribute('type', 'radio');
googleRadio.setAttribute('name', 'payment');
googleRadio.setAttribute('value', 'google');
const googleLabel = document.createElement('label');
googleLabel.textContent = 'Google Pay';
googleLabel.appendChild(googleRadio);
paymentLabel.appendChild(googleLabel);

const appleRadio = document.createElement('input');
appleRadio.setAttribute('type', 'radio');
appleRadio.setAttribute('name', 'payment');
appleRadio.setAttribute('value', 'apple');
const appleLabel = document.createElement('label');
appleLabel.textContent = 'Apple Pay';
appleLabel.appendChild(appleRadio);
paymentLabel.appendChild(appleLabel);

form.appendChild(paymentLabel);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);
// Add sign me up for special promotions checkbox

const promoLabel = document.createElement('label');
promoLabel.textContent = 'Sign me up for special promotions:';
const promoCheckbox = document.createElement('input');
promoCheckbox.setAttribute('type', 'checkbox');
promoCheckbox.setAttribute('name', 'promotions');
promoLabel.appendChild(promoCheckbox);
form.appendChild(promoLabel);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);

// Add preferred location drop down selection
const locationLabel = document.createElement('label');
locationLabel.textContent = 'Preferred location:';
const locationSelect = document.createElement('select');
locationSelect.setAttribute('name', 'location');

const locations = ['Los Angeles', 'Orange County', 'Riverside', 'San Diego'];
for (const location of locations) {
  const option = document.createElement('option');
  option.textContent = location;
  locationSelect.appendChild(option);
}

locationLabel.appendChild(locationSelect);
form.appendChild(locationLabel);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);
br = document.createElement("span");
br.innerHTML = "<br/>";
form.appendChild(br);

// Add submit and cancel button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

const cancelButton = document.createElement('button');
cancelButton.setAttribute('type', 'button');
cancelButton.textContent = 'Cancel';
form.appendChild(cancelButton);

// Add form submit event listener
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    console.log("Form data entered:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  });
  
  // Add cancel button click event listener
  cancelButton.addEventListener("click", () => {
    form.reset(); // Reset form fields
  });
  
  // Add form to document body
  document.body.appendChild(form);
  const table = document.createElement("table");

  // Create table headers
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  const keyHeader = headerRow.insertCell();
  keyHeader.innerHTML = "Key";
  const valueHeader = headerRow.insertCell();
  valueHeader.innerHTML = "Value";
  
  // Add form submit event listener
  const form_ = document.querySelector("form");
  form_.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(form_);
  
  // Update table with form data
    const tableBody = table.createTBody();
    for (const [key, value] of formData.entries()) {
      const row = tableBody.insertRow();
      const keyCell = row.insertCell();
      keyCell.innerHTML = key;
      const valueCell = row.insertCell();
      valueCell.innerHTML = value;
    }
  
  // Add table to document body
    
    document.body.appendChild(table);
  });