select
		md5(npi) as practitioner_id_1,
		md5(dea_number) as practitioner_id_2
from 
		v1_ds_cc.entity_masterkey
where provider_id is null and id % 20 in (1, 2)
order by id;
;
