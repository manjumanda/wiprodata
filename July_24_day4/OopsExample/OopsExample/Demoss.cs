using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsExample
{
    internal class Demoss
    {
        int count;
        public void Increment()
        {
            count++;
        }
        public void SHow()
        {
            Console.WriteLine("Count "+count);
        }
        static void Main()
        {
            Demoss obj1= new Demoss();
            Demoss obj2= new Demoss();
            obj1.Increment();
            obj1.SHow();
            obj2.Increment();
            obj2.SHow();
        }
    }
}
