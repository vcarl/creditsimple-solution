-- Deploy ds_cc:entity_master_view to pg

BEGIN;

	CREATE VIEW v1_ds_cc.entity_masterkey AS
		SELECT 
				e.*,
				concat_ws(' ', n.prefix, n.first_name, n.middle_name, n.last_name, n.credential_type) as full_name_npi,
				n.gender as gender_npi,
				n.mailing_city,
				n.mailing_state,
				n.practice_city,
				n.practice_state,
				d.dea_number,
				d.full_name as full_name_dea,
				d.city as city_dea,
				d.state as state_dea,
				concat_ws(' ', m.first_name, m.middle_name, m.last_name, m.suffix) as full_name_member,
				m.gender as gender_member,
				m.city as city_member,
				ndl.link_prob as npi_dea_link_score,
				nml.link_prob as npi_member_link_score
		FROM
				entities e
				join npi_dea_links ndl on e.id = ndl.entity_id
				join npi_member_links nml on e.id = nml.entity_id
				join npis n on ndl.cardinal_id = n.id
				join deas d on ndl.terminal_id = d.id
				join members m on nml.terminal_id = m.id;

COMMIT;
