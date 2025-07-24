﻿namespace AbsConEx
{
    internal abstract class Employ
    {
        private int empno;
        private string name;
        private double basic;

        public Employ(int empno, string name, double basic)
        {
            this.empno = empno;
            this.name = name;
            this.basic = basic;
        }
        public override string ToString()
        {
            return "Employ No " + this.empno + " Employ Name " + this.name + " Basic " + this.basic;
        }
    }
}