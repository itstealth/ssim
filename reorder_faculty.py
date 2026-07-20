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

print(f"Found {len(object_blocks)} objects")

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

# Create a mapping from simple name to block
# We need a robust way to match names, since "Dr. S.V. Ramana Rao" might be "Dr. S.V.Ramana Rao" in the data.
def simplify_name(n):
    # remove spaces, dots, Dr., Mr., Ms., Mrs. and lowercase
    n = re.sub(r'^(Dr\.|Mr\.|Ms\.|Mrs\.)\s*', '', n, flags=re.IGNORECASE)
    n = re.sub(r'[\.\s]', '', n).lower()
    return n

blocks_dict = {}
for idx, block in enumerate(object_blocks):
    m = re.search(r'name:\s*"([^"]+)"', block)
    if m:
        name = m.group(1)
        s_name = simplify_name(name)
        
        # Additional edge cases based on known names:
        if "sreepalle" in s_name or "chandrasekhar" in s_name:
            s_name = simplify_name("Dr. S.F. Chandra Sekhar")
        if "thumukuntla" in s_name or "thirumal" in s_name:
            s_name = simplify_name("Dr. T. Thirumal Reddy")
        
        blocks_dict[s_name] = block

ordered_blocks = []
for name, area in target_order:
    s_name = simplify_name(name)
    
    # Special cases handling
    if s_name not in blocks_dict:
        print(f"Warning: could not find {name} (simplified: {s_name})")
        # try substring match
        for k in blocks_dict.keys():
            if s_name in k or k in s_name:
                print(f"  -> Matched with {k}")
                s_name = k
                break
                
    if s_name in blocks_dict:
        block = blocks_dict[s_name]
        # Update Area
        block = re.sub(r'area:\s*"[^"]+"', f'area: "{area}"', block)
        # Update Department too, as they seem to correspond
        block = re.sub(r'department:\s*"[^"]+"', f'department: "{area}"', block)
        
        # fix trailing commas for last element
        if block.endswith('}'):
            block += ','
            
        ordered_blocks.append(block)
    else:
        print(f"ERROR: Totally missing {name}")

# Fix last element comma
if ordered_blocks[-1].endswith(','):
    ordered_blocks[-1] = ordered_blocks[-1][:-1]

new_raw_array = '\n'.join(ordered_blocks)
new_content = content[:start_idx] + new_raw_array + "\n" + content[end_idx:]

with open("src/data/facultyData.js", "w") as f:
    f.write(new_content)

print("Finished reordering and updating.")
