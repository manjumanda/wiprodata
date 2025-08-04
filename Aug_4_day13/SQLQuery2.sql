create Table EmployPrc
(
   Eno INT PRIMARY KEY,
   Name varchar(30),
   Gender varchar(10) constraint chk_dummy_gen1 check(gender in('MALE','FEMALE')),
   Salary numeric(9,2) constraint chk_dummy_sal1 check(salary between 10000 and 80000)
)
GO


---IF OBJECT_ID('EmployPrc', 'U') IS NOT NULL
  ---  DROP TABLE EmployPrc;

create Proc PrcEmpInsNew
				@eno INT,
				@nam varchar(30),
				@gen varchar(30),
				@bas numeric(9,2)
AS
BEGIN
	  Declare 
		@erNo INT
		BEGIN TRY
		Insert into EmployPrc values(@eno,@nam,@gen,@bas)
	END TRY
	BEGIN CATCH
		select @erNo=ERROR_NUMBER() 
		Print 'Error Number ' +convert(varchar,@erNo)
		Print ERROR_MESSAGE()
		PRINT ERROR_SEVERITY()
		PRINT ERROR_LINE()
	END CATCH
END
GO

Exec PrcEmpInsNew 3,'Venkata','MALE',90000
GO