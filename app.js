
let categories = [
    { title: "Personal", img: "boy.png" },
    { title: "Work", img: "briefcase.png" },
    { title: "Shopping", img: "shopping.png" },
    { title: "Coding", img: "web-design.png" },
    { title: "Health", img: "healthcare.png" },
    { title: "Fitness", img: "dumbbell.png" },
    { title: "Education", img: "education.png" },
    { title: "Finance", img: "saving.png" },
];



let tasks = [
    { id: 1, task: "Go to market", category: "Shopping", completed: false },
    { id: 2, task: "Read a chapter of a book", category: "Personal", completed: false },
    { id: 3, task: "Prepare presentation for meeting", category: "Work", completed: false },
    { id: 4, task: "Complete coding challenge", category: "Coding", completed: false },
    { id: 5, task: "Take a 30-minute walk", category: "Health", completed: false },
    { id: 6, task: "Do a 20-minute HIIT workout", category: "Fitness", completed: false },
    { id: 7, task: "Watch an educational video online", category: "Education", completed: false },
    { id: 8, task: "Review monthly budget", category: "Finance", completed: false },
    { id: 9, task: "Buy groceries for the week", category: "Shopping", completed: false },
    { id: 10, task: "Write in a journal", category: "Personal", completed: false },
    { id: 11, task: "Send follow-up emails", category: "Work", completed: false },
    { id: 12, task: "Work on a coding side project", category: "Coding", completed: false },
    { id: 13, task: "Try a new healthy recipe", category: "Health", completed: false },
    { id: 14, task: "Attend a yoga class", category: "Fitness", completed: false },
    { id: 15, task: "Read an article about a new topic", category: "Education", completed: false },
    { id: 16, task: "Set up automatic bill payments", category: "Finance", completed: false },
    { id: 17, task: "Buy new clothes", category: "Shopping", completed: false },
    { id: 18, task: "Meditate for 10 minutes", category: "Personal", completed: false },
    { id: 19, task: "Prepare agenda for team meeting", category: "Work", completed: false },
    { id: 20, task: "Debug a software issue", category: "Coding", completed: false },
    { id: 21, task: "Try a new recipe for lunch", category: "Health", completed: false },
    { id: 22, task: "Go for a run", category: "Fitness", completed: false },
    { id: 23, task: "Learn a new language online", category: "Education", completed: false },
    { id: 24, task: "Read about history", category: "Education", completed: false },
    { id: 25, task: "Review investment portfolio", category: "Finance", completed: false },
];


    const wrapper = document.querySelector('.wrapper');
    const menuBtn = document.querySelector('.menu-btn');
    const backBtn = document.querySelector('.back-btn');

    const toggleScreen = () => {
        wrapper.classList.toggle('show-category');
    };

    menuBtn.addEventListener('click', toggleScreen);
    backBtn.addEventListener('click', toggleScreen);




    const addTaskBtn = document.querySelector('.add-task-btn');
    const addTaskForm = document.querySelector('.add-task');
    const blackBackdrop = document.querySelector('.black-backdrop');

    const toggleAddTaskForm = () => {
        addTaskForm.classList.toggle('active');
        blackBackdrop.classList.toggle('active');
        addTaskBtn.classList.toggle('active');

    };

    addTaskBtn.addEventListener('click', toggleAddTaskForm);
    blackBackdrop.addEventListener('click', toggleAddTaskForm);





    const categoriesWrapper = document.querySelector('.categories');

    const categoriesOptions = document.querySelector('.input-group select');



    
    const totalTasks = ()=>{
        
        const totalTasksPara = document.querySelector('#total-tasks');


        totalTasksPara.innerText = tasks.length;
    
    }




    let content = '';
    // let count = 1;
    let content2 = '';

    for (const category of categories) {

        let count = 0;
            for(const task of tasks){
                if(task.category === category.title){
                    count++;
                }  
            }

        content += `
                <div class="category">
                    <div class="left">
                        <img src="images/${category.img}" alt="${category.title}" />
                        <div class="content">
                            <h1>${category.title}</h1>
                            <p>${count} Tasks</p>
                        </div>
                    </div>
                    <div class="options">
                        <div class="toggle-btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            `;


        content2+= `

            <option value="${category.title}">${category.title}</option>
        
        `
        
    }

    totalTasks();

    categoriesWrapper.innerHTML = content;

    categoriesOptions.innerHTML = content2;




    // const taskPara = document.querySelectorAll('.content p');

    // // console.log(taskPara);


    // const updateNumberOfTasks = ()=>{
        
    //     for(const tPara of taskPara){

    //         for (const category of categories) {
    //             let count = 0;
    //             for(const task of tasks){
    //                 if(task.category === category.title){
    //                     count++;
    //                 }  
    //             }
                
                
    //         } 

    //     }
        
        
    // }


    const tasksCont = document.querySelector('.tasks');

    const categoryDetails = document.querySelector('.category-details');

    const taskList = (categoryName) => {
        let content2 = '';
        let counter = 1;
        for (const data of tasks) {
            if (data.category === categoryName) {
                content2 += `
                    <div class="task-wrapper">
                        <label for="task${counter}" class="task">
                            <input type="checkbox" name="task" id="task${counter}" />
                            <span class="checkmark">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>
                            </span>
                            <p>${data.task}</p>
                        </label>
                        <div class="delete" data-id="${data.id}">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </div>
                    </div>
                `;
                counter++;
            }
        }

        for (const cat of categories) {
             
            if(cat.title === categoryName){

                categoryDetails.innerHTML = `
                
                    <img src="images/${cat.img}" alt="" id="category-img" />
                    <div class="details">
                        <p id="num-tasks">${counter-1} tasks</p>
                        <h1 id="category-title">${categoryName}</h1>
                    </div>

                `
            }
        }


        tasksCont.innerHTML = content2;


        const deleteBtns = document.querySelectorAll('.delete');
        
        deleteBtns.forEach((deleteBtn) => {
            deleteBtn.addEventListener('click', deleteTask);
        });


    };

    const categoryCon = document.querySelectorAll('.category');

    categoryCon.forEach(category => {
        category.addEventListener('click', () => {
            const categoryTitle = category.querySelector('.content h1').innerText;
            showTaskList(categoryTitle);
        });
    });

    const showTaskList = (categoryTitle) => {
        toggleScreen();
        taskList(categoryTitle);

    };

    const emptyTaskContainer = () => {
        tasksCont.innerHTML = '';
    };

    backBtn.addEventListener('click', emptyTaskContainer);



