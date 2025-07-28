﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;

namespace ReflectionExample
{
    internal class ReflectionExample1
    {
        static void Main()
        {
            Type typeobj = typeof(Test);
            Console.WriteLine("Methods available in test class are");
            foreach (MethodInfo mi in typeobj.GetMethods())
            {
                Console.WriteLine(mi.Name);
            }
            Console.WriteLine("Variables available in test class are");
            foreach(FieldInfo fi in typeobj.GetFields())
            {
                Console.WriteLine(fi.Name);
            }
        }
    }
}
