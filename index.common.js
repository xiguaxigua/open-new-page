'use strict';

function openNewPage(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
  var params = arguments[2];

  var id = '__open_new_page_form__';
  var form = document.getElementById(id);

  if (!form) {
    form = document.createElement('form');
    form.id = id;
    form.style.display = 'none';
    form.method = method;
    form.target = '_blank';
    document.body.appendChild(form);
  }

  if (params) {
    form.innerHTML = '';
    Object.keys(params).forEach(function (key) {
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = JSON.stringify(params[key]);
      form.appendChild(input);
    });
  }

  form.action = url;
  form.submit();
}

module.exports = openNewPage;
