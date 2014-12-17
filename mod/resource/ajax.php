<?php

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

/**
 * Private resource module utility functions
 *
 * @package    mod_resource
 * @copyright  2009 Petr Skoda  {@link http://skodak.org}
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define('AJAX_SCRIPT', true);

global $CFG, $DB;
require(__DIR__ . '/../../config.php');
require_once($CFG->dirroot.'/mod/resource/locallib.php');

$filesourceid = required_param('resid', PARAM_INT);
$files = resource_get_file_and_path($filesourceid);
/*
function name_and_path($file){
    return $file->get_filepath().$file->get_filename();
}

function cmp_by_path_then_name($a, $b) {
    if ($a->get_filepath() === $b->get_filepath()){
        $nameA = $a->get_filename();
        $nameB = $b->get_filename();
        $result = strcmp($nameA, $nameB);
        return $result;
    } else {
        $pathA = $a->get_filepath();
        $pathB = $b->get_filepath();
        $result = strcmp($pathA, $pathB);
        return $result;
    }
}
*/
function array2opts($array) {
  foreach ($array as $key => $value) {
    $output .= '<option value="' . $key . '">' . $value . '</option>';
  }
  return $output;
}
/*
$fs = get_file_storage();
$context = context_module::instance($resource_select);
$files = $fs->get_area_files($context->id, 'mod_resource', 'content', 0, 'sortorder', false);
if ($files == []){
    $files = $fs->get_area_files($context->id, 'mod_folder', 'content', 0, 'sortorder', false);
};
usort($files, "cmp_by_path_then_name");

$filesA = array_map("name_and_path", $files);
 */
echo array2opts($files);
