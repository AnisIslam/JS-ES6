document.getElementById('apply-bg').addEventListener('click', function(){
    // console.log('apply bg')
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue'
    }

});
document.getElementById('center-third').addEventListener('click', function(){
    console.log('centering')
})