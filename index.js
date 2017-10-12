export default function openNewPage (url) {
  var form = document.createElement('form')
  form.action = url
  form.target = '_blank'
  form.method = 'POST'
  document.body.appendChild(form)
  form.submit()
}
