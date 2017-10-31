(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.openNewPage = factory());
}(this, (function () { 'use strict';

function openWithATag(url, params, fileName, download) {
  var link = document.createElement('a');
  if (params) {
    var symbol = ~url.indexOf('?') ? '&' : '?';
    url = url + symbol + Object.keys(params).map(function (key) {
      return key + '=' + JSON.stringify(params[key]);
    }).join('&');
  }
  link.href = url;
  if (download) {
    link.download = fileName;
  } else {
    link.target = '_blank';
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function openWithForm(url, method, params) {
  var form = document.createElement('form');
  form.style.display = 'none';
  form.method = method;
  form.target = '_blank';

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

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

function openNewPage(args) {
  var url = args.url,
      _args$method = args.method,
      method = _args$method === undefined ? 'POST' : _args$method,
      params = args.params,
      useATag = args.useATag,
      _args$fileName = args.fileName,
      fileName = _args$fileName === undefined ? '' : _args$fileName,
      download = args.download;

  if (typeof args === 'string') url = args;

  if (useATag) {
    openWithATag(url, params, fileName, download);
  } else {
    openWithForm(url, method, params);
  }
}

return openNewPage;

})));
