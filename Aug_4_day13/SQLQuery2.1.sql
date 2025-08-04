create Table EmployDummy
(
	Eno int primary key,
	Name varchar(30),
	Gender varchar(10) constraint chk_dummy_gen check(gender in('MALE','FEMALE')),
	Salary numeric(9,2) constraint chk_dummy_sal check(salary between 1000 and 8000)
	)
	go

	create Proc PreEmpInsNew
					@eno int,
					@nam varchar(30),
					@bas numeric(9,2)

AS
BEGIN
	DECLARE
		@erNo int
		begin try
		insert into EmployPrc values(@eno,@nam,@gen,@bas)
		END TRY
		BEGIN CATCH
			
			select @erNo=ERROR_NUMBER()
			Print 'Error Number '+convert(varchar,@erNo)
			Print ERROR_MESSAGE()
			PRINT ERROR_SEVERITY()
			PRINT ERROR_LINE()
		END CATCH
		END
		GO