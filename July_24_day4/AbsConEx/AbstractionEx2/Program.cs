using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbstractionEx2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Animal[] animals = new Animal[]
            {
                new Lion(),
                new cow(),
                new Dog()
            };
            foreach (Animal animal in animals)
            {
                animal.Name();
                animal.Type();
            }
        }
    }
}
