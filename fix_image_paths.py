import os
import re

dir_path = "public/faculty&research/Faculty photographs"
new_dir_path = "public/faculty&research/faculty-photographs"

# Rename directory if it hasn't been renamed yet
if os.path.exists(dir_path):
    os.rename(dir_path, new_dir_path)
else:
    print("Directory already renamed or not found.")

js_file = "src/data/facultyData.js"
with open(js_file, "r") as f:
    js_content = f.read()

for filename in os.listdir(new_dir_path):
    if filename.endswith(".webp"):
        name, ext = os.path.splitext(filename)
        new_name = re.sub(r'[\s\.]+', '-', name).strip('-') + ext
        old_filepath = os.path.join(new_dir_path, filename)
        new_filepath = os.path.join(new_dir_path, new_name)
        
        if old_filepath != new_filepath:
            os.rename(old_filepath, new_filepath)
        
        # Now replace in JS content
        # old string to look for: /faculty&research/Faculty photographs/{filename}
        old_js_path = f"/faculty&research/Faculty photographs/{filename}"
        new_js_path = f"/faculty&research/faculty-photographs/{new_name}"
        
        # also check if it already has the new dir but old filename (in case run multiple times)
        old_js_path2 = f"/faculty&research/faculty-photographs/{filename}"
        
        js_content = js_content.replace(old_js_path, new_js_path)
        js_content = js_content.replace(old_js_path2, new_js_path)

# Also replace any remaining directory references just in case
js_content = js_content.replace("/faculty&research/Faculty photographs/", "/faculty&research/faculty-photographs/")

with open(js_file, "w") as f:
    f.write(js_content)

print("Finished renaming files and updating JS file.")
