# paired keys (solution)
psql -U postgres -d db/development -f ./paired_keys.sql -P format=unaligned -P tuples_only -P fieldsep=\| > ./datasets/practitioner_key.txt

# training set 1
psql -U postgres -d db/development -f ./training_set_1.sql -P format=unaligned -P tuples_only -P fieldsep=\| > ./datasets/training_source_1.txt

# training set 2 
psql -U postgres -d db/development -f ./training_set_2.sql -P format=unaligned -P tuples_only -P fieldsep=\| > ./datasets/training_source_2.txt

# validation set 1
psql -U postgres -d db/development -f ./validation_set_1.sql -P format=unaligned -P tuples_only -P fieldsep=\| > ./datasets/source_1.txt

# validation set 2
psql -U postgres -d db/development -f ./validation_set_2.sql -P format=unaligned -P tuples_only -P fieldsep=\| > ./datasets/source_2.txt
