using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling
{
	internal class ArrayExample
	{
		static void Main()
		{
			try
			{
				int[] a = new int[] { 1, 2, 3, };
				a[10] = 324;

			}
			catch (IndexOutOfRangeException e)
			{
				Console.WriteLine("array size is small");

			}
			catch (Exception e)
			{
				Console.WriteLine(e);
			}
		}
	}
}
