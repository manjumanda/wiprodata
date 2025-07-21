using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.Remoting.Channels;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    internal class Data
    {
        public void Greeting()
        {
            Console.WriteLine( "Welcome to dotnet training...");
        }
        internal void Company()
        {
            Console.WriteLine("Company is wipro");
        }
        private void Trainer()
        {
            Console.WriteLine("trainer is prasanna pappuu");
        }
        }
    }
