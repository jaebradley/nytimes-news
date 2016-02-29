window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.windows.create(
        {
            url:e.target.href,
            incognito: true
        }
    );
    }
});