using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//parameters should be same
namespace DelegateExample
{
    internal class DelegateExample2
    {
        public delegate void MyDelegate(string s);
        public static void Show(String s)
        {
            Console.WriteLine("welcome to delegates from "+s);
        }

        static void Main()
        {
            MyDelegate obj = new MyDelegate(Show);
            obj("Venkata");
        }
    }
}
