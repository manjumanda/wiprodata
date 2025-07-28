using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample
{
    internal class DelegateExample1
    {
        public delegate void MyDelegate();

        public static void Show()
        {
            Console.WriteLine("Welcome to delegates...");
        }
        static void Main()
        {
            MyDelegate obj = new MyDelegate(Show);
            obj();
        }
    }
}
