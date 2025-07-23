using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class CirclePerogram
    {
        public void Calc(double radius)
        {
            double area, circ;
            area = Math.PI * radius * radius;
            circ = 2 * Math.PI * radius;
            Console.WriteLine("Area of circle" + area);
            Console.WriteLine("circumference " + circ);
        }
        static void Main()
        {
            double radius;
            Console.WriteLine("enter radius");
            radius = Convert.ToDouble(Console.ReadLine());
            CirclePerogram circlepro = new CirclePerogram();
            circlepro.Calc(radius);
        }
    }
}
