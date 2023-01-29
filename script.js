// Chèn một phần tử vào todoList
const todoList=document.querySelector('ul');
const ele1=document.createElement('li');
ele1.textContent="Do homework";
todoList.appendChild(ele1);

// Chèn một phần tử vào trước 1 phần tử đã tồn tại trong ds
const ele2=document.createElement('li');
ele2.innerText="Pay bills";
todoList.insertBefore(ele2,todoList.children[0]);

// Thay thế một phần tử trong danh sách
const ele3=document.createElement('li');
ele3.textContent="Feed the dog";
todoList.replaceChild(ele3,todoList.children[2]);

// Xóa 1 phần tử trong danh sách
todoList.children[2].remove();