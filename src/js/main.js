import $ from 'jquery';

var url = "http://json-data.herokuapp.com/forms";
var formRequest = $.ajax(url);
// var formFields = $.ajax({url: url})

function textTmpl (obj) {
  return `
    <div class="form-field" id="${obj.id}">
      <input type="${obj.type}" placeholder="${obj.label}">
      <i class="fa ${obj.icon}"></i>
    </div>`;
};

function areaTmpl (obj) {
  return `
    <div class="form-field" id="${obj.id}">
      <${obj.type} placeholder="${obj.label}"></${obj.type}>
      <i class="fa ${obj.icon}"></i>
    </div>`;
};

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

formRequest.then(function (data) {

  console.log(data);
  var formFields = data;

  formFields.forEach(function (field) {
    var html = null;

    if (field.type === "textarea") {
      html = areaTmpl(field);
    } else if (field.type === "select") {
      html = selectTmpl(field);
    } else {
      html = textTmpl(field);
    }

    $(".form-contents").append(html);
  });

});
