using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PropertyExample
{
    internal class WriteOnly
    {
        class Vendor
        {
            int vendorId;
            string vendorName;

            public int VendorId
            {
                set { vendorId = value; }
            }
            public string VendorName
            {
                set { vendorName = value; }
            }
            public override string ToString()
            {
                {
                    return "vendor id " + vendorId + " vendir name " + vendorName;
                }
            }
            static void Main()
            {
                Vendor vendor = new Vendor();
                vendor.vendorId = 1;
                vendor.vendorName = "zomato";
                Console.WriteLine(vendor);
            }
        }
    }
}
