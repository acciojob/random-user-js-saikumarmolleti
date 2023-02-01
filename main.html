 const pNoSpan = document.getElementById('pNo');
 const   listElement = document.getElementById('list');
  const  nextBtn = document.getElementById('load_next');
  const  prevBtn = document.getElementById('load_prev');

let pageNumber = 1;

const renderIssues=(issues)=>{
	while(listElement.firstChild){
		listElement.removeChild(listElement.firstChild);
	}
	issues.forEach(issues=>{
		const li = document.createElement('li');
		li.textContent = issues.title;
		
		listElement.appendChild(li);
	});
	
}

const fetchIssues = async()=> {
    pNoSpan.textContent = pageNumber;
    const url  = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`
    const res = await fetch(url);
    const data = await res.json();

    renderIssues(data);

}

function handleNextClick(){
	  pageNumber+=1;
	fetchIssues();
}
     function prevClick(){
      if(pageNumber===1){
		   alert("page number is 1");
		  return;
	  }
		pageNumber -=1;
		 fetchIssues();
		 
		 
	 }


nextBtn.addEventListener('click' ,handleNextClick);
prevBtn.addEventListener('click',prevClick);
document.addEventListener('DOMContentLoaded', fetchIssues);
