using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoFirstLibrary
{
    public class Demo
    {
        private string privateStr = "sanman";
        public string publicStr = "rajesh";
        protected string protectedStr = "daivya";
        internal string internalstr = "gopi";
        internal protected string internalprostr = "sailaja";

        static void Main()
        {
            Demo demo = new Demo();
            Console.WriteLine(demo.privateStr);
            Console.WriteLine(demo.publicStr);
            Console.WriteLine(demo.protectedStr);
            Console.WriteLine(demo.internalstr);
            Console.WriteLine(demo.internalprostr);

        }

    }
}
