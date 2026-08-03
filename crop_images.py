import os
from PIL import Image

dir_path = "public/faculty-research/faculty-photos"

for filename in os.listdir(dir_path):
    if filename.lower().endswith((".webp", ".jpg", ".jpeg", ".png")):
        filepath = os.path.join(dir_path, filename)
        try:
            with Image.open(filepath) as img:
                w, h = img.size
                if w == h:
                    continue
                
                size = min(w, h)
                left = (w - size) // 2
                top = 0  # Crop from top
                right = left + size
                bottom = top + size
                
                cropped = img.crop((left, top, right, bottom))
                cropped.save(filepath, format=img.format, quality=100)
                print(f"Cropped {filename}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")
