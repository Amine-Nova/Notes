## Steps to run the code 

The Frontend:
```
 cd frontend
 nvm install 18
 nvm use 18
 npm install structured-clone
 npm install axios react-router-dom
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p
 npm run dev
```
cd ..

The BackEnd:
```
 cd backend
 source env/bin/activate
 pip install django-rest-framework
 pip install django
 python -m pip install django-cors-headers
 python3 manage.py migrate
 python3 manage.py makemigrations
 python3 manage.py runserver 8080

```
go to : [http://127.0.0.1:5731](http://localhost:5173/)
