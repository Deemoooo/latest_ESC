Features implemented: 


1.	User Authentication

Users will be authenticated as professors or students according to their role, while is created during signup. After signing up, the email account with a specific role will be stored in firebase and that information is retrieved during sign in.


2.	Student Asking Question & Professor Retrieving Question

After a student account logged in, he/she will select the current lecture according to the name of that professor. Then the student can type the question and the related page of slide into a form to be pushed to firebase. Subsequently, the professor will be alerted about this new question and retrieve that question from the same location in firebase.


3.	Student Giving Feedback

 Besides asking questions about the lecture, the student can also generate a feedback to the that lecture to help the lecturer improve his/her teaching method. The student will first fill in a feedback form that contains information such as pace of the lecture. Then the information is parsed into a json format to be stored to firebase.


4.	Professor Push a Quiz & Student get Quiz

The professor will be able to generate a quiz question during lecture to test the student’s understanding of certain concepts. The professor will need to type in the question as well as all the options (To make it easier for professor to use, we made only form for MCQ). Then the professor will type in the correct answer and submit it to firebase. Following that, all students who selected this professor will be alerted that a new quiz is coming out. Student will enter the answer and submit. At the same time, the result of each student will be recorded into the firebase as well for performance analysis.

****************************************************************************************************************************************

Features/Work to be done

1.	Implement the function for the professor to keep track of the student’s performance. 

2.	Develop more test cases for each feature, including black box and white box testings. 

3.	Finalize the whole UI(eg. Sign up page) and the database. 
