#!/usr/bin/perl
use CGI;

$query = new CGI;
$pagename = $query->param("page");
$open_dir = "d:/MYBOOK/code/07/";
$pagename=$open_dir.$pagename.'.html';

open(FILE,"$pagename");
@myfile=<FILE>;
print "Content-type: text/html\;charset=utf-8\n\n";
foreach  (@myfile) {
	print $_;
}

