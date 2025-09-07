using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectionsExample
{
    internal class Example1
    {
        static void Main(String[] args)
        {
            ArrayList namesList = new ArrayList();
            namesList.Add("Vasim");
            namesList.Add("Rajesh");
            namesList.Add("Madhu");
            namesList.Add("Vandana");
            namesList.Add("nithin");
            Console.WriteLine("Default arraylist elements are");
            foreach (object obj in namesList)
            {
                Console.WriteLine(obj);
            }
            namesList.Insert(3, "Manjula");
            Console.WriteLine("List after inserting new element");
            foreach(object obj in namesList)
            {
                Console.WriteLine(obj);
            }
            namesList.Remove("Madhu");
            Console.WriteLine("list after removing by name");
            foreach(Object obj in namesList)
            {
                Console.WriteLine(obj);
            }
            namesList.RemoveAt(2);
            Console.WriteLine("List after removing by position");
            foreach(object obj in namesList)
            {
                Console.WriteLine(obj);
            }
        }
    }
}
