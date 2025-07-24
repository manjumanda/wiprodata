using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbsConEx
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Employ[] arrEmploy = new Employ[]
            {
                new Uday(1,"Uday",76987),
                new Anusha(2,"Anusha",67787),
                new Madhu(3,"Madhu",78766)
            };

            foreach(Employ employ in arrEmploy)
            {
                Console.WriteLine(employ);
            }
        }
    }
}
