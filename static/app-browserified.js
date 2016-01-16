(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function() {
     var view = require('./view.js')
     var ctrl = require('./controller.js')
     m.mount(document.getElementById('app'), { controller: ctrl, view: view })
})();

},{"./controller.js":2,"./view.js":3}],2:[function(require,module,exports){
// This module defines the view-model aka controller
module.exports = getController

// model representation of a Tweet
function Tweet(data) {
	this.body = m.prop(data.body)
	this.author = m.prop(data.author)
	this.timestamp = m.prop(data.timestamp)
}

function getController() {	

	var vm = { 
		tweets: []
	}

	return vm
}

},{}],3:[function(require,module,exports){
/** @jsx m */

// this module defines the view
// the view is provided access to the view-model, named vm
module.exports = function(vm) {

var navbar = 
    {tag: "div", attrs: {class:"container-fluid"}, children: [
        {tag: "a", attrs: {class:"navbar-brand", href:"#"}, children: [
            {tag: "img", attrs: {class:"owl-icon", src:"./Rice_Owl_tiny.png"}}
        ]}, 
        {tag: "a", attrs: {class:"navbar-brand blue-text", href:"#"}, children: [
            "Tweeter"
        ]}
    ]}

///////////////////////////////////////////////////////////////////////////
return {tag: "div", attrs: {}, children: [
    {tag: "nav", attrs: {class:"navbar navbar-default navbar-static-top"}, children: [
         navbar 
    ]}
]}

}



},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbnRyb2xsZXIuanMiLCJhcHAvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIjsoZnVuY3Rpb24oKSB7XG4gICAgIHZhciB2aWV3ID0gcmVxdWlyZSgnLi92aWV3LmpzJylcbiAgICAgdmFyIGN0cmwgPSByZXF1aXJlKCcuL2NvbnRyb2xsZXIuanMnKVxuICAgICBtLm1vdW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSwgeyBjb250cm9sbGVyOiBjdHJsLCB2aWV3OiB2aWV3IH0pXG59KSgpO1xuIiwiLy8gVGhpcyBtb2R1bGUgZGVmaW5lcyB0aGUgdmlldy1tb2RlbCBha2EgY29udHJvbGxlclxubW9kdWxlLmV4cG9ydHMgPSBnZXRDb250cm9sbGVyXG5cbi8vIG1vZGVsIHJlcHJlc2VudGF0aW9uIG9mIGEgVHdlZXRcbmZ1bmN0aW9uIFR3ZWV0KGRhdGEpIHtcblx0dGhpcy5ib2R5ID0gbS5wcm9wKGRhdGEuYm9keSlcblx0dGhpcy5hdXRob3IgPSBtLnByb3AoZGF0YS5hdXRob3IpXG5cdHRoaXMudGltZXN0YW1wID0gbS5wcm9wKGRhdGEudGltZXN0YW1wKVxufVxuXG5mdW5jdGlvbiBnZXRDb250cm9sbGVyKCkge1x0XG5cblx0dmFyIHZtID0geyBcblx0XHR0d2VldHM6IFtdXG5cdH1cblxuXHRyZXR1cm4gdm1cbn1cbiIsIi8qKiBAanN4IG0gKi9cblxuLy8gdGhpcyBtb2R1bGUgZGVmaW5lcyB0aGUgdmlld1xuLy8gdGhlIHZpZXcgaXMgcHJvdmlkZWQgYWNjZXNzIHRvIHRoZSB2aWV3LW1vZGVsLCBuYW1lZCB2bVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2bSkge1xuXG52YXIgbmF2YmFyID0gXG4gICAge3RhZzogXCJkaXZcIiwgYXR0cnM6IHtjbGFzczpcImNvbnRhaW5lci1mbHVpZFwifSwgY2hpbGRyZW46IFtcbiAgICAgICAge3RhZzogXCJhXCIsIGF0dHJzOiB7Y2xhc3M6XCJuYXZiYXItYnJhbmRcIiwgaHJlZjpcIiNcIn0sIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7dGFnOiBcImltZ1wiLCBhdHRyczoge2NsYXNzOlwib3dsLWljb25cIiwgc3JjOlwiLi9SaWNlX093bF90aW55LnBuZ1wifX1cbiAgICAgICAgXX0sIFxuICAgICAgICB7dGFnOiBcImFcIiwgYXR0cnM6IHtjbGFzczpcIm5hdmJhci1icmFuZCBibHVlLXRleHRcIiwgaHJlZjpcIiNcIn0sIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIlR3ZWV0ZXJcIlxuICAgICAgICBdfVxuICAgIF19XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xucmV0dXJuIHt0YWc6IFwiZGl2XCIsIGF0dHJzOiB7fSwgY2hpbGRyZW46IFtcbiAgICB7dGFnOiBcIm5hdlwiLCBhdHRyczoge2NsYXNzOlwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1zdGF0aWMtdG9wXCJ9LCBjaGlsZHJlbjogW1xuICAgICAgICAgbmF2YmFyIFxuICAgIF19XG5dfVxuXG59XG5cblxuIl19
