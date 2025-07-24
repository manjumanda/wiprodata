using System;

namespace AbstractionEx2
{
    internal class Dog : Animal
    {
        public override void Name()
        {
            Console.WriteLine("name is dog");
        }
        public override void Type()
        {
            Console.WriteLine("type is pet animal");
        }
    }
}