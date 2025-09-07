using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnitDemo;

namespace NUnitDemo.Tests
{
    [TestFixture]
    public class DemoTest
    {
        [Test]
        public void Test()
        {
            Demo demo = new Demo(); 
            Assert.Equals("Welcome to c#",demo.Hello());
        }
    }
}
