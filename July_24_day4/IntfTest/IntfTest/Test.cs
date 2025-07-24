using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntfTest
{
    internal class Test : IOne, ITwo
    {
        void IOne.Show()
        {
            Console.WriteLine("show method from interface one.....");
        }
        void ITwo.Show()
        {
            Console.WriteLine("show method from interface two");
        }

    }
}
