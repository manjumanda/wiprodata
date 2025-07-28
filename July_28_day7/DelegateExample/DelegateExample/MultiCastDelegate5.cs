using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample
{
    internal class MultiCastDelegate5
    {
        public delegate void DotNetFsd();

        public static void Project()
        {
            Console.WriteLine("Capstone project to be done last phase");
        }
        public static void Milestone1()
        {
            Console.WriteLine("Milestone 1 to be conducted on core ");
        }
        public static void Milestone2()
        {
            Console.WriteLine("milestone 2 to be conduced on .net");
        }
        public static void Milestone3()
        {
            Console.WriteLine("milestone 3 to be conduced on .net");
        }
            public static void Milestone4()
        {
            Console.WriteLine("milestone 4 to be conduced on .net");
        }

        static void Main()
        {
            DotNetFsd obj = new DotNetFsd(Milestone1);
            obj += Milestone2;
            obj += Milestone3;
            obj+= Milestone4;
            obj += Project;
            obj();
        }
        
    }
    }

