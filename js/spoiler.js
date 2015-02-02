(function ($, window) {

    $.fn.spoiler = function(options) {
      // Public variables
      var settings = $.extend({
          slideDown: $.noop, // Callback function on slide down
          slideUp: $.noop, // Callback function on slide up
          speed: 'fast',
          for: 'for',
          control: 'control',
          elements: 'elements',
          label: 'label',
          controlClass: 'spoiler-control',
          elementsClass: 'spoiler-elements',
          controlSpoiledClass: 'spoiler-spoiled',
          controlExpandedClass: 'spoiler-expanded'
        }, options);

      $(this).each(function() {

        var controlCase, $control, $elements; // reset

        controlCase = $(this).data(settings.for);

        if(typeof(controlCase) !== "undefined") { // Case 1
          $control = $(this);
          $elements = $(controlCase);
        } else { // Case 2
          var controlSelector = $(this).data(settings.control);
          var elementsSelector = $(this).data(settings.elements);
          var caseLabel = $(this).data(settings.label);
          controlCase = controlSelector + '//' + elementsSelector + '//' + caseLabel;
          $control = $(this).find(controlSelector);
          $elements = $(this).find(elementsSelector);
        }

        if(!$control.length || !$elements.length) return;

        $control.addClass(settings.controlClass);
        $elements.addClass(settings.elementsClass);

        var stage;
        if(typeof(Storage) !== "undefined") {
          stage = localStorage.getItem(controlCase);
        }

        if(typeof(stage) === "undefined" || stage === null) stage = $(this).data('stage');

        if(stage === 'spoiled') {
          $elements.stop().hide();
          $control.addClass(settings.controlSpoiledClass)
        } else {
          $elements.stop().show();
          $control.addClass(settings.controlExpandedClass)
        }

        // On click
        $control.on('click', function() {
          if(stage === 'spoiled') {
            $control.removeClass(settings.controlSpoiledClass).addClass(settings.controlExpandedClass);
            $elements.stop().slideDown(settings.speed);
            settings.slideDown();
          } else {
            $control.removeClass(settings.controlExpandedClass).addClass(settings.controlSpoiledClass);
            $elements.stop().slideUp(settings.speed);
            settings.slideUp();
          }

          stage = stage === 'spoiled' ? 'expanded' : 'spoiled';

          localStorage.setItem(controlCase, stage);

        });

      });

    };



}(jQuery, window));