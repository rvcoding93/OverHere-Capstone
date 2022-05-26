import requests
# you can get the user_id in user dashboard
USER_ID = "your_user_id"
#--------------------------------

# add image path from local system
IMAGE1_PATH = "/home/atul/Downloads/kat.jpeg"
IMAGE2_PATH = "/home/atul/Downloads/kat.jpeg"
#--------------------------------
API_URL = "http://facexapi.com/compare_faces?face_det=1" # face compare url
files = {'img_1': open(IMAGE1_PATH, 'rb'),'img_2': open(IMAGE2_PATH, 'rb')}
headers = {"user_id": USER_ID }
r = requests.post(API_URL,headers = headers,files = files) # comment this line to use url image
print (r.text) # printing response