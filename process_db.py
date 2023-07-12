import requests, json
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from pathlib import Path
from string import capwords


# Get domain name from URL
def getDomain(url):
    parsed_url = urlparse(url)
    domain = parsed_url.netloc
    # Remove 'www' prefix if present
    if domain.startswith("www."):
        domain = domain[4:]
    return domain


with open("dsw.json", "r") as f:
    persons = json.load(f)

for person in persons:
    img_link = person["picture"]
    img_name = str(person["roll"]) + "_ete_21.png"
    roll = person["roll"]
    # Sanitize words
    person["fname"] = capwords(person["fname"])
    person["father"] = capwords(person["father"])
    person["mother"] = capwords(person["mother"])
    person["permanent_address"] = capwords(person["permanent_address"])
    person["present_address"] = capwords(person["present_address"])

    if Path("res/" + img_name).exists():
        person["profile_image"] = "res/" + img_name
    else:
        person["profile_image"] = None
    # ImgBB #
    # if getDomain(img_link) == "ibb.co":
    #     src = BeautifulSoup(requests.get(img_link).content, "html.parser").select_one(
    #         "#image-viewer-container > img"
    #     )["src"]
    #     print(src)
    #     # Download the image
    #     with open("res/" + img_name, "wb") as f:
    #         f.write(requests.get(src).content)
    #         print("Saved image")
    # prnt.sc #
    # if getDomain(img_link) == "prnt.sc":
    #     headers = {"User-Agent": "Chrome"}
    #     src = BeautifulSoup(
    #         requests.get(img_link, headers=headers).content, "html.parser"
    #     ).select_one("img")["src"]
    #     print(src)
    #     # Download the image
    #     with open("res/" + img_name, "wb") as f:
    #         f.write(requests.get(src).content)
    #         print("Saved image")
    # ----postimg.cc----- #
    # if getDomain(img_link) == "postimg.cc":
    #     headers = {"User-Agent": "Chrome"}
    #     src = BeautifulSoup(
    #         requests.get(img_link, headers=headers).content, "html.parser"
    #     ).select_one("#main-image")["src"]
    #     print(src)
    #     # Download the image
    #     with open("res/" + img_name, "wb") as f:
    #         f.write(requests.get(src).content)
    #         print(f"- Saved image at res/{img_name}")
    # ----i.postimg.cc----- #
    # if getDomain(img_link) == "i.postimg.cc":
    #     headers = {"User-Agent": "Chrome"}
    #     # Download the image
    #     with open("res/" + img_name, "wb") as f:
    #         f.write(requests.get(img_link).content)
    #         print(f"- Saved image at res/{img_name}")

# Finally save the file in the db/source.json
with open("db/source.json", "w") as f:
    f.write(json.dumps(persons))
