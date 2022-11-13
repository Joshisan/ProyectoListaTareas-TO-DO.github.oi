const checkComplete = () => {
    const i = document.createElement ('i');
    i.classList.add ("far", "fa-check-square", "icon");
    i.addEventListener('click', completeTask);
    return i;
};

//Inmediately invoked function expression IIFE
const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas', 'completeIcon', 'far');
};

export default checkComplete;