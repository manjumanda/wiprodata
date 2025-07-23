using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class CaseEx2
    {
        public void Show(string dayName)
        {
            switch (dayName.ToUpper())
            {
                case "SUN":
                    Console.WriteLine("its sunday....");
                    break;
                case "MON":
                    Console.WriteLine("its Monday......");
                    break;
                case "TUE":
                    Console.WriteLine("its tuesday.....");
                    break;
                case "WED":
                    Console.WriteLine("its wednesday....");
                    break;
                case "THU":
                    Console.WriteLine("its thursday.....");
                    break;
                case "FRI":
                    Console.WriteLine( "its friday....");
                    break;
                case "SAT":
                    Console.WriteLine("its saturdayy....");
                    break;
                default:
                    Console.WriteLine("invalid choice.....");
                    break;
            }
        }
        static void Main()
        {
            string dayName;
            Console.WriteLine("Enter 3 chars of Day names");
            dayName = Console.ReadLine();
            CaseEx2 obj = new CaseEx2();
            obj.Show(dayName);

        }
    }
}
