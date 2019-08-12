import subprocess
import os

width = 800
in_dir_path = "src"
out_dir_path = "../../../static/program"

subprocess.run(["rm", "-r", out_dir_path])
subprocess.run(["mkdir", out_dir_path])

for file_name in os.listdir(in_dir_path):
    if file_name[-4:] == ".png" or file_name[-4:] == ".jpg":
        in_image_path = in_dir_path + "/" + file_name
        out_image_path = out_dir_path + "/" + file_name[:-4] + ".jpg"

        subprocess.run([
            "convert",
            in_image_path,
            "-gravity",
            "center",
            "-crop",
            "4:3",
            "-resize",
            str(width) + "x",
            "-extent",
            str(width) + "x" + str((width * 3) / 4),
            out_image_path,
        ])
