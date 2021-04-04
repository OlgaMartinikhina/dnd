export default class Storage {
  // eslint-disable-next-line class-methods-use-this
  save(data) {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  // eslint-disable-next-line class-methods-use-this
  load() {
    return localStorage.getItem('tasks');
  }
}
