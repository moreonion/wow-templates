# Snippets

For useful widgets and beautiful styling only some additional html does the trick. Below, there are custom snippets ready-to-use in your EN template. Just copy a snippet of your choice, select "HTML" in the EN editor and paste it there. Once you've pasted the snippet you may change back to "normal" to continue editing. Save and see the magic happen!

## a word about page building in EN

This design is optimized for a two column layout – so everthing using this template looks nicer with two columns. Always make sure there are no spaces between the elements of each column when building the pages on the "design" editor in EN: start placing elements at the top and leave no empty fields between them, as this would cause EN to insert extra space elements or even divide the columns into several columns which could produce some ugly effects.

## copy boxes on the left side

### images and videos

```html
<div class="pic">
  <img … >
</div>
```

Just upload your image to a copy box and place this wrapper around it. This will a add a border and some space below the image.

For videos, add another wrapper around the video link:

```html
<div class="pic">
  <div class="video">
    Paste the embed code from youtube, vimeo,… here
  </div>
</div>
```

This makes your videos responsive, so they will always fit on the screen (even on tiny mobile screens).

### short lists

For lists with very short items you can remove the spacing between them by adding the class `condensed` to the list.

```html
<ul class="condensed">
  <li>your list items</li>
</ul>
```

### background info

```html
<a href="#background-info" class="info-toggle">More info</a>

<div id="background-info">
  <h2>Background info</h2>
  <p>more more more info</p>
</div>
```

The `info-toggle` element enables the "show more info" logic. A click on the toggle shows the element with the id `background-info` and hides the toggle. Since this depends on the id, you can only use it once per page!


## copy boxes above the form fields

### progress bar

```html
<div class="pgbar-thermometer" data-target="250" data-start="0">
  <div class="t_body">
    <div class="t_level">&nbsp;</div>
  </div>
  <span class="t_current">0</span> people have taken action
</div>
```

Change the value of data-target according to your needs. Change data-start to add an initial value for the progress bar, e.g. offline supporters. If the data-attributes are missing, the default values shown above will be used instead.

Unfortunately, this is a little tricky because the EN editor keeps deleting all data-tags. To save them, you'll have to disable the editor first by clicking the top left x-button. Feel very welcome to complain to Engaging Networks about it!

## thank you page

### share links

These are social share buttons for Facebook, Twitter and email sharing:

```html
<div class="no-form">
  <ul class="share-links">

    <li class="facebook">
      <a class="button" href="https://www.facebook.com/sharer.php?u={{urlencoded url}}" title="Share this via Facebook!" target="_blank" data-share="facebook">
        <i></i><span>Facebook</span>
      </a>
    </li>

    <li class="twitter">
      <a class="button" href="http://twitter.com/share?text={{urlencoded share text}}&amp;url={{urlencoded url}}" title="Share this via Twitter!" target="_blank" data-share="twitter">
        <i></i><span>Twitter</span>
      </a>
    </li>

    <li class="email last">
      <a class="button" href="{{EN email share url}}" title="Share this via E-Mail!" target="_blank" data-share="email">
        <i></i><span>E-Mail</span>
      </a>
    </li>

  </ul>
</div>
```

Make sure to replace the `{{placeholder parts}}` with the real urls and share texts! The name between `<span>name</span>` is what's displayed on the button itself, the `title` pops up when hovering over the button. (`<i></i>` makes space for the icon, which will be inserted automatically.)

### submission tracking

Place this snippet on the thank you page to track submissions (it's hidden so it doesn't matter if it is inside a wrapper or not):

```html
<input type="hidden" name="track-submission" value="1">
```

## cookie box

The cookie box is in the header part of the campaign template. Include it right before the `div#header`.

If a visitor closes the box, a flag get's set and any further visits won't show this box again.

```html
<div id="cookie-info">
  <div class="middle inner"><div class="cookie-text">
    We use cookies. If you accept the use of cookies, close this box.
    <span class="close" title="close">x</span>
  </div></div>
</div>
```

## footer links

```html
<div id="footer" class="eaLeftColumnContent">
  <ul class="menu">
    <li><a href="{{link url}}">{{Link text}}</a></li>
    <li><a href="{{link url}}">{{Link text}}</a></li>
  </ul>
</div>
```

To add some footer menu style links to the bottom of the page, paste this snippet at the beginning of the template footer, between the `start of template footer`-comment and `</div> <!-- main -->`. Replace `{{link url}}` and `{{link text}}` with your link!

## show/hide stuff depending on screen size

If you want some elements to show up on a certain screen size only, you may add any of the following classes: "mobile-only", "desktop-only", "hide-on-mobile", "hide-on-desktop".

Let's say you want to add a copy block to desktop size screens that would be too distracting on mobile devices, then you can wrap it in a container to display on desktop only (hide-on-mobile would have the same effect):

```html
<div class="desktop-only">
  copy block that's just too much for mobile
</div>
```
