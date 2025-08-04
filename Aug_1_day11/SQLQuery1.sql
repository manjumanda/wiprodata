use sqlpractice
Go

--Display list of tables availABLE in current database

select * from INFORMATION_SCHEMA.TABLES
Go


---Display info about Emp table

sp_help Emp
Go

---display info abput all records fro emp tables

select * from Emp
Go

--display empno,Name,Basic from emp table

select Empno 'Employ No',nam 'Employ Name',basic 'Employ Basic' from Emp
Go

--display all records whose basic >50000

select basic from Emp where basic>50000
Go

--display all records whose dept is 'DOTNET'

select * from Emp where dept='Dotnet'
Go

--display all records whose name is 'Swetha'

select * from Emp
where nam='Swetha'
Go

-- Between...AND : Display records from specific Range (works for numbers and date only) 

select * from Emp
where basic between 50000 and 90000
go

select * from EMP 
WHERE Basic NOT Between 50000 and 90000
GO

-- IN Clause : Used to check for multiple values of particular column 

-- Display all records whose Dept is Java or Dotnet or Sql 

select * from Emp 
where dept in('Dotnet','Java','Sql')
GO

select * from Emp 
where dept NOT IN('Dotnet','Java','Sql')
GO

select * from Emp 
where nam IN('Manu','Satish','Swapna','Smitha','Rushi')
GO

-- LIKE operator : Used to display data w.r.t. wild cards

-- Display all records whose name starts with 'S'

select * from Emp where nam LIKE 'S%' 
GO

-- Display all records whose name ends with 'A' 

select * from Emp where nam LIKE '%A'
GO


-- Distinct : Eliminate duplicate entries at the time of display 

select Dept from Emp
GO

select distinct Dept from Emp 
GO

-- Order By : Used to display values w.r.t. Particular field(s) in ascending or descending order 

select * from Emp order by nam 
GO

select * from Emp order by Basic DESC
GO

select * from Emp order by Dept, Nam 
GO

select * from Emp order by Dept, Nam DESC
GO