function textTmpl (obj) {
  return `
    <div class="form-field" id="${obj.id}">
      <input type="${obj.type}" placeholder="${obj.label}">
      <i class="fa ${obj.icon}"></i>
    </div>`;
};

export {textTmpl};
