using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample
{
    internal class FunctionDelegate12
    {

        public static int Compare(string s1,string s2)
        {
            return s1.CompareTo(s2);
        }

        public static string Show(int n)
        {
            if (n == 1)
            {
                return "ganesh";
            }
            else if (n == 2)
                {
                    return "Rajesh";
                }
            return "Unknown";
            }

        static void Main()
        {
            Func<string, string, int> obj1 = Compare;
            Console.WriteLine(obj1("Ganesh", "Rajesh"));
            Func<int, string> obj2 = Show;
            Console.WriteLine(obj2(2));
        }
        }
}
