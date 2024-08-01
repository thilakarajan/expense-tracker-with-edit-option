$(document).ready(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()
    let item = $('#autoSizingInput').val()
    let amount = $('#autoSizingInputGroup').val()
    let category = $('#autoSizingSelect').val()
    let date = $('#autoSizingDate').val()
    document.getElementById('autoSizingInput').value = ''
    document.getElementById('autoSizingInputGroup').value = ''
    document.getElementById('autoSizingSelect').value =
      document.getElementById('autoSizingSelect').children[0].innerHTML
    document.getElementById('autoSizingDate').value = ''
    let row = document.createElement('tr')
    let col1 = document.createElement('td')
    let col2 = document.createElement('td')
    let col3 = document.createElement('td')
    let col4 = document.createElement('td')
    let col5 = document.createElement('td')
    col1.textContent = item
    col2.textContent = amount
    col3.textContent = category
    col4.textContent = date
    let del = document.createElement('button')
    del.setAttribute('onclick', 'remove(this)')
    del.setAttribute('class', 'btn btn-danger')
    del.setAttribute('type', 'button')
    del.textContent = 'Delete'
    col5.appendChild(del)
    let edit = document.createElement('button')
    edit.setAttribute('onclick', 'edit(this)')
    edit.setAttribute('class', 'btn btn-primary')
    del.setAttribute('type', 'button')
    edit.textContent = 'Edit'
    col5.appendChild(edit)
    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
    row.appendChild(col5)
    document.getElementsByTagName('table')[0].appendChild(row)
  })
})
function remove(element) {
  element.parentNode.parentNode.remove()
}
function edit(element) {
  let item = element.parentNode.parentNode.children[0].innerHTML
  let amount = element.parentNode.parentNode.children[1].innerHTML
  let category = element.parentNode.parentNode.children[2].innerHTML
  let date = element.parentNode.parentNode.children[3].innerHTML
  element.parentNode.parentNode.remove()
  let row = document.createElement('tr')
  let col1 = document.createElement('td')
  let col2 = document.createElement('td')
  let col3 = document.createElement('td')
  let col4 = document.createElement('td')
  let col5 = document.createElement('td')
  let inputText1 = document.createElement('input')
  inputText1.type = 'text'
  inputText1.value = item
  let inputText2 = document.createElement('input')
  inputText2.type = 'text'
  inputText2.value = amount
  let inputText3 = document.createElement('input')
  inputText3.type = 'text'
  inputText3.value = category
  let inputDate = document.createElement('input')
  inputDate.type = 'date'
  inputDate.value = date
  let button = document.createElement('button')
  button.textContent = 'Save'
  button.setAttribute('onclick', 'save(this)')
  col1.appendChild(inputText1)
  col2.appendChild(inputText2)
  col3.appendChild(inputText3)
  col4.appendChild(inputDate)
  col5.appendChild(button)
  row.appendChild(col1)
  row.appendChild(col2)
  row.appendChild(col3)
  row.appendChild(col4)
  row.appendChild(col5)
  document.getElementsByTagName('table')[0].appendChild(row)
}

function save(element) {
  let item = element.parentNode.parentNode.children[0].children[0].value
  let amount = element.parentNode.parentNode.children[1].children[0].value
  let category = element.parentNode.parentNode.children[2].children[0].value
  let date = element.parentNode.parentNode.children[3].children[0].value
  element.parentNode.parentNode.remove()
  let row = document.createElement('tr')
  let col1 = document.createElement('td')
  let col2 = document.createElement('td')
  let col3 = document.createElement('td')
  let col4 = document.createElement('td')
  let col5 = document.createElement('td')
  col1.textContent = item
  col2.textContent = amount
  col3.textContent = category
  col4.textContent = date
  let del = document.createElement('button')
  del.setAttribute('onclick', 'remove(this)')
  del.textContent = 'Delete'
  col5.appendChild(del)
  let edit = document.createElement('button')
  edit.setAttribute('onclick', 'edit(this)')
  edit.textContent = 'Edit'
  col5.appendChild(edit)
  row.appendChild(col1)
  row.appendChild(col2)
  row.appendChild(col3)
  row.appendChild(col4)
  row.appendChild(col5)
  document.getElementsByTagName('table')[0].appendChild(row)
}
