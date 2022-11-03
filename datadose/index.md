## Formatting your questionnaire -

*   (I recommend you search and replace all the checkboxes in your questionnaire to **@** sign with your text editor to make this easy for you. This should take less than 5 minutes for you to do.
*   After importing your questionnaire, go through it to ensure your document was properly formatted before you start filling in the responses. )

## File specifications -

*   Import file must be in **.txt** format
*   An import file has one or more of these following **entity types** -
    *   **A** - Project Title
    *   **B** - Section Labels
    *   **C** - Comments ( e.g instructions)
    *   **D** - MCQ questions with many options but only one is selectable
    *   **E** - MCQ questions with many options and many options are selectable
    *   **F** - MCQ questions with multiple options , with additional space for **Others(please specify)**
    *   **G** - Likert type questions
    *   **H** - Free form questions ( a free form question requires a user to write out his response instead of selecting from a list of options )

## Formatting instructions -

**Note:**  
_Except a line is empty, each line is treated as an entity, so make sure you remove line breaks from your questions, and ensure each separate question is on its own line._  
**Your question or any of its options should not contain any of these special characters-** #@\*

### Entity type (Check entity type from the list above) - how to format

*   **A** - start the line with ###
*   **B** - start the line with ##
*   **C** - start the line with /\* and end the line with \*/
*   **D** - append @\* to the first option, and @ or @\* to all other options. (No need to append anything at the start of the line)
*   **E** - append @ to the first and all other options
*   **F** - Same as E, but make sure the last option is written as **Others(please specify)**
*   **G** - start only the first option with \*\* , then separate other options with space
*   **H** - No need to specify any format. Any line with no formatting is automatically assigned to this type.