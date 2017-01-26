# CredSimple Data Science Code Challenge

## Background:
One of the key elements of our business is to link medical practitioner data from external sources to create resolved entities. This task is difficult to automate because there are variations in formatting by data source, and there is usually not a common key to link the practitioners - e.g., we may need to match files where practitioner name is formatted as 'PREFIX FIRST MIDDLE LAST' in one file and 'LAST, FIRST MIDDLE' in the other. Another challenge is that a provider might have different addresses on file at different data sources. Thus generic fuzzy matching and filtering by location leads to high incidence of false-positive matching, and there is no numeric measurement of the confidence of a match. 

## Your challenge: 
For every practitioner in `source_1.txt`, you must attempt to match a practitioner in `source_2.txt` who is the most likely to be the same person. 

This doesn't mean that the same practitioner is in both `source_1.txt` and `source_2.txt` - what we are looking for is a "best guess". False positive matches are an unavoidable element of this task - we're looking for a matching technique that produces minimal false positives (high accuracy).    

A practitioner in `source_1.txt` should be matched to one and only one practitioner in `source_2.txt`.

## Training data:
The files `training_source_1.txt` and `training_source_2.txt` are lists of practitioners from two primary data sources. Both are pipe delimited and with columns for id, name, city, state, and gender. `practitioner_key.txt` is a list of practitioner id pairs that map the providers in `training_source_1.txt` to the ones in `training_source_2.txt` (the id in the first column is the practitioner id for `training_source_1.txt`, the second for `training_source_2.txt`).   

## Test data:
`source_1.txt` and `source_2.txt` are the same format as `training_source_1.txt` and `training_source_2.txt`.

## Getting acquainted with the data:
1) Roughly 60% of the practitioners have the same city/state in both files, 35% have addresses on file in different cities in the same state, and 5% have addresses on file in different states.
2) Roughly 20% are considered extremely difficult to match, meaning there is high variation in the spelling or formatting of the name of the same person in the two files.  
3) There are more practitioners in `source_2.txt` than there are in `source_1.txt`, but this doesn't mean that every practitioner in 'source_1.txt` is in `source_`2.txt`.

## Submission:
Return a file similar to the `practitioner_key.txt` file: a pipe delimited file mapping pracitioner id from `source_1.txt` to `source_2.txt`. Include a third column which is a score between 0 and 1 representing the strength of the match. E.g., the higher the score, the higher the strength of the match. 

Also include a brief write up of your approach, the modelling techniques you used, and some measurements of the performance of your final model - for example you may want to include a confusion matrix or the AUC. 

## Hints: 
- Consider using string edit distance measures on the name fields as features for your model.
- Think of location as a way to bucket candidates for matching, e.g. for a practitioner in `source_1.txt` in Albany, NY, you may want to isolate your first attempt at finding a match in `source_2.txt` to Albany, NY. Since addresses may not match between the sources, consider a sequential approach - look for a match within the same city and state, and if one isn't found, broaden the search space to the same state only. See #1 in the "getting acquainted with the data" section. 
- Parsing the name strings to extract name parts (like last name) may or may not be a useful approach. If you choose to do this, be aware that the formatting is not guaranteed to be consistent throughout the file (e.g., don't assume name format is always `LAST, FIRST MIDDLE`).
- Female names are harder to match than male names.
- Common names are more prone to false-positive matches. 

## Final thoughts:
This is a difficult problem, so it's ok if your model doesn't have excellent performance. We are most interested in your thinking around how to approach this problem, and a demonstration of your understanding of the modelling techniques you used, and your assessment of performance. It is recommended to use Python for this task, but you are free to use any other tools or language you're most comfortable with. It is strongly reccomended that you use available ML libraries.
