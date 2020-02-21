import sys
import ast
import json
def err(a):
    print(a)
def succ(a):
    print(a)
try:
    open("list.json","r").read();
except (FileNotFoundError,OSError) as e:
    err("Notice:: The data storage file (list.json) was not found or there was permission issues, a new one will be created.  Don't worry! This only happens when you are running this program for the first time");
    try:
        open("list.json","w+").write("[]");
        succ("Data storage file created successfully");
    except:
        err("Error while trying to create data storage file. May be some file permission issues! So check your settings");
        sys.exit();
with open("list.json","r") as f:
    global recordRead
    recordRead=json.load(f);
    global recData
    recData=recordRead;
#print(recordRead);

list_det=["topic","content","dt"]

def func():
    det={};
    for i in list_det:
      det[i]=input("Enter data for >"+i+"\n\t")
    print(det)
#func();
def getList():
    global recData
    while True:
        det={}
        for i in list_det:
            det[i]=input("Enter data for >> "+i+"\n\t")
            if det[i]=="exit":
                err("Program Exited")
                sys.exit();
                break;
        recData.append(det)
        print(recData)
        try:
            with open("list.json","w+") as f:
                json.dump(recData,f)
            succ("Record Saved");
        except:
            err("Error while trying to update data storage file. May be some file permission issues! So check your settings");
            sys.exit();
getList()

        
