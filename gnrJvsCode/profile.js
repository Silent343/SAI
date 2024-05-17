const defaultFile = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E";
const img = document.getElementById( 'imgPerfil' );
const img1 = document.getElementById( 'imgPerfil2' );
const img2 = document.getElementById( 'imgPerfil3' );
const file = document.getElementById( 'inputPrf' );

file.addEventListener( 'change', e => {
    if( e.target.files[0] ){
        const reader = new FileReader( );
        reader.onload = function( e ){
            img.src = e.target.result;
            img1.src = e.target.result;
            img2.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    }
    else{
        img.src = defaultFile;
        img2.src = defaultFile;
        img3.src = defaultFile;
    }
} );