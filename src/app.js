import jump from 'jump.js';
require('./styles/app.scss');

document.addEventListener('DOMContentLoaded', function() {
  const App = new Application;
  App.handleAnchorNavigation();
}, false);


class Application {
  constructor() {
    this.state = {
      anchorNavigating: false,
    }
  }

  handleAnchorNavigation() {
    const nodes = ["introduction", "events", "sponsors"]

    nodes.map((node) => {
      const trigger =  document.querySelector(`#${node}-node`);
      const target = document.querySelector(`#${node}`);

      trigger.addEventListener("click", () => {
        if (!this.state.anchorNavigating) {
          this.state.anchorNavigating = true;

          jump(target, {
            offset: -80,
            callback: () => this.state.anchorNavigating = false,
          });
        }
      });
    })
  }

}
