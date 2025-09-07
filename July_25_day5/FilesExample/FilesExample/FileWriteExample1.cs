using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilesExample
{
    internal class FileWriteExample1
    {
        static void Main(string[] args) {
            FileStream fs = new FileStream(@"D:\Files\Demo1.txt", FileMode.Create, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);
            sw.WriteLine("This is my first ");
            sw.WriteLine("Hello worlddd");
            fs.Close();
    }
}
