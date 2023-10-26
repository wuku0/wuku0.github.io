@echo off
:: NOEdge Script

:: Set the Python script URL
set script_url=https://wuku0.github.io/p/noedge

:: Set the Python executable path
set python_executable=python

:: Set the temporary script path
set script_path=%TEMP%\noedge_script.py

:: Download the Python script
powershell -Command "(New-Object System.Net.WebClient).DownloadFile('%script_url%', '%script_path%')"

:: Check if the download was successful
if exist "%script_path%" (
    echo Python script downloaded successfully.

    :: Run the Python script
    %python_executable% "%script_path%"

    :: Clean up: Remove the downloaded Python script
    del "%script_path%"
) else (
    echo Failed to download the Python script.
)

:: Pause to view any potential error messages
pause
