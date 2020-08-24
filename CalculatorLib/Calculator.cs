using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace CalculatorLib
{
    public class Calculator
    {
        public double Eval(double first, double second, string operation = "add", string userInfo = "", bool saveInDB = false)
        {
            double result = double.NaN;
            switch (operation.ToLower())
            {
                case "add":
                    result = first + second;
                    break;
                case "subtract":
                    result = first - second;
                    break;
                case "multiply":
                    result = first * second;
                    break;
                case "divide":
                    result = second == 0 ? double.NaN : first / second;
                    break;
                default:
                    result = first + second;
                    break;                    
            }

            if (saveInDB)
            {
                using (var context = new CalculatorEntities())
                {
                    var std = new OperationLog()
                    {
                        FirstValue = first,
                        SecondValue = second,
                        Operation = operation,
                        UserUrl = userInfo,
                        TimeStamp = DateTime.UtcNow
                    };
                    context.OperationLogs.Add(std);

                    context.SaveChanges();
                }
            }

            return result;
        }
    }
}
