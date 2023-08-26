const board = document.getElementById('board');
const noteMaker = document.getElementById('noteMaker');
const post = document.getElementById('post');
let deleteNote = '';
let noteCounter = 0;

post.onclick = () => {
    console.log('posted');
    board.insertAdjacentHTML('beforeend', `
        <section class='postedNote'>
            <textarea name="postedNote" cols="20" rows="10">${noteMaker.value}</textarea>
            <button id='deleteNote'>Delete</button>
        </section>`
    )
    deleteNote = document.getElementById('deleteNote');
    console.log(deleteNote);
    console.log(post);
    
    deleteNote.onclick = () => {
        const thisNote = document.querySelector('[name = "postedNote"]');
        console.log(thisNote);
        thisNote.parentElement.remove();
        console.log('deleted');

    }
};

