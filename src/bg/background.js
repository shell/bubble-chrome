// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
var sites = {
  "https://9gag.com": {
    contentBlock: '.badge-entry-container',
    contentClass: '.badge-item-title'
  },

  "https://www.reddit.com": {
    contentBlock: '.thing',
    contentClass: '.title'
  },

  "https://eztv.ag": {
    contentBlock: 'tr.forum_header_border',
    contentClass: '.forum_thread_post'
  }
}

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    var siteMeta = sites[request.origin]

    sendResponse(Object.assign({}, {
      contentFilter: [
        // stupid cats
        'cat',

        // "cooks"
        'Gordon Ramsay', 'Babish',

        // comedians
        'Louis C.K.', 'Chappelle', 'Chris Rock', 'Kevin Hart', 'Burr', 

        // celebrities
        'Kardashian', 'Kanye',

        // eztv
        'Bong Appetit', 'The Daily Show', 'Seth Meyers', 'Homes Under The Hammer', 'Greys Anatomy', 'Nathan For You',
        'How to Get Away with Murder', '90 Day Fiance', 'River Monsters', 'Gotham', 'The Chris Gethard Show',
        'Criminal Minds', 'Moonshiners', 'Full Frontal With Samantha Bee'
      ]
    }, siteMeta));
  });
