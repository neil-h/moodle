// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    moodle-mod_resource-fileselect
 * @copyright  2014 Neil Haskins or HCOS?
 * @license    Public Domain
 */

/**
 * @module moodle-mod_resource-fileselect
 */

M.mod_resource = M.mod_resource || {};
NS = M.mod_resource.fileselect;

NS.init = function() {

    var resid = 2;

    console.log('resid = ' + resid);

    document.getElementById("id_selectfilesource").onchange = function () {
        makeRequest('resource_select.php?resid=' + res);
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

};
