### CredSimple Code Challenge

This challenge has 2 parts. In the first part, we ask you to use the Luhn algorithm to evaluate the validity of an important healthcare identification number. In the second we ask you to process and organize several types of data files.

#### Part 1 

**Description:** Every healthcare provider (doctor, nurse, PA etc.) is assigned a National Provider Identifier (NPI), a unique ID number that identifies that provider nationally with the federal government. The NPI is generated and validated using the Luhn formula (which is also used for credit card numbers). Any time a user enters an NPI into any database across the healthcare system we are at risk of human error and mistyping. This has downstream impacts any time another user or system needs that data.

**Instructions:** Using the PDF link below (starting halfway down the first page) and the supplied list of NPI numbers, write a program or function in your language of choice that validates whether an NPI is correct or incorrect, using the Luhn algorithm (more info in the PDF). The precise implementation of the Luhn NPI check is up to you but aim for simplicity and conciseness in the solution.

**Display Requirements:** Generate a list of NPI numbers followed by a boolean value indicating whether they are valid (true) or invalid (false).

Resources: 
* [CMS NPI Guidlines](https://www.cms.gov/Regulations-and-Guidance/HIPAA-Administrative-Simplification/NationalProvIdentStand/downloads/npicheckdigit.pdf)
* NPI Numbers:

1356320139
1285849489
1265795159
1922087766
1932224400
1467538918
1861414096
1528142197
1306070885
141799038
1144258609
1467446575
1285652024
1104084334
144750284
1356585673
1740232941
1992776843
1215965934
1154348176


#### Part 2

**Description:** Every organization in healthcare stores their data a little bit differently, but when they export it or share it, they do so in flat files. Because we are organizing and standardizing much of this data into one central place, one of CredSimple's challenges is handling all of the different file/data formats we receive.

**Instructions:** In your language of choice, write a program to first assemble a single set of records by parsing data from 3 different file formats, and then display these records sorted in 3 different ways.

A record consists of the following 5 fields: last name, first name, gender, date of birth and provider type. This project folder contains 3 files, each containing records stored in a different format.

The pipe-delimited file record format:
LastName|FirstName|MiddleInitial|Gender(M/F)|ProviderType|DateOfBirth(M-D-YY)

The comma-delimited file record format:
LastName,FirstName,Gender(Male/Female),ProviderType,DateOfBirth(M/D/YYYY)

The space-delimited file record format:
LastName FirstName MiddleInitial Gender(M/F) DateOfBirth(M-D-YYYY) ProviderType

You may assume that the delimiters (commas, pipes and spaces) do not appear anywhere in the data values themselves.

**Display Requirements:**

Create and display 3 different views of the recordset:
* Output 1 – sorted by provider type (females before males) then by last name ascending.
* Output 2 – sorted by birth date, ascending.
* Output 3 – sorted by last name, descending.

Ensure that fields are displayed in the following order: last name, first name, gender, date of birth, provider type.
Display dates in the format MM/DD/YYYY.