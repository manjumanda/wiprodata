use EmpSample_#OK
go

select * from tblEmployees
go

----1. Get a List of Employees who have a one part name

select emp.name from dbo.tblEmployees emp 
where emp.name not like '%[ ]%';


----2. to Get a List of Employees who have a three part name

select emp.Name from dbo.tblEmployees emp 
where emp.Name like '[a-z]%[ ][a-z]%[ ][a-z]%' and 
emp.Name not like '[a-z]%[ ][a-z]%[ ][a-z]%[ ][a-z]]%';

---3. to get a list of Employees who have a First Middle Or last name as Ram, and not any thing else

select emp.Name from dbo.tblEmployees emp
where emp.Name like 'ram[ ]%' or emp.Name like '[ ]ram' or emp.Name like '%[. ]ram[ ]%';

------4.1
select emp.EmployeeNumber, emp.Name, emp.CentreCode
from dbo.tblEmployees emp
where emp.CentreCode = 65 or emp.CentreCode = 11;