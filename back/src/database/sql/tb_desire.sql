create table desejo.tb_desire(

id_desire integer not null auto_increment primary key,
title varchar(255),
desire varchar(255),
idUser integer,
constraint fk_UserDesire foreign key (idUser) references tb_user(idUser)

)