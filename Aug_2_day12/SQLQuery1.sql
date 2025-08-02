
----create table----
create table DOCTOR_MASTER(
doctor_id varchar(15) primary key,doctor_name varchar(15) not null,
dept varchar(15) not null)
Go

sp_help DOCTOR_MASTER
Go

---insert data---
insert into DOCTOR_MASTER(doctor_id,doctor_name,dept) values
('D0001','Ram','ENT'),('D0002','Rajan','ENT'),('D0003','Smita','Eye'),
('D0004','Bhavan','Surgery'),('D0005','Sheela','Surgery'),('D0006','Nethra','Surgery')
go

---CREATE TABLE ROOM-MASTER
create table ROOM_MASTER(room_no varchar(15) primary key,
room_type varchar(15) not null,
status varchar(15) not null)
go

sp_help ROOM_MASTER
GO

----insert room master---
insert into ROOM_MASTER(room_no,room_type,status) values
('R0001','AC','occupied'),
('R0002','Suite','vacant'),
('R0003','NonAC','vacant'),
('R0004','NonAC','occupied'),
('R0005','AC','vacant'),
('R0006','AC','occupied')
go

---create patient master---
create table PATIENT_MASTER (
    pid VARCHAR(15) PRIMARY KEY,
    name VARCHAR(15) NOT NULL,
    age INT NOT NULL,
    weight INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phoneno VARCHAR(10) NOT NULL,
    disease VARCHAR(50) NOT NULL,
    doctor_id VARCHAR(15) NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES DOCTOR_MASTER(doctor_id))
	go



	sp_help patient_master
	go

---insert valuess
insert into PATIENT_MASTER values
('P0001','Gita',35,65,'F','Chennai','9867145678','Eye Infection','D0003'),
('P0002','Ashish',40,70,'M','Delhi','9845675678','Asthma','D0003'),
('P0003','Radha',25,60,'F','Chennai','9867166678','Pain in heart','D0005'),
('P0004','Chandra',28,55,'F','Bangalore','9978675567','Asthma','D0001'),
('P0005','Goyal',42,65,'M','Delhi','8967533223','Pain in Stomach','D0004')
go

----create room allocation
create table ROOM_ALLOCATION (
    room_no VARCHAR(15),
    pid VARCHAR(15),
    admission_date DATE NOT NULL,
    release_date DATE,
    FOREIGN KEY(room_no)REFERENCES ROOM_MASTER(room_no),
    FOREIGN KEY(pid) REFERENCES PATIENT_MASTER(pid))
	go


	---insert room allocation
insert into ROOM_ALLOCATION values
('R0001','P0001','2016-10-15','2016-10-26'),
('R0002','P0002','2016-11-15','2016-11-26'),
('R0002','P0003','2016-12-01','2016-12-30'),
('R0004','P0001','2017-01-01','2017-01-30')
go


----query 1---
select * from ROOM_ALLOCATION where MONTH(admission_date)=1
go


---query 2---
select * from PATIENT_MASTER where gender='F' and disease not like '%asthma%'
go

---query 3----
select gender,count(*) total from PATIENT_MASTER group by gender
go

---query 5---
select room_no from ROOM_MASTER
where room_no not in(select distinct room_no from ROOM_ALLOCATION)
go


---query 6---

SELECT room_no,COUNT(*) AS allocation_count
FROM ROOM_ALLOCATION
GROUP BY room_no
HAVING COUNT(*) > 1
go

---query 4---

select
    p.pid as patient_id,
    p.name as patient_name,
    d.doctor_id,
    d.doctor_name,
    r.room_no,
    rm.room_type,
    r.admission_date
FROM ROOM_ALLOCATION r
JOIN PATIENT_MASTER p ON r.pid = p.pid
JOIN DOCTOR_MASTER d ON p.doctor_id = d.doctor_id
JOIN ROOM_MASTER rm ON r.room_no = rm.room_no
go