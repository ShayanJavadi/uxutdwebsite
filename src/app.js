import jump from 'jump.js';
require('./styles/app.scss');

document.addEventListener('DOMContentLoaded', function() {
  const App = new Application;
  App.handleAnchorNavigation();
  App.handleEmbeddedSocialMedia();
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

  handleEmbeddedSocialMedia() {
    // TWITTER
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);

    // FACEBOOK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.async = true;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=122107125107711';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
