# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Standardized unique facility prefix ID for all facilities

- Details:
  Discuss with all facilities on our platform to generate a desired prefix ID for agents. PrefixID needs to be an unique ID across all facilities with standardized format to avoid duplication. (such as 3 ~ 5 alphabets with 3 ~ 5 numbers)

- Acceptance criteria:
  Each facility are able to generate a unique prefix ID that matches our format criteria.

- Time / effort:
  Expected in 10 business days.

## Ticket 2: create new function for facilities to save custom ids for each agent

- Details:Create a function to allow facilities to create custom ids, the function needs to ensure each facility can only use their unique prefix ID, follow by the custom ID. ID will not be input to the database if there is a duplication.

- Acceptance criteria:
  Function are able to ensure facility properly name their custom ID for agents within criteria.

- Time / effort:
  Expected in 10 business days.

## Ticket 3: Assign each facility's new prefix ID into our internal database

- Details: Create a new column for the new prefixID from each facility, input facility's new prefix ID by matching with their facility's id in our database.

- Acceptance criteria:
  Each facility's new prefixID are placed in our database that matches the facility's id correctly.

- Time / effort:
  Expected in 2 to 4 weeks depending on the numbers of the records in the database, and time needed to validate accuracy.

## Ticket 4: Test the ability to generate reports with facility's own custom ids

- Details: Generate sample reports using facility's custom ids, check if the list of shifts with custom ids are able to generate proper numbers. Compares results with original generateReport function.

- Acceptance criteria:
  the number in sample reports are able to match with the original generate reports method.

- Time / effort:
  Expected in 1 week.
