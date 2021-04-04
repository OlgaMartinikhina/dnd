export default class Widget {
  constructor() {
    this.todoTasks = document.querySelector('#todo .item-tasks');
    this.inProgressTasks = document.querySelector('#in-progress .item-tasks');
    this.doneTasks = document.querySelector('#done .item-tasks');
  }

  // eslint-disable-next-line class-methods-use-this
  addTask(parentEl, value) {
    const itemTask = document.createElement('div');
    itemTask.className = 'item-task';
    itemTask.innerHTML = `
        ${value}
        <div class="del-task hidden">&#x2716;</div>
      `;
    parentEl.appendChild(itemTask);
  }

  addArrTask(parentEl, arr) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      this.addTask(parentEl, arr[i]);
    }
  }

  initTasks(initData) {
    this.addArrTask(this.todoTasks, initData.todo);
    this.addArrTask(this.inProgressTasks, initData.inProgress);
    this.addArrTask(this.doneTasks, initData.done);
  }
}
