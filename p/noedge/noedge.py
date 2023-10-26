import os
import sys
import ctypes
import shutil
import subprocess
from rich import print
from rich.panel import Panel

def delete_item(item_path, item_name):
    try:
        if os.path.exists(item_path):
            if os.path.isdir(item_path):
                shutil.rmtree(item_path)
                print(Panel(f"Folder [red]{item_name}[/red] deleted.", title="Folder Deleted"))
            else:
                take_ownership_cmd = f'icacls "{item_path}" /setowner Administrators /T /C'
                subprocess.run(take_ownership_cmd, shell=True, check=True)
                terminate_processes_cmd = f'taskkill /f /im "{item_name}"'
                subprocess.run(terminate_processes_cmd, shell=True, check=False)
                os.remove(item_path)
                print(Panel(f"File [red]{item_name}[/red] deleted.", title="File Deleted"))
        else:
            print(Panel(f"Folder/File [yellow]{item_name}[/yellow] not found.", title="Folder/File Not Found"))
    except PermissionError:
        print(Panel(f"Access denied for [yellow]{item_name}[/yellow].", title="Access Denied"))
    except Exception as e:
        print(Panel(f"An error occurred: {str(e)}", title="Error"))

def make_folder_readonly(folder_path, folder_name):
    try:
        if os.path.exists(folder_path):
            os.chmod(folder_path, 0o555)  # (444 in octal)
            print(Panel(f"Folder [green]{folder_name}[/green] is now read-only.", title="Folder Set as Read-Only"))
        else:
            print(Panel(f"Folder [yellow]{folder_name}[/yellow] not found.", title="Folder Not Found"))
    except PermissionError:
        print(Panel(f"Access denied for [yellow]{folder_name}[/yellow].", title="Access Denied"))
    except Exception as e:
        print(Panel(f"An error occurred: {str(e)}", title="Error"))

def run_as_admin():
    if ctypes.windll.shell32.IsUserAnAdmin():
        return

    ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)

if __name__ == '__main__':
    run_as_admin()

    while True:
        print(Panel("NOEdge Script", title="Menu", style="bold green"))
        print("1. Delete MS Edge (Chromium) Folders")
        print("2. Block EdgeWebView from Updating")
        print("3. Quit")

        choice = input("Enter your choice: ")

        if choice == '1':
            delete_item("C:\\Program Files (x86)\\Microsoft\\Edge", "MS Edge (Chromium)")
            delete_item("C:\\Program Files (x86)\\Microsoft\\EdgeCore", "MS Edge (Chromium)")
            delete_item("C:\\Program Files (x86)\\Microsoft\\Temp", "MS Edge (Chromium)")
        elif choice == '2':
            make_folder_readonly("C:\\Program Files (x86)\\Microsoft\\EdgeWebView", "EdgeWebView")
        elif choice == '3':
            print(Panel("Goodbye!", title="Exit", style="bold green"))
            break
        else:
            print(Panel("Invalid choice. Please try again.", title="Error"))
