create proc prcShowPaySlip
	@empno int
AS
BEGIN
	DECLARE
		@name varchar(30),
		@sal numeric(9,2),
		@tax numeric(9,2),
		@takehome numeric(9,2)
	BEGIN
	if exists(select * from Employ where empno=@empno)
	Begin
		SELECT @name=name, @sal=Basic,@tax=dbo.fnCommision(basic),
			@takehome = Basic - dbo.fnCommision(basic)
			from Employ where Empno=@empno
		Print 'Hi Mr/Miss/Mrs' +@name
		Print 'Your Salary is '+convert(varchar,@sal)
		Print 'Your Tax to be Paid '+convert(varchar,@tax)
		Print 'Your takehome is '+convert(varchar,@takehome)
	end
	else
	begin
		print 'Employ record not found...'
	end
	END
END
GO

exec prcShowPaySlip 2
go