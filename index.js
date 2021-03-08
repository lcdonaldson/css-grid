
get_todos = () => {
    let todos = new Array;
    let todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

onSearch = () => {
    let inputVal = document.getElementById("searchInput").value;

    let todos = get_todos();
    todos.push(inputVal);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    // let result = document.getElementById("displaySearch").innerHTML=inputVal;
    return result;
}

show = () => {
    let todos = get_todos();

    let html = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('displaySearch').innerHTML = html;

    let buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

remove = () => {
    let id = this.getAttribute('id');
    let todos = get_todos();
    
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    
    return false;
}
