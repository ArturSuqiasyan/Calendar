let formFields = [];

function addField() {
    const fieldType = document.getElementById('field-type').value;
    let newField;

    switch (fieldType) {
        case 'dropdown':
            newField = createDropdownField();
            break;
        case 'checkbox':
            newField = createCheckboxField();
            break;
        case 'radio':
            newField = createRadioField();
            break;
        default:
            newField = createInputField(fieldType);
    }

    formFields.push(newField);
    renderForm();
}

function createInputField(type) {
    const label = prompt("Enter label for the field:");
    return { type, label };
}

function createDropdownField() {
    const label = prompt("Enter label for the dropdown:");
    const optionsString = prompt("Enter options for the dropdown separated by commas:");
    const options = optionsString.split(",").map(option => option.trim());
    return { type: 'dropdown', label, options };
}

function createCheckboxField() {
    const label = prompt("Enter label for the checkbox:");
    return { type: 'checkbox', label };
}

function createRadioField() {
    const label = prompt("Enter label for the radio button:");
    const optionsString = prompt("Enter options for the radio button separated by commas:");
    const options = optionsString.split(",").map(option => option.trim());
    return { type: 'radio', label, options };
}

function renderForm() {
    const workArea = document.getElementById('work-area');
    workArea.innerHTML = '';

    formFields.forEach((field, index) => {
        const fieldContainer = document.createElement('div');
        fieldContainer.classList.add('field-container');
        fieldContainer.innerHTML = `
            <label>${field.label}</label>
            <input type="${field.type}">
            <button onclick="removeField(${index})">Remove</button>
        `;

        workArea.appendChild(fieldContainer);
    });
}

function removeField(index) {
    formFields.splice(index, 1);
    renderForm();
}

function exportConfig() {
    const jsonConfig = JSON.stringify(formFields);
    const blob = new Blob([jsonConfig], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-config.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importConfig(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const config = JSON.parse(e.target.result);
        formFields = config;
        renderForm();
    };

    reader.readAsText(file);
}