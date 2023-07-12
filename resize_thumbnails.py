import PIL.Image
import os


def resize_image(image_path, new_width, new_height):
    """Resizes an image without changing its dimensions.

    Args:
      image_path: The path to the image file.
      new_width: The new width of the image.
      new_height: The new height of the image.

    Returns:
      The resized image.
    """

    image = PIL.Image.open(image_path)
    width, height = image.size
    aspect_ratio = width / height

    new_width = int(new_width * aspect_ratio)
    new_height = int(new_height * aspect_ratio)

    resized_image = image.thumbnail((new_width, new_height), PIL.Image.ANTIALIAS)

    return image


def crop_Image(img_path, save_path):
    image = PIL.Image.open(img_path)
    image.crop((0, 0, image.width, image.width)).save(save_path)


if __name__ == "__main__":
    H = 300
    W = 300
    resized_image = resize_image("res/thumbnail/2104007_ete_21.png", 300, 300).save(
        "res/thumbnail/2104007_ete_21.png"
    )
    # resized_image.save("resized_image.jpg")
    for img in os.listdir("res/thumbnail"):
        image_path = f"res/thumbnail/{img}"
        # resize_image(image_path, W, H).save(image_path)
        crop_Image(image_path, image_path)
        print(f"Cropped {image_path} and saved at {image_path}")
