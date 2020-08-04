
document.addEventListener('DOMContentLoaded', function() {


chrome.tabs.executeScript(null,
        {code:"var topbar = document.getElementById('rcnt')"});
for(var i=0 ; i < 11 ;i++)
{
        chrome.tabs.executeScript(null,
                {code:"var iframe"+i+" = document.createElement('iframe')"});
        chrome.tabs.executeScript(null,
                {code:"iframe"+i+".height = '400'" });
        chrome.tabs.executeScript(null,
                {code:"iframe"+i+".width = '400'" });
        chrome.tabs.executeScript(null,
                {code:"iframe"+i+".src = document.getElementsByClassName('r')["+i+"].firstChild.href" });
        chrome.tabs.executeScript(null,
                {code:"topbar.insertAdjacentElement('beforebegin', iframe"+i+")"});
}
    window.close();
});



