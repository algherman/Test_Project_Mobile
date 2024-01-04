// $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available

var blinkingEffect = {
  name: "blinking",
  properties: 
  {
   color: "rgba(255,0,0,1.0)",
   blinkColor: "rgba(255,255,0,1.0)",
    blinkFrequency: 0.2
  }
};

$scope.blink = function() {
	$scope.setWidgetProp("model-1", "effect", blinkingEffect);
}

$scope.unblink = function() {
	$scope.setWidgetProp("model-1", "effect", null);
}



$scope.myColor = undefined;
 
$scope.openColorInputPopup = function() {
  $ionicPopup.show({
    template: '<input id="color-area" type="color" value="#ff0000" ng-model="myColor"></input>',
    title: 'Select a Color',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Done</b>',
        type: 'button-positive',
        onTap: function(e) {
          console.log("Done was clicked");
        }
      }
    ]
  });
}