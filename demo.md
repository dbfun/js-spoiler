/*
Title: jQuery spoiler live demo
Description: jQuery spoiler live demo
*/

<link rel="stylesheet" href="/css/spoiler.css" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="/js/spoiler.js"></script>
<script src="/js/spoiler-demo.js"></script>


## Spoiler

Spoiler is a jQuery plugin that hide and show some long text.

Features:

  * save every spoiler stage in `localStorage` (try to refresh the page)
  * has `callbacks`
  * has two use case

## Setup

Add CSS in `<head>` section:

    <link rel="stylesheet" href="/css/spoiler.css" type="text/css" />

or add `js-spoiler.styl` in your [Stylus](http://en.wikipedia.org/wiki/Stylus_(stylesheet_language)) preprocessor stylessheet:

    @import "js-spoiler.styl"

Then, before your closing `<body>` tag add:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="/js/spoiler.js"></script>

JavaScript:

    $(function() {
      var $spoilers = $('.js-spoiler');
      if($spoilers.length) { $spoilers.spoiler(); }
    });

HTML:

  See use case #1 or #2 below


##  Use case #1:

Control and elements has no wrapper, `data-for` must be unique

    <div class="js-spoiler" data-for="#js-spoiler-1" data-stage="spoiled">Control for #js-spoiler-1</div>
    <div id="js-spoiler-1">Elements 1</div>

    <div class="js-spoiler" data-for="#js-spoiler-2" data-stage="spoiled">Control #js-spoiler-2</div>
    <div id="js-spoiler-2">Elements 2</div>

**Examples:**

<div class="js-spoiler" data-for="#js-spoiler-1" data-stage="spoiled">Control for #js-spoiler-1</div>
<div id="js-spoiler-1">Elements 1</div>

<div class="js-spoiler" data-for="#js-spoiler-2" data-stage="spoiled">Control #js-spoiler-2</div>
<div id="js-spoiler-2">Elements 2</div>


##  Use case #2:

Control and elements has wrapper, `data-control` and `data-elements` search in this wrapper, for saving stage use unique `data-label`

    <div class="js-spoiler" data-control=".js-spoiler-control" data-elements=".js-spoiler-elements" data-label="1" data-stage="spoiled">
      <div class="js-spoiler-control">Control 3</div>
      <div class="js-spoiler-elements">Elements 3</div>
    </div>

    <div class="js-spoiler" data-control=".js-spoiler-control" data-elements=".js-spoiler-elements" data-label="2" data-stage="spoiled">
      <div class="js-spoiler-control">Control 4</div>
      <div class="js-spoiler-elements">Elements 4</div>
    </div>

**Examples:**

<div class="js-spoiler" data-control=".js-spoiler-control" data-elements=".js-spoiler-elements" data-label="1" data-stage="spoiled">
  <div class="js-spoiler-control">Control 3</div>
  <div class="js-spoiler-elements">Elements 3</div>
</div>

<div class="js-spoiler" data-control=".js-spoiler-control" data-elements=".js-spoiler-elements" data-label="2" data-stage="spoiled">
  <div class="js-spoiler-control">Control 4</div>
  <div class="js-spoiler-elements">Elements 4</div>
</div>


## Callbacks

There is two callbacks: `slideUp` and `slideDown`:

    $(function() {
      var $spoilers = $('.js-spoiler-callbacks');
      if($spoilers.length) {
          $spoilers.spoiler({
          slideDown: function() {
            $('#console1').html('Slide down!')
          },
          slideUp: function() {
            $('#console1').html('Slide up!')
          }
        });
      }
    });

**Examples:**

<div id="console1">Waiting for a callback...</div>

<div class="js-spoiler-callbacks" data-control=".js-spoiler-control" data-elements=".js-spoiler-elements" data-label="2" data-stage="spoiled">
  <div class="js-spoiler-control">Control 5</div>
  <div class="js-spoiler-elements">Elements 5</div>
</div>
<script>
$(function() {
  var $spoilers = $('.js-spoiler-callbacks');
  if($spoilers.length) {
    $spoilers.spoiler({
      slideDown: function() {
        $('#console1').html('Slide down!')
      },
      slideUp: function() {
        $('#console1').html('Slide up!')
      }
    });
  }
});
</script>



