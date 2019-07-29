


// Provides a plugin name and constructor function to analytics.js. This
// function works even if the site has customized the ga global identifier.
function providePlugin(pluginName, pluginConstructor) {
  var ga = window[window['GoogleAnalyticsObject'] || 'ga'];
  if (typeof ga == 'function') {
    ga('provide', pluginName, pluginConstructor);
  }
}

  var PublisherPlugin = function PublisherPlugin()
{
	const metas = document.getElementsByTagName('meta');
   var ml=metas.length;
   test = [];
   for (let i = 0; i < ml; i++) {
       let na = (metas[i].getAttribute('name')!= null) ? metas[i].getAttribute('name') : metas[i].getAttribute('property');
       var co = metas[i].getAttribute('content');
       var source = 'meta';
       test.push({
           [na]: {
               'Value': co,
               'Source': source
           }
       });
   }
   console.log(test);
   console.log('Done');
}

/**
 * Enables / disables debug output.
 */
PublisherPlugin.prototype.setDebug = function(enabled) {
  this.isDebug = enabled;
};

/**
 * Displays a debug message in the console, if debugging is enabled.
 */
PublisherPlugin.prototype.debugMessage = function(message) {
  if (!this.isDebug) return;
  if (console) console.debug(message);
};

providePlugin('PublisherPlugin', PublisherPlugin);
