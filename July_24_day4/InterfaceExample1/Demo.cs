using System;

namespace InterfaceExample1
{
    internal class Demo : IOne, ITwo
    {
        public void EMail()
        {
            Console.WriteLine("Email is wipro@gmail.com");
        }
        public void Name()
        {
            Console.WriteLine("name is prasanna");
        }
    }
}