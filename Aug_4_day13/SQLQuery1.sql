Create proc prcDivision
	@a Int,
	@b int
AS
BEGIN
BEGIN TRY
	Set @a=5;
	Set @b=@a/0
	Print @b
	END TRY
	BEGIN CATCH
		Print 'Error is '
		Print ERROR_MESSAGE()
	END CATCH
END
GO

EXEC prcDivision 12,0
go



Create proc prcEvenCheck
@n int
As
BEGIN
	DECLARE 
		@res INT
	BEGIN TRY
		SET	@Res=@n%2
		if (@res =0)
		BEGIN
			PRINT 'NO ERROR'
			PRINT 'EVEN NUMBER'
		END
		ELSE
		BEGIN
			print 'Error Occurred'
			Throw [70000, Error occured ,5]	
		END
	END TRY
	BEGIN CATCH
		Print Error_Message()
	END CATCH
END