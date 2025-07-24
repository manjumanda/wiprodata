using System;

namespace AbstarctExample1
{
    internal class Mahi : Training
    {
        public override void Email()
        {
            Console.WriteLine("Email is Mahi@gmail.com");
        }
        public override void Name()
        {
            Console.WriteLine("Hi my name is Mahi...");
        }
    }
}