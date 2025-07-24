using System;

namespace AbstractionEx2
{
    internal class Lion : Animal
    {
        public override void Name()
        {
            Console.WriteLine("Name is lion");
        }
        public override void Type()
        {
            Console.WriteLine("type is wild animal");
        }
    }
}