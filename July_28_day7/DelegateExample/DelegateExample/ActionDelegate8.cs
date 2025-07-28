using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample
{
    internal class ActionDelegate8
    {
        public delegate void MyDelegate(string str);

        public static void Greeting(string s)
        {
            Console.WriteLine("Good morning "+s);
        }
        static void Main()
        {
            //MyDelegate obj=new MyDelegate(Greeting);
            MyDelegate obj = Greeting;
            obj("Manjula");
        }
    }
}
