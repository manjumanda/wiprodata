using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsExample
{
    class Data
    {
        public void Show()
        {
            Console.WriteLine("show method from class data");
        }
        public static void Display()
        {
            Console.WriteLine("Display method from class data");
        }
    }
    internal class StaticMethodEx1
    {
        static void Main()
        {
            Data.Display();
            new Data().Show();
        }
    }
}
