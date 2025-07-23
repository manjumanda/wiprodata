using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class Voting
    {
        public void Check(int age)
        {
            if (age >= 18)
            {
                Console.WriteLine("person is eligible for vote");
            }
            else
            {
                Console.WriteLine("not eligible for voting");
            }
        }

        static void Main()
        {
            int age;
            Console.WriteLine("enter age");
            age = Convert.ToInt32(Console.ReadLine());
            Voting voting = new Voting();
            voting.Check(age);

        }
    }
}
