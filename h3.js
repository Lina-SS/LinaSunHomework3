// creat a helper funtion to add create element and add it the html
const addChild = function (
  parentElement,
  childElement,
  elementText,
  attribute,
) {
  const element = document.createElement(childElement)
  element.innerText = elementText
  //if (arguments.length > 3) {
  // element.setAttribute(attribute[0], attribute[1])
  //}
  parentElement.append(element)
  return element
}

const tableInfo = {
  tableHeader: ['student Name', 'Age', 'Phone', 'Address'],
  tableContent: [
    {
      'Student Name': 'John',
      age: 19,
      Phone: '455-983-0903',
      Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
      'Student Name': 'Alex',
      age: 21,
      Phone: '455-983-0912',
      Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
      'Student Name': 'Josh',
      age: 22,
      Phone: '455-345-0912',
      Address: '789 Dr, Newark, CA, 94016',
    },
    {
      'Student Name': 'Matt',
      age: 23,
      Phone: '321-345-0912',
      Address: '223 Dr, Sunnyvale, CA, 94016',
    },
  ],
}
const myTable = document.getElementById('myTable')

//create h1
const h1 = addChild(myTable, 'h1', 'Home Work 3')

//create table
const table = addChild(myTable, 'table', '', ['id', 'table'])

//thead
const tr = addChild(table, 'tr', '')
tableInfo.tableHeader.forEach((item) => {
  addChild(tr, 'th', item)
})

//tbody
tableInfo.tableContent.forEach((item) => {
  const tr = addChild(table, 'tr', '')
  for (var i in item) {
    addChild(tr, 'td', item[i])
  }
})

//creat list
const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java']
const listDiv = addChild(myTable, 'div', '')
const ol = addChild(listDiv, 'ol', '')
const ul = addChild(listDiv, 'ul', '')
list.forEach((item) => {
  addChild(ul, 'li', item)
  addChild(ol, 'li', item)
})

//creat selet option
const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
]
const optionDiv = addChild(myTable, 'div', '')
const select = addChild(optionDiv, 'select', '', ['name', 'city'])
select.setAttribute('id', 'city')
dropDownList.forEach((item) => {
  const option = addChild(select, 'option', item.content, ['value', item.value])
})
