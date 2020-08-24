using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CalculatorLib;
using CalculatorAPI.Models;
using System.Web.Http.Cors;

namespace CalculatorAPI.Controllers
{
    [EnableCors(origins: "https://localhost:44381/", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        // GET api/values/
        public string Get([FromUri] Calculation calculation)
        {
            Calculator calculator = new CalculatorLib.Calculator();
            return calculator.Eval(calculation.firstValue, calculation.secondValue, calculation.operation, calculation.userInfo, true).ToString();            
        }
    }
}
