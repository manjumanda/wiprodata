﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class Factors
    {
        public void Show(int n)
        {
            for(int i = 1; i < n; i++)
            {
                if (n % i == 0)
                {
                    Console.WriteLine("Factor "+i);                }
            }
        }
        static void Main()
        {
            int n;
            Console.WriteLine("Enter N value");
            n = Convert.ToInt32(Console.ReadLine());
            Factors factor = new Factors();
            factor.Show(n);
        }
    }
}
