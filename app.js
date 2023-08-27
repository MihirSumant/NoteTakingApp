const board = document.getElementById('board');
const noteMaker = document.getElementById('noteMaker');
const post = document.getElementById('post');

let noteCounter = 0;

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteNote')) {
        const thisNote = event.target.closest('.postedNote');
        console.log(thisNote);
        thisNote.remove();
        console.log('deleted');
    }
});

post.onclick = () => {
    console.log('posted');
    board.insertAdjacentHTML('beforeend', `
        <section class='postedNote'>
            <textarea class='postedNote' name="postedNote" cols="20" rows="10">${noteMaker.value}</textarea>
            <button class='deleteNote'>X</button>
        </section>`
    )
    const deleteNotes = document.querySelectorAll('deleteNote');
    console.log(deleteNotes);
    console.log(post);
    
};

