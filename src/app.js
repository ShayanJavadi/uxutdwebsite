import jump from 'jump.js';
require('./app.scss');

document.addEventListener('DOMContentLoaded', function() {
  const App = new Application;
  App.handleAnchorNavigation();
}, false);


class Application {

  handleAnchorNavigation() {
    const nodes = ["introduction", "events", "sponsors"]

    nodes.map((node) => {
      const trigger =  document.querySelector(`#${node}-node`);
      const target = document.querySelector(`#${node}`);
      trigger.addEventListener("click", () => jump(target, {
        offset: -80,
      }));
    })
  }
}
