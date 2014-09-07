// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Cross browser helper functions
var helper = (function(win, doc, undefined) {

	return {
		// Cross browser events
		add_event: function(el, ev, fn) {
			'addEventListener' in win ? 
				el.addEventListener(ev, fn, false) : 
				el.attachEvent('on' + ev, fn);
		},

		// Faster class selectors
		// http://jsperf.com/queryselector-vs-getelementsbyclassname-0
		get_single_by_class: function(className) {
			return 'getElementsByClassName' in doc ? 
				doc.getElementsByClassName(className)[0] : 
				doc.querySelector('.' + className);
		},

		//http://jsperf.com/byclassname-vs-queryselectorall
		get_many_by_class: function(className) {
			return 'getElementsByClassName' in doc ? 
				doc.getElementsByClassName(className) : 
				doc.querySelectorAll('.' + className);
		}
	};

})(this, this.document);

// Stamping locations
(function(win, doc, undefined) {
	'use strict';

	// The object to hold collected data
	var stamps = localStorage.stamps ? JSON.parse(localStorage.stamps) : {};

	// The button
	var stamper = doc.getElementById('stamper');

	// Success callback
	var log_location = function(position) {
		// count how many elements are already in there
		var i = 0;

		// build a location object
		var build_loc = function(position) {
			return {
				'latitude': position.coords.latitude,
				'longitude': position.coords.longitude,
				'accuracy': position.coords.accuracy, // metres
				'altitude': position.coords.altitude,
				'altitude_accuracy': position.coords.altitudeAccuracy, // metres
				'timestamp': position.timestamp
			};
		};

		for(var elements in stamps) {
			i++;
		}

		// Increment keys if there are already elements in the object
		// otherwise put one is as 0
		if(i) {
			stamps[i] = build_loc(position);
		} else {
			stamps[0] = build_loc(position);
		}

		console.log(stamps);

		localStorage.stamps = JSON.stringify(stamps);
	};

	// Failure callback
	var display_error = function(error) {
		var errors = {
			1: 'Permission denied',
			2: 'Position unavailable',
			3: 'Timeout'
		}

		console.log(errors[error.code]);
	}

	// Get geo info when button is clicked
	var stamp_it = function() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				log_location,
				display_error,
				{
					enableHighAccuracy: true
				}
			);
		} else {
			// show the HTML form, maybe just change the class on <html> to no-js
		}
	};

	helper.add_event(stamper, 'click', stamp_it);
}(this, this.document));
