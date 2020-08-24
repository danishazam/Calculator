using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CalculatorLib;

namespace CalculatorTest
{
    [TestClass]
    public class CalculatorTest
    {
        [TestMethod]
        public void TestAdd()
        {
            Assert.AreEqual(23, new CalculatorLib.Calculator().Eval(20,3,"add", "localhost/add"));
        }

        [TestMethod]
        public void TestSubtract()
        {
            Assert.AreEqual(23, new CalculatorLib.Calculator().Eval(26, 3, "subtract", "localhost/subtract"));
        }

        [TestMethod]
        public void TestMultiply()
        {
            Assert.AreEqual(78, new CalculatorLib.Calculator().Eval(26, 3, "multiply", "localhost/multiply"));
        }

        [TestMethod]
        public void TestDivide()
        {
            Assert.AreEqual(9, new CalculatorLib.Calculator().Eval(27, 3, "divide", "localhost/divide"));
        }

        [TestMethod]
        public void TestDivideByZero()
        {
            Assert.AreEqual(double.NaN, new CalculatorLib.Calculator().Eval(27, 0, "divide"));
        }
    }
}
