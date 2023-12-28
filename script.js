const input = document.getElementById("input_box");
const taskData = document.getElementById("task_data");

const addTask = (e) => {
  if (input.value === "") {
    alert("Please enter a task");
    return;
  } else {
    let li = document.createElement("li");
    li.innerHTML = `<div><i class="fa fa-check-circle-o" aria-hidden="true"></i>${input.value}</div>
    <i class="fa fa-trash icon" aria-hidden="true"></i>
`;
    taskData.appendChild(li);
    input.value = "";
  }
  saveToCache();
};

taskData.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveToCache();
  } else if (e.target.className == "fa fa-trash icon") {
    e.target.parentElement.remove();
    saveToCache();
    // console.log(e.target.className);
  }
  //   console.log(e.target.className);
});

const saveToCache = () => {
  localStorage.setItem("data", taskData.innerHTML);
};

const getDatafromCache = () => {
  taskData.innerHTML = localStorage.getItem("data");
};

getDatafromCache();
