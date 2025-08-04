CREATE FUNCTION fnEvenOdd(@n INT)RETURNS varchar(30)
AS
BEGIN
	IF(@n%2=0)
	BEGIN
		RETURN 'EVEN NUMBER'
	END
	ELSE
	BEGIN
		RETURN 'ODD NUMBER'
	END
	RETURN ''
END
GO

SELECT dbo.fnEvenOdd(5)
go

select * from Employ
go


CREATE FUNCTION fnCommision(@sal int) RETURNS Numeric(9,2)
AS
BEGIN
	RETURN @sal *0.03
END
GO

SELECT dbo.fnCommision(43343);

select * from Employ
go

select Empno,Name,Gender,Dept,Basic,dbo.fnCommision(Basic) 'Comission',
Basic - dbo.fnCommision(Basic) 'Take Home'
from Employ 
go

select * from Agent
go

create function fnAgentMStat(@maritalStatus INT) RETURNS Varchar(30)
AS
BEGIN
	declare
		@res varchar(30)
	if @maritalStatus = 0
	BEGIN
		set @res = 'Unmarried'
	end  
	if @maritalStatus = 1 
	BEGIN
		set @res = 'Married'
	END
	return @res 
END
GO

select dbo.fnAgentMStat(0)

select AgentId, FirstName, LastName, City, MaritalStatus, dbo.fnAgentMStat(MaritalStatus)
from Agent 
GO

select * from Policy
GO


Create Function fnPaymode(@paymode INT) RETURNS varchar(30)
AS
BEGIN
	declare
		@res varchar(30)
	if @paymode = 1 
	BEGIN
		set @res='Yearly'
	END
	if @paymode = 2
	BEGIN
		set @res = 'Half-Yearly'
	END
	if @paymode = 3
	BEGIN
		set @res =  'Quarterly'
	END
	return @res 
END
GO

select PolicyId, AppNumber, AppDate, PaymentModeId, dbo.fnPaymode(PaymentModeId)
from Policy
GO