using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsExample
{
    static class Demo
    {
        public static void Show()
        {
            Console.WriteLine("show methos from demo class");
        }
        public static string Trainer()
        {
            return "Trainer is prasanna";        }
    }
    internal class StaticClassEx1
    {
        static void Main()
        {
            
            Demo.Show();
            Console.WriteLine(Demo.Trainer());
        }
    }
}
