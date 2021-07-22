angular.module('todoApp')
  .controller('WebotpController', function($scope, $rootScope) {
  
  $scope.RegScreen = true;
  $scope.OTPScreen = false;
  $scope.FinalScreen = false;
  
  $scope.webOTPHandler = function() {
    if ('OTPCredential' in window) {
      const input = document.querySelector('input[autocomplete="one-time-code"]');
      if (!input) return;
      const ac = new AbortController();
      const form = input.closest('form');
      if (form) {
        form.addEventListener('submit', e => {
          ac.abort();
        });
      }
      navigator.credentials.get({
        otp: { transport:['sms'] },
        signal: ac.signal
      }).then(otp => {
        $scope.$apply(function(){
          $scope.verifyOTP(otp.code);
        });
         //$scope.manageOTP(otp.code);
         // $scope.$apply(function(){
         //   $scope.validate();  
         // });  
      }).catch(err => {
        console.log(err);
      });
    }
  }
  
 
  
  $scope.NewOTP = '';
  $scope.loadWebOTP = function() {
    $scope.webOTPHandler();
  };
  
  $rootScope.$watch('MobileOTP1', function(){
    if($rootScope.MobileOTP1);
  });
  
  $scope.GenerateOTP = function(){
    $scope.RegScreen = false;
    $scope.OTPScreen = true;
    $scope.FinalScreen = false;
  };
  
  $scope.verifyOTP = function(otp){
   var OTPArray = otp.split("");
      if(otp !== "" && otp.length >= 6){
        $rootScope.MobileOTP1 = OTPArray[0];
        $rootScope.MobileOTP2 = OTPArray[1];
        $rootScope.MobileOTP3 = OTPArray[2];
        $rootScope.MobileOTP4 = OTPArray[3];
        $rootScope.MobileOTP5 = OTPArray[4];
        $rootScope.MobileOTP6 = OTPArray[5];
      }
  };
  
  $scope.SubmitContsent = function(){
    $scope.RegScreen = true;
    $scope.OTPScreen = false;
    $scope.FinalScreen = false;
  }

  
$scope.callme = function(){
  alert('sagar');
}  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    $scope.detailsStatus = true;
    $scope.otpStatus = false;
    $scope.OTPVal = '';
  
  
  
  
  
 
  
  $scope.manageOTP = function(otp) {
      var OTPArray = otp.split("");
      if(otp !== "" && otp.length >= 6){
        $rootScope.MobileOTP1 = OTPArray[0];
        $rootScope.MobileOTP2 = OTPArray[1];
        $rootScope.MobileOTP3 = OTPArray[2];
        $rootScope.MobileOTP4 = OTPArray[3];
        $rootScope.MobileOTP5 = OTPArray[4];
        $rootScope.MobileOTP6 = OTPArray[5];
      }
  }
  
  
  $scope.Submit = function(){
    $scope.detailsStatus = false;
    $scope.otpStatus = true;
    webOTPHandler();
  }
  
  $scope.validate = function(val){
    
    alert(val);
  }
  });
