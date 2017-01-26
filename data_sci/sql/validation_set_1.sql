select
		md5(npi) as practitioner_id,
		full_name_npi as full_name,
		practice_city as city,
		practice_state as state,
		gender_npi as gender
from 
		v1_ds_cc.entity_masterkey
where provider_id is null and id % 20 in (3, 4, 5, 6, 7)
order by random()
;
