app.controller('CalculatorController', ['$scope', '$location', 'calculatorService', function ($scope, $location, calculatorService) {
    $scope.testmessage = $location.absUrl();

    // Bound to the output display
    $scope.output = "0";

    // Used to evaluate whether to start a new number
    // in the display and when to concatenate
    $scope.newNumber = true;

    // Holds the pending operation so calculate knows
    // what to do
    $scope.pendingOperation = null;

    // Bound to the view to display a token indicating
    // the current operation
    $scope.operationToken = "";

    // Holds the running total as numbers are added/subtracted
    $scope.resultValue = null;

    // Holds the number value of the string in the display output
    $scope.pendingValue = 0;

    // Tells calculate what to do when the equals buttons is clicked repeatedly
    $scope.lastOperation = null;

    // Constants
    var ADD = "add";
    var SUBTRACT = "subtract";
    var MULTIPLY = "multiply";
    var DIVIDE = "divide";
    var ADD_TOKEN = "+";
    var SUBTRACT_TOKEN = "-";
    var MULTIPLY_TOKEN = "*";
    var DIVIDE_TOKEN = "/";

    /*
    * Runs every time a number button is clicked.    
    */
    $scope.updateOutput = function (btn) {
        if ($scope.output == "0" || $scope.newNumber) {
            $scope.output = btn;
            $scope.newNumber = false;
        } else {
            $scope.output += String(btn);
        }
        $scope.pendingValue = toNumber($scope.output);
    };

    $scope.requestedOperation = function (op) {
        $scope.resultValue = $scope.pendingValue;
        setOperationToken(op);
        setOutput(String($scope.resultValue));
        $scope.pendingOperation = op;
        $scope.newNumber = true;
        $scope.pendingValue = null;
    };

    /*
    * Runs when the equals (=) button is clicked.    
    */
    $scope.calculate = function () {

        var vm = this;
        vm.result = '';
        
        if (!$scope.newNumber) {
            $scope.pendingValue = toNumber($scope.output);
            $scope.lastValue = $scope.pendingValue;
        }

        vm.getResult = function () {
            calculatorService.getResult($scope.resultValue, $scope.pendingValue, $scope.pendingOperation, $location.absUrl())
                .then(function (result) {
                    $scope.output = result.data;
                    $scope.resultValue = result.data;
                    console.log('result returned to controller.');
                },
                    function (data) {
                        console.log('result retrieval failed.')
                    });
        };

        vm.getResult();

        setOutput($scope.resultValue);
        setOperationToken();
        $scope.pendingOperation = null;
        $scope.pendingValue = null;
    };

    /* 
    * Initializes the appropriate values
    * when the clear button is clicked.
    */
    $scope.clear = function () {
        $scope.resultValue = null;
        $scope.pendingValue = null;
        $scope.pendingOperation = null;
        setOutput("0");
    };

    /* 
    * Updates the display output and resets the
    * newNumber flag.
    */
    setOutput = function (outputString) {
        $scope.output = outputString;
        $scope.newNumber = true;
    };

    /* 
    * Sets the operation token to let the user know
    * what the pendingOperation is
    */
    setOperationToken = function (operation) {
        if (operation == ADD) {
            $scope.operationToken = ADD_TOKEN;
        } else if (operation == SUBTRACT) {
            $scope.operationToken = SUBTRACT_TOKEN;
        } else if (operation == MULTIPLY) {
            $scope.operationToken = MULTIPLY_TOKEN;
        } else if (operation == DIVIDE) {
            $scope.operationToken = DIVIDE_TOKEN;
        } else {
            $scope.operationToken = "";
        }
    };

    /* Converts a string to a number so we can
    * perform calculations. Simply multiplies
    * by one to do so
    */
    toNumber = function (numberString) {
        var result = 0;
        if (numberString) {
            result = numberString * 1;
        }
        return result;
    };
}]);