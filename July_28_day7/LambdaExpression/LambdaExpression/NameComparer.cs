using System.Collections.Generic;

namespace LambdaExpression
{
    internal class NameComparer : Comparer<Employ>
    {
        public override int Compare(Employ x, Employ y)
        {
            return x.Name.CompareTo(y.Name);
        }
    }
}