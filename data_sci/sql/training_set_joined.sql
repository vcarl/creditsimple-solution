select
		md5(npi) as practitioner_id_1,
		full_name_npi as full_name_1,
		practice_city as city_1,
		practice_state as state_1,
		md5(dea_number) as practitioner_id_2,
    full_name_dea as full_name_2,
		city_dea as city_2,
		state_dea as state_2,
		gender_npi as gender
from 
		v1_ds_cc.entity_masterkey
where provider_id is null and id % 20 in (1, 2)
order by random()
;
