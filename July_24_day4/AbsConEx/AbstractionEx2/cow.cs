using System;

namespace AbstractionEx2
{
    internal class cow : Animal
    {
        public override void Name()
        {
            Console.WriteLine("name is cow");
        }
        public override void Type()
        {
            Console.WriteLine("type is mamals");
        }
    }
}