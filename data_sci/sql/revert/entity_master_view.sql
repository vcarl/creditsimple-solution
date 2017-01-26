-- Revert ds_cc:entity_master_view from pg

BEGIN;

	DROP VIEW v1_ds_cc.entity_masterkey;

COMMIT;
