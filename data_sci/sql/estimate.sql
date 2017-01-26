select 
				id % 20 as cohort, 
				gender_npi,
				round(sum(case when mailing_city = city_dea and mailing_state = state_dea then 1 else 0 end)::numeric / count(*), 2) as city_state_match, 
				round(sum(case when mailing_city <> city_dea and mailing_state = state_dea then 1 else 0 end)::numeric / count(*), 2) as state_match_only,
				round(sum(case when mailing_city <> city_dea and mailing_state <> state_dea then 1 else 0 end)::numeric / count(*), 2) as no_match,
				round(sum(case when npi_dea_link_score <= .89 then 1 else 0 end)::numeric / count(*), 2) as low_score_match,
				round(sum(case when provider_id is not null then 1 else 0 end)::numeric / count(*), 2) as is_cs_provider,
				count(*) as total 
from 
				v1_ds_cc.entity_masterkey 
group by 1, 2 
order by 1, 2 asc;
