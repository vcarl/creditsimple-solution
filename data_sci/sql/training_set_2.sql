select
		md5(dea_number) as practitioner_id,
    full_name_dea as full_name,
		city_dea as city,
		state_dea as state,
		gender_npi as gender
from 
		v1_ds_cc.entity_masterkey
where provider_id is null and id % 20 in (1, 2)
order by id 
;
