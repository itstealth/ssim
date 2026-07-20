import re

with open("src/data/facultyData.js", "r") as f:
    content = f.read()

start_marker = "const rawTeamMembers = [\n"
end_marker = "];\n\nexport const teamMembers"

start_idx = content.find(start_marker) + len(start_marker)
end_idx = content.find(end_marker)

raw_array_content = content[start_idx:end_idx].strip()

object_blocks = []
current_block = []
brace_count = 0

for line in raw_array_content.split('\n'):
    if '{' in line:
        brace_count += line.count('{')
    if '}' in line:
        brace_count -= line.count('}')
    
    current_block.append(line)
    
    if brace_count == 0 and line.strip() in ['},', '}']:
        object_blocks.append('\n'.join(current_block))
        current_block = []

print(f"Found {len(object_blocks)} objects in file")

# Target order with new area
target_order = [
    ("Dr. S.V. Ramana Rao", "Accounting, Finance & Economics"),
    ("Dr. S.F. Chandra Sekhar", "HR & Strategy"),
    ("Dr. Pavan Patel", "HR & Strategy"),
    ("Dr. K.S. Harish", "Data Science & Information Systems"),
    ("Dr. V. Annapurna", "Accounting, Finance & Economics"),
    ("Dr. V. Jayalakshmi", "Accounting, Finance & Economics"),
    ("Dr. N.C. Rajyalakshmi", "Accounting, Finance & Economics"),
    ("Dr. NRKS Chakravarthy", "Data Science & Information Systems"),
    ("Dr. Ravi Dasari", "HR & Strategy"),
    ("Mr. K. Sreehari", "Data Science & Information Systems"),
    ("Dr. T. Thirumal Reddy", "Marketing Management"),
    ("Dr. K. Grace Mani", "Marketing Management"),
    ("Mr. T. Madhav Murthy", "Accounting, Finance & Economics"),
    ("Mr. Rahul Jain", "HR & Strategy"),
    ("Mrs. Damandeep Johar", "HR & Strategy"),
    ("Mr. T. Subash Tej", "Data Science & Information Systems"),
    ("Mrs. Kiranmayi Patel", "Data Science & Information Systems"),
    ("Dr. M. Balanji Reddy", "Accounting, Finance & Economics"),
    ("Dr. M. Pushpa", "HR & Strategy"),
    ("Mr. M. Chaithanya", "Marketing Management"),
    ("Dr. K. Subba Rama Sarma", "Data Science & Information Systems"),
    ("Mrs. Samarpita Roy", "HR & Strategy"),
    ("Dr. Shubhra Johri", "Accounting, Finance & Economics"),
    ("Dr. P. Gowri Kusuma", "HR & Strategy"),
    ("Dr. Shambhavi Tamrakar", "Marketing Management"),
    ("Dr. Bipul Kumar", "Marketing Management"),
    ("Dr. K. Kiran Kumar", "Data Science & Information Systems"),
    ("Mr. G. Murali Krishna Patnaik", "Data Science & Information Systems"),
    ("Dr. Jada Kameswari", "Data Science & Information Systems")
]

# Mapping from JS name to Target Name
name_mapping = {
    "Dr. S.V.Ramana Rao": "Dr. S.V. Ramana Rao",
    "Dr. SREEPALLE FRANCIS CHANDRA SEKHAR": "Dr. S.F. Chandra Sekhar",
    "Dr. Pavan Patel": "Dr. Pavan Patel",
    "Dr. K.S. Harish": "Dr. K.S. Harish",
    "Dr. V.Annapurna": "Dr. V. Annapurna",
    "Dr. VALLURI JAYALAKSHMI": "Dr. V. Jayalakshmi",
    "Dr. NC Rajyalakshmi": "Dr. N.C. Rajyalakshmi",
    "Dr. NRKS Chakravarthy": "Dr. NRKS Chakravarthy",
    "Dr. Ravi Dasari": "Dr. Ravi Dasari",
    "Mr. karanam sreehari": "Mr. K. Sreehari",
    "Dr. Thirumal Reddy Thumukuntla": "Dr. T. Thirumal Reddy",
    "Dr. K. Grace Mani": "Dr. K. Grace Mani",
    "Mr. T Madhav Murthy": "Mr. T. Madhav Murthy",
    "Mr. Rahul Jain": "Mr. Rahul Jain",
    "Ms. Damandeep Johar": "Mrs. Damandeep Johar",
    "Mr. Subash Tej": "Mr. T. Subash Tej",
    "Ms. KIRANMAYI PATEL": "Mrs. Kiranmayi Patel",
    "Dr. Balanji Reddy Mora": "Dr. M. Balanji Reddy",
    "Dr. Pushpa Machani": "Dr. M. Pushpa",
    "Mr. Muppavarapu Chaithanya": "Mr. M. Chaithanya",
    "Dr. K. Subba Rama Sarma": "Dr. K. Subba Rama Sarma",
    "Ms. Samarpita Roy": "Mrs. Samarpita Roy",
    "Dr. Shubhra Johri": "Dr. Shubhra Johri",
    "Dr. PINJARLA GOWRI KUSUMA": "Dr. P. Gowri Kusuma",
    "Dr. Shambhavi Tamrakar": "Dr. Shambhavi Tamrakar",
    "Dr. Bipul Kumar": "Dr. Bipul Kumar",
    "Dr. K Kiran Kumar": "Dr. K. Kiran Kumar",
    "Mr. G MURALI KRISHNA PATNAIK": "Mr. G. Murali Krishna Patnaik",
    "Dr. Kameswari Jada": "Dr. Jada Kameswari"
}

# Create a dictionary of blocks by Target Name
blocks_by_target = {}
for block in object_blocks:
    m = re.search(r'name:\s*"([^"]+)"', block)
    if m:
        js_name = m.group(1)
        if js_name in name_mapping:
            target = name_mapping[js_name]
            blocks_by_target[target] = block
        else:
            print(f"Unknown JS Name: {js_name}")

ordered_blocks = []
for target_name, new_area in target_order:
    if target_name in blocks_by_target:
        block = blocks_by_target[target_name]
        
        # Also update the name in the block to the target_name as requested by user
        block = re.sub(r'name:\s*"[^"]+"', f'name: "{target_name}"', block)
        
        # Update Area
        block = re.sub(r'area:\s*"[^"]+"', f'area: "{new_area}"', block)
        
        # Update Department
        if re.search(r'department:', block):
            block = re.sub(r'department:\s*"[^"]+"', f'department: "{new_area}"', block)
        else:
            print(f"Warning: No department field found in {target_name}")
            
        # Ensure trailing comma on all but the last
        if block.endswith('}'):
            block += ','
            
        ordered_blocks.append(block)
    else:
        print(f"Missing Target Name in JS blocks: {target_name}")

if len(ordered_blocks) == 29:
    print("Successfully mapped all 29 faculties.")
else:
    print(f"Mapped {len(ordered_blocks)} / 29 faculties.")

# Clean up trailing comma on the very last block
if ordered_blocks[-1].endswith(','):
    ordered_blocks[-1] = ordered_blocks[-1][:-1]

new_raw_array = '\n'.join(ordered_blocks)
new_content = content[:start_idx] + new_raw_array + "\n" + content[end_idx:]

with open("src/data/facultyData.js", "w") as f:
    f.write(new_content)

print("Updated facultyData.js")
