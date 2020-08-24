app.service('calculatorService', ['$http', '$q', '$httpParamSerializerJQLike', function calculatorService($http, $q, $httpParamSerializerJQLike) {

    var service = {
        result: '',
        getResult: getResult
    };
    return service;

    function getResult(firstValue, secondValue, operation, userInfo) {
        var def = $q.defer();
        var baseURL = 'https://localhost:44327/';
        var url = baseURL + 'api/values';   

        var config = {
            params: {
                firstValue: firstValue,
                secondValue: secondValue,
                operation: operation,
                userInfo: userInfo
            }
        }
        
        $http.get(url, config)
            .then(function (data) {
                service.result = data;
                def.resolve(data);
            });

        return def.promise;
    }
}]);