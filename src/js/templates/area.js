function areaTmpl (obj) {
  return `
    <div class="form-field" id="${obj.id}">
      <${obj.type} placeholder="${obj.label}"></${obj.type}>
      <i class="fa ${obj.icon}"></i>
    </div>`;
};

export {areaTmpl};
