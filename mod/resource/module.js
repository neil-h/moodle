/* 
 * This file is public domain
 */

M.local_resource = {
    Y : null,
    transaction : [],
    init : function(Y){

        console.log('added');

        var res = 2;

        console.log('res = ' + res);

        document.getElementById("id_selectfilesource").onchange = function () {
            makeRequest('resource_select.php?res=' + res);
            console.log('changed');
        };

        function makeRequest(url) {
            httpRequest = new XMLHttpRequest();

            if (!httpRequest) {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
            }
            httpRequest.onreadystatechange = alertContents;
            httpRequest.open('GET', url, true);
            httpRequest.send();
        }

        function alertContents() {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    alert(httpRequest.responseText);
                } else {
                    alert('There was a problem with the request.');
                }
            }
        }
    }
};