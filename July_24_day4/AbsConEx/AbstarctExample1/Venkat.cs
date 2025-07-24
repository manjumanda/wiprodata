using System;

namespace AbstarctExample1
{
    internal class Venkat : Training
    {
        public override void Email()
        {
            Console.WriteLine("Email is venkat@gmail.com");
        }

        public override void Name()
        {
            Console.WriteLine("Hi My Name is Venkat...");
        }
    }
}