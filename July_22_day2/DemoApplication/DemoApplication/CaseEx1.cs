using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class CaseEx1
    {
        public void Check(char choice)
        {
            switch (choice)
            {
                case 'a':
                case 'A':
                case '1':
                    Console.WriteLine("Hi i am manjula");
                    break;

                case 'b':
                case 'B':
                case '2':
                    Console.WriteLine("hi i am divyaa");
                    break;

                case 'c':
                case 'C':
                case '3':
                    Console.WriteLine("hi i am sailaja");
                    break;

                default:
                    Console.WriteLine("invalid choice");
                    break;

            }
        }
        static void Main()
        {
            char choice;
            Console.WriteLine("enter your choice");
            choice=Convert.ToChar(Console.ReadLine());
            CaseEx1 obj = new CaseEx1();
            obj.Check(choice);

         

        }
    }
}
