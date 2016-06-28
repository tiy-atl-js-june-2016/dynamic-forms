function optionTmpl (obj) {
  return `<option value="${obj.value}">${obj.label}</option>`;
};

function selectTmpl (obj) {
  var optionsHTML = obj.options.map(optionTmpl).join('');
  // console.log(optionsHTML);

  return `
    <div class="form-field" id="${obj.id}">
      <select>
        <option value="">${obj.label}...</option>
        ${optionsHTML}
      </select>
    </div>`;
};

export {selectTmpl};
