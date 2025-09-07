using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectionsExample
{
    internal class Example2
    {
        static void Main()
        {
            Employ employ1=new Employ();
            employ1.Empno = 1;
            employ1.Name = "Rajesh";
            employ1.Basic = 6787.32;

            Employ employ2=new Employ();
            employ2.Empno = 2;
            employ2.Name = "yamini";
            employ2.Basic = 44665.65;

            Employ employ3=new Employ();
            employ3.Empno = 3;
            employ3.Name = "sunil";
            employ3.Basic = 4377.43;

            ArrayList arraylist= new ArrayList();
            arraylist.Add(employ1);
            arraylist.Add(employ2);
            arraylist.Add(employ3);

            foreach (object obj in arraylist)
            {
                Employ employ = (Employ)obj;
                Console.WriteLine(employ);
            }
        }
    }
}
