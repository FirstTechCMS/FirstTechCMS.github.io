import argparse
from PIL import Image
import os

def remove_metadata(input_image_path):
    print(f"Processing image {input_image_path}")
    with Image.open(input_image_path) as img:
        data = list(img.getdata())
        img_without_metadata = Image.new(img.mode, img.size)
        img_without_metadata.putdata(data)
        img_without_metadata.save(input_image_path)

def process_folder(input_folder):
    print(f"Processing folder {input_folder}")
    for filename in os.listdir(input_folder):
        input_image_path = os.path.join(input_folder, filename)
        remove_metadata(input_image_path)
        print(f"Metadata removed and saved to {input_image_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Remove image metadata")
    parser.add_argument("input", help="Input file or folder path")
    args = parser.parse_args()

    if os.path.isdir(args.input):
        process_folder(args.input)
    else:
        remove_metadata(args.input)
        print(f"Metadata removed and saved to {args.output}")