// <!DOCTYPE html>
// <!--
// ASSIGNMENT RULES
// - The solution must be pushed to the repository and be available for the tutors by the end of the day
// - You can ask for tutor's help
// - You can google / use StackOverflow BUT we suggest you to use just the material provided
// - To test the page, just open it with your default browser.

// ASSIGNMENT TOPIC
// You are building a task list site.
// The have a list of tasks and can, at any time, add a new one, delete one or sort the whole bunch of them
// -->

//     <!-- EXERCISE 1:
//     Specify the title, the charset (UTF-8) and the viewport of the page.

// Done in the main HTML file.

//     <
//       /* EXERCISE 2:  
//        Create a CSS class for the task list with a diverse background
//        Create a CSS class for the task list item with a border, 
//        a bold text and a bigger font size
//        Style every button of the page to be bigger
//     */

        let task_list = [];
        // document.getElementsByTagName("input")[1].addEventListener("click", )

        const addNewTask = function() {
            let task = document.getElementsByTagName("input")[0];
            let task_value = task.value;
            // console.log(task);
            let un_list = document.getElementById("myTaskList");
            un_list.innerText = "THE TASK ARE IN THE FOLLOWING ORDER ! :"

            task_list.pop();
            task_list.push(task_value);
            console.log(task_list);

            // for (i = 0; i < task_list.length ; i++) {

            let li_item = document.createElement("li");
            li_item.innerText = task_list[task_list.length - 1];
            let parent_tag = un_list;
            parent_tag.appendChild(li_item);

            // }
            
            // creating a new div element for the task list item
        }

        addNewTask();
//     
//     

    // document.getElementById("span").classList.add("change_background")

    // document.getElementsByTagName("button")

//     

//     <!-- EXERCISE 3
//         Create a button "Remove Last Task" to trigger the method "removeLast"
//         -->
    let remove_last_task = function() {
    console.log(document.getElementsByTagName("input")[1]);

    let remove_but = document.createElement("input");

    remove_but.setAttribute("type", "button");
    remove_but.setAttribute("value", "Add new Task");

    remove_but.innerText = "Remove the Last Task !";

    let parent_rem = document.getElementsByTagName("body")[0];

    parent_rem.appendChild(remove_but);

    console.log(document.getElementsByTagName("input")[2]);

    }

    remove_last_task();


//     <!-- EXERCISE 4
//         Create a button "Remove First Task" to trigger the method "removeFirst"
//         -->


//     



//       /* EXERCISE 5: 
//                 Add a new task to the list.
//                 Suggestion:
//                 - Use document.getElementById to get the UL item and the input text
//                 - Use the document.createElement to create the new List Item
//                 - Append the child to the UL
//             */

//       /* EXERCISE 6: 
//                 Create a method "removeLast" which removes the last item from the task list
//             */

//       /* EXERCISE 7: 
//                 Create a method "removeFirst" which removes the first item from the task list
//             */

//       /* EXERCISE 8: 
//                Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
//             */

//       /* EXERCISE 9:
//                Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
//                onchange event listener ad applies it as background to every list item
//             */




//       /* EXTRA */



//       /* EXERCISE 10: 
//                Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
//                Use your spare time to beautify your task list via CSS.

//                Suggestion:
//                - Break the code into many function for semplicity 
//                - Reuse the functions previously created
//             */
