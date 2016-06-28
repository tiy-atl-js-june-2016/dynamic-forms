import $ from 'jquery';
import {textTmpl} from './templates/text.js';
import {areaTmpl} from './templates/area.js';
import {selectTmpl} from './templates/select.js';

var url = "http://json-data.herokuapp.com/forms";
var formRequest = $.ajax(url);
// var formFields = $.ajax({url: url})

function addFieldToPage (field) {
  var html = null;

  if (field.type === "textarea") {
    html = areaTmpl(field);
  } else if (field.type === "select") {
    html = selectTmpl(field);
  } else {
    html = textTmpl(field);
  }

  $(".form-contents").append(html);
};

formRequest.then(function (data) {

  console.log(data);
  var formFields = data;

  formFields.forEach(addFieldToPage);
});
