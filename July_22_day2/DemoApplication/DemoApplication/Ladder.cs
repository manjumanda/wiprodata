using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class Ladder
    {
        public void Show(int choice)
        {
            if (choice == 1)
            {
                Console.WriteLine("hi iam one");
            }
            else if (choice == 2)
            {
                Console.WriteLine("hi iam two");
            }
            else if (choice == 3)
            {
                Console.WriteLine("hi i am three");
            }
            else if(choice == 4)
            {
                Console.WriteLine("hi iam four");
            }
            else if(choice == 5)
            {
                Console.WriteLine("hi iam five");
            }
            else
            {
                Console.WriteLine("invalid choice");
            }
        }
        static void Main()
        {
            int choice;
            Console.WriteLine("enter your choice");
            choice = Convert.ToInt32(Console.ReadLine());
            Ladder obj = new Ladder();
            obj.Show(choice);
        }
    }
}
