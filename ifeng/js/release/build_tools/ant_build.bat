@echo off
set output_file=..\ifengnews.min.js
del /F /S "%output_file%"
call ant.bat
pause