using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CalculatorAPI.Models
{
    public class Calculation
    {
        public double firstValue { get; set; }
        public double secondValue { get; set; }
        public string operation { get; set; }
        public string userInfo { get; set; }
    }
}