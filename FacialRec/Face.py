import cv2
face_cap = cv2.CascadeClassifier("C:/Users/91954/Desktop/FacialRec/myenv/Lib/site-packages/cv2/data/haarcascade_frontalface_default.xml")
video_cap = cv2.VideoCapture(0)
while True:
    ret,video_data =video_cap.read()
    col = cv2.cvtColor(video_data, cv2.COLOR_BAYER_BG2GRAY) #Will convert the image captured to black and white
    faces = face_cap.detectMultiScale() #to detect faces by showing a rectangular box with 4 co-ordinates
    (
        col,
        scaleFactor = 1:1
        minNeighbour = 5   #How many areas should be searched by frame rectangle
        minSize = (30, 30) #changes size of the video in tkinter
        flags = cv2.CASCADE_FLAGS_IMAGE
    )
    for (x,y,w,h) in faces:
        cv2.rectangle (video_data, (x,y), (x+w, y+h), (0,255,0), 2)
    cv2.imshow("video_live",video_data) #Shows the live feed of video input from camera
    if cv2.waitKey(10)==ord('a'):   #User enters this to stop the video camera
        break   
video_cap.release()