const taskInput = document.querySelector('.input-group input');

const addBtn = document.querySelector('.add-btn');

const cancelBtn = document.querySelector('.cancel-btn');



const addNewTask = ()=>{

    const inputValue = taskInput.value;

    const categoryValue = categoriesOptions.value;

    const newTask = {
        id: tasks.length + 1, 
        task: inputValue, 
        category: categoryValue, 
        completed: false
    }


    tasks.push(newTask);

    if(wrapper.classList.contains('show-category')){
        taskList(categoryValue);
    }

    const currentCategory = document.querySelector('#category-title').innerText;

    updateAllCategoryTasks(currentCategory);
    

} 


const emptyInput = ()=>{
    taskInput.value = '';
}

addTaskBtn.addEventListener('click', emptyInput);




addBtn.addEventListener('click', addNewTask);
addBtn.addEventListener('click', toggleAddTaskForm);
cancelBtn.addEventListener('click', toggleAddTaskForm);




const deleteTask = (event) => {
    const taskId = parseInt(event.currentTarget.getAttribute('data-id'));
    // tasks = tasks.filter(task => task.id !== taskId);
    // const currentCategory = document.querySelector('#category-title').innerText;
    // taskList(currentCategory);

    // both functions works same 
    const taskIndex = tasks.findIndex(task => taskId === task.id);
    tasks.splice(taskIndex, 1);

    
    const currentCategory = document.querySelector('#category-title').innerText;

    console.log(currentCategory);
    taskList(currentCategory);

    totalTasks();

    updateAllCategoryTasks(currentCategory);



}; 



const updateAllCategoryTasks = (categoryName)=>{

    // const totalsPara = document.querySelectorAll('.left .content p');

    const totalsPara = document.querySelectorAll('.left .content p');

    totalsPara.forEach(para =>{


        const content = para.parentElement;

        const h1 = content.querySelector('h1');

        if(h1.innerText === categoryName){
            let count = 0;
            for(const task of tasks){
                if(task.category === categoryName){
                    count++;
                }
            }
            para.innerText = `${count} Tasks`;

            
        }

    })

    

}