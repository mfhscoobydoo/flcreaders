import os
audio = os.listdir("D:\Web\DATA\Audio\Converted")
print(audio)
dotSplit = [i.split('.')[0] for i in audio]
print(dotSplit)
femSplit = [i.split('FEM')[-1] for i in dotSplit]
print(femSplit)
