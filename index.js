function openWithATag (url, params, fileName, download) {
  const link = document.createElement('a')
  if (params) {
    url = url + '?' + Object.keys(params).map(key => {
      return `${key}=${JSON.stringify(params[key])}`
    }).join('&')
  }
  link.href = url
  if (download) {
    link.download = fileName
  } else {
    link.target = '_blank'
  }
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function openWithForm (url, method, params) {
  const form = document.createElement('form')
  form.style.display = 'none'
  form.method = method
  form.target = '_blank'

  if (params) {
    form.innerHTML = ''
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = JSON.stringify(params[key])
      form.appendChild(input)
    })
  }

  form.action = url

  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}

export default function openNewPage (args) {
  let {
    url,
    method = 'POST',
    params,
    useATag,
    fileName = '',
    download
  } = args
  if (typeof args === 'string') url = args

  if (useATag) {
    openWithATag(url, params, fileName, download)
  } else {
    openWithForm(url, method, params)
  }
}
