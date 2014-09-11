# scotchPanels.js - jQuery Off Canvas Menus and Panels Plugin

![scotchPanel.js](http://scotch.io/wp-content/uploads/2014/09/scotch-panels-cover.jpg)

- [Blog Post](http://scotch.io/bar-talk/scotchpanels-js-dead-simple-off-canvas-jquery-plugin)
- [Docs](http://panels.scotch.io)
- [Commercial](http://shop.scotch.io)

scotchPanels.js is a jQuery plugin for easily creating [off canvas](http://scotch.io/tutorials/off-canvas-menus-with-css3-transitions-and-transforms) menus, navigations, and other panel types such as images, videos, and iframes. Scotch Panels are **featured-packed** and have a ton of different options for every skill-level to tweak and implement into almost any project. Scotch Panels work from **any** container so you can put your side navigation on any element you want. It even provides excellent backwards-compatible browser support via a JavaScript fallback. Lastly, there's over 30 stripped down code samples to get you up and running in no time.

***



## Licenses

- Personal: $0 (free)
- Commercial (1 site): $15
- Commercial (Unlimited Sites): $60
- Extended License (reselling): Contact me: nick@scotch.io

***


## Dead Simple Demos

### Getting Started
- [Side Menu - Easy Way](http://panels.scotch.io/demos/side-menu-easy-way/index.html)
- [Side Menu - HTML5 Way](http://panels.scotch.io/demos/side-menu-html5-way/index.html)
- [Side Menu - Dev Way](http://panels.scotch.io/demos/side-menu-dev-way/index.html)


### Mobile Only
- [Side Menu Mobile Only - with CSS](http://panels.scotch.io/demos/side-menu-mobile-only-with-css/index.html)
- [Side Menu Mobile Only - with JS](http://panels.scotch.io/demos/side-menu-mobile-only-with-js/index.html)


### Horizontal
- [Horizontal Fixed Width](http://panels.scotch.io/demos/horizontal-fixed-width/index.html)
- [Horizontal Percentage Width](http://panels.scotch.io/demos/horizontal-percentage-width/index.html)


### Vertical
- [Vertical Min Height](http://panels.scotch.io/demos/vertical-min-height/index.html)


### Content Helpers
- [HTML](http://panels.scotch.io/demos/html-example/index.html)
- [Iframe](http://panels.scotch.io/demos/iframe-example-no-loader/index.html)
- [Iframe with Loader](http://panels.scotch.io/demos/iframe-example-with-loader/index.html)
- [Photo](http://panels.scotch.io/demos/photo-example/index.html)
- [Video](http://panels.scotch.io/demos/video-example/index.html)


### Event Helpers
- [Click](http://panels.scotch.io/demos/click-helper/index.html)
- [Hover](http://panels.scotch.io/demos/hover-helper/index.html)
- [Touch](http://panels.scotch.io/demos/touch-helper/index.html)


### Styles
- [Transitions](http://panels.scotch.io/demos/transitions/index.html)
- [Durations](http://panels.scotch.io/demos/durations/index.html)
- [Directions](http://panels.scotch.io/demos/directions/index.html)


### Triggers
- [Trigger Example](http://panels.scotch.io/demos/trigger-example/index.html)
- [Trigger - Close after "X"](http://panels.scotch.io/demos/trigger-close-after-x/index.html)
- [Trigger - With Cookie](http://panels.scotch.io/demos/trigger-with-cookie/index.html)


### CSS Class Helpers
- [CSS Helper Classes](http://panels.scotch.io/demos/helper-classes/index.html)


### Browser Suport
- [JavaScript Only](http://panels.scotch.io/demos/javascript-only/index.html)
- [JavaScript Only with Easing](http://panels.scotch.io/demos/javascript-only-with-easing/index.html)


### Multiple Panels at Once
- [Multiple Panels](http://panels.scotch.io/demos/multiple-panels/index.html)
- [Multiple Panels - different styles](http://panels.scotch.io/demos/multiple-panels-different-styles/index.html)
- [Multiple Panels - same container](http://panels.scotch.io/demos/multiple-panels-same-container/index.html)


### Advanced (cool things)
- [Custom Slider](http://panels.scotch.io/demos/custom-slider/index.html)
- [Callbacks](http://panels.scotch.io/demos/callbacks/index.html)
- [Loading Buttons](http://panels.scotch.io/demos/loading-buttons/index.html)
- [Nested Panels](http://panels.scotch.io/demos/nested-panels/index.html)

***


## Other Features

- Uses CSS3 with JavaScript Fallback
- Fully Responsive
- Custom transition styles
- Completely Customizable with tons of optional settings
- Lightweight, easy to use, and only one file
- Cross Browser Support
- Open Source
- Choose either custom HTML, images, iframes, or video panels
- Optionally use HTM5 Data Attributes
- Off Canvas directions from top, Bottom, left, and right
- Works from any container or div
- Extensive Callbacks API
- Click, touch, hover, and keyboard helpers
- CSS Class Helpers


***
 


## GETTING STARTED THE EASY WAY

### Add scotchPanels.js

After jQuery, add the scotchPanels.js file.

```html
<script src="http://example.com/js/scotchPanels.js">
```

### Step 2: Pick the Container

Decide on the container that you want your Panel to come out of. Try to pick a container that doesn't have any padding in the direction of where the Panel will be coming out of.

### Step 3: Add Your Panel's Markup inside of that Container

You'll want to add this markup inside of that container. If you are building a side navigation, put this directly below the opening body tag. If you want your panel inside of a custom div or wrapper, put it inside of that div.

```html
<div id="panel-example">
    <h2>Whatever you want in your panel</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, blanditiis.</p>
</div>
```

### Step 3: Add a button to toggle the Panel
This demo is showing how to create a click event, but you can tie opening and closing toggles to whatever events you want.
```html
<a href="#" class="toggle-panel">Toggle Panel</a>
```

### Step 4: Initialize and Configure
In either a JavaScript file or inline, initalize the Panel. This has to be below the scotchPanels.js file. Some of the following settings below are defaults, and are only added for demonstration purposes.
```javascript
$('#panel-example').scotchPanel({
    containerSelector: 'body', // As a jQuery Selector
    direction: 'left', // Make it toggle in from the left
    duration: 300, // Speed in ms how fast you want it to be
    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
    distanceX: '70%', // Size fo the toggle
    enableEscapeKey: true // Clicking Esc will close the panel
});
```

***



## Getting Started the Dev Way

### Step 1: Add scotchPanels.js

Feel free to use a front-end pakage manager like Bower.

```html
<script src="http://example.com/js/scotchPanels.js">
```

### Step 2: Add Your Panel's Markup
Make sure this is inside of the container you want this to slide out of.
```html
<div id="panel-example">
    <h2>Whatever you want in your panel</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, blanditiis.</p>
</div>
```

### Step 3: Initialize, configure, and return
This is very similar to the easy way, except you'll be returning the function as an object to be able to integrate into your front-end code and logic.
```javascript
var panelExample = $('#panel-example').scotchPanel({
    containerSelector: 'body', // Make this appear on the entire screen
    direction: 'left', // Make it toggle in from the left
    duration: 300, // Speed in ms how fast you want it to be
    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
    distanceX: '70%', // Size fo the toggle
    enableEscapeKey: true // Clicking Esc will close the panel
});
```

### Step 4: Do dev things
You can now open, close, and toggle the panel however you want. You have full control to tie it to whatever events you want.
```javascript
panelExample.open() // Opens the Panel
panelExample.toggle() // Toggles the Panel
panelExample.close() // Closes the Panel
```

***


## Getting Started the HTML5 Way

### Step 1: Add scotchPanels.js
After jQuery, add the scotchPanels.js file.
```html
<script src="http://example.com/js/scotchPanels.js">
```

### Step 2: Add Your Panel's Markup with HTML5 Data Attribtues
Add the configuration options as data-attributes to your markup
```html
<div id="lefty" class="panelize-meeeee" data-containerSelector="body" data-direction="left" data-clickSelector=".toggle-panel-1">
    <h2>Whatever you want in your panel</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, blanditiis.</p>
</div>

<div id="righty" class="panelize-meeeee" data-containerSelector="body" data-direction="right" data-clickSelector=".toggle-panel-2">
    <h2>Whatever you want in your panel</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, blanditiis.</p>
</div>
```
### Step 3: Add Toggle Buttons
Or other events to toggle the Scotch Panels.
```html
<a href="#" class="toggle-panel-1">Toggle Panel 1</a>
<a href="#" class="toggle-panel-2">Toggle Panel 2</a>
```

### Step 4: Initialize and Configure
```javascript
// Minimum Required Initiation of Panel
/* $('.panlize-meeeee').scotchPanel(); */

// Combination of Data Attributes and Options
$('.panelize-meeeee').scotchPanel({
    direction: 'top', // Will be overwritten by the Data Attributes
    duration: 150 // Will apply to both
});

```


***



## Issues or Bugs

Please report issues! Thanks for checking it out and supporting scotch.io!








